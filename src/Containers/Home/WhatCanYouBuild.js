"use client";
import BuildCards from "@/Components/BuildCards";
import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const WhatCanYouBuild = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({ ease: "none", duration: 2 });
    const tl = gsap.timeline();
    tl.to("#card1", { scale: 0.9 })
      .to("#card2", { yPercent: -100 }, "<")
      .to("#card3", { yPercent: -100 }, "<")
      .to("#card1", { scale: 0.8 }, "<")
      .to("#card2", { scale: 0.9 }, "<")
      .to("#card3", { yPercent: -200 });
    ScrollTrigger.create({
      animation: tl,
      trigger: "#build_card",
      start: "top top",
      end: "+=4000",
      scrub: true,
      pin: true,

      anticipatePin: 1,
    });
  }, []);

  return (
    <div
      id="build_card"
      className="bg-[#00000099] backdrop-blur-md flex flex-col items-center px-28 h-[120vh]"
    >
      <div className="py-20 flex flex-col gap-16 max-w-[800px] w-full ">
        <BuildCards
          id={"card1"}
          subheading={"Open Banking Risk Engine"}
          heading={"Faster access to capital, seasoned lenders"}
          desc={
            "Connect qualified small to medium-sized businesses with specialized lenders who are well-suited to cater to and meet the specific demands of their industries."
          }
          gradient={"b"}
          img_src="/rocket.png"
        />
        <BuildCards
          id={"card2"}
          subheading={"Embedded Credit Operating System"}
          heading={"Embedded Lending API for Digital Platforms."}
          desc={
            "Your sellers apply for a loan directly on your platform. Provide sellers with the right financing at the right time. The loan is approved by our lending and the seller receives their money."
          }
          gradient={"p"}
          img_src="/api.png"
        />
        <BuildCards
          id={"card3"}
          subheading={"Lending Platform for SMBs"}
          heading={
            "Connect to our 100 plus lending partners and have quick access to finance"
          }
          desc={
            "KUBE offers the tools required for the entire process of creating credit products, from application to decision-making and underwriting, which can be embedded."
          }
          gradient={"c"}
          img_src="/bank.png"
        />
      </div>
    </div>
  );
};

export default WhatCanYouBuild;
