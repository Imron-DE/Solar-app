import Footer from "@/components/organism/Footer";
import Navbar from "@/components/organism/Navbar";
import React, { children } from "react";

const Layout = () => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
