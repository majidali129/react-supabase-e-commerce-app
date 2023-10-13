import Button from "../../ui/Button"
import ConfirmDelete from "../../ui/ConfirmDelete"
import Modal from "../../ui/Modal"
import { useDecreaseQuantity } from "./useDecreaseQuantity"
import { useDeleteCartItem } from "./useDeleteCartItem"
import { useIncreaseQuantity } from "./useIncreaseQuantity"

const CartItem = ({item}) => {
  // const {updateQuantity, updatingQuantity} = useQuantity()
  const {increaseQuantity, increasingQuantity} = useIncreaseQuantity()
  const {decreaseQuantity, decreasingQuantity} = useDecreaseQuantity()
  const {deleteItem, deletingItem} = useDeleteCartItem()
  

  function handleDeleteItem () {
    console.log('Item deleted');
    deleteItem(item?.id)
  }

  return (
    <Modal>

        <li className="flex px-8 py-2 rounded-sm cart-item bg-stone-100 md:items-center max-md:items-start md:gap-x-4 max-md:flex-col max-md:gap-y-1">
          <figure className="md:w-[150px] max-md:w-full md:h-[150px] max-h-[220px] h-[210px]  rounded-md ">
            <img src={item?.image} className="w-[100%] h-[100%] aspect-square rounded-md" alt="" />
          </figure>
          <div className="flex-grow w-full">
            <div className="flex items-start justify-between w-full px-2 mt-3 md:items-center max-md:flex-col ">
            <div className="space-y-3 max-md:flex max-md:items-center max-md:justify-between max-md:w-full">
            <div className="md:space-y-1">
                <strong className="break-words strong">{item?.name}</strong>
                <p className="text-sm">Delivery at: 24th July</p>
              </div>
              <div >
                <strong className="strong ">Price:</strong>
                <p >${item?.price}</p>
              </div>
            </div>
            <div className="max-md:w-full">
              <div className="flex items-center max-md:w-full max-md:justify-between md:gap-x-4 gap-x-20 max-md:mt-2 ">
                <p className="flex items-center space-x-2 ">
                  <Button 
                  width='fit'
                  variation='small'
                  onClick={() => decreaseQuantity(item)}
                  disabled={decreasingQuantity}
                  >-</Button>
                  <span className="px-2 text-lg border-2 md:py-1 md:px-4 border-stone-200 text-stone-500">{item?.quantity}</span>
                  <Button
                  width='fit'
                  variation='small'
                  onClick={() => increaseQuantity(item)}
                  disabled={increasingQuantity}
                  >+
                  </Button>
                </p>
                <div>
                  <strong className="strong">Total:</strong>
                <p>$ <strong className="text-xl text-yellow-700">{`${item?.total_price}`}</strong></p>
                </div>
              </div>
               <div className="flex items-center justify-center mt-4 max-md:w-full">
                <Modal.Open opens='delete-item'>
               <Button variation='danger' className='py-[2px] text-red-50 px-2'>Delete Product</Button>
                </Modal.Open>

                <Modal.Window name='delete-item'>
                  <ConfirmDelete resourceName='item from your cart' disabled={deletingItem} onConfirm={handleDeleteItem} />
                </Modal.Window>
               </div>
               </div>
            </div>
            </div>
        </li>
        </Modal>

  )
}

export default CartItem