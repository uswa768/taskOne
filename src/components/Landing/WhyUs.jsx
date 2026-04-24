import React from 'react'
const stats = [
    { number: "Premium Yarns", label: "Sourced from Italy, Japan, and Peru — the finest fibers on Earth." },
    { number: "European Standards", label: "OEKO-TEX® and ISO 9001 certified for quality and safety compliance" },
    { number: "fast Global Shipping", label: "Reliable logistics to 45+ countries with dedicated account support." },
    { number: "Quality Testing Labs", label: "In-house testing for durability, colorfastness, and material performance." },
];

function WhyUs(){
  return (
   <section className=" bg-[#1a1610] py-20 px-6 md:px-16 lg:px-24 ">

            <div className="text-center mb-12     ">
                <p className="text-[#c8a46b] tracking-[3px] text-xs uppercase mb-3">
                    THE VALUETAX DIFFERENCE
                </p>
                <h2 className="text-4xl md:text-5xl font-serif text-white">
                    WHY <span className="text-[#c8a46b] pb-">CHOOSE US</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                {stats.map((s, i) => (
                    <div key={i} className="border border-[#3a3020] bg-[#1a1610] p-8 text-center">
                        <h6 className="text-[#c8a46b] text-1xl font-serif mb-5">{s.number}</h6>
                        <p className="text-white/60 text-xs tracking-widest uppercase">{s.label}</p>
                    </div>
                ))}
            </div>

        </section>
  )
}

export default WhyUs
