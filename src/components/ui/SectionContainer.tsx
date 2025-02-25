import { ChildrenType } from "@/app/layout";
import React from "react";

type SectionContainerType = ChildrenType & {
  tailwindClass?: string;
  contentSize?: string;
};

const SectionContainer = ({
  children,
  tailwindClass,
  contentSize,
}: SectionContainerType) => {
  return (
    <section
      className={`${tailwindClass} mx-auto py-6 lg:py-12 xl:py-16 2xl:py-24`}
    >
      <div className={`${contentSize} mx-auto`}>{children}</div>
    </section>
  );
};

export default SectionContainer;
