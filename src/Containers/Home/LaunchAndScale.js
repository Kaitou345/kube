import Link from "next/link";
import React from "react";

const LaunchAndScale = () => {
  return (
    <div className="bg-[#00000099] backdrop-blur-md">
      <div className="px-28 py-20 flex flex-col items-center gap-14 ">
        <div className="max-w-[1360px] w-full px-24 py-20 rounded-[30px] bg-[#3381F8] flex flex-col gap-20 items-center justify-between">
          <h1 className="text-7xl font-bold ">Launch and scale faster</h1>
          <p className="text-5xl text-center font-light leading-[1.2]">
            Discover how Kube can assist in creating, integrating, or improving
            your credit products, enabling you to gain more customers, boost
            revenue, and accelerate growth.
          </p>
          <div>
            <Link
              href="/"
              className="text-xl text-black font-semibold bg-white  px-10 py-3"
            >
              Partner With Kube
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchAndScale;
