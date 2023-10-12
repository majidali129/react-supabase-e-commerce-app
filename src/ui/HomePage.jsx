import {GiPush} from 'react-icons/gi'
import {MdDeliveryDining} from 'react-icons/md'
import {MdOutlineContactSupport} from 'react-icons/md'
import OurProducts from '../features/products/OurProducts'
import AboutUs from './AboutUs'
import Testimonials from './Testimonials'
import Footer from './Footer'
const HomePage = () => {
  return (
    <article className=' space-y-24 py-6 px-4'>
    {/* <h3>Carousal</h3> */}
    <section className="space-y-8 text-center">
        <h2 >Shop with Confidence</h2>

        <section className="flex items-center justify-around flex-col md:flex-row gap-y-8  ">
        <div className='flex flex-col md:flex-row  items-center gap-y-2 md:gap-x-4'>
            <GiPush className='icon text-yellow-500'/>
            <div>
            <h3 className="text-xl font-semibold">Elevate Your Look</h3>
            <p>Discover makeup tailored to your style</p>
            </div>
        </div>
        <div className='flex flex-col md:flex-row  items-center gap-y-2 md:gap-x-4'> 
            <MdDeliveryDining className='icon text-yellow-500' />
            <div>
            <h3 className="text-xl font-semibold">Complimentary Delivery</h3>
            <p>Free shipping on all orders</p>
            </div>
        </div>
        <div className='flex flex-col md:flex-row  items-center gap-y-2 md:gap-x-4'>
            <MdOutlineContactSupport className='icon text-yellow-500' />
            <div>
            <h3 className="text-xl font-semibold">24/7 Beauty Support</h3>
            <p>Our makeup experts are always here to help</p>
            </div>
        </div>
        </section>
    </section>

        <OurProducts />
        <AboutUs />  
        <Testimonials /> 
        <Footer />
    </article>
  )
}

export default HomePage