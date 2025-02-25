import React from "react";
import { ChildrenType } from "../layout";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";

const MainLayout = ({ children }: ChildrenType) => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-168px)]">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
