import Copyright from "@/Components/Copyright";
import Image from "next/image";
import React from "react";

const OurValues = () => {
  return (
    <div className="bg-[url('/values_bg.png')] p-14 ">
      <div className="max-w-[900px] mx-auto  my-20">
        <h1 className="text-center text-3xl font-semibold mb-5">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9747FF] to-[#F44848]">
            Our Values
          </span>
        </h1>
        <h2 className="text-sm text-gray-300 text-center">
          Our core beliefs are deeply ingrained in every aspect of our
          operations, from the products we create, to our interactions with each
          other and our customers
        </h2>
      </div>
      <div className="flex justify-center items-start gap-10">
        <Inclusion />
        <Colab />
        <Pragmatism />
      </div>
    </div>
  );
};

const Inclusion = () => {
  return (
    <div className="h-[350px] w-[325px] bg-[#5C4FBB] rounded-tl-[50px] overflow-hidden p-8">
      <div className="flex flex-col justify-center items-center gap-5 ">
        <div>
          <Image src={"/inclusion.png"} width={50} height={50} />{" "}
        </div>
        <h1 className="uppercase font-semibold text-2xl tracking-tighter">
          Inclusion
        </h1>
        <p className="text-center">
          We stand united in our efforts to foster an inclusive and equitable
          organization that values diversity. We are committed to promoting
          equity in all aspects of our operation
        </p>
      </div>
    </div>
  );
};

const Colab = () => {
  return (
    <div className="h-[350px] w-[350px] bg-[#5C4FBB] rounded-t-[50px] overflow-hidden p-8">
      <div className="flex flex-col justify-center items-center gap-5 ">
        <div>
          <Image src={"/colab.png"} width={50} height={50} />{" "}
        </div>
        <h1 className="uppercase font-semibold text-2xl tracking-tighter">
          Collaboration
        </h1>
        <p className="text-center">
          We strive to tackle significant challenges by fostering open
          communication, collaboration, and constructive dialogue among team
          members. Together, we work towards finding innovative solutions
        </p>
      </div>{" "}
    </div>
  );
};

const Pragmatism = () => {
  return (
    <div className="h-[350px] w-[325px] bg-[#5C4FBB] rounded-tr-[50px] overflow-hidden p-8">
      <div className="flex flex-col justify-center items-center gap-5 ">
        <div>
          <Image src={"/pragmatism.png"} width={50} height={50} />{" "}
        </div>
        <h1 className="uppercase font-semibold text-2xl tracking-tighter">
          Pragmatism{" "}
        </h1>
        <p className="text-center">
          We adopt a practical approach in all our endeavors, focusing on
          enhancing usability and sustainability in everything we do.{" "}
        </p>
      </div>{" "}
    </div>
  );
};

export default OurValues;
