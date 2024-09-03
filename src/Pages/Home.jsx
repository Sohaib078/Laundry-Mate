import AppPreview from "../Components/AppPreview";
import Hero from "../Components/Hero";
import HowItWorks from "../Components/HowItWorks";
import MainFooter from "../Components/MainFooter";
import Navbar from "../Components/Navbar";
import OurServices from "../Components/OurServices";
import VIPTreatment from "../Components/VIPTreatment";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AppPreview />
      <OurServices />
      <VIPTreatment />
      <HowItWorks />
      <MainFooter />
    </div>
  );
};

export default Home;
