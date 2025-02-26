import FAQ from "@/components/Home/FAQ";
import HeroBanner from "@/components/Home/HeroBanner";
import OurTeam from "@/components/Home/OurTeam/OurTeam";
import Services from "@/components/Home/Services";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import Contact from "@/components/contact/Contact";

import React from "react";

const HomePage = () => {
  return (
    <>
      <HeroBanner />
      <Services />
      <OurTeam />
      <WhyChooseUs />
      <FAQ />
      <Contact />
    </>
  );
};

export default HomePage;
