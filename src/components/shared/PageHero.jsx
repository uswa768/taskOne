function PageHero({ label, title, highlight, desc, img }) {
  return (
    <section
      className=" h-[50vh] lg:h-[100vh] w-full relative flex items-center justify-center text-center"
      style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 text-white px-6">
        <p className="text-[#c8a46b] tracking-[3px] text-xs uppercase mb-4">{label}</p>
        <h1 className="text-4xl md:text-6xl font-serif mb-4">
          {title} <span className="text-[#c8a46b]">{highlight}</span>
        </h1>
        <p className="text-white/70 text-sm md:text-base max-w-xl mx-auto">{desc}</p>
      </div>
    </section>
  );
}

export default PageHero;