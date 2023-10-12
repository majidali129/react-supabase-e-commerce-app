import Modal from "../../ui/Modal";
import Pagenation from "../../ui/Pagenation";
import ProductCard from "./ProductCard"
import { useProducts } from "./useProducts";
const AllProducts = () => {
  const {products, isLoading, count} = useProducts()
  
  
  if(isLoading) return <h2>Loading .... </h2>

  
  return (
    <section className="mt-[5rem] mb-[10rem] container">
      <ul className=" grid  2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-4 gap-y-10  ">
        {
          products?.map(product => {
            const {id, brand, tag_list,  name, price, price_sign, description, category, product_type, api_featured_image: image} = product;
            
            return (
              <li key={id}>
                <ProductCard productTags={tag_list} productId={id} productName={name} productPrice={price} priceSign={price_sign} productDesc={description} productCategory={category} productType={product_type} productImage={image} productBrand={brand}  />
              </li>
            )
          })
        }
        
      </ul>
      <Pagenation count={count} />
      <Modal />
    </section>
  )
}

export default AllProducts