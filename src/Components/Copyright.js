import React from "react";

const Copyright = () => {
  return (
    <div className="bg-[#121212] backdrop-blur-md flex pt-5 pb-10 justify-center items-center ">
      Copyright © {new Date().getFullYear()}. Kube |&nbsp;
      <a href="http://" target="_blank" rel="noopener noreferrer">
        Terms of Service
      </a>
      &nbsp; -&nbsp;
      <a href="http://" target="_blank" rel="noopener noreferrer">
        Privacy Policy
      </a>
    </div>
  );
};

export default Copyright;
