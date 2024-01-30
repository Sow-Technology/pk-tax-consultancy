import React from "react";
import { Anton } from "next/font/google";
const font = Anton({ subsets: ["latin"], weight: "400" });
const FaqItems = [
  {
    ques: "What is advatange of hiring a consultant instaed of doing it in-house?",
    ans: "nunc sed velit dignissim sodales ut eu sem integer vitaenunc sed velit dignissim sodales ut eu sem integer vitaenunc sed velit dignissim sodales ut eu sem integer vitaenunc sed velit dignissim sodales ut eu sem integer vitae",
  },
  {
    ques: "What is advatange of hiring a consultant instaed of doing it in-house?",
    ans: "nunc sed velit dignissim sodales ut eu sem integer vitae",
  },
  {
    ques: "What is advatange of hiring a consultant instaed of doing it in-house?",
    ans: "nunc sed velit dignissim sodales ut eu sem integer vitae",
  },
];
const FAQ = () => {
  return (
    <div
      className="my-20 flex flex-col items-center justify-center min-h-[600px]"
      id="faq"
    >
      <div className={font.className}>
        <h2 className="text-5xl tracking-widest my-10">FAQs</h2>
      </div>
      <div className="flex flex-wrap gap-4 justify-between   w-full my-10">
        {FaqItems.map((item) => (
          <div
            className=" relative w-[400px] bg-cover bg-center rounded-2xl overflow-clip !h-full border min-h-[300px] mx-auto"
            key={item.ques}
          >
            <div className="bg-blue-500/70 font-bold p-7">{item.ques}</div>
            <div className="p-7">{item.ans}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
