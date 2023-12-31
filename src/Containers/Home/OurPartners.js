import Image from "next/image";
import Link from "next/link";
import React from "react";

const OurPartners = () => {
  return (
    <div className="bg-[#00000099] backdrop-blur-md px-28 py-20 flex flex-col items-center">
      <div className=" max-w-[1360px] w-full px-72 py-32 rounded-[20px] flex flex-col gap-16 items-center justify-between bg-[#060343]">
        <h1 className="text-5xl font-normal ">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9747FF] to-[#F44848]">
            Our Partners
          </span>
        </h1>
        <div className="flex items-center justify-around gap-40">
          <div>
            <Image height={300} width={300} src="/dotlines.png" />
          </div>
          <div>
            <Image height={300} width={300} src="/direct.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
