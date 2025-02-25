import React from "react";
import SectionContainer from "../ui/SectionContainer";
import SectionTitle from "../ui/SectionTitle";
import business from "@/sharedData/Business";

const BusinessSolution = () => {
  return (
    <SectionContainer contentSize="container">
      <SectionTitle title="Our Services" />
      <div className="grid md:grid-cols-3 gap-6">
        {business.map((item) => {
          const IconComponent = item.icon; // Extract the icon component
          return (
            <div
              key={item.id}
              className="bg-white p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:cursor-pointer"
            >
              {/* Icon with Tailwind styles applied correctly */}
              <IconComponent className="text-blue-500 text-4xl mb-4 " />
              <h3 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-2">{item.details}</p>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
};

export default BusinessSolution;
