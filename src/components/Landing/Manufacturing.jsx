const stats = [
  { number: "12M+", label: "Pairs Per Year" },
  { number: "45+", label: "Countries Exported" },
  { number: "35+", label: "Years of Expertise" },
  { number: "200+", label: "Brand Partners" },
];

function Manufacturing() {
  return (
    <section className=" bg-[#1a1610] py-20 px-6 md:px-16 lg:px-24">

      <div className="text-center mb-12">
        <p className="text-[#c8a46b] tracking-[3px] text-xs uppercase mb-3">
          Capacity & Reach
        </p>
        <h2 className="text-4xl md:text-5xl font-serif text-white">
          Manufacturing <span className="text-[#c8a46b]">Excellence</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {stats.map((s, i) => (
          <div key={i} className="border border-[#3a3020] bg-[#1a1610] p-8 text-center">
            <h3 className="text-[#c8a46b] text-4xl font-serif mb-3">{s.number}</h3>
            <p className="text-white/60 text-xs tracking-widest uppercase">{s.label}</p>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Manufacturing;