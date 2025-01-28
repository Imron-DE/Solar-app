import Layout from "@/components/templates/Layout";
import React from "react";
import Image from "next/image";

const blog = () => {
  return (
    <Layout>
      <div className="relative w-full h-screen flex items-center justify-center bg-black">
        <Image src="/images/blog.jpeg" alt="PLTS On Grid" layout="fill" className="object-cover opacity-60" />
        <h1 className="absolute text-5xl font-bold text-white text-center px-4">Blog</h1>
      </div>
    </Layout>
  );
};

export default blog;
