import { useNavigate, useParams } from "react-router-dom";
import parse from "html-react-parser";
import { useProduct } from "./useProduct";
import useAddCartItem from "../cart/useAddCartItem";
import Button from "../../ui/Button";
import Spinner from "../../ui/Spinner";

const ProductInfo = () => {
  const { productId } = useParams();
  const { product, isLoading } = useProduct(productId);
  const { addProduct, addingProduct } = useAddCartItem();

  if (isLoading) return <Spinner message='product details' />;
  
  const {
    id,
    brand,
    tag_list,
    name,
    price,
    price_sign,
    description,
    product_type,
    api_featured_image: image,
  } = product;
  let exactPrice = price === 0 || price <= 5 ? price + 15 : price;

  const quantity = 1;
  const cartItem = {
    id,
    created_at: new Date(),
    name,
    image,
    quantity,
    price:exactPrice,
    total_price: exactPrice * quantity
  };

  

  function handleAddToCart() {
    addProduct(cartItem);
  }

  return (
    <section className=" rounded-md mt-[1.5rem] ">
      <div className="w-[90%] mx-auto  py-10 px-4 md:px-20 bg-white md:product-bg-clip rounded-sm ">
        <div className="grid grid-cols-1 px-6 divide-y-2 md:grid-cols-2 md:divide-x-2 md:gap-x-2 gap-y-6">
          <figure className="">
            <img
              src={image}
              className="md:w-[90%] md:h-[80%] rounded-md"
              alt={`image of beauty product ${name}`}
            />
          </figure>
          <article className="flex flex-col items-start justify-center px-2 gap-y-4 md:px-6">
            <div className="space-y-3 max-md:mt-4">
              <h1>{name}</h1>
              <span className="block italic font-semibold text-yellow-800">
                {product_type?.replace("_", " ")}
              </span>
            </div>
            <div className="flex items-center justify-around w-full ">
              <p className="text-2xl">
                {price_sign}{" "}
                <strong className="text-stone-700">{exactPrice}</strong>{" "}
              </p>
              {/* <button
                onClick={handleAddToCart}
                disabled={addingProduct}
                className="px-10 py-3 bg-yellow-900 hover:bg-yellow-950 text-yellow-50 disabled:cursor-wait"
              >
                Buy
              </button> */}
              <Button
              onClick={handleAddToCart}
              disabled={addingProduct}
              variation='primary'
              width='fit'
              >
                Buy
              </Button>
            </div>
            <div className="max-h-[10rem] h-[8rem] overflow-hidden">
              <p className="px-3 py-4">{parse(description)} </p>
            </div>
            <div>
              <p>
                Brand:{" "}
                <span className="text-xl italic tracking-wide text-yellow-800">
                  {" "}
                  {brand}
                </span>
              </p>
              <p>
                Tags:{" "}
                <span className="text-xl italic tracking-wide text-yellow-800 ">
                  {" "}
                  {JSON.parse(tag_list).join(", ")}
                </span>
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
