import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="bg-[#121212] py-20">
      <div className="flex flex-col items-center justify-between gap-8">
        <div>
          <Image src="/interested.png" width={100} height={100} />
        </div>
        <div className="flex flex-col items-center justify-between gap-3">
          <h1 className="uppercase text-2xl text-center font-semibold">
            Leverage the power of open banking data to make more informed credit
            decisions.
          </h1>
          <h2 className="text-xl text-center opacity-60">
            You will get a response within 24 hours. We will explain in details
            how we can help you .
          </h2>
        </div>
        <form
          className="flex flex-col gap-5 items-left justify-between "
          action=""
        >
          <div className="flex flex-col">
            <label className="text-gray-300" htmlFor="name">
              Name
            </label>
            <input
              className="w-[400px] h-[50px] focus:outline-none bg-transparent text-white  border-b-2 border-gray-500"
              type="text"
              name="name"
              id="name"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-300" htmlFor="email">
              Email Address
            </label>
            <input
              className="w-[400px] h-[50px] focus:outline-none bg-transparent text-white  border-b-2 border-gray-500"
              type="email"
              name="email"
              id="email"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-300" htmlFor="query">
              How Can We Help?
            </label>
            <input
              className="w-[400px] h-[50px] focus:outline-none bg-transparent text-white  border-b-2 border-gray-500"
              type="text"
              name="query"
              id="query"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-300" htmlFor="source">
              How Do You Hear About Us ?{" "}
            </label>
            <input
              className="w-[400px] h-[50px] focus:outline-none bg-transparent text-white  border-b-2 border-gray-500"
              type="text"
              name="source"
              id="source"
            />
          </div>
          <div className="text-right mt-5">
            <button className="text-xl" type="submit">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9747FF] to-[#F44848]">
                Send {"->"}
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
