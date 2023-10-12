import { Link } from 'react-router-dom'


const OurProductCard = ({productName, productImage}) => {
  
  return (
    <Link to='/products' >
    <div className=" py-7  bg-white text-center rounded-md shadow-md hover:scale-105 transition-all duration-300 space-y-4">
        <div className="space-y-4">
        <h3 className="md:font-semibold break-words ">{productName}</h3>
        </div>

        <div className="flex items-center justify-center">
        <figure className='w-52 h-52' >
        <img src={productImage} className='w-[100%] h-[100%]'   alt={`image of ${productImage}`}/>
        </figure>
        </div>

        <div className="flex items-center justify-center bg-stone-500 py-3 px-2 rounded-sm text-stone-50">
            <button className="outline-none py-1 px-2 bg-stone-700 ring-1 ring-stone-600  rounded-full text-stone-50 hover:bg-stone-500 hover:scale-105 transition-all duration-300 shadow-md">Explore More</button>

        </div>

    </div>
    </Link>
  )
}

export default OurProductCard