import Layout from "@/components/templates/Layout";
import React from "react";
import Image from "next/image";
import SolarPanelCard from "@/components/organism/SolarPanelCard";

const Product = () => {
  return (
    <>
      <Layout>
        <section className="relative w-full h-[120vh] overflow-hidden">
          <div className="relative w-full h-full">
            <Image src="/images/product.png" alt="Astra" width={1000} height={1000} className="w-full h-full object-cover mx-auto" />
            <div className="absolute top-1/2 left-64 transform -translate-y-[100%] text-left text-black px-4">
              <h1 className="text-4xl font-bold mb-4 text-white">PREMIUM SOLAR PANEL</h1>
              <p className="text-white text-1xl mb-6">Kami menyediakan Solar Panel dari brand terkenal yang berkualitas international</p>
            </div>
          </div>
        </section>
        <SolarPanelCard />
      </Layout>
    </>
  );
};

export default Product;
