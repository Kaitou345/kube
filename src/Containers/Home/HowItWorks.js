"use client";

import Image from "next/image";
import React, { useState } from "react";

const HowItWorks = () => {
  const [currentTab, setCurrentTab] = useState("b2c");
  return (
    <div
      id="solutions"
      className="bg-[rgba(0,0,0,0.6)] backdrop-blur-md transition-all"
    >
      <div className="px-28 pt-20 pb-10 flex flex-col items-center">
        <div className="px-14 py-16 max-w-[1360px] w-full rounded-[15px] bg-[#2a2848] flex flex-col gap-10 items-start justify-between">
          <div className="flex flex-col gap-5">
            <h1 className="text-4xl font-semibold uppercase">
              How it{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#28F0FD] to-[#A2F994]">
                works?
              </span>
            </h1>
          </div>
          <div className="flex gap-5 justify-between items-center text-2xl">
            <button
              className={`${
                currentTab === "b2c"
                  ? "text-[#FF47D7] py-1 border-b-4 border-[#FF47D7]"
                  : ""
              }`}
              onClick={() => setCurrentTab("b2c")}
            >
              For SMBs
            </button>
            <button
              className={`${
                currentTab === "b2b"
                  ? "text-[#FF47D7] py-1 border-b-4 border-[#FF47D7]"
                  : ""
              }`}
              onClick={() => setCurrentTab("b2b")}
            >
              For Banks and Fintech{" "}
            </button>
            <button
              className={`${
                currentTab === "saas"
                  ? "text-[#FF47D7] py-1 border-b-4 border-[#FF47D7]"
                  : ""
              }`}
              onClick={() => setCurrentTab("saas")}
            >
              For SaaS
            </button>
          </div>
          {currentTab === "b2b" ? (
            <B2B />
          ) : currentTab === "b2c" ? (
            <B2C />
          ) : (
            <Saas />
          )}
        </div>
      </div>
    </div>
  );
};

const B2B = () => {
  const [currentImg, setCurrentImg] = useState("/code.png");
  return (
    <div className="flex gap-3 justify-between w-full">
      <div className="flex flex-col gap-3">
        <h2 className="text-3xl mb-5">
          Seamless Integration in 3 Simple Steps
        </h2>
        <button
          className={`${
            currentImg === "/code.png" ? "bg-[#37355e]" : ""
          } flex flex-col gap-4 px-10 py-5 rounded-lg`}
          onClick={() => setCurrentImg("/code.png")}
        >
          <h2 className="text-2xl font-semibold">Get the Widget</h2>
          <h3 className="text-lg text-left">
            Deploy a lightweight SDK within minutes.
          </h3>
        </button>
        <button
          className={`${
            currentImg === "/integrate.png" ? "bg-[#37355e]" : ""
          } flex flex-col gap-4 px-10 py-5 rounded-lg`}
          onClick={() => setCurrentImg("/integrate.png")}
        >
          <h2 className="text-2xl font-semibold">Integrate into Your App</h2>
          <h3 className="text-lg text-left">
            Initialize the Kube SDK within your application.{" "}
          </h3>
        </button>{" "}
        <button
          className={`${
            currentImg === "/build_scoring.png" ? "bg-[#37355e]" : ""
          } flex flex-col gap-4 px-10 py-5 rounded-lg`}
          onClick={() => setCurrentImg("/build_scoring.png")}
        >
          <h2 className="text-2xl font-semibold">Build Scoring</h2>
          <h3 className="text-lg text-left">
            Instant eligibility checks and system-generated credit scores{" "}
          </h3>
        </button>
      </div>
      <div>
        <Image src={currentImg} height={500} width={500} objectFit="contain" />
      </div>
    </div>
  );
};

const B2C = () => {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex flex-col justify-between items-start gap-10">
        <div className="flex justify-between items-center gap-5 text-xl">
          <div>
            <Image src="/bullet.png" width={30} height={30} />
          </div>
          <p>Log in to the app with your phone number</p>
        </div>
        <div className="flex justify-between items-center gap-5 text-xl">
          <div>
            <Image src="/bullet.png" width={30} height={30} />
          </div>
          <p>Answer a few questions to generate a Kube score</p>
        </div>
        <div className="flex justify-between items-center gap-5 text-xl">
          <div>
            <Image src="/bullet.png" width={30} height={30} />
          </div>
          <p>View affordable credit options to suit your needs</p>
        </div>
        <div className="flex justify-between items-center gap-5 text-xl">
          <div>
            <Image src="/bullet.png" width={30} height={30} />
          </div>
          <p>Get a decision and receive your funds</p>
        </div>
      </div>
      <div>
        <Image src={"/b2c.png"} width={500} height={500} objectFit="contain" />
      </div>
    </div>
  );
};

const Saas = () => {
  const [currentImg, setCurrentImg] = useState("/saas_banks.png");
  return (
    <div className="flex gap-3 justify-between w-full">
      <div className="flex flex-col gap-3">
        <button
          className={`${
            currentImg === "/saas_banks.png" ? "bg-[#37355e]" : ""
          } flex flex-col gap-4 px-10 py-5 rounded-lg`}
          onClick={() => setCurrentImg("/saas_banks.png")}
        >
          <h2 className="text-2xl font-semibold">Embedded lending API</h2>
          <h3 className="text-lg text-left">
            A cutting edge open banking and payments platform in the cloud{" "}
          </h3>
        </button>
        <button
          className={`${
            currentImg === "/saas_digital_platforms.png" ? "bg-[#37355e]" : ""
          } flex flex-col gap-4 px-10 py-5 rounded-lg`}
          onClick={() => setCurrentImg("/saas_digital_platforms.png")}
        >
          <h2 className="text-2xl font-semibold">Embedded scoring API</h2>
          <h3 className="text-lg text-left">
            Get everything you need to become the bank your customers love.{" "}
          </h3>
        </button>{" "}
        <button
          className={`${
            currentImg === "/saas_embedded.png" ? "bg-[#37355e]" : ""
          } flex flex-col gap-4 px-10 py-5 rounded-lg`}
          onClick={() => setCurrentImg("/saas_embedded.png")}
        >
          <h2 className="text-2xl font-semibold">
            Embedded Credit Operating System{" "}
          </h2>
          <h3 className="text-lg text-left">
            Let your users have access to SMB Finance and BNPL cards{" "}
          </h3>
        </button>
      </div>
      <div>
        <Image src={currentImg} height={500} width={500} objectFit="contain" />
      </div>
    </div>
  );
};
export default HowItWorks;
