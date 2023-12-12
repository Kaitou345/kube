import Image from "next/image";
import { BsArrowDownCircle } from "react-icons/bs";

const AboutHero = () => {
  return (
    <div className="bg-[#00000011] flex flex-col items-center justify-center px-16 pb-10 h-[100vh]">
      <div className="max-w-[1600px] flex justify-between items-center flex-row-reverse gap-32">
        <div>
          <Image src="/logo.png" height={300} width={300} />
        </div>
        <div className="bg-[#1D2023] p-7 rounded-lg max-w-[500px]">
          <h2 className="text-5xl font-semibold mb-5">About</h2>
          <p className="font-light text-md  leading-[1.4]">
            We are enabling fair access to finance for small and medium-sized
            businesses and individuals through our open banking credit scoring
            and digital lending infrastructure. This approach promotes financial
            democracy and equal opportunities for all.
            <br /> <br />
            Kube is pioneering the next generation of business lending. Our
            technology for embedded lending enables digital platforms, such as
            marketplaces, payment service providers, and SMBs to become credit
            worthy and grow their business through faster access to finance.
            <br /> <br />
            We offer digital lending infra and credit decision engine to banks
            and building societies and also connect them to our partner digital
            platforms and marketplaces. By offering fully digital, seamlessly
            integrated digital loans, our partner lenders are able to enhance
            their offerings and contribute to the growth of their customer’s
            platform and overall economy.
          </p>
        </div>
        {/* <div className="animate-bounce">
          <BsArrowDownCircle size={75} />
        </div> */}
      </div>
    </div>
  );
};

export default AboutHero;
