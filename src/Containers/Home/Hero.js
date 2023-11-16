import Image from "next/image";
import { BsArrowDownCircle } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="bg-[#00000055] flex flex-col items-center justify-center px-32 pb-10 h-[100vh]">
      <div className="max-w-[1360px] flex flex-col gap-14 ">
        <div>
          <Image src="/logo.png" height={300} width={300} />
        </div>
        <div>
          <p className="font-light text-4xl leading-[1.25]">
            Leverage the power of open banking data <br />
            to make more informed credit decisions.
          </p>
        </div>
        {/* <div className="animate-bounce">
          <BsArrowDownCircle size={75} />
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
