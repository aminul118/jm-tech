import React from "react";
type SectionTitleType = {
  title: string;
  description?: string;
};

const SectionTitle = ({ title, description }: SectionTitleType) => {
  return (
    <div className="text-center max-w-3xl mx-auto pb-6 lg:pb-12 xl:pb-16 2xl:pb-24">
      <h1 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold mb-4">
        {title}
      </h1>
      <p>{description}</p>
    </div>
  );
};

export default SectionTitle;
