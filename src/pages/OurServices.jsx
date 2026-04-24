import PageHero from "../components/shared/PageHero";
import Footer from "../content/Footer";
import aboutBg from "../assets/about.jpeg";
import Services from "../components/Landing/Services"
import CoreValues from "../components/about/CoreValues";


function OurServices() {
    return (
        <>
            <PageHero
                label="OEM & Private Label"
                title="Our "
                highlight="Services"
                desc="End-to-end manufacturing solutions — from concept to container. We become an extension of your brand."
                img={aboutBg}
            />
           <Services/>
           <CoreValues/>
           <Footer />


        </>
    );
}

export default OurServices