const stats = [
    { number: "Custom Materials", label: " Premium packaging design and production — from individual wraps to luxury retail-ready boxes." },
    { number: "Custom Packaging", label: " Premium packaging design and production — from individual wraps to luxury retail-ready boxes." },
    { number: "Branding Support", label: "Premium packaging design and production — from individual wraps to luxury retail-ready boxes." },
    { number: "Bulk Production", label: " Premium packaging design and production — from individual wraps to luxury retail-ready boxes." },
];

function CustomManufacturing() {
    return (
        <section className="bg-[#2a2a2a] py-20 px-6 md:px-16 lg:px-24 ">

            <div className="text-center mb-12     ">
                <p className="text-[#c8a46b] tracking-[3px] text-xs uppercase mb-3">
                    OEM & Private Label
                </p>
                <h2 className="text-4xl md:text-5xl font-serif text-white">
                    Custom <span className="text-[#c8a46b] pb-"> Manufacturing</span>
                </h2>
                <p className="text-gray-400 text-lg pt-2 pb-5">From concept to container — we bring your vision to life with end-to-end private label manufacturing, backed by decades of textile expertise.</p>
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
    );
}

export default CustomManufacturing;