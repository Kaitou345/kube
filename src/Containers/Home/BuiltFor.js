import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";

const BuiltFor = () => {
  return (
    <div className="bg-[#00000055] flex flex-col items-center justify-center px-32 py-52">
      <div className="max-w-[1360px] flex flex-col gap-20 w-full">
        <div className="flex justify-between">
          <div className="flex items-center justify-between w-2/5">
            <h1 className="bg-white text-black px-10 py-8 text-6xl font-semibold">
              Built For
            </h1>
            <BsArrowRightCircle size={100} />
          </div>
          <div className="bg-white text-purple-500 px-10 py-8 text-6xl font-semibold">
            <h1>Faster decisions</h1>
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
