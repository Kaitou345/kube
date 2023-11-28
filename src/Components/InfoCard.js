import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const purple_gradient = "from-[#9747FF] to-[#F44848]";
const blue_gradient = "from-[#00AED4] to-[#85F8C1]";
const green_gradient = "from-[#37D400] to-[#85F8F8]";

const InfoCard = ({
  bgColor,
  title,
  gradient,
  desc,
  subtitle_first,
  subtitle_second,
}) => {
  let current_grad;
  switch (gradient) {
    case "p":
      current_grad = purple_gradient;
      break;
    case "b":
      current_grad = blue_gradient;
      break;
    case "g":
      current_grad = green_gradient;
      break;
    default:
      break;
  }
  return (
    <div className="bg-white rounded-[15px] text-black  w-[400px] flex flex-col gap-3 p-6 relative justify-between">
      <div className="absolute -z-10 left-2 top-2 rounded-[15px] w-full h-full bg-purple-700"></div>
      <h2>{title}</h2>
      <div>
        <h1 className="text-2xl font-bold">{subtitle_first}</h1>
        <h1 className="text-2xl font-bold">{subtitle_second}</h1>
      </div>
      <p>{desc}</p>

      <Link
        className="font-bold text-purple-500 flex items-center justify-left gap-5"
        href={"#"}
      >
        Learn More <FaArrowRight size={20} />
      </Link>
    </div>
  );
};

export default InfoCard;
