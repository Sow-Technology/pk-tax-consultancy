import Image from "next/image";
import React from "react";
import { Anton } from "next/font/google";
const font = Anton({ subsets: ["latin"], weight: "400" });
const About = () => {
  return (
    <div
      className="flex min-h-[500px] my-20 flex-col-reverse items-center lg:flex-row gap-5 lg:gap-0 max-w-[100vw] overflow-clip max-h-full"
      id="about"
    >
      <div className="min-w-[350px] object-cover relative h-full bg-black">
        <Image
          src="/hero.webp"
          alt=""
          width={800}
          height={1200}
          className="h-full min-h-[640px] object-cover"
        />
      </div>
      <div className="bg-[url(/about.webp)] text-white flex items-center justify-between flex-col py-10 px-20 bg-cover bg-center relative">
        <h2
          className={`text-5xl lg:text-8xl ${font.className} z-10 relative tracking-widest`}
        >
          ABOUT OUR CONSULTANCY
        </h2>
        <div className="relative z-10">
          <p className="z-10  mt-5">
            PK TAX CONSULTANCY is a full-service firm of corporate strategists,
            auditors, tax advisory experts and advocates. It renders
            comprehensive professional services in the areas of Auditing, Tax
            Laws, Company Laws, Consultancy Services & other allied services.
          </p>
          <p className="mt-5">
            The firm is established by Mr. V PRADEEP KUMAR. He constantly
            endeavor to craft a premier focused professional practice providing
            high quality services and integrating value added knowledge for its
            clients and society as a whole.
          </p>
          <p className="mt-5">
            PK TAX CONSULTANCY has qualified and experienced members including
            Chartered Accountants, Company Secretaries, Cost Accountants,
            Consultants and Advocates.
          </p>
          <p className="mt-5">
            Team PK TAX CONSULTANCY, has adequate infrastructure, updated
            technologies, expertise and experience, and unending enthusiasm to
            offer solutions in time. The firm has a good network among business
            bodies, clients and Government department. The professional
            interactions and client specific approach of the firm, ensures
            smooth interface with all stake holders.
          </p>
        </div>
        <div className="absolute h-full w-full bg-[linear-gradient(90deg,rgba(13,5,136,1)0%,rgba(12,172,204,1)100%)]  inset-0 opacity-80 z-0" />
      </div>
    </div>
  );
};

export default About;
