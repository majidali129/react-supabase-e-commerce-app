
const Testimonials = () => {
  return (
    <section className="flex flex-col space-y-10 items-center justify-center ">

        <h2>WHAT SAYS CUSTOMERS</h2>
        <div className="md:w-8/12  bg-white rounded-lg py-4 md:py-10 px-4 md:px-14">
        <div className="  flex md:items-center items-start justify-between flex-col md:flex-row md:gap-x-20">

            <div className="basis-3/6 image-wrapper rounded-full bg-yellow-200 ">
                <img src="https://d3t32hsnjxo7q6.cloudfront.net/i/991799d3e70b8856686979f8ff6dcfe0_ra,w158,h184_pa,w158,h184.png" alt="" className=" w-[100%] h-[100%] rounded-full"/>
            </div>
            <div>

            <h3 className="font-[600] mb-4 flex-grow">Majid Ali</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, error facere quia sit earum expedita. Nulla accusantium enim, similique minima, fuga voluptate doloribus, dolores a ea quibusdam laboriosam quasi odit!</p>
            </div>
        </div>

        </div>
        <div className="flex items-center justify-center gap-10  ">
            <button className="py-4 text-stone-800 hover:text-stone-50 transition-all duration-300 hover:bg-stone-800 px-4 bg-stone-50 ring-2 ring-stone-400 rounded-full">Prev</button>
            <button className="py-4 text-stone-800 hover:text-stone-50 transition-all duration-300 hover:bg-stone-800 px-4 bg-stone-50 ring-2 ring-stone-400 rounded-full">Next</button>
        </div>

    </section>
  )
}

export default Testimonials