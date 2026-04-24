import React from 'react'

 const ContactUsForm = () => {
  return (
    <div className="min-h-screen bg-[#111008] text-white">
      <div className="max-w-7xl mx-auto px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        <div className="flex flex-col justify-start">
          <h1 className="text-5xl font-light mb-6 leading-tight">
            Let's Build{" "}
            <span style={{ color: "#c9a96e" }}>Together</span>
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed mb-12 max-w-sm">
            Whether you're launching a new sock line or looking for a reliable manufacturing partner, we're here to help. Our team specializes in translating brand vision into exceptional products.
          </p>

          <div className="space-y-6 mb-12">
            {[
              {label: "EMAIL", value: "partnerships@ValueTex.com" },
              {label: "PHONE", value: "+39 02 8456 7890" },
              {label: "BUSINESS HOURS", value: "Mon–Fri, 9:00–18:00" },
            ].map(({label, value }) => (
              <div key={label} className="flex items-start gap-4">
                <div>
                  <p className="text-xs tracking-widest text-gray-500 mb-1">{label}</p>
                  <p className="text-white text-sm">{value}</p>
                </div>
              </div>
            ))}
          </div>
 
          <div>
            <p className="text-xs tracking-widest mb-4" style={{ color: "#c9a96e" }}>WHAT TO EXPECT</p>
            <ul className="space-y-2">
              {[
                "Response within 24 hours",
                "Tailored proposal based on your needs",
                "Free sample kit for qualified partners",
                "Virtual or in-person factory tour",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-400">
                  <span style={{ color: "#c9a96e" }} className="mt-1 text-xs">▪</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="border border-gray-800 p-10" style={{ background: "#161409" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: "COMPANY NAME *", placeholder: "Your Company", type: "text" },
              { label: "CONTACT NAME *", placeholder: "Full Name", type: "text" },
              { label: "EMAIL ADDRESS *", placeholder: "email@company.com", type: "email" },
              { label: "PHONE NUMBER", placeholder: "+1 234 567 8900", type: "tel" },
              { label: "COUNTRY *", placeholder: "Country", type: "text" },
              { label: "COMPANY WEBSITE", placeholder: "https://", type: "url" },
            ].map(({ label, placeholder, type }) => (
              <div key={label}>
                <label className="block text-xs tracking-widest text-gray-500 mb-2">{label}</label>
                <input
                  type={type}
                  placeholder={placeholder}
                  className="w-full bg-transparent border-b border-gray-700 pb-2 text-sm text-gray-300 placeholder-gray-600 outline-none focus:border-[#c9a96e] transition-colors duration-300"
                />
              </div>
            ))}

            {/* Dropdowns */}
            <div>
              <label className="block text-xs tracking-widest text-gray-500 mb-2">ESTIMATED ORDER VOLUME</label>
              <select className="w-full bg-transparent border-b border-gray-700 pb-2 text-sm text-gray-500 outline-none focus:border-[#c9a96e] transition-colors duration-300 cursor-pointer">
                <option value="" className="bg-[#161409]">Select range</option>
                <option className="bg-[#161409]">500–1,000 units</option>
                <option className="bg-[#161409]">1,000–5,000 units</option>
                <option className="bg-[#161409]">5,000+ units</option>
              </select>
            </div>

            <div>
              <label className="block text-xs tracking-widest text-gray-500 mb-2">PRODUCT TYPE</label>
              <select className="w-full bg-transparent border-b border-gray-700 pb-2 text-sm text-gray-500 outline-none focus:border-[#c9a96e] transition-colors duration-300 cursor-pointer">
                <option value="" className="bg-[#161409]">Select type</option>
                <option className="bg-[#161409]">Socks</option>
                <option className="bg-[#161409]">Hosiery</option>
                <option className="bg-[#161409]">Custom Knitwear</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="mt-6">
            <label className="block text-xs tracking-widest text-gray-500 mb-2">MESSAGE *</label>
            <textarea
              rows={5}
              placeholder="Tell us about your brand, product requirements, and goals..."
              className="w-full bg-transparent border-b border-gray-700 pb-2 text-sm text-gray-300 placeholder-gray-600 outline-none focus:border-[#c9a96e] transition-colors duration-300 resize-none"
            />
          </div>

          {/* Submit */}
          <button
            className="w-full mt-8 py-4 text-xs tracking-widest font-medium transition-all duration-300 hover:opacity-90"
            style={{ background: "#c9a96e", color: "#111008", letterSpacing: "0.2em" }}
          >
            SUBMIT INQUIRY
          </button>
        </div>

      </div>
    </div>
  );
};

export default ContactUsForm;
