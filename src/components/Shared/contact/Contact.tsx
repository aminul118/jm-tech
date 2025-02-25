import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionTitle from "@/components/ui/SectionTitle";

const Contact = () => {
  return (
    <SectionContainer contentSize="container">
      <SectionTitle
        title="Contact US"
        description="Get in touch with us for any inquiries, support, or business collaborations. Our team is ready to assist you with the best solutions tailored to your needs."
      />
      <div className="flex justify-center items-center gap-6">
        <ContactInfo />
        <ContactForm />
      </div>
    </SectionContainer>
  );
};

export default Contact;
