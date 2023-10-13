import Link from "next/link";
import React from "react";
import Image from "next/image";

const Description = () => {
  return (
    <div className="bg-[#00000055] flex flex-col items-center justify-center px-32 py-32">
      <div className="max-w-[1360px] w-full flex items-start justify-between">
        <div className="flex flex-col gap-32 flex-1">
          <div className="flex flex-col gap-10">
            <h1 className="text-6xl leading-[1.2]">
              The trail of insights and delving into digital footprints
            </h1>
            <p className="text-3xl leading-[1.2] font-light">
              Digital footprints are data-driven representations of a consumer’s
              potential or ability to take a variety of actions, such as
              creditworthiness, defaulting on payments, repaying a loan, or
              turning a lead into a customer. Every digital interaction leaves
              behind a data trail that tells a story about the consumer’s
              habits, preferences, and behaviors. 
            </p>
            <div className="mt-5">
              <Link href="/" className="text-xl bg-white text-black px-10 py-3">
                Learn More
              </Link>{" "}
            </div>
          </div>
          <div>
            <Image src={"/code.png"} height={500} width={500} />
          </div>
        </div>
        <div className="flex-1">
          <div className="px-28 flex flex-col gap-20 justify-between">
            <h1 className="text-6xl">Demographic Profiling</h1>
            <p className="text-3xl leading-[1.2] font-light">
              Build customer credit profiles and comprehensive customer
              background details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
