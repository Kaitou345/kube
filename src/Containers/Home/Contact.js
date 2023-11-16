import React from "react";

const Contact = () => {
  return (
    <div className="bg-[#00000099] backdrop-blur-md">
      <div className="px-28 py-20 flex flex-col items-center gap-14 ">
        <div className="max-w-[1100px] w-full px-24 py-20 rounded-[15px] bg-[#5A33F8] flex flex-col gap-8 items-start justify-between">
          <h1 className="text-4xl">Want to make your idea a reality?</h1>
          <p className="text-sm">
            Office address: Level 39, One Canada Square, Canary Wharf, London
            E14 5AB, United Kingdom
          </p>
          <form
            action=""
            method="post"
            className="flex flex-col items-start gap-4 text-xl"
          >
            <div>
              <label htmlFor="">My name is </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="first and Last name"
                className="bg-[#6666FF] px-4 py-1 focus:outline-none w-[250px] focus:border-b-2 border-white"
              />{" "}
              <label htmlFor="">from </label>
              <input
                type="text"
                name=""
                placeholder="company name"
                id=""
                className="bg-[#6666FF] px-4 py-1 focus:outline-none w-[200px] focus:border-b-2 border-white"
              />
            </div>
            <div className="flex gap-5 items-center">
              <label htmlFor="">I want to talk about a </label>
              <div className="flex gap-3">
                <div className="cursor-pointer border-2 rounded-xl border-white p-2 text-sm">
                  Solution
                </div>
                <div className="cursor-pointer border-2 rounded-xl border-white p-2 text-sm">
                  Current account
                </div>
                <div className="cursor-pointer border-2 rounded-xl border-white p-2 text-sm">
                  Company
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="">Please contact me at </label>
              <input
                type="email"
                placeholder="name@example.com"
                className="bg-[#6666FF] px-4 py-1 focus:outline-none w-[250px] focus:border-b-2 border-white"
              />{" "}
              <label htmlFor="">or </label>
              <input
                type="text"
                name=""
                placeholder="+44 000 00 000 00"
                id=""
                className="bg-[#6666FF] px-4 py-1 focus:outline-none w-[250px] focus:border-b-2 border-white"
              />
            </div>
            <button type="submit" className="bg-black px-6 py-3 rounded-lg">
              Submit
            </button>
          </form>
          <p className="text-sm">
            By continuing, you acknowledge reading and agree to the{" "}
            <a href="#" className="underline font-semibold">
              KUBE Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
