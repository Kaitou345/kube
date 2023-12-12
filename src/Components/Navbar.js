"use client";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";
import { Linden_Hill } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  return (
    <nav className="bg-[#00000077] sticky top-0 z-50 flex items-center justify-center  py-6 px-32 relative">
      <div className=" w-full max-w-[1360px] flex items-center justify-between ">
        <Link href={"/"}>
          <Image src="/logo.png" width={120} height={120} />
        </Link>

        <div>
          <Link className="text-md px-10 py-3" href="/about">
            About
          </Link>
          <Link className="text-md px-10 py-3" href="/#build_card">
            Solutions
          </Link>
          {/* <a
            className="text-md px-10 py-3 cursor-pointer"
            onClick={() => {
              gsap.registerPlugin(ScrollToPlugin);
              gsap.to(window, { duration: 1, scrollTo: "#score" });
            }}
          >
            Solutions
          </a> */}
          <Link className="text-md px-10 py-3" href="/#score">
            Kube Score
          </Link>
          <Link
            href={"/#partnership"}
            className="text-md px-10 py-3 relative group cursor-pointer "
          >
            Partnership
            <Partner />
          </Link>
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
  const router = useRouter();
  return (
    <div className="absolute delay-700 transition-all hidden group-hover:flex top-[45px] -left-[650px] bg-[#000000] w-[1000px] h-[200px] justify-between items-center  gap-5 p-10 ">
      <div className="">
        <h2 className="uppercase font-semibold">
          Providing innovative <br />
          and top-notch solutions and services to the financial services
          industry{" "}
        </h2>
      </div>
      <div className="">
        <ol className="flex flex-col ">
          <li className="uppercase text-sm  transition">
            <span className="text-4xl relative -top-1 mr-2">.</span>{" "}
            <span
              onClick={() => {
                router.push("/", { query: { service: "b2b" } });
              }}
              className="cursor-pointer hover:underline"
            >
              {" "}
              Banks & Lenders
            </span>
          </li>
          <li className="uppercase text-sm  transition">
            <span className="text-4xl relative -top-1 mr-2">.</span>{" "}
            <span
              onClick={() => {}}
              className="cursor-pointer hover:underline "
            >
              {" "}
              Digital Platforms
            </span>
          </li>
          <li className="uppercase text-sm transition">
            <span className="text-4xl relative -top-1 mr-2">.</span>{" "}
            <span onClick={() => {}} className="cursor-pointer hover:underline">
              Fintechs
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Navbar;
