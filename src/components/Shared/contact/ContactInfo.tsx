import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="w-full max-w-lg mx-auto space-y-4">
      {/* Address */}
      <div className="flex items-center gap-4 ">
        <FaMapMarkerAlt className="text-blue-500 text-2xl" />
        <div>
          <h3 className="text-lg font-semibold">Our Office</h3>
          <p className="text-gray-600">123 Tech Street, Dhaka, Bangladesh</p>
        </div>
      </div>

      {/* Phone */}
      <div className="flex items-center gap-4 ">
        <FaPhoneAlt className="text-green-500 text-2xl" />
        <div>
          <h3 className="text-lg font-semibold">Call Us</h3>
          <p className="text-gray-600">+880 1234 567 890</p>
        </div>
      </div>

      {/* Email */}
      <div className="flex  items-center gap-4 ">
        <FaEnvelope className="text-red-500 text-2xl" />
        <div>
          <h3 className="text-lg font-semibold">Email Us</h3>
          <p className="text-gray-600">info@yourwebsite.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
