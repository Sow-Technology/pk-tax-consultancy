import About from "@/components/sections/About";
import FAQ from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <FAQ />
    </div>
  );
};

export default page;
