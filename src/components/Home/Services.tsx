import React from "react";
import SectionContainer from "../ui/SectionContainer";
import SectionTitle from "../ui/SectionTitle";
import ServicesData from "@/sharedData/ServicesData";

const Services = () => {
  return (
    <SectionContainer cssId="services" contentSize="container">
      <SectionTitle title="Our Services" />
      <div className="grid md:grid-cols-3 gap-6">
        {ServicesData.map(({ id, title, details, icon: Icon, color }) => (
          <div
            key={id}
            className="bg-white p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:cursor-pointer"
          >
            <Icon className="text-4xl mb-4 " style={{ color }} />
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            <p className="text-gray-600 mt-2">{details}</p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Services;
