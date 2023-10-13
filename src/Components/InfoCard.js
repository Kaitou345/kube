import Link from "next/link";
import React from "react";

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
    <div
      style={{ backgroundColor: bgColor }}
      className="max-w-[1360px] w-full px-32 py-24 rounded-[20px] flex flex-col gap-14 items-center justify-between"
    >
      <h1 className="text-4xl font-normal uppercase">
        <span
          className={`text-transparent bg-clip-text bg-gradient-to-r ${current_grad}`}
        >
          {title}
        </span>
      </h1>
      <p className="text-5xl font-semibold text-center leading-[1.2]">
        {subtitle_first} <br /> {subtitle_second}
      </p>
      <p className="text-4xl text-center font-light leading-[1.2]">{desc}</p>
    </div>
  );
};

export default InfoCard;
