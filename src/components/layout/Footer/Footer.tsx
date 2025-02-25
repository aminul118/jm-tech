"use client";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-center  space-y-4 bg-black text-white/75 py-6">
      <nav className="space-x-8">
        <Link href={"#"} className="link link-hover">
          About us
        </Link>
        <Link href={""} className="link link-hover">
          Contact
        </Link>
        <Link href={""} className="link link-hover">
          Jobs
        </Link>
        <Link href={""} className="link link-hover">
          Press kit
        </Link>
      </nav>

      <aside>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
    </footer>
  );
};

export default Footer;
