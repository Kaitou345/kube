import Link from "next/link";
import React from "react";

const LetsBuild = () => {
  return (
    <div className="bg-[#00000099] backdrop-blur-md">
      <div className="px-28 py-20 gap-14 flex flex-col items-center">
        <div className="max-w-[1360px] w-full px-32 py-32 rounded-[30px] bg-[#060343] flex flex-col gap-14 items-center justify-between">
          <h1 className="text-7xl font-bold ">
            Let&apos;s&nbsp;
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9747FF] to-[#F44848]">
              Build
            </span>
          </h1>
          <p className="text-5xl text-center font-light leading-[1.2]">
            Supercharge your apps with open banking data to scale your business.
            Kube provides the tools to build the next generation of financial
            products.
          </p>
          <div>
            <Link
              href="/"
              className="text-xl font-light bg-[#6460ab] px-10 py-3"
            >
              Partner With Kube
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetsBuild;
