"use client";
import React, { useEffect } from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const BuiltFor = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({ ease: "none", duration: 2 });
    const tl = gsap.timeline();
    tl.from("#text1", { yPercent: 0, opacity: 1 })

      .from("#text2", { yPercent: 200, opacity: 0 })
      .from("#text3", { yPercent: 200, opacity: 0 })
      .to("#text1", {
        yPercent: 0,
      })
      .to(
        "#text2",
        {
          yPercent: 0,
        },
        "<"
      )
      .to(
        "#text3",
        {
          yPercent: 0,
        },
        "<"
      );
    ScrollTrigger.create({
      animation: tl,
      trigger: "#built_for",
      start: "top top",
      end: "+=2000",
      scrub: true,
      pin: true,
      anticipatePin: 1,
    });
  }, []);
  return (
    <div
      id="built_for"
      className="bg-[#00000099] backdrop-blur-md flex flex-col items-center justify-center px-32 py-52 h-[100vh]"
    >
      <div className="max-w-[900px] flex flex-col gap-20 w-full">
        <div className="flex justify-start items-start gap-10">
          <div className="flex items-start justify-between ">
            <div className="flex justify-between gap-5">
              <h1 className="bg-white rounded-2xl text-black px-5 py-4 text-4xl font-semibold">
                Built
              </h1>

              <h1 className="bg-white rounded-2xl  text-black px-5 py-4 text-4xl font-semibold">
                For
              </h1>
            </div>
          </div>
          <BsArrowRightCircle size={60} />
          <div className="relative">
            <div className="opacity-0 bg-[#E9E8FF] text-[#9747FF] px-5 py-4 text-4xl font-semibold">
              <h1>High Conversion Rates</h1>
            </div>
            <div
              id="text1"
              className="absolute top-0 bg-[#E8FBFF] rounded-2xl text-[#00AED4] px-5 py-4 text-4xl font-semibold"
            >
              <h1>Reduced Risk</h1>
            </div>
            <div
              id="text2"
              className="absolute top-0 bg-[#E9E8FF]   rounded-2xl text-[#9747FF] px-5 py-4 text-4xl font-semibold"
            >
              <h1>Faster Decisions</h1>
            </div>
            <div
              id="text3"
              className="absolute top-0 bg-[#E8F1FF]  rounded-2xl text-[#4791FF] px-5 py-4 text-4xl font-semibold"
            >
              <h1>High Conversion Rates</h1>
            </div>
          </div>
        </div>
        <div>
          <p className="w-3/5 text-4xl">
            Delivering real-time affordability scores and automating customer
            onboarding via digital footprints.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BuiltFor;
