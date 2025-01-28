import Layout from "@/components/templates/Layout";
import React from "react";
import Image from "next/image";

const OnGrid = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative w-full h-screen flex items-center justify-center bg-black">
        <Image src="/images/ongrid.png" alt="PLTS On Grid" layout="fill" className="object-cover opacity-60" />
        <h1 className="absolute text-5xl font-extrabold text-white text-center px-4">PLTS Sistem On Grid</h1>
      </div>

      {/* Content Section */}
      <div className="py-12 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mt-8">
            <Image src="/images/ongrid2.png" alt="Diagram On Grid" width={1000} height={1000} className="w-full h-full object-cover mx-auto" />
          </div>
        </div>
      </div>

      {/* Advantages and Disadvantages Section */}
      <div className="py-12 bg-white">
        <h1 className="text-1xl  text-center mb-8">Sistem On Grid adalah sistem yang terhubung ke jaringan PLN. Sistem ini memproduksi listrik pada siang hari dan dapat langsung dialokasikan untuk beban.</h1>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Advantages */}

          <div>
            <h2 className="text-3xl font-bold mb-6 text-orange-500">Kelebihan</h2>
            <ul className="list-decimal list-inside space-y-4 text-gray-700">
              <li>Menghemat tagihan listrik PLN (berhubungan dengan jaringan PLN).</li>
              <li>Investasi alat yang rendah.</li>
              <li>Luas area pemasangan modul surya/panel surya sangat efisien.</li>
              <li>Perawatan sangat mudah.</li>
              <li>Cocok untuk rumah, industri, dan komersial (daerah perkotaan/yang terdapat jaringan PLN).</li>
            </ul>
          </div>

          {/* Disadvantages */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-orange-500">Kekurangan</h2>
            <ul className="list-decimal list-inside space-y-4 text-gray-700">
              <li>Daya utama PLN off, PLTS ikut off.</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OnGrid;
