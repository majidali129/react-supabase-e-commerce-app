import Button from "../../ui/Button"
import ConfirmDelete from "../../ui/ConfirmDelete"
import Modal from "../../ui/Modal"
import { useDeleteCartItem } from "./useDeleteCartItem"
import { useQuantity } from "./useQuantity"

const CartItem = ({item}) => {
  const {updateQuantity, updatingQuantity} = useQuantity()
  const {deleteItem, deletingItem} = useDeleteCartItem()
  

  function handleDeleteItem () {
    console.log('Item deleted');
    deleteItem(item?.id)
  }

  return (
    <Modal>

        <li className="cart-item bg-stone-100 px-8 py-2 flex md:items-center max-md:items-start  md:gap-x-4 max-md:flex-col rounded-sm max-md:gap-y-1">
          <figure className="md:w-[150px] max-md:w-full md:h-[150px] max-h-[220px] h-[210px]  rounded-md ">
            <img src={item?.image} className="w-[100%] h-[100%] aspect-square rounded-md" alt="" />
          </figure>
          <div className="flex-grow w-full">
            <div className="flex items-start md:items-center max-md:flex-col px-2 mt-3 w-full  justify-between ">
            <div className="space-y-3 max-md:flex max-md:items-center max-md:justify-between max-md:w-full border-green-300">
            <div className="md:space-y-1">
                <strong className="strong  break-words">{item?.name}</strong>
                <p className="text-sm">Delivery at: 24th July</p>
              </div>
              <div>
                <strong className="strong ">Product Price</strong>
                <p >${item?.price}</p>
              </div>
            </div>
            <div>

              <div className="flex items-center max-md:w-full max-md:justify-between  md:gap-x-4 gap-x-20 max-md:mt-2 ">
                <p className="space-x-2 ">
                  <Button 
                  width='fit'
                  variation='small'
                  onClick={() => updateQuantity({item, changeInfo:'decrease'})}
                  disabled={updatingQuantity}
                  >-</Button>
                  <span className="border-2 border-stone-200 text-lg text-stone-500 py-1 px-4">{item?.quantity}</span>
                  <Button
                  width='fit'
                  variation='small'
                  onClick={() => updateQuantity({item, changeInfo:'increase'})}
                  disabled={updatingQuantity}
                  >+
                  </Button>
                </p>
                <div>
                  <strong className="strong">Total Price:</strong>
                <p>$ <strong className="text-yellow-700 text-xl">{`${item?.total_price}`}</strong></p>
                </div>
              </div>
               <div className="flex items-center justify-center max-md:w-full mt-4">
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