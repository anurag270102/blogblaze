import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Contact from "../../Components/Contact/Contact";

const ContactUs=()=>{
    return (
        <>
            <Navbar></Navbar>
            <div className="relative z-10">
            <Contact></Contact>
            </div>
            <Footer></Footer>
        </>
    )
}
export default ContactUs;