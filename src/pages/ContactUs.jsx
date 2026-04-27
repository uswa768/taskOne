import Navbar from "../content/Navbar";
import PageHero from "../components/shared/PageHero";
import aboutBg from "../assets/about.jpeg"
import ContactUsForm from "../components/contactus/ContactUsForm";
import Footer from "../content/Footer";

function ContactUs() {
  return (
      <>
            <PageHero
                label="Get in Touch"
                title="Wholesale "
                highlight="Inquiry  "
                desc="Ready to partner with ValueTex? Submit your inquiry and our business development team will respond within 24 hours."
                img={aboutBg}
            />
           <ContactUsForm/>
            <Footer />


        </>
  );
}

export default ContactUs;
