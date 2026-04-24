import Navbar from "../content/Navbar";
import Hero from "../components/landing/Hero";
import About from "../components/landing/About";
import Services from "../components/landing/Services";
import Footer from "../content/Footer";
import Manufacturing from "../components/Landing/Manufacturing";
import CustomManufacturing from "../components/Landing/CustomManufacturing";
import WhyUs from "../components/Landing/WhyUs";

function LandingPage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Manufacturing/>
      <CustomManufacturing/>
      <WhyUs/>
      <Footer />
    </>
  );
}

export default LandingPage;