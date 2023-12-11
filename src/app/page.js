import BuildCards from "@/Components/BuildCards";
import Copyright from "@/Components/Copyright";
import Navbar from "@/Components/Navbar";
import BuiltFor from "@/Containers/Home/BuiltFor";
import Connect from "@/Containers/Home/Connect";
import Contact from "@/Containers/Home/Contact";
import Description from "@/Containers/Home/Description";
import Download from "@/Containers/Home/Download";
import Hero from "@/Containers/Home/Hero";
import HowItWorks from "@/Containers/Home/HowItWorks";
import InfoCards from "@/Containers/Home/InfoCards";
import Interested from "@/Containers/Home/Interested";
import KubeScore from "@/Containers/Home/KubeScore";
import LaunchAndScale from "@/Containers/Home/LaunchAndScale";
import LetsBuild from "@/Containers/Home/LetsBuild";
import Newsletter from "@/Containers/Home/Newsletter";
import OurPartners from "@/Containers/Home/OurPartners";
import ServicesSlider from "@/Containers/Home/ServicesSlider";
import WhatCanYouBuild from "@/Containers/Home/WhatCanYouBuild";

export default function Home() {
  return (
    <main className=" scroll-smooth">
      <Navbar />
      <Hero />
      {/* <LetsBuild /> */}
      <BuiltFor />
      <WhatCanYouBuild />
      <KubeScore />
      <Connect />
      {/* <Description /> */}
      <HowItWorks />
      <InfoCards />
      {/* <ServicesSlider /> */}
      <OurPartners />
      <Download />
      {/* <LaunchAndScale /> */}
      <Interested />
      <Contact />
      <Copyright />
    </main>
  );
}
