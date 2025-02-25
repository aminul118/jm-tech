import BusinessSolution from "@/components/Home/BusinessSolution";
import HeroBanner from "@/components/Home/HeroBanner";
import Contact from "@/components/Shared/contact/Contact";

import React from "react";

const HomePage = () => {
  return (
    <>
      <HeroBanner />
      <BusinessSolution />
      <Contact />
    </>
  );
};

export default HomePage;
