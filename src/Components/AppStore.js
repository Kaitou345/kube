import Image from "next/image";
import React from "react";

const AppStoreButton = () => {
  return (
    <a className="cursor-pointer hover:border-[#ab37fa] flex justify-between items-center w-[200px] px-5 py-2 border-solid border-white border-2 rounded-lg">
      <div>
        <Image src={"/apple.png"} width={30} height={30} />
      </div>
      <div>
        <p className=" text-sm text-red-300 opacity-60">Coming soon on</p>
        <h1 className="text-lg">App Store</h1>
      </div>
    </a>
  );
};

export default AppStoreButton;
