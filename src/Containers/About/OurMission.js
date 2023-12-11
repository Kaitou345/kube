import Image from "next/image";
import React from "react";

const OurMission = () => {
  return (
    <div className="bg-gradient-to-br from-[#18171A] to-[#000000] p-14 z-50">
      <div className="max-w-[900px] mx-auto flex flex-col gap-14">
        <div className="flex flex-1 justify-between gap-20">
          <div className="flex flex-col justify-between items-start gap-10">
            <div className="relative h-32 w-32">
              <Image src="/mission.png" layout="fill" objectFit="contain" />{" "}
            </div>
            <h2 className="font-semibold text-4xl uppercase">OUR mission</h2>
            <p className="font-light text-md">
              Empower companies to offer <br />
              exceptional financial services to their <br />
              customers, enabling them to achieve their
              <br /> full potential.
            </p>
          </div>
          <div className="flex flex-col justify-between items-start gap-10">
            <div className="relative h-32 w-32">
              <Image src="/vision.png" layout="fill" objectFit="contain" />{" "}
            </div>
            <h2 className="font-semibold text-4xl uppercase">OUR vision</h2>
            <p className="font-light text-md">
              Revolutionizing finance for limitless possibilities. <br />{" "}
              Empowering businesses, transforming lives <br /> through visionary
              financial solutions.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
