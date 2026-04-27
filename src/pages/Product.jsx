import PageHero from "../components/shared/PageHero";
import Products from "../components/ProductCard/ProductCard";
import Footer from "../content/Footer";
import aboutBg from "../assets/about.jpeg";
import Material from "../components/about/Material";

function AboutPage() {
  return (
    <>
      <PageHero
        label="B2B Collections"
        title="Product"
        highlight="Categories"
        desc="Four premium product lines designed for wholesale, private label, and custom manufacturing partnerships."
        img={aboutBg}
      />
      <Products/>
      <Material/>
      <Footer/> 
      
  
    </>
  );
}

export default AboutPage;
