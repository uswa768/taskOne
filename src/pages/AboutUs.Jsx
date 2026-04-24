import PageHero from "../components/shared/PageHero";
import AboutSection from "../components/landing/About";
import CoreValues from "../components/about/CoreValues";
import Journey from "../components/about/Journey";
import Footer from "../content/Footer";
import aboutBg from "../assets/about.jpeg";

function AboutPage() {
  return (
    <>
      <PageHero
        label="Our Story"
        title="About"
        highlight="ValueTex"
        desc="For over three decades, we've been weaving excellence into every fiber — delivering premium socks to the world's most discerning brands."
        img={aboutBg}
      />
      <AboutSection />
      <CoreValues />
      <Journey />
      <Footer/>
    </>
  );
}

export default AboutPage;


