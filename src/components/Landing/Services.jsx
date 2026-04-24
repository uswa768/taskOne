import CategoryCard from "../ProductCard/CategoryCard";
import luxury from "../../assets/luxury.jpeg";
import sports from "../../assets/sports.jpeg";
import organic from "../../assets/organic.jpeg";
import custom from "../../assets/custom.jpeg";

function Services() {
  return (
    <section className="bg-[#2a2a2a] py-16 px-6 md:px-16 lg:px-24">

      <div className="text-center mb-10">
        <p className="text-[#c8a46b] tracking-[3px] text-xs uppercase mb-3">
          Collections
        </p>
        <h2 className="text-4xl md:text-5xl font-serif text-white">
          Product <span className="text-[#c8a46b]">Categories</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-5xl mx-auto">
        <CategoryCard
          img={luxury}
          title="Luxury Dress Socks"
          desc="Merino wool & silk blends for discerning brands. Superior comfort meets refined aesthetics."
        />
        <CategoryCard
          img={sports}
          title="Performance Sports Socks"
          desc="Engineered moisture-wicking and compression technology for peak athletic performance."
        />
        <CategoryCard
          img={organic}
          title="Organic Cotton Line"
          desc="GOTS-certified organic cotton, sustainably sourced for eco-conscious brands."
        />
        <CategoryCard
          img={custom}
          title="Custom Private Label"
          desc="Full OEM manufacturing with bespoke design, branding, and packaging solutions."
        />
      </div>

    </section>
  );
}

export default Services;