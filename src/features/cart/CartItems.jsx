import Button from "../../ui/Button"
import CartItem from "./CartItem"
import useCart from "./useCart"
import BackButton from "../../ui/BackButton"
import { useNavigate } from "react-router-dom"
import { useUser } from "../auth/useUser"
import Modal from "../../ui/Modal"
import ConfirmDelete from "../../ui/ConfirmDelete"


const CartItems = () => {
    const {cartItems, loadingCart} = useCart()  
    const {isLoadingUser, isAuthenticated} = useUser()
    // console.log({user, isLoadingUser, isAuthenticated});
    
    const navigate = useNavigate()

    if(loadingCart) return <h1 className="text-stone-400">Loading Cart Items... </h1>

    const totalCartAmount = cartItems.reduce((acc, curr) => acc + curr.total_price, 0);
    
    if(cartItems?.length === 0) return (
    <div>
    <h3>Cart is empthy yet! </h3>
    <BackButton >&larr; Go to Store</BackButton>
    </div>
    )

    function handleClearCart () {
      console.log('Cart is clear now');
      
    }
    
  return (
    <section className="w-full h-full py-[3rem] px-[1rem] border-2">
      <Modal>

      <div className="cart-wrapper rounded-md bg-white py-[3rem] px-[1rem] space-y-10 ">
        <BackButton  > &larr; Go Back </BackButton>
      <h1 className="text-center border-b pb-4">Your Cart</h1>
        {cartItems.length && <ul className="flex flex-col gap-y-8 ">
          {cartItems.map(item => <CartItem key={item?.id} item={item} />)}
        </ul>}

        <div className=" grid justify-items-end gap-y-4 py-2 px-4">
          <p className=" text-xl">Total: $<strong className="strong">{totalCartAmount}</strong></p>
          <div className="flex items-center gap-4">
            <Modal.Open opens='clearCart'>
            <Button variation='danger' onClick={handleClearCart}>Clear Cart</Button>
            </Modal.Open>
          <Button 
          variation='primary'
          width='fit'
          disabled={isLoadingUser}
          onClick={() => {
            !isAuthenticated? navigate('/signup'): navigate('/address')
          }
        }

          >
            Proceed to checkout
          </Button>
          </div>
        </div>
      </div>
      <Modal.Window name='clearCart'>
        <ConfirmDelete resourceName='cart along with items' disabled={false} onConfirm={() => handleClearCart()} />
      </Modal.Window>
      </Modal>

    </section>
  )
}

export default CartItems