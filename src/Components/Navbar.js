import { Linden_Hill } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#00000077] sticky top-0 z-50 flex items-center justify-center  py-6 px-32">
      <div className=" w-full max-w-[1360px] flex items-center justify-between">
        <div>
          <Image src="/logo.png" width={120} height={120} />
        </div>

        <div>
          <Link className="text-md px-10 py-3" href="#solutions">
            Solutions
          </Link>

          <Link className="text-md px-10 py-3" href="#score">
            Kube Score
          </Link>

          <Link className="text-md px-10 py-3" href="#company">
            Company
          </Link>

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

export default Navbar;
