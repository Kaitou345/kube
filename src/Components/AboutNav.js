"use client";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";
import { Linden_Hill } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutNavbar = () => {
  return (
    <nav className="bg-[#00000077] sticky top-0 z-50 flex items-center justify-center  py-6 px-32 relative">
      <div className=" w-full max-w-[1360px] flex items-center justify-between ">
        <Link href={"/"}>
          <Image src="/logo.png" width={120} height={120} />
        </Link>

        <div>
          <Link
            className="text-md mx-5 bg-[#6666FF] px-8 font-light rounded-md py-3"
            href="#partner"
          >
            Partner with us
          </Link>
        </div>
      </div>
    </nav>
  );
};

const Partner = () => {
  return (
    <div className="absolute delay-700 transition-all hidden group-hover:flex top-[45px] -left-[650px] bg-[#000000] w-[1000px] h-[200px] justify-between items-center  gap-5 p-10 ">
      <div className="">
        <h2 className=" font-semibold">
          Providing Innovative <br />
          and Top-Notch Solutions and Services to the Financial Services
          Industry{" "}
        </h2>
      </div>
      <div className="">
        <ol className="flex flex-col ">
          <li className="uppercase text-sm">
            <span className="text-4xl relative -top-1 mr-2">.</span> Banks &
            Lenders
          </li>
          <li className="uppercase text-sm">
            <span className="text-4xl relative -top-1 mr-2">.</span> Digital
            Platforms
          </li>
          <li className="uppercase text-sm">
            <span className="text-4xl relative -top-1 mr-2">.</span> Fintechs
          </li>
        </ol>
      </div>
    </div>
  );
};

export default AboutNavbar;
