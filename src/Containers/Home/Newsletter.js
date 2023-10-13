import Link from "next/link";
import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-[#00000099] backdrop-blur-md">
      <div className="px-28 py-20 flex flex-col items-center gap-14 ">
        <div className="max-w-[1360px] w-full px-24 py-20 rounded-[30px] bg-[#5A33F8] flex flex-col gap-20 items-center justify-between">
          <h1 className="text-7xl font-bold ">Newsletter Signup</h1>
          <p className="text-5xl text-center font-light leading-[1.2]">
            Subscribe to our newsletter below and never miss the latest product
            or an exclusive offer.
          </p>
          <div>
            <form className="flex items-center justify-center" action="">
              <input
                placeholder="Enter your email"
                type="email"
                name=""
                id=""
                className="h-14 box-border px-5 focus:outline-none text-black text-lg"
              />
              <button className="h-14 px-5 box-border text-xl font-semibold bg-black">
                Subscribe
              </button>
            </form>
            {/* <Link href="/">Partner With Kube</Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
