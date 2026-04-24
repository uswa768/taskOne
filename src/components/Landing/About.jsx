import heroImg from "../../assets/image.png";
import aboutImg from "../../assets/about.jpeg";  

function About() {
  return (
    <section className="bg-[#1a1610] py-12 md:py-20 px-6 md:px-16 lg:px-24">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="hidden md:block w-full md:w-1/2">
          <img src={aboutImg}
            alt="About Valuetex"
            className="w-full h-[500px] object-cover"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 text-white">
          <p className="text-[#c8a46b] tracking-[3px] text-xs uppercase mb-4">
            Who We Are
          </p>

          <h2 className="text-3xl md:text-5xl font-serif mb-6">
            Crafting Excellence <br />
            <span className="text-[#c8a46b]">Since 1987</span>
          </h2>

          <p className="text-white/70 text-sm leading-relaxed mb-4">
            Valuetex is a premier textile sourcing and manufacturing company
            based in Faisalabad — the heart of Pakistan's textile industry.
            With over two decades of expertise, we have become a trusted
            partner for clients worldwide.
          </p>

          <p className="text-white/70 text-sm leading-relaxed mb-8">
            From bed linen and bath towels to denim and apparel, we deliver
            quality products tailored to global standards. Our mission is
            simple — add real value to your textile sourcing journey.
          </p>

          <div className="flex gap-10 mb-10">
            <div>
              <h3 className="text-[#c8a46b] text-3xl font-serif">20+</h3>
              <p className="text-white/60 text-xs tracking-widest uppercase mt-1">Years Experience</p>
            </div>
            <div>
              <h3 className="text-[#c8a46b] text-3xl font-serif">500+</h3>
              <p className="text-white/60 text-xs tracking-widest uppercase mt-1">Global Clients</p>
            </div>
            <div>
              <h3 className="text-[#c8a46b] text-3xl font-serif">50+</h3>
              <p className="text-white/60 text-xs tracking-widest uppercase mt-1">Countries Served</p>
            </div>
          </div>

          <button className="bg-[#c8a46b] text-black px-6 py-3 text-xs tracking-widest uppercase hover:bg-[#b8922e] transition-all duration-200">
            Learn More About Us
          </button>
        </div>

      </div>
    </section>
  )
}

export default About;
