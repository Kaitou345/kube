import React from "react";
import { BsLinkedin } from "react-icons/bs";

const Copyright = () => {
  return (
    <div className="bg-[#121212] backdrop-blur-md flex pt-5 pb-10 justify-center items-center ">
      Copyright © {new Date().getFullYear()}. Kube
      <a
        target="_blank"
        rel="norefferer"
        className="mx-2 text-2xl"
        href="https://www.linkedin.com/company/kubemoney"
      >
        <BsLinkedin />
      </a>{" "}
      |&nbsp;
      <a
        href="https://kube.money/privacy-policy/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Terms of Service
      </a>
      &nbsp; -&nbsp;
      <a
        href="https://kube.money/privacy-policy/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Privacy Policy
      </a>
    </div>
  );
};

export default Copyright;
