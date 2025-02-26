import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 h-14 flex items-center bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Image
            src={"/logo.svg"}
            width={40}
            height={40}
            alt="logo of jmTech"
          />
        </div>
        <nav>
          <ul className="flex items-center gap-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/#services">Services</Link>
            </li>
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
