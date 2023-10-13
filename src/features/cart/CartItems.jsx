import Button from "../../ui/Button"
import CartItem from "./CartItem"
import useCart from "./useCart"
import BackButton from "../../ui/BackButton"
import { useNavigate } from "react-router-dom"
import { useUser } from "../auth/useUser"
import Modal from "../../ui/Modal"
import ConfirmDelete from "../../ui/ConfirmDelete"
import { useClearCart } from "./useClearCart"
import Spinner from "../../ui/Spinner"
import Empty from "../../ui/Empty"


const CartItems = () => {
    const {cartItems, loadingCart} = useCart()  
    const {isLoadingUser, isAuthenticated} = useUser()
    const {clearCart, clearingCart} = useClearCart()
    const navigate = useNavigate()

    
    function handleClearCart () {
      clearCart()
    }

    if(loadingCart) return <Spinner message='Cart Items...' />

    const totalCartAmount = cartItems.reduce((acc, curr) => acc + curr.total_price, 0);
    
    if(cartItems?.length === 0) return <Empty />

    
  return (
    <section className="w-full h-full py-[3rem] px-[1rem] border-2">
      <Modal>

      <div className="cart-wrapper rounded-md bg-white py-[3rem] px-[1rem] space-y-10 ">
        <BackButton  > &larr; Go Back </BackButton>
      <h1 className="pb-4 text-center border-b">Your Cart</h1>
        {cartItems.length && <ul className="flex flex-col gap-y-8 ">
          {cartItems.map(item => <CartItem key={item?.id} item={item} />)}
        </ul>}

        <div className="grid px-4 py-2 justify-items-end gap-y-4">
          <p className="text-xl ">Total: $<strong className="strong">{totalCartAmount}</strong></p>
          <div className="flex items-center gap-4">
            <Modal.Open opens='clearCart'>
            <Button variation='danger' disabled={clearingCart} onClick={handleClearCart}>Clear Cart</Button>
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