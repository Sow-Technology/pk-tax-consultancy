import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Script from "next/script";
import React from "react";

const page = () => {
  return (
    <div>
      <Script src="/crisp.js" />
      <Hero />
      <About />
      <Services />
    </div>
  );
};

export default page;
