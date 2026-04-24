const values = [
  {
    title: "Preminum yarn",
    desc: "Sourced from Italy, Japan, Peru, and Australia — the finest natural and performance fibers on Earth.",
    
},
  {
    title: "European Standards",
    desc: "OEKO-TEX® Standard 100, ISO 9001:2015, and GOTS certified across all production facilities.",
  },
  {
    title: "Fast Global Shipping",
    desc: "Reliable logistics network to 45+ countries with FOB, CIF, and DDP terms. Average 3-week delivery.",
  },
  {
    title: "Quality Testing Labs ",
    desc: "In-house labs running 15+ tests per batch — tensile strength, colorfastness, pilling, and dimensional stability. ",
  },

   {
    title: "35+ Years of Expertise",
    desc: "Three decades of textile manufacturing mastery, serving 200+ brands from heritage fashion houses to emerging labels.",
  },
   {
    title: "Dedicated Account Teams ",
    desc: "Every partner gets a dedicated manager, design consultant, and logistics coordinator for seamless collaboration.",
  },

   {
    title: "Sustainable Practices ",
    desc: "Solar-powered facilities, water recycling, zero-waste yarn recovery, and compostable packaging options.",
  },
   {
    title: "Rapid Turnaround",
    desc: "From approved sample to bulk delivery in as few as 4 weeks. Express production lines for urgent requirements.",
  },
];

function Qualities() {
  return (
    <section className="bg-[#1a1610] py-20 px-6 md:px-16 lg:px-24">
    
      <div className=" grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
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

export default Qualities;