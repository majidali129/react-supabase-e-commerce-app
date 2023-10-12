import { GiPush } from "react-icons/gi";
import { MdDeliveryDining } from "react-icons/md";
import { MdOutlineContactSupport } from "react-icons/md";
import OurProducts from "../features/products/OurProducts";
import AboutUs from "./AboutUs";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
const HomePage = () => {
  return (
    <article className=" space-y-24 py-6 px-4">
      {/* <h3>Carousal</h3> */}
      <section className="space-y-8 text-center">
        <h2>Shop with Confidence</h2>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-4  ">
          <div className="flex flex-row  items-center gap-x-4 bg-stone-50 py-8 px-6 rounded-md">
            <GiPush className="icon text-yellow-500" />
            <div className="text-start">
              <h3 className="text-xl font-semibold">Elevate Your Look</h3>
              <p>Discover makeup tailored to your style</p>
            </div>
          </div >
          <div className="flex flex-row  items-center gap-x-4 bg-stone-50 py-8 px-6 rounded-md">
            <MdDeliveryDining className="icon text-yellow-500" />
            <div className="text-start">
              <h3 className="text-xl font-semibold">Complimentary Delivery</h3>
              <p>Free shipping on all orders</p>
            </div>
          </div>
          <div className="flex flex-row  items-center gap-x-4 bg-stone-50 py-8 px-6 rounded-md">
            <MdOutlineContactSupport className="icon text-yellow-500" />
            <div className="text-start">
              <h3 className="text-xl font-semibold">24/7 Beauty Support</h3>
              <p>Our makeup experts are always here to help</p>
            </div>
          </div>
        </section>
      </section>

      <OurProducts />
      <AboutUs />
      <Testimonials />
    </article>
  );
};

export default HomePage;
