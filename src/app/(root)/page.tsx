import BusinessSolution from "@/components/Home/BusinessSolution";
import FAQ from "@/components/Home/FAQ";
import HeroBanner from "@/components/Home/HeroBanner";
import OurTeam from "@/components/Home/OurTeam/OurTeam";
import Contact from "@/components/Shared/contact/Contact";

import React from "react";

const HomePage = () => {
  return (
    <>
      <HeroBanner />
      <BusinessSolution />
      <OurTeam />
      <FAQ/>
      <Contact />
    </>
  );
};

export default HomePage;
