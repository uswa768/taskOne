import PageHero from '../components/shared/PageHero';
import aboutBg from "../assets/about.jpeg";
import Services from '../components/landing/Services';
import Footer from '../content/Footer';
import Qualities from '../components/WhyUs/qualities';

function WhyUs() {
    return (
        <>
            <PageHero
                label="The ValueTex Difference"
                title="Why "
                highlight="Choose Us"
                desc="We don't just manufacture socks — we engineer confidence in every thread. Here's why 200+ brands trust ValueTex."
                img={aboutBg}
            />
            <Qualities/>
            <Footer />


        </>
    )
}

export default WhyUs
