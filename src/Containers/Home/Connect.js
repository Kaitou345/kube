import Image from "next/image";
import React from "react";

const Connect = () => {
  return (
    <div id="score" className="bg-black p-32 z-50">
      <div className="max-w-[1100px] mx-auto  px-20 flex flex-col gap-8 justify-center items-center">
        <h2 className="uppercase text-gray-400">Kube Money IS A MARKETPLACE</h2>
        <h1 className="text-4xl font-semibold">
          We Connect&nbsp;
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9747FF] to-[#F44848]">
            Borrowers & Lenders
          </span>
        </h1>
        <div className="flex gap-5 justify-between items-center">
          <div className="w-[300px] ">
            <div className="w-[300px] h-[100px] relative mx-auto">
              <Image
                src={"/connect_smb.png"}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="rounded-md border-2 border-solid border-[#ffffff11] flex flex-col justify-center items-center w-full h-[250px] bg-gradient-to-r from-[#12121B] to-[#0C0C10]">
              <h2 className="text-md font-semibold mb-2">
                SMB Business Finance
              </h2>
              <p className="text-xs text-gray-500">
                Empowering your SMB business
              </p>
            </div>
          </div>
          <div className="w-[300px] ">
            <div className="w-[300px] h-[100px] relative mx-auto">
              <Image
                src={"/connect_business.png"}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="rounded-md border-2 border-solid border-[#ffffff11] flex flex-col justify-center items-center w-full h-[250px] bg-gradient-to-r from-[#12121B] to-[#0C0C10]">
              <h2 className="text-md font-semibold mb-2">
                Business Credit Card{" "}
              </h2>
              <p className="text-xs text-gray-500">
                Earn benefits through business credit cards{" "}
              </p>
            </div>
          </div>
          <div className="w-[300px] ">
            <div className="w-[300px] h-[100px] relative mx-auto">
              <Image
                src={"/connect_consumer.png"}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="rounded-md border-2 border-solid border-[#ffffff11] flex flex-col justify-center items-center w-full h-[250px] bg-gradient-to-r from-[#12121B] to-[#0C0C10]">
              <h2 className="text-md font-semibold mb-2">
                Consumer Credit Card{" "}
              </h2>
              <p className="text-xs text-gray-500">
                Get the credit you deserve{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
