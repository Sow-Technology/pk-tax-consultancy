"use client";
import React from "react";
import { Anton } from "next/font/google";
import Link from "next/link";
import { CardStack } from "../ui/card-stack";
import { cn } from "@/utils/cn";

const font = Anton({ subsets: ["latin"], weight: "400" });

const Testimonials = () => {
  return (
    <div
      className="my-20 flex flex-col items-center justify-center w-full"
      id="testimonials"
    >
      <div className={font.className}>
        <h2 className="text-5xl tracking-widest my-10">Testimonials</h2>
      </div>
      <div className="flex p-5 gap-5 text-center md:flex-row flex-col">
        <div className="md:max-w-[50%]">
          Discover what our valued clients have to say about their experience
          with our tax consulting and legal services. At PK tax consultancy, we
          pride ourselves on delivering tailored solutions and exceptional
          support to individuals and businesses navigating complex tax and legal
          landscapes. Take a moment to explore the testimonials below and learn
          how we&#39;ve helped clients like you achieve their financial and
          legal goals.
        </div>
        <div className="flex items-center justify-center w-full">
          <CardStack items={CARDS} />{" "}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
export const Highlight = ({ children, className }) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Arunachalam shankar",
    designation: "-",
    content: (
      <p>
        My income tax filing was effectively carried out by{" "}
        <Highlight>Mr. Pradeep kumar</Highlight>. The greatest tax related
        services are offered by <Highlight>M/s. PK Tax Consultancy</Highlight>.
      </p>
    ),
  },
  {
    id: 1,
    name: "Preethi Vasu",
    designation: "-",
    content: (
      <p>
        PK Tax consultancy is providing{" "}
        <Highlight>timely, and quality services</Highlight>. They handle my tax
        related queries. They are available 24/7, we can contact Mr.Pradeep
        Kumar whenever we need and he will clarify all our doubts so patiently.
        Thank you for all your support..
      </p>
    ),
  },
  {
    id: 2,
    name: "Vinoth P.",
    designation: "-",
    content: (
      <p>
        I met with PK Tax Consultancy for GST REGISTRATION and MSME. In
        guduvancheri, they are{" "}
        <Highlight>offering excellent service </Highlight>for filling GST at a
        reasonable cost.
      </p>
    ),
  },
  {
    id: 2,
    name: "Gopinath S.",
    designation: "-",
    content: (
      <p>
        M/s PK has vision and is{" "}
        <Highlight>customer friendly service </Highlight>. Filling and taking
        care of legal activities with least cost. As an M/s of Harshidha motors
        EV segment company,personally have high trusted legal advisory.
      </p>
    ),
  },
];
