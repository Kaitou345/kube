import React from "react"

const Copyright = () => {
  return (
    <div className="flex p-10 justify-center items-center bg-[#00000099]">
      Copyright © {new Date().getFullYear()}. Kube |&nbsp;
      <a href="http://" target="_blank" rel="noopener noreferrer">
        Terms of Service
      </a>
      &nbsp; -&nbsp;
      <a href="http://" target="_blank" rel="noopener noreferrer">
        Privacy Policy
      </a>
    </div>
  )
}

export default Copyright
