import OurProductCard from "./OurProductCard"



const OurProducts = () => {
  return (
    <section className="flex flex-col gap-y-4 ">
        <div className="text-center w-full space-y-2 ">
        <h2 className="">Our Products</h2>
        <p className=" mx-auto">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis vero consequatur voluptas perspiciatis</p>

        </div>

        <ul className="w-full  py-4 px-1  grid md:grid-cols-4 grid-cols-1 md:gap-x-10 gap-y-4  ">
            <OurProductCard />
            <OurProductCard />
            <OurProductCard />
            <OurProductCard />
            <OurProductCard />
            <OurProductCard />
            <OurProductCard />
            <OurProductCard />
        </ul>
        <div className="text-center">
            <button className="py-3 px-3 bg-stone-500 ring-2 outline-none ring-stone-600  rounded-sm text-stone-50 hover:bg-stone-500 hover:scale-105 transition-all duration-300 shadow-md active:bg-yellow-100 ">See More Products</button>
        </div>
    </section>
  )
}

export default OurProducts