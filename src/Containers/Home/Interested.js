import Image from "next/image";
import Link from "next/link";
import React from "react";

const Interested = () => {
  return (
    <div className="bg-[#00000099] backdrop-blur-md px-28 py-20 pb-5 flex flex-col items-center">
      <div className="bg-gradient-to-br from-[#0A001E] to-[#171123] h-[100px] w-full max-w-[1360px] rounded-t-[20px]"></div>
      <div className="max-w-[1360px] w-full px-72 pb-20 rounded-b-[20px] flex flex-col gap-10 items-center justify-between bg-gradient-to-br from-[#210438] to-[#0C0215] relative">
        <div className="flex flex-col gap-16 justify-between items-center relative -top-[50px]">
          <div className="">
            <Image width={100} height={100} src="/interested.png" />
          </div>
          <h1 className="text-5xl font-semibold  tracking-tight ">
            Interested In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9747FF] to-[#F44848]">
              Kube
            </span>
            ?
          </h1>
          <p className="text-lg">
            Explore our solution, or do you want us to do it for you?
          </p>
          <Link
            className="text-xl mx-5 bg-[#6666FF] px-8 font-light rounded-xl py-3"
            href={"#"}
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Interested;
