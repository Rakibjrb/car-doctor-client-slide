import About from "../../../Components/About/About";
import Banner from "../../../Components/Banner/Banner";
import ChooseUs from "../../../Components/ChooseUs/ChooseUs";
import PropularProducts from "../../../Components/PopularProducts/PropularProducts";
import Services from "../../../Components/Services/Services";
import SiteInfo from "../../../Components/SiteInfo/SiteInfo";
import Team from "../../../Components/Team/Team";
import Testimonial from "../../../Components/Testimonial/Testimonial";
import Footer from "../../Footer/Footer";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Services />
      <SiteInfo />
      <PropularProducts />
      <Team />
      <ChooseUs />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;
