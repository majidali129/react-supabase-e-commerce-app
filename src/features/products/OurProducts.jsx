import OurProductCard from "./OurProductCard";
import {ourProducts} from "../../data/data";

const OurProducts = () => {
  
  return (
    <section className="flex flex-col gap-y-4 ">
      <div className="text-center w-full space-y-2 ">
        <h2 className="">Our Products</h2>
        <p className=" mx-auto">
        Discover Our Collection. <br />
        Every piece tells a story. <strong>Explore</strong> our handpicked selection and find yours
        </p>
      </div>

      <ul className="w-full  py-4 px-1  grid grid-cols-2 gap-x-4  gap-y-4  md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-5    ">
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
        <button className="py-3 px-3 bg-stone-500 ring-2 outline-none ring-stone-600  rounded-sm text-stone-50 hover:bg-stone-500 hover:scale-105 transition-all duration-300 shadow-md active:bg-yellow-100 ">
          See More Products
        </button>
      </div>
    </section>
  );
};

export default OurProducts;
