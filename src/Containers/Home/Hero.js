import Image from "next/image";
import { BsArrowDownCircle } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="bg-[#00000055] flex flex-col items-center justify-center px-32 py-10 h-[100vh]">
      <div className="max-w-[1360px] flex flex-col gap-16 ">
        <div>
          <Image src="/logo.png" height={400} width={400} />
        </div>
        <div>
          <p className="font-light text-6xl leading-[1.1]">
            Leverage the power of open banking data to make more informed credit
            decisions.
          </p>
        </div>
        <div className="animate-bounce">
          <BsArrowDownCircle size={100} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
