import Image from "next/image";
import React from "react";

const HowItWorks = () => {
  return (
    <div className="bg-[rgba(0,0,0,0.6)] backdrop-blur-md">
      <div className="px-28 pt-20 pb-10 flex flex-col items-center">
        <div className="px-14 py-16 max-w-[1360px] w-full rounded-[15px] bg-[#2a2848] flex flex-col gap-10 items-start justify-between">
          <div className="flex flex-col gap-5">
            <h1 className="text-4xl font-semibold uppercase">
              How it{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#28F0FD] to-[#A2F994]">
                works?
              </span>
            </h1>
            <h2 className="text-2xl">Seamless Integration in 3 Simple Steps</h2>
          </div>

          <div className="flex gap-3 justify-between w-full">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-4 px-10 py-5 bg-[#37355e] rounded-lg">
                <h2 className="text-2xl font-semibold">Get the Widget</h2>
                <h3 className="text-lg">
                  Deploy a lightweight SDK within minutes.
                </h3>
              </div>
              <div className="flex flex-col gap-4 px-10 py-5 rounded-lg">
                <h2 className="text-2xl font-semibold">
                  Integrate into Your App
                </h2>
                <h3 className="text-lg">
                  Initialize the Kube SDK within your application.{" "}
                </h3>
              </div>{" "}
              <div className="flex flex-col gap-4 px-10 py-5  rounded-lg">
                <h2 className="text-2xl font-semibold">Build Scoring</h2>
                <h3 className="text-lg">
                  Instant eligibility checks and system-generated credit scores{" "}
                </h3>
              </div>
            </div>
            <div>
              <Image src="/code.png" height={500} width={500} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
