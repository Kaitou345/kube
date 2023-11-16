"use client";
import AppStoreButton from "@/Components/AppStore";
import GooglePlayButton from "@/Components/GooglePlay";
import Image from "next/image";
import React from "react";

const Download = () => {
  const APKUrl =
    "https://play.google.com/store/apps/details?id=host.exp.exponent";
  const iOSUrl = "https://apps.apple.com/us/app/expo-go/id982107779";

  return (
    <div className="bg-[#060343] p-10 flex justify-center items-center">
      <div className="flex justify-between items-center max-w-[900px] flex-1 gap-10">
        <div>
          <Image src={"/download.png"} width={600} height={600} />
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-bold">
            Download the App<span className="text-red-500">.</span>
          </h1>
          <p>Get started with next-level banking with the Bank app.</p>
          <div className="flex gap-5">
            <AppStoreButton />
            <GooglePlayButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
