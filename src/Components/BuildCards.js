import React from "react";
import Link from "next/link";
import Image from "next/image";

const blue_gradient = "from-[#3499FF] to-[#3499FF]";
const purple_gradient = "from-[#7D73D9] to-[#6454F0]";
const cyan_gradient = "from-[#6399B7] to-[#50ABDE]";

const BuildCards = ({ subheading, heading, desc, gradient, img_src, id }) => {
  let current_grad;
  switch (gradient) {
    case "p":
      current_grad = purple_gradient;
      break;
    case "b":
      current_grad = blue_gradient;
      break;
    case "c":
      current_grad = cyan_gradient;
      break;
    default:
      break;
  }
  return (
    <div
      id={id}
      className={`px-14 py-14 rounded-[30px] bg-gradient-to-r ${current_grad} flex justify-between items-center gap-16`}
    >
      <div className="flex flex-col gap-5 items-start justify-between">
        <h2 className="text-xl font-bold ">{subheading}</h2>
        <h1 className="text-3xl font-bold ">{heading}</h1>
        <p className="text-lg mb-5 text-left font-light leading-[1.4]">
          {desc}
        </p>
      </div>
      <div>
        <Image src={img_src} height={700} width={700} />
      </div>
    </div>
  );
};

export default BuildCards;
