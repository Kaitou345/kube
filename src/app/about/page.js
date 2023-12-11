import Copyright from "@/Components/Copyright";
import Navbar from "@/Components/Navbar";
import AboutHero from "@/Containers/About/AboutHero";
import OurFounders from "@/Containers/About/OurFounders";
import OurMission from "@/Containers/About/OurMission";
import OurValues from "@/Containers/About/OurValues";

const index = () => {
  return (
    <div className="bg-[url('/about_bg.jpg')] bg-no-repeat bg-contain">
      <Navbar />
      <AboutHero />
      <OurMission />
      <OurFounders />
      <OurValues />
    </div>
  );
};

export default index;
