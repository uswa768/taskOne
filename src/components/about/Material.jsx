const values = [
  {
    title: "Merinoo Wool",
    desc: "Australia & New Zealand 19.5 micron superfine",
  },
  {
    title: "Egyptain Cotton",
    desc: "Australia & New Zealand 19.5 micron superfine",
  },
  {
    title: "Mulbery Slik",
    desc: "Australia & New Zealand 19.5 micron superfine",
  },
  {
    title: "Organic Cotton ",
    desc: "Australia & New Zealand 19.5 micron superfine",
  },

   {
    title: "Organic Cotton ",
    desc: "Australia & New Zealand 19.5 micron superfine",
  },
   {
    title: "Organic Cotton ",
    desc: "Australia & New Zealand 19.5 micron superfine",
  },
];

function Material() {
  return (
    <section className="bg-[#1a1610] py-20 px-6 md:px-16 lg:px-24">
      <div className="text-center mb-12">
        <p className="text-[#c8a46b] tracking-[3px] text-xs uppercase mb-3">
        Premium Sourcing
        </p>
        <h2 className="text-4xl md:text-5xl font-serif text-white">
          Our <span className="text-[#c8a46b]">Materials</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {values.map((v, i) => (
          <div key={i} className="border border-[#3a3020] p-8">
            <h3 className="text-white font-serif text-xl mb-3">{v.title}</h3>
            <p className="text-white/60 text-sm leading-relaxed">{v.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Material;