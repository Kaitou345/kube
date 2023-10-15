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
    tl.from("#text1", { xPercent: 200, opacity: 0 })

      .from("#text2", { xPercent: 200, opacity: 0 })
      .from("#text3", { xPercent: 200, opacity: 0 })
      .to("#text1", {
        yPercent: -100,
      })
      .to(
        "#text2",
        {
          yPercent: -100,
        },
        "<"
      )
      .to(
        "#text3",
        {
          yPercent: -100,
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
      <div className="max-w-[1360px] flex flex-col gap-20 w-full">
        <div className="flex justify-between items-start">
          <div className="flex items-center justify-between w-2/5">
            <h1 className="bg-white text-black px-10 py-8 text-6xl font-semibold">
              Built For
            </h1>
            <BsArrowRightCircle size={100} />
          </div>
          <div className="relative">
            <div className="opacity-0 bg-[#E9E8FF] text-[#9747FF] px-10 py-8 text-6xl font-semibold">
              <h1>Boost conversion rates</h1>
            </div>
            <div
              id="text1"
              className="absolute top-0 bg-[#E8FBFF]  text-[#00AED4] px-10 py-8 text-6xl font-semibold"
            >
              <h1>Reduce risk</h1>
            </div>
            <div
              id="text2"
              className="absolute top-0 bg-[#E9E8FF]  text-[#9747FF] px-10 py-8 text-6xl font-semibold"
            >
              <h1>Faster decisions</h1>
            </div>
            <div
              id="text3"
              className="absolute top-0 bg-[#E8F1FF]  text-[#4791FF] px-10 py-8 text-6xl font-semibold"
            >
              <h1>Boost conversion rates</h1>
            </div>
          </div>
        </div>
        <div>
          <p className="w-3/5 text-5xl">
            Delivering real-time credit scores and automating customer
            onboarding via digital footprints.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BuiltFor;
