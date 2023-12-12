import Image from "next/image";
import React from "react";
import { BsLinkedin } from "react-icons/bs";

const OurFounders = () => {
  return (
    <div className="bg-black p-14 ">
      <div className="max-w-[900px] mx-auto">
        <h1 className="text-center text-4xl font-semibold my-20">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9747FF] to-[#F44848]">
            Our Founders
          </span>
        </h1>

        <div className="flex flex-col gap-40 justify-between items-center">
          <div className="flex  items-start gap-10">
            <div className="overflow-hidden rounded-full flex-shrink-0">
              <Image src={"/gazi.jpeg"} width={220} height={220} />{" "}
            </div>
            <div className="">
              <h2 className="flex text-lg tracking-tight font-semibold  mb-2">
                Gazi Yar Mohammed
                <a
                  target="_blank"
                  rel="norefferer"
                  className="mx-2 text-2xl"
                  href="https://www.linkedin.com/in/gaziyar/"
                >
                  <BsLinkedin />
                </a>{" "}
              </h2>
              <h3 className="text-lg tracking-tight font-semibold  mb-2">
                Co-founder, Kube Money
              </h3>
              <p className=" text-gray-200">
                Gazi Yar is Director (business) of Kube Money. He had a notable
                18-year career in the banking industry. He most recently served
                as EVP and Head of Digital Financial Services at ONE Bank, where
                he led digital wallet and agent banking initiatives. He also
                held the position of Head of Retail Banking at the same bank,
                where he successfully launched and led teams in retail credit,
                retail branches, sales, and card business. He is also co-founder
                of Dana, an embedded lending fintech which is being acquired by
                a large commercial bank of Bangladesh.
              </p>
            </div>
          </div>
          <div className="flex  items-start gap-10">
            <div className="overflow-hidden rounded-full flex-shrink-0 w-[220px] h-[220px]">
              <Image src={"/zia.jpg"} width={220} height={220} />{" "}
            </div>
            <div className="">
              <h2 className=" flex text-lg tracking-tight font-semibold  mb-2">
                Zia Hassan Siddique{" "}
                <a
                  target="_blank"
                  rel="norefferer"
                  className="mx-2 text-2xl"
                  href="https://www.linkedin.com/in/ziahsiddique/"
                >
                  <BsLinkedin />
                </a>{" "}
              </h2>
              <h3 className="text-lg tracking-tight font-semibold  mb-2">
                Co-founder, Kube Money{" "}
              </h3>
              <p className=" text-gray-200">
                Zia Hassan is Director (operation) of Kube Money. He worked at
                Standard Chartered Bank (SCB)  for 9 years and rose up to senior
                manager through working in different capacities including high
                preforming branch manager, retail banking project manager and
                business finance manager. He has deep insights about retail
                products, channels and retail underwriting and later started his
                entrepreneurial journey in the technology domain. He is also
                co-founder of Dana, an embedded lending fintech which is being
                acquired by a large commercial bank of Bangladesh.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFounders;
