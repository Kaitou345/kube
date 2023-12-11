import { Linden_Hill } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#00000077] sticky top-0 z-50 flex items-center justify-center  py-6 px-32 relative">
      <div className=" w-full max-w-[1360px] flex items-center justify-between ">
        <Link href={"/"}>
          <Image src="/logo.png" width={120} height={120} />
        </Link>

        <div>
          <Link className="text-md px-10 py-3" href="/#score">
            Kube Score
          </Link>
          <Link className="text-md px-10 py-3" href="/#solutions">
            Solutions
          </Link>
          <Link className="text-md px-10 py-3" href="/about">
            About
          </Link>
          <span className="text-md px-10 py-3 relative group cursor-pointer">
            Partner
            <Partner />
          </span>
          <Link
            className="text-md mx-5 bg-[#6666FF] px-8 font-light rounded-md py-3"
            href="/"
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
    <div className="absolute hidden group-hover:flex top-[70px] -left-[650px] bg-[#000000] w-[1000px] h-[200px] justify-between items-center  gap-5 p-10">
      <div className="">
        <h2 className="uppercase font-semibold">
          Providing innovative <br />
          and top-notch solutions and services to the financial services
          industry{" "}
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

export default Navbar;
