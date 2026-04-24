const milestones = [
  { year: "1987", desc: "Founded in Milan, Italy as a family-operated hosiery workshop." },
  { year: "1995", desc: "Expanded to 50+ industrial knitting machines, securing first international export contracts." },
  { year: "2003", desc: "Opened second production facility in Porto, Portugal for European distribution." },
  { year: "2010", desc: "Achieved ISO 9001 and OEKO-TEX Standard 100 certifications." },
  { year: "2016", desc: "Launched dedicated organic cotton line with GOTS certification." },
  { year: "2023", desc: "Reached 200+ brand partners across 45 countries with 12M+ annual pair capacity." },
];

function Journey() {
  return (
    <section className="bg-[#1a1610] py-20 px-6 md:px-16 lg:px-24">
      <div className="text-center mb-12">
        <p className="text-[#c8a46b] tracking-[3px] text-xs uppercase mb-3">Milestones</p>
        <h2 className="text-4xl md:text-5xl font-serif text-white">
          Our <span className="text-[#c8a46b]">Journey</span>
        </h2>
      </div>

      <div className="max-w-2xl mx-auto">
        {milestones.map((m, i) => (
          <div key={i} className="flex gap-6 mb-8">
            <div className="flex flex-col items-center">
              <div className="w-2 h-2 bg-[#c8a46b] mt-1 shrink-0" />
              {i < milestones.length - 1 && <div className="w-[1px] bg-[#3a3020] flex-1 mt-1" />}
            </div>
            <div className="pb-4">
              <p className="text-[#c8a46b] font-serif text-lg mb-1">{m.year}</p>
              <p className="text-white/60 text-sm leading-relaxed">{m.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Journey;