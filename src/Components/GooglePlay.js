import Image from "next/image";
import React from "react";

const GooglePlayButton = () => {
  return (
    <div className="cursor-pointer hover:border-yellow-500 flex justify-between items-center w-[200px] px-5 py-2 border-solid border-white border-2 rounded-lg">
      <div>
        <Image src={"/google.png"} width={30} height={30} />
      </div>
      <div>
        <p className="text-gray-400 text-sm">Get it on</p>
        <h1 className="text-lg">Google Play</h1>
      </div>
    </div>
  );
};

export default GooglePlayButton;
