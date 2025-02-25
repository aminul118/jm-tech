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

      {/* FAQ Image */}
      <div className="flex items-center justify-center">
        <div className="relative w-[400px] h-[400px] mx-auto border">
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
          {faqData.map((faq) => (
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
