const AboutUs = () => {
  return (
    <section className="bg-stone-100 rounded-md py-10 grid md:grid-cols-2 grid-cols-1 md:gap-x-3 gap-y-3 ">
      <div className=" md:ps-20 md:pr-10 px-6 space-y-6 py-4">
        <h2>
          About Our <br /> <span className="text-yellow-300 italic">Beauty</span> Store
        </h2>
        <p>
          At 'makeup', beauty isn't just skin deep.
          <br />
          Founded with a passion for self-expression, 'makeup' has evolved into
          more than just an online cosmetics store. We believe makeup is an art,
          a way for each individual to showcase their unique style, personality,
          and confidence. With a logo that symbolizes both simplicity and
          sophistication, we aim to offer products that mirror these principles,
          ensuring every stroke, shade, and shimmer brings out the best in you.{" "}
          <br /> <br />
        </p>

        <button className="py-3 px-3 bg-stone-500 ring-2 outline-none ring-stone-600  rounded-sm text-stone-50 hover:bg-stone-500 hover:scale-105 transition-all duration-300 shadow-md active:bg-yellow-100 ">
          Explore More About Us
        </button>
      </div>
      <div className="px-6 hidden md:block">
        <img
          src="https://vipmagazine.ie/app/uploads/2020/12/makeup-cosmetic_t20_GgYP63.jpg"
          className="w-full rounded-md"
          alt=""
        />
      </div>
    </section>
  );
};

export default AboutUs;
