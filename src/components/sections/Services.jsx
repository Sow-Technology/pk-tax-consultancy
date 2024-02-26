import React from "react";
import { Anton } from "next/font/google";
import Link from "next/link";
const font = Anton({ subsets: ["latin"], weight: "400" });
const ServiceItems = [
  {
    imgUrl: "/s1.jpg",
    title: "GST Registration",
    url: "/gst",

    desc: "nunc sed velit dignissim sodales ut eu sem integer vitae",
  },
  {
    imgUrl: "/s2.jpg",
    title: "FSSAI Registration",
    url: "/registration/#fssai",

    desc: "nunc sed velit dignissim sodales ut eu sem integer vitae",
  },
  {
    imgUrl: "/s3.jpg",
    title: "PF Withdrawal",
    url: "/registration/#pf",

    desc: "nunc sed velit dignissim sodales ut eu sem integer vitae",
  },
  {
    imgUrl: "/s4.webp",
    title: "Income Tax",
    url: "/income-tax",
    desc: "nunc sed velit dignissim sodales ut eu sem integer vitae",
  },
];
const Services = () => {
  return (
    <div
      className="my-20 flex flex-col items-center justify-center w-full"
      id="services"
    >
      <div className={font.className}>
        <h2 className="text-5xl tracking-widest my-10">Services</h2>
      </div>
      <div className="flex flex-wrap gap-20 justify-center items-center min-h-[600px] w-full my-10 p-10">
        {ServiceItems.map((item) => (
          <Link href={item.url} key={item.title}>
            <div
              className="min-h-[600px] relative min-w-[300px] w-[400px] bg-cover bg-center mx-auto rounded-lg shadow-lg"
              key={item.title}
              style={{ backgroundImage: `url(${item.imgUrl})` }}
            >
              <div className="bottom-0 absolute bg-white/80 w-full tracking-widest leading-relaxed text-center p-3 py-7">
                <h3 className={`${font.className} text-3xl `}>{item.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
