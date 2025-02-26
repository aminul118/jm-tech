import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const contactData = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    title: "Our Office",
    description: "123 Tech Street, Dhaka, Bangladesh",
    iconBgColor: "bg-blue-500", // Icon background color
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    title: "Call Us",
    description: "+880 1234 567 890",
    iconBgColor: "bg-green-500", // Icon background color
  },
  {
    id: 3,
    icon: <FaEnvelope />,
    title: "Email Us",
    description: "info@yourwebsite.com",
    iconBgColor: "bg-red-500", // Icon background color
  },
];

const ContactInfo = () => {
  return (
    <div className="w-full max-w-lg mx-auto space-y-4">
      {contactData.map((contact) => (
        <div
          key={contact.id}
          className="flex items-center gap-4  rounded-lg"
        >
          {/* Icon with background color */}
          <div
            className={`w-12 h-12 ${contact.iconBgColor} text-white flex items-center justify-center rounded-full`}
          >
            {contact.icon}
          </div>
          <div>
            <h3 className="text-lg font-semibold">{contact.title}</h3>
            <p className="text-gray-600">{contact.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
