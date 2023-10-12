import {BsFillCreditCardFill} from 'react-icons/bs'
import {PiAddressBookThin} from 'react-icons/pi'

import Button from './Button'
import Label from './Label'
import { useGetPaymentInfo } from '../features/checkout/useGetPaymentInfo'
import { useGetAddress } from '../features/checkout/useGetAddress'
import useCart from "../features/cart/useCart"
import {GST , SHIPPING, DISCOUNT} from '../utils/constants'
import { useOrderPaymentConfirmation } from '../features/checkout/useOrderPaymentConfirmation'


const FinalCheckout = () => {
    
    const {cartItems, loadingCart} = useCart()
    const {paymentIfon, loadingInfo} = useGetPaymentInfo()
    const {shippingAddress, loadingAddress} = useGetAddress()
    const {placeOrder, placingOrder} = useOrderPaymentConfirmation()
    
    

    if(loadingAddress || loadingInfo || loadingCart) return <h3> Loading... </h3>

    const lastAddress = shippingAddress.length >= 1&& shippingAddress?.at(-1);
    const lastMethod = paymentIfon.length >= 1&&  paymentIfon?.at(-1);
    const totalCartAmount = cartItems?.reduce((acc, cur) => acc + cur?.total_price, 0);
    const finalAmountToPay = (totalCartAmount + GST + SHIPPING) - DISCOUNT;



    function handlePayment () {
        placeOrder()
    }

  return (
    <section className="mt-[4rem] flex max-md:flex-col space-y-4 md:gap-x-8">
        <div className='space-y-6 md:flex-1 w-full'>
        <div className="shipping-address bg-stone-50 w-full space-y-4  px-10 py-4 rounded-md">
            <h2 className="tracking-widest font-normal">SHIPPING ADDRESS</h2>
            <div className="flex items-center justify-between " >
                <div>
                <p className="text-stone-500">{lastAddress?.customer_name}</p>
                <p className="text-stone-500">{lastAddress?.street_name}</p>
                <p className="text-stone-500">{lastAddress?.city}</p>
                <p className="text-stone-500">{lastAddress?.state}</p>
                <p className="text-stone-500">{lastAddress?.country}</p>
                </div>
            <Button variation='secondary'>Change</Button>
            </div>

        </div>

        <div className="shipping-address bg-stone-50 w-full space-y-4  px-10 py-4 rounded-md">
            <h2 className="tracking-widest font-normal">PAYMENT METHOD</h2>
            <div className="flex items-center justify-between " >
                <div>
                <div className="text-stone-500 flex items-center gap-x-2">
                    <div ><BsFillCreditCardFill className='w-6 h-6' /></div>
                    {/* <> {lastMethod?.payment_method}<p>ending in {lastMethod?.expire_date.split(' ')[1].join('')}</p> </> */}
                    <> {lastMethod?.payment_method}<p>ending in {lastMethod?.expire_date}</p> </>
                </div>
                <div>
                <div className="text-stone-500 mt-2 flex items-center gap-x-2 italic font-semibold tracking-wide">
                    {/* <div ><BsFillCreditCardFill /></div>
                    <> Mastercard<p>ending in 2028</p> </> */}
                    <PiAddressBookThin className='w-6 h-6' />
                    <span>Billing address same as shipping address</span>
                </div>
                </div>
                </div>
            <Button variation='secondary' >Change</Button>
            </div>

        </div>

        </div>

        <div className='md:w-[250px] max-md:w-full bg-stone-50 space-y-3 divide-y-2 divide-stone-300 rounded-lg py-4 max-md:px-4 '>
            <h3 className='text-center font-semibold'>Order Summary</h3>
            <div className='space-y-2 px-2 py-4'>
                <p className='flex items-center justify-between'>
                    <Label >Total Cart Price: </Label>
                    <strong className='text-lg text-yellow-900'>${totalCartAmount}</strong>
                </p>
                <p className='flex items-center justify-between'>
                    <Label >Shipping: </Label>
                    <strong className='text-lg text-yellow-900'>${SHIPPING}</strong>
                </p>
                <p className='flex items-center justify-between'>
                    <Label >Estimated GST: </Label>
                    <strong className='text-lg text-yellow-900'>${GST}</strong>
                </p>
                <p className='flex items-center justify-between'>
                    <Label >Discount: </Label>
                    <strong className='text-lg text-yellow-900'>${DISCOUNT}</strong>
                </p>
            </div>
            <div className='px-2 py-3 space-y-2'>
                <p  className='flex items-center justify-between text-lg text-yellow-900'>
                    <Label className='text-yellow-900 text-lg font-semibold italic'>Order Total: </Label>
                    <strong >${finalAmountToPay}</strong>
                </p>
                <Button 
                onClick={() => handlePayment()} 
                variation='primary' 
                className='w-full' 
                >
                    {placingOrder ? 'placing order' : 'Pay & Place Your Order'}
                </Button>

            </div>
        </div>

    </section>
  )
}

export default FinalCheckout