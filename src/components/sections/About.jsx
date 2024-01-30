import Image from "next/image";
import React from "react";
import { Anton } from "next/font/google";
const font = Anton({ subsets: ["latin"], weight: "400" });
const About = () => {
  return (
    <div
      className="flex min-h-[500px] my-20 flex-col-reverse items-center lg:flex-row gap-5 lg:gap-0 max-w-[100vw] overflow-clip"
      id="about"
    >
      <div className="min-w-[300px]">
        <Image
          src="/hero.webp"
          alt=""
          width={400}
          height={800}
          className="h-full"
        />
      </div>
      <div className="bg-[url(/about.webp)] text-white flex items-center justify-between flex-col py-10 px-20 bg-cover bg-center relative">
        <h2
          className={`text-5xl lg:text-8xl ${font.className} z-10 relative tracking-widest`}
        >
          ABOUT OUR CONSULTANCY
        </h2>
        <p className="z-10 relative">
          Our tax consultancy firm specializes in providing comprehensive and
          personalized tax solutions to individuals and businesses. With a team
          of experienced tax professionals, we offer strategic advice to
          optimize tax efficiency and compliance. We stay updated on the latest
          tax laws and regulations to ensure our clients receive accurate and
          timely guidance. Whether it&#39;s tax planning, preparation, or
          resolving tax disputes, we tailor our services to meet the unique
          needs of each client. Our goal is to minimize tax liabilities while
          maximizing financial opportunities for our clients. Trust us to
          navigate the complexities of taxation and help you achieve your
          financial goals.
        </p>
        <div className="absolute h-full w-full bg-[linear-gradient(90deg,rgba(13,5,136,1)0%,rgba(12,172,204,1)100%)]  inset-0 opacity-80 z-0" />
      </div>
    </div>
  );
};

export default About;
