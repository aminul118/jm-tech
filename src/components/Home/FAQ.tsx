import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faqData from "@/sharedData/faqData";
import SectionContainer from "../ui/SectionContainer";
import SectionTitle from "../ui/SectionTitle";
import Image from "next/image";

const FAQ = () => {
  return (
    <SectionContainer contentSize="container">
      <SectionTitle title="FAQ" />

      {/* FAQ Image and Accordion */}
      <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
        {/* FAQ Image */}
        <div className="relative w-full sm:w-[300px] md:w-[400px] h-[300px] sm:h-[250px] md:h-[400px] mx-auto">
          <Image
            src="/images/logo/faq.png"
            fill
            alt="FAQ image"
            className="object-contain"
          />
        </div>

        {/* FAQ Accordion */}
        <Accordion
          type="single"
          collapsible
          className="mt-6 w-full max-w-2xl mx-auto"
        >
          {faqData[0].map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionContainer>
  );
};

export default FAQ;
