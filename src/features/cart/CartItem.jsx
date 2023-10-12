import Button from "../../ui/Button"
import { useQuantity } from "./useQuantity"

const CartItem = ({item}) => {
  const {updateQuantity, updatingQuantity} = useQuantity()

  return (
        <li className="cart-item bg-stone-100 px-3 py-2 flex md:items-center max-md:items-start  md:gap-x-4 max-md:flex-col rounded-sm max-md:gap-y-1">
          <figure className="md:w-[200px] max-md:w-full md:h-[200px] max-h-[220px] h-[210px]  rounded-md ">
            <img src={item?.image} className="w-[100%] h-[100%] aspect-square rounded-md" alt="" />
          </figure>
          <div className="flex-grow w-full">
            <div className="flex items-start md:items-center max-md:flex-col  justify-between md:pr-[2rem]">
              <div className="md:space-y-1">
                <strong className="strong ">{item?.name}</strong>
                <p className="text-sm">Delivery at: 24th July</p>
              </div>
              <div>
                <strong className="strong ">Product Price</strong>
                <p className="md:text-center">${item?.price}</p>
              </div>
              <div className="flex items-center max-md:w-full max-md:justify-between md:gap-x-4 ">
                <p className="space-x-2">
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
            </div>
          </div>
        </li>
  )
}

export default CartItem