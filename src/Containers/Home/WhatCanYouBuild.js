import BuildCards from "@/Components/BuildCards";
import React from "react";

const WhatCanYouBuild = () => {
  return (
    <div className="bg-[#00000099] backdrop-blur-md flex flex-col items-center px-28">
      <div className="py-20 flex flex-col gap-16 max-w-[1360px] w-full ">
        <div className="flex flex-col gap-5">
          <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#CDA6FF] to-[#F44848]">
            What You Can Build?
          </h2>
          <h1 className="text-6xl">Powering use cace accross industries</h1>
        </div>
        <BuildCards
          subheading={"Open Banking Risk Engine"}
          heading={"Faster access to capital, seasoned lenders"}
          desc={
            "Connect qualified small to medium-sized businesses with specialized lenders who are well-suited to cater to and meet the specific demands of their industries."
          }
          gradient={"b"}
          img_src="/rocket.png"
        />
        <BuildCards
          subheading={"Embedded Credit Operating System"}
          heading={"We help you set up the Kube API on your platform."}
          desc={
            "Your sellers apply for a loan directly on your platform. Provide sellers with the right financing at the right time. The loan is approved by our lending and the seller receives their money."
          }
          gradient={"p"}
          img_src="/api.png"
        />
        <BuildCards
          subheading={"Digital Banking Operating System"}
          heading={"Your command center for embedded credit"}
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
