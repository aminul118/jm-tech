import whyChooseUsData from "@/sharedData/whyChooseUsData";
import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="relative h-auto flex flex-col items-center justify-center text-white overflow-hidden py-20">
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/images/background/paralax-banner1.png')",
        }}
      ></div>

      {/* Shadow Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content with Adjusted Position */}
      <div className="relative z-10 p-8 text-center">
        <h2 className="text-4xl 2xl:text-5xl font-extrabold uppercase tracking-wide">
          Why Choose Us?
        </h2>
        <p className="mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
          We specialize in various cutting-edge services to enhance your digital
          presence and business growth.
        </p>
      </div>

      {/* Features Section */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-center">
        {whyChooseUsData.map(({ id, title, description, icon }) => (
          <div
            key={id}
            className="bg-white bg-opacity-20 p-6 rounded-lg flex flex-col items-center"
          >
            {icon}
            <h3 className="mt-4 text-2xl font-semibold">{title}</h3>
            <p className="mt-2 text-lg">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
