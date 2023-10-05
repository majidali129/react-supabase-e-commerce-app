
const AboutUs = () => {
  return (
    <section className='bg-stone-100 rounded-md py-10 grid md:grid-cols-2 grid-cols-1 md:gap-x-3 gap-y-3 '>
        <div className=' md:ps-20 md:pr-10 px-6 space-y-6 py-4'>
            <h2 className=' line-height '>About Our <br /> Beauty Store</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde praesentium, optio sapiente tenetur aliquam iusto. Unde, laborum tempore natus voluptatibus velit nam temporibus nostrum distinctio? Quisquam, voluptatem doloribus totam dolore odit reprehenderit dolorem doloremque ipsum laudantium ea! Dolores totam ab vero odio deserunt perspiciatis officia, ipsa ducimus. Eos nihil magnam voluptas quibusdam. Quis qui fugit consequatur similique dignissimos alias ab.</p>

            <button className="py-3 px-3 bg-stone-500 ring-2 outline-none ring-stone-600  rounded-sm text-stone-50 hover:bg-stone-500 hover:scale-105 transition-all duration-300 shadow-md active:bg-yellow-100 ">Explore More About Us</button>
        </div>
        <div className='px-6 hidden md:block'>
            <img src="https://vipmagazine.ie/app/uploads/2020/12/makeup-cosmetic_t20_GgYP63.jpg" className='w-full rounded-md' alt="" />
        </div>
    </section>
  )
}

export default AboutUs