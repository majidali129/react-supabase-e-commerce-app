import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { BiCartDownload } from "react-icons/bi";
import parse from "html-react-parser";
import icon from "../../../public/makeup-icon.png";
import Button from "../../ui/Button";
import useAddCartItem from "../cart/useAddCartItem";

const data = {
  id: 1048,
  brand: "colourpop",
  name: "Lippie Pencil", // ok
  price: "5.0", // ok
  price_sign: "$", // ok
  currency: "CAD",
  image_link:
    "https://cdn.shopify.com/s/files/1/1338/0845/collections/lippie-pencil_grande.jpg?v=1512588769",
  product_link: "https://colourpop.com/collections/lippie-pencil",
  website_link: "https://colourpop.com",
  // ok
  description:
    "Lippie Pencil A long-wearing and high-intensity lip pencil that glides on easily and prevents feathering. Many of our Lippie Stix have a coordinating Lippie Pencil designed to compliment it perfectly, but feel free to mix and match!",
  rating: null,
  category: "pencil", // ok
  product_type: "lip_liner", // ok
  tag_list: ["cruelty free", "Vegan"],
  created_at: "2018-07-08T23:45:08.056Z",
  updated_at: "2018-07-09T00:53:23.301Z",
  product_api_url: "https://makeup-api.herokuapp.com/api/v1/products/1048.json",
  // ok
  api_featured_image:
    "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/048/original/open-uri20180708-4-13okqci?1531093614",
  product_colors: [
    {
      hex_value: "#B28378",
      colour_name: "BFF Pencil",
    },
    {
      hex_value: "#A36B5E",
      colour_name: "951 Pencil",
    },
    {
      hex_value: "#966A60",
      colour_name: "Beeper Pencil",
    },
    {
      hex_value: "#8F5954",
      colour_name: "Oh Snap Pencil",
    },
    {
      hex_value: "#975348",
      colour_name: "Curvii Pencil",
    },
    {
      hex_value: "#865B69",
      colour_name: "Lumiere Pencil",
    },
    {
      hex_value: "#8E474D",
      colour_name: "Bumble Pencil",
    },
    {
      hex_value: "#5F2820",
      colour_name: "BFF Pencil 3",
    },
    {
      hex_value: "#C095BC",
      colour_name: "Brills Pencil",
    },
    {
      hex_value: "#743A6A",
      colour_name: "Are N Be Pencil",
    },
    {
      hex_value: "#965564",
      colour_name: "Contempo Pencil",
    },
    {
      hex_value: "#BF2C7E",
      colour_name: "Heart On Pencil",
    },
    {
      hex_value: "#CE435D",
      colour_name: "Trixie Pencil",
    },
    {
      hex_value: "#DA6952",
      colour_name: "Chi Chi Pencil",
    },
    {
      hex_value: "#A33C37",
      colour_name: "Clique Pencil",
    },
    {
      hex_value: "#C23D3C",
      colour_name: "Frenchie Pencil",
    },
    {
      hex_value: "#AF4051",
      colour_name: "Bossy Pencil",
    },
    {
      hex_value: "#914B4C",
      colour_name: "Wild Nothing Pencil",
    },
    {
      hex_value: "#6D414B",
      colour_name: "Dopey Pencil",
    },
    {
      hex_value: "#4D2D28",
      colour_name: "Toolips Pencil",
    },
    {
      hex_value: "#361927",
      colour_name: "Mamacita Pencil",
    },
    {
      hex_value: "#714B41",
      colour_name: "Pitch Pencil",
    },
    {
      hex_value: "#762F50",
      colour_name: "LBB Pencil",
    },
    {
      hex_value: "#8C4A47",
      colour_name: "Love Bug Pencil",
    },
    {
      hex_value: "#702E2D",
      colour_name: "Poison Pencil",
    },
    {
      hex_value: "#93283C",
      colour_name: "Bichette Pencil",
    },
    {
      hex_value: "#653E44",
      colour_name: "Dukes Pencil",
    },
    {
      hex_value: "#5C3357",
      colour_name: "Leather Pencil",
    },
    {
      hex_value: "#242225",
      colour_name: "Bull Chic Pencil",
    },
    {
      hex_value: "#B5716A",
      colour_name: "Brink Pencil",
    },
    {
      hex_value: "#B0516F",
      colour_name: "I Heart This Pencil",
    },
    {
      hex_value: "#542328",
      colour_name: "Ellarie Pencil",
    },
    {
      hex_value: "#DFAC9B",
      colour_name: "Toy Pencil",
    },
    {
      hex_value: "#AB7164",
      colour_name: "BFF Pencil 2",
    },
  ],
};

const ProductCard = ({
  productTags,
  productName,
  productId,
  productImage,
  productPrice,
  priceSign,
  productDesc,
  productType,
  productBrand,
  productCategory,
}) => {
  const { addProduct, addingProduct } = useAddCartItem();
 const navigate = useNavigate()

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
    <section className="  hover:scale-105 transition-all duration-500 ease-in-out">
      <div className="card-wrapper bg-white p-4 flex flex-col items-start space-y-2 rounded-md max-sm:w-10/12 mx-auto      ">
        <div className="flex items-center justify-center w-full">
          <figure className=" md:w-64 md:h-64 w-72 h-72">
            <img
              src={productImage}
              className="aspect-square rounded-md shadow-md w-[100%] h-[100%] "
              alt={`image of ${productName}`}
            />
          </figure>
        </div>

        <div className="content space-y-4 ">
          <div>
            <div className="flex items-center gap-3 ps-4">
              <span>
                <img src={icon} width={20} alt="" />
              </span>
              <span className="text-yellow-800 uppercase">
                {" "}
                {productCategory ? productCategory : "makeup"}
              </span>
            </div>
            {/* <div >{productType?.replace('_', ' ')}</div> */}
          </div>
          <h3 className="uppercase line-clamp-1">{productName}</h3>
          <strong className="mb-3">
            {priceSign} {productPrice > 0 ? productPrice : "30"}
          </strong>
          <p className="line-clamp-2 text-stone-400">
            {productDesc
              ? parse(productDesc)
              : "Crafted to accentuate your natural allure, our product combines the magic of color and texture to enhance and illuminate"}
          </p>
          <div className="text-center flex items-start justify-between gap-x-3">
            <Button variation='primary' onClick={()=> navigate(`${productId}`) } >
              Details
            </Button>
            <Button 
            onClick={() => addProduct(cartItem)}
            disabled={addingProduct}
            variation="primary"
            >
              <span></span> <BiCartDownload className="w-6 h-6" />
              Add To Cart
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
