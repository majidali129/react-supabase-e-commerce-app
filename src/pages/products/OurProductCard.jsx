


const OurProductCard = () => {
  return (
    <div className=" mx-auto py-6  bg-white text-center rounded-md shadow-md hover:scale-105 transition-all duration-300 space-y-2">
        <div className="">
        <h3 className="font-semibold">Beauty Brush</h3>
        <p >Lorem, ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="flex items-center justify-center">
        <img src="https://d3t32hsnjxo7q6.cloudfront.net/i/991799d3e70b8856686979f8ff6dcfe0_ra,w158,h184_pa,w158,h184.png"/>
        </div>
        <div className="flex items-center justify-between bg-stone-800 py-3 px-2 rounded-md text-stone-50">
            <button className="outline-none py-1 px-2 bg-yellow-400 text-yellow-950 rounded-full hover:bg-yellow-500 hover:ring-1 hover:ring-yellow-700 hover:scale-105 transition-all duration-300 shadow-md">Buy now</button>
            <button className="outline-none py-1 px-2 bg-stone-500 ring-1 ring-stone-600  rounded-full text-stone-50 hover:bg-stone-500 hover:scale-105 transition-all duration-300 shadow-md">Buy now</button>
            <span className="text-lg">Price: $50</span>

        </div>

    </div>
  )
}

export default OurProductCard