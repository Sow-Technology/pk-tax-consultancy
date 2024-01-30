import Image from "next/image";
import React from "react";
import { PiFilesBold } from "react-icons/pi";
import { GoThumbsup } from "react-icons/go";
import { BsPeopleFill } from "react-icons/bs";
import { MdVerifiedUser } from "react-icons/md";
import { Anton } from "next/font/google";
const font = Anton({ subsets: ["latin"], weight: "400" });
const HeroItem = [
  {
    icon: <PiFilesBold />,
    title: "Tax services",
    value: "30+",
  },
  {
    icon: <GoThumbsup />,
    title: "Recommended",
    value: "98%",
  },
  {
    icon: <MdVerifiedUser />,
    title: "Satisfaction",
    value: "100%",
  },
  {
    icon: <BsPeopleFill />,
    title: "Happy customers",
    value: "10k+",
  },
];
const Hero = () => {
  return (
    <div className="flex lg:flex-row flex-col gap-10 justify-between items-center min-h-[50vh] my-20 p-5">
      <div className="my-10 flex flex-col justify-between h-[400px] gap-20 mb-36 lg:mb-0">
        <h1
          className={`${font.className} text-6xl lg:text-8xl block tracking-widest`}
        >
          PK TAX
          <br /> CONSULTANCY
        </h1>
        <div className="flex gap-5 items-center justify-center flex-wrap ">
          {HeroItem.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center justify-center gap-2"
            >
              <div className="text-white text-7xl bg-[linear-gradient(90deg,rgba(13,5,136,1)0%,rgba(12,172,204,1)100%)] text-center mx-auto self-center p-3 flex items-center justify-center">
                {item.icon}
              </div>
              <span className="flex font-bold text-3xl text-center w-full items-center justify-center">
                {item.value}
              </span>
              <span className="flex">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Image
          src="/hero.webp"
          alt=""
          width={300}
          height={600}
          className="lg:w-auto w-full"
        />
      </div>
    </div>
  );
};

export default Hero;
