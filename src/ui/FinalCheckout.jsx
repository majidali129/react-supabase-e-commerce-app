import {BsFillCreditCardFill} from 'react-icons/bs'
import {PiAddressBookThin} from 'react-icons/pi'

import Button from './Button'
import Label from './Label'
import { useGetPaymentInfo } from '../features/checkout/useGetPaymentInfo'
import { useGetAddress } from '../features/checkout/useGetAddress'
import useCart from "../features/cart/useCart"
import {GST , SHIPPING, DISCOUNT} from '../utils/constants'
import { useOrderPaymentConfirmation } from '../features/checkout/useOrderPaymentConfirmation'
import { useClearCart } from '../features/cart/useClearCart'
import Spinner from './Spinner'


const FinalCheckout = () => {
    
    const {cartItems, loadingCart} = useCart()
    const {paymentIfon, loadingInfo} = useGetPaymentInfo()
    const {shippingAddress, loadingAddress} = useGetAddress()
    const {placeOrder, placingOrder} = useOrderPaymentConfirmation()
    
    

    if(loadingAddress || loadingInfo || loadingCart) return <Spinner />

    const lastAddress = shippingAddress.length >= 1&& shippingAddress?.at(-1);
    const lastMethod = paymentIfon.length >= 1&&  paymentIfon?.at(-1);
    const totalCartAmount = cartItems?.reduce((acc, cur) => acc + cur?.total_price, 0);
    const finalAmountToPay = (totalCartAmount + GST + SHIPPING) - DISCOUNT;



    function handlePayment () {
        placeOrder()
    }

  return (
    <section className="mt-[4rem] flex max-md:flex-col space-y-4 md:gap-x-8">
        <div className='w-full space-y-6 md:flex-1'>
        <div className="w-full px-10 py-4 space-y-4 rounded-md shipping-address bg-stone-50">
            <h2 className="font-normal tracking-widest">SHIPPING ADDRESS</h2>
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

        <div className="w-full px-10 py-4 space-y-4 rounded-md shipping-address bg-stone-50">
            <h2 className="font-normal tracking-widest">PAYMENT METHOD</h2>
            <div className="flex items-center justify-between " >
                <div>
                <div className="flex items-center text-stone-500 gap-x-2">
                    <div ><BsFillCreditCardFill className='w-6 h-6' /></div>
                    {/* <> {lastMethod?.payment_method}<p>ending in {lastMethod?.expire_date.split(' ')[1].join('')}</p> </> */}
                    <> {lastMethod?.payment_method}<p>ending in {lastMethod?.expire_date}</p> </>
                </div>
                <div>
                <div className="flex items-center mt-2 italic font-semibold tracking-wide text-stone-500 gap-x-2">
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
            <h3 className='font-semibold text-center'>Order Summary</h3>
            <div className='px-2 py-4 space-y-2'>
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
                    <Label className='text-lg italic font-semibold text-yellow-900'>Order Total: </Label>
                    <strong >${finalAmountToPay}</strong>
                </p>
                <Button 
                onClick={() => handlePayment()} 
                variation='primary' 
                className='w-full' 
                disabled={placingOrder}
                >
                    {placingOrder ? 'placing order' : 'Pay & Place Your Order'}
                </Button>

            </div>
        </div>

    </section>
  )
}

export default FinalCheckout