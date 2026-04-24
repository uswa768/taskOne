import heroImg from "../../assets/image.png";

function Hero() {
  return (
    <section
      className="h-screen w-full max-w-full overflow-hidden relative"
      style={{ backgroundImage: `url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">

        <p className="tracking-[3px] text-xs mb-4 uppercase">
          Est. 1987 • Global Textile Excellence
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-7xl font-serif mb-6 leading-tight">
          Precision in <br />
          <span className="text-[#c8a46b]">Every Thread.</span>
        </h1>

        <p className="text-sm md:text-base mb-10 max-w-sm text-white/80">
          Global Manufacturer of Luxury & Performance Socks
        </p>

        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm sm:max-w-none sm:w-auto">
          <button className="bg-[#c8a46b] text-black px-6 py-3 text-xs tracking-widest uppercase">
            Request Wholesale Catalog
          </button>
          <button className="border border-white px-6 py-3 text-xs tracking-widest uppercase hover:border-[#c8a46b] hover:text-[#c8a46b]">
            Become a Distributor
          </button>
        </div>

      </div>
    </section>
  );
}

export default Hero;