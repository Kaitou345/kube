"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import {
  BsArrowLeftCircle,
  BsArrowRightCircle,
  BsChatLeft,
} from "react-icons/bs";
import { useRef } from "react";
const services = [
  {
    id: 1,
    title: "Ecommerce",
    image: "/Service1.png",
  },
  {
    id: 2,
    title: "B2B Marketplace",
    image: "/b2b.png",
  },
  {
    id: 3,
    title: "Fintech",
    image: "/fintech.png",
  },
  {
    id: 4,
    title: "Trucking & Transportation",
    image: "/trucking.png",
  },
  {
    id: 5,
    title: "Others",
    image: "/Service1.png",
  },
];

const ServicesSlider = () => {
  const slider = useRef(null);

  return (
    <div className="px-28 py-20 bg-[#00000099] backdrop-blur-md">
      <h1 className="font-semibold text-5xl py-20">
        Industries our SaaS customers serve:
      </h1>
      <Slider
        className="bg-black"
        ref={slider}
        {...{
          dots: false,
          infinite: true,
          arrows: false,
          slidesToScroll: 1,
          slidesToShow: 4,
          touchThreshold: 5,

          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
              },
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
        }}
      >
        {services.map((item) => (
          <Link
            href="/"
            className="bg-[#2a2848] hover:bg-[#6460ab] transition-colors box-border py-10  rounded-[30px] flex flex-col items-center justify-center"
            key={item.id}
          >
            <div className="flex items-center justify-center">
              <Image src={item.image} height={300} width={300} />
            </div>
            <div className="text-center">
              <h2 className="text-2xl">{item.title}</h2>
            </div>
          </Link>
        ))}
      </Slider>
      <div className="flex items-center justify-center gap-10 p-5">
        <button onClick={() => slider?.current?.slickPrev()}>
          <BsArrowLeftCircle size={75} className="hover:text-[#7a75cc]" />
        </button>
        <button onClick={() => slider?.current?.slickNext()}>
          <BsArrowRightCircle size={75} className="hover:text-[#7a75cc]" />
        </button>
      </div>
    </div>
  );
};

export default ServicesSlider;
