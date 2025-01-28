import Footer from "@/components/organism/Footer";
import Navbar from "@/components/organism/Navbar";
import React from "react";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <Navbar />
      {children}
      {/* Tampilkan Footer hanya jika pada halaman '/' */}
      {router.pathname === "/" && <Footer />}
    </>
  );
};

export default Layout;
