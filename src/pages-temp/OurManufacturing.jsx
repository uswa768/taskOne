import PageHero from "../components/shared/PageHero";
import Footer from "../content/Footer";
import aboutBg from "../assets/about.jpeg";
import Material from "../components/about/Material";
import Manufacturing from "../components/Landing/Manufacturing";
import OurFacilities from "../components/WhyUs/OurFacilities";
import CoreValues from "../components/about/CoreValues";

function OurManufacturing() {
    return (
        <>
            <PageHero
                label=" Industrial Excellence"
                title="Manufacturing "
                highlight="Excellence"
                desc="Three state-of-the-art facilities across Europe and Turkey, producing over 12 million pairs annually with uncompromising quality."
                img={aboutBg}
            />
           <Manufacturing/> 
            <OurFacilities/>
            <CoreValues/>
            <Footer />


        </>
    );
}

export default OurManufacturing;