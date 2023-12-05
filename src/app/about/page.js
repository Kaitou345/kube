import Navbar from "@/Components/Navbar";
import AboutHero from "@/Containers/About/AboutHero";
import OurFounders from "@/Containers/About/OurFounders";
import OurMission from "@/Containers/About/OurMission";

const index = () => {
  return (
    <div className="bg-[#215a87]">
      <Navbar />
      <AboutHero />
      <OurMission />
      <OurFounders />
    </div>
  );
};

export default index;
