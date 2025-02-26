"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="text-center  space-y-4 bg-black text-white/75 py-6">
      <aside>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
    </footer>
  );
};

export default Footer;
