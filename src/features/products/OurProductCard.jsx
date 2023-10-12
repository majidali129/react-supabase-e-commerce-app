import parse from 'html-react-parser'
import { Link } from 'react-router-dom'


const OurProductCard = ({name, price, image, category, description}) => {
  // const preciseDesc = description.split(' ').slice(0,10).join(' ')
  // console.log(preciseDesc)
  // console.log(parse(preciseDesc));
  
  return (
    <Link to='/products' >
    <div className=" py-7  bg-white text-center rounded-md shadow-md hover:scale-105 transition-all duration-300 space-y-4">
        <div className="space-y-4">
        <h3 className="font-semibold break-words ">{name}</h3>
        <p className='line-clamp-2 px-4 leading-6 text-stone-400' >{parse(description)}</p>
        </div>

        <div className="flex items-center justify-center">
        <figure className='w-52 h-52' >
        <img src={image} className='w-[100%] h-[100%]'   alt={`image of ${name}`}/>
        </figure>
        </div>

        <div className="flex items-center justify-center bg-stone-500 py-3 px-2 rounded-sm text-stone-50">
            {/* <button className="outline-none py-1 px-2 bg-yellow-400 text-yellow-950 rounded-full hover:bg-yellow-500 hover:ring-1 hover:ring-yellow-700 hover:scale-105 transition-all duration-300 shadow-md">Buy now</button>
            <button className="outline-none py-1 px-2 bg-stone-500 ring-1 ring-stone-600  rounded-full text-stone-50 hover:bg-stone-500 hover:scale-105 transition-all duration-300 shadow-md">Buy now</button>
            <span className="text-lg">{price}</span> */}
            <button className="outline-none py-1 px-2 bg-stone-700 ring-1 ring-stone-600  rounded-full text-stone-50 hover:bg-stone-500 hover:scale-105 transition-all duration-300 shadow-md">Explore More</button>

        </div>

    </div>
    </Link>
  )
}

export default OurProductCard