import Layout from "@/components/templates/Layout";
import React from "react";
import Image from "next/image";
import Button from "@/components/atoms/Button";

const Inverter = () => {
  return (
    <Layout>
      <div className="relative w-full h-screen flex items-center justify-center bg-black">
        {/* Background Image */}
        <Image src="/images/inverter.png" alt="PLTS Inverter" layout="fill" className="object-cover opacity-60" />

        {/* Content */}
        <div className="absolute z-10 text-center px-4">
          <h1 className="text-5xl font-bold text-white mb-4">PREMIUM CLASS INVERTER</h1>
          <p className="text-2xl font-semibold text-white">Kami menyediakan Inverter On Grid, Off Grid, dan Hybrid dari brand berkualitas internasional.</p>
        </div>
      </div>
      {/* Product Section */}
      <div className="bg-white rounded-lg s p-8 mt-8 max-w-6xl mx-auto">
        {/* Section: Inverter On Grid */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-center mb-4">Inverter On Grid</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <Image src="/images/logoinverter.png" alt="PLTS Inverter 1" width={150} height={150} className="rounded-full mx-auto" />
              <Button buttonClassname="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-4">See Product</Button>
            </div>
            <div className="text-center">
              <Image src="/images/inverterlogo2.png" alt="PLTS Inverter 2" width={150} height={150} className="rounded-full mx-auto" />
              <Button buttonClassname="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-4">See Product</Button>
            </div>
            <div className="text-center">
              <Image src="/images/inverterlogo3.png" alt="PLTS Inverter 3" width={150} height={150} className="rounded-full mx-auto" />
              <Button buttonClassname="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-4">See Product</Button>
            </div>
          </div>
        </div>

        {/* Horizontal Separator */}
        <div className="border-t border-gray-300 my-8"></div>

        {/* Section: Inverter Off Grid */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-center mb-4">Inverter Off Grid</h3>
          <div className="grid  gap-4">
            <div className="text-center">
              <Image src="/images/logoinverter.png" alt="PLTS Inverter 1" width={150} height={150} className="rounded-full mx-auto" />
              <Button buttonClassname="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-4">See Product</Button>
            </div>
          </div>
        </div>

        {/* Horizontal Separator */}
        <div className="border-t border-gray-300 my-8"></div>

        {/* Section: Inverter Hybrid */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-center mb-4">Inverter Hybrid</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <Image src="/images/logoinverter.png" alt="PLTS Inverter 1" width={150} height={150} className="rounded-full mx-auto" />
              <Button buttonClassname="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-4">See Product</Button>
            </div>
            <div className="text-center">
              <Image src="/images/inverterlogo3.png" alt="PLTS Inverter 2" width={150} height={150} className="rounded-full mx-auto" />
              <Button buttonClassname="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-4">See Product</Button>
            </div>
            <div className="text-center">
              <Image src="/images/inverterlogo4.png" alt="PLTS Inverter 3" width={150} height={150} className="rounded-full mx-auto" />
              <Button buttonClassname="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-4">See Product</Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Inverter;
