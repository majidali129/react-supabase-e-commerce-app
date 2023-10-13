import OurProductCard from "./OurProductCard";
import {ourProducts} from "../../data/data";
import { useNavigate } from "react-router-dom";

const OurProducts = () => {
  const navigate = useNavigate()  
  return (
    <section className="flex flex-col gap-y-4 ">
      <div className="w-full space-y-2 text-center ">
        <h2 className="">Our Products</h2>
        <p className="mx-auto ">
        Discover Our Collection. <br />
        Every piece tells a story. <strong>Explore</strong> our handpicked selection and find yours
        </p>
      </div>

      <ul className="grid w-full grid-cols-2 px-1 py-4 gap-x-4 gap-y-4 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-5 ">
        {ourProducts.map((product) => {
          const {
            id: productId,
            name,
            api_featured_image: image,
            category,
          } = product;
          return (
          <OurProductCard
            key={productId}
            productName={name}
            productImage={image}
            productCategory={category}
          /> 
          )
})}
      </ul>
      <div className="text-center">
        <button 
        onClick={() => navigate('/products')}
        className="px-3 py-3 transition-all duration-300 rounded-sm shadow-md outline-none bg-stone-500 ring-2 ring-stone-600 text-stone-50 hover:bg-stone-500 hover:scale-105 active:bg-yellow-100 ">
          See More Products
        </button>
      </div>
    </section>
  );
};

export default OurProducts;
