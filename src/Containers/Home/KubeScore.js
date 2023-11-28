import Image from "next/image";
import React from "react";

const KubeScore = () => {
  return (
    <div id="score" className="bg-[#0A001E] p-14 z-50">
      <div className="max-w-[1100px] mx-auto border-solid border-l-2 border-white px-20 flex flex-col gap-14">
        <h1 className=" text-4xl leading-[1.25]">
          The trail of insights and delving <br /> into digital footprints
        </h1>
        <div className="flex gap-20 bg-[#160D27] p-10">
          <div>
            <Image src="/kubescore.png" width={1500} height={1500} />
          </div>
          <div>
            Digital footprints are data-driven representations of a consumer’s
            potential or ability to take a variety of actions, such as
            creditworthiness, defaulting on payments, repaying a loan, or
            turning a lead into a customer. Every digital interaction leaves
            behind a data trail that tells a story about the consumer’s habits,
            preferences, and behaviors. 
          </div>
        </div>
        <div className="flex flex-1 gap-20">
          <div className="flex flex-col justify-between items-start gap-5">
            <div className="relative h-20 w-20">
              <Image src="/data.png" layout="fill" objectFit="contain" />{" "}
            </div>
            <h2 className="font-semibold text-2xl">Data Categories</h2>
            <p className="font-light text-sm">
              Organize, categorize, and enhance unstructured transaction data to
              produce well-organized, simplified, and precise account records.
            </p>
          </div>
          <div className="flex flex-col justify-between items-start gap-5">
            <div className="relative h-20 w-20">
              <Image src="/insights.png" layout="fill" objectFit="contain" />{" "}
            </div>
            <h2 className="font-semibold text-2xl">Valuable Insights</h2>
            <p className="font-light text-sm">
              Reveal essential insights and characteristics that depict a
              consumer's financial standing, including liquid assets, financial
              commitments, spending tendencies, and more.
            </p>
          </div>
          <div className="flex flex-col justify-between items-start gap-5">
            <div className="relative h-20 w-20">
              <Image src="/income.png" layout="fill" objectFit="contain" />{" "}
            </div>
            <h2 className="font-semibold text-2xl">Income Sources</h2>
            <p className="font-light text-sm">
              Study banking transactions to pinpoint gross and net earnings,
              assess income stability, and evaluate employment-related details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KubeScore;
