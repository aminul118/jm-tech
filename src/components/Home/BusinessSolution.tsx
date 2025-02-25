import React from "react";
import { FaBriefcase, FaChartLine, FaSearch } from "react-icons/fa";
import SectionContainer from "../ui/SectionContainer";

const business = [
  {
    id: 1,
    title: "Best Business Solution",
    details:
      "Our goal is to make it possible for you to achieve success effortlessly.",
    icon: <FaBriefcase className="text-blue-500 text-4xl" />,
  },
  {
    id: 2,
    title: "Business Growth Planning",
    details:
      "We provide data-driven strategies to scale and grow your business.",
    icon: <FaChartLine className="text-green-500 text-4xl" />,
  },
  {
    id: 3,
    title: "Search Optimization",
    details:
      "Enhance your visibility with our SEO expertise for better ranking.",
    icon: <FaSearch className="text-orange-500 text-4xl" />,
  },
];

const BusinessSolution = () => {
  return (
    <SectionContainer contentSize="container" tailwindClass="bg-white">
      <div className="grid md:grid-cols-3 gap-6">
        {business.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:cursor-pointer"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900">
              {item.title}
            </h3>
            <p className="text-gray-600 mt-2">{item.details}</p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default BusinessSolution;
