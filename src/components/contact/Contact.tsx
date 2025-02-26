import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionTitle from "@/components/ui/SectionTitle";

const Contact = () => {
  return (
    <SectionContainer
      cssId="contact"
      contentSize="container"
      tailwindClass="bg-[url('/images/background/contact.jpg')] bg-cover bg-center bg-no-repeat"
    >
      <SectionTitle
        title="Contact Us"
        description="Get in touch with us for any inquiries, support, or business collaborations. Our team is ready to assist you with the best solutions tailored to your needs."
      />
      <div className="flex flex-col md:flex-row justify-center items-center gap-12">
        <ContactInfo />
        <ContactForm />
      </div>
    </SectionContainer>
  );
};

export default Contact;
