const values = [
  {
    title: "Craftsmanship",
    desc: "Every pair is a testament to decades of textile mastery. Our artisans blend traditional techniques with cutting-edge technology.",
  },
  {
    title: "Sustainability",
    desc: "We invest in eco-friendly practices — from GOTS-certified organic cotton to water-recycling dyeing processes that reduce waste by 60%.",
  },
  {
    title: "Innovation",
    desc: "Our R&D team continually develops new blends, construction techniques, and performance features.",
  },
  {
    title: "Partnership",
    desc: "We don't just supply — we collaborate. Dedicated account managers guide every client from concept to delivery.",
  },
];

function CoreValues() {
  return (
    <section className="bg-[#1a1610] py-20 px-6 md:px-16 lg:px-24">
      <div className="text-center mb-12">
        <p className="text-[#c8a46b] tracking-[3px] text-xs uppercase mb-3">
          Our Principles
        </p>
        <h2 className="text-4xl md:text-5xl font-serif text-white">
          Core <span className="text-[#c8a46b]">Values</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
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

export default CoreValues;