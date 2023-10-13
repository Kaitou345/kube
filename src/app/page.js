import Copyright from "@/Components/Copyright";
import Navbar from "@/Components/Navbar";
import BuiltFor from "@/Containers/Home/BuiltFor";
import Description from "@/Containers/Home/Description";
import Hero from "@/Containers/Home/Hero";
import HowItWorks from "@/Containers/Home/HowItWorks";
import InfoCards from "@/Containers/Home/InfoCards";
import LaunchAndScale from "@/Containers/Home/LaunchAndScale";
import LetsBuild from "@/Containers/Home/LetsBuild";
import Newsletter from "@/Containers/Home/Newsletter";
import OurPartners from "@/Containers/Home/OurPartners";
import ServicesSlider from "@/Containers/Home/ServicesSlider";
import WhatCanYouBuild from "@/Containers/Home/WhatCanYouBuild";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <LetsBuild />
      <BuiltFor />
      <WhatCanYouBuild />
      <Description />
      <HowItWorks />
      <InfoCards />
      <ServicesSlider />
      <OurPartners />
      <LaunchAndScale />
      <Newsletter />
      <Copyright />
    </main>
  );
}
