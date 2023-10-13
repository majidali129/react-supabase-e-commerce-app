import { Link, Navigate, useNavigate } from "react-router-dom";
import { BiCartDownload } from "react-icons/bi";
import icon from "../../../public/makeup-icon.png";
import Button from "../../ui/Button";
import useAddCartItem from "../cart/useAddCartItem";

const ProductCard = ({
  productName,
  productId,
  productImage,
  productPrice,
  priceSign,
  productCategory,
}) => {
  const { addProduct, addingProduct } = useAddCartItem();
  const navigate = useNavigate();

  let exactPrice =
    productPrice === 0 || productPrice <= 5 ? productPrice + 15 : productPrice;

  const quantity = 1;
  const cartItem = {
    id: productId,
    created_at: new Date(),
    name: productName,
    image: productImage,
    quantity,
    price: exactPrice,
    total_price: exactPrice * quantity,
  };


  return (
    <Link to={`${productId}`}>
      <section className="transition-all duration-500 ease-in-out hover:scale-105">
        <div className="flex flex-col items-start p-4 mx-auto space-y-2 bg-white rounded-md card-wrapper max-sm:w-10/12 ">
          <div className="flex items-center justify-center w-full">
            <figure className=" md:w-52 md:h-52 w-72 h-72">
              <img
                src={productImage}
                className="aspect-square rounded-md shadow-md w-[100%] h-[100%] "
                alt={`image of ${productName}`}
              />
            </figure>
          </div>

          <div className="w-full space-y-4 content ">
              <div className="flex items-center justify-between gap-3 px-4">
                <div className="flex items-center gap-x-1">

                  <span>
                    <img src={icon} width={20} alt="" />
                  </span>
                  <span className="text-yellow-800 uppercase">
                    {" "}
                    {productCategory ? productCategory : "makeup"}
                  </span>

                </div>
                <strong>
                  {priceSign} {productPrice > 0 ? productPrice : "30"}
                </strong>
              </div>
            <h3 className="uppercase line-clamp-1">{productName}</h3>

            <div className="flex flex-col items-start justify-between text-center gap-y-4 gap-x-3">
              <Button
                variation="secondary"
                className="w-full"
                onClick={() => navigate(`${productId}`)}
              >
                Details
              </Button>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  addProduct(cartItem);
                  <Navigate to='/cart' replace={true} />
                }}
                disabled={addingProduct}
                variation="primary"
                className="w-full"
              >
                <BiCartDownload className="w-6 h-6" />
                Add To Cart
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Link>
  );
};

export default ProductCard;
