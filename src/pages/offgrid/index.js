import Layout from "@/components/templates/Layout";
import React from "react";
import Image from "next/image";

const OffGrid = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative w-full h-screen flex items-center justify-center bg-black">
        <Image src="/images/offgrid.png" alt="PLTS On Grid" layout="fill" className="object-cover opacity-60" />
        <h1 className="absolute text-3xl font-bold text-white text-center px-4">PLTS Sistem Off Grid</h1>
      </div>

      {/* Content Section */}
      <div className="py-12 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mt-8">
            <Image src="/images/offgrid2.png" alt="Diagram On Grid" width={1000} height={1000} className="w-full h-full object-cover mx-auto" />
          </div>
        </div>
      </div>

      {/* Advantages and Disadvantages Section */}
      <div className="py-12 bg-white">
        <h1 className="text-1xl  text-center mb-8">
          Sistem Off-Grid bekerja secara independen tanpa berhubungan dengan Grid (Tower PLN) dan sistem ini menggunakan baterai sebagai penyimpanan energi untuk malam hari. Secara keseluruhan sistem ini cocok untuk daerah yang tidak
          teraliri listrik dari PLN atau ditempat jauh, terpencil tanpa akses dari PLN terpusat.
        </h1>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Advantages */}

          <div>
            <h2 className="text-3xl font-bold mb-6 text-orange-500">Kelebihan</h2>
            <ul className="list-decimal list-inside space-y-4 text-gray-700">
              <li> Dapat berdiri sendiri tanpa jaringan PLN.</li>
              <li>Cocok untuk Rumah, Industri dan Komersial (daerah tertinggal / komunal / tanpa terdapat jaringan PLN).</li>
            </ul>
          </div>

          {/* Disadvantages */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-orange-500">Kekurangan</h2>
            <ul className="list-decimal list-inside space-y-4 text-gray-700">
              <li>Investasi alat sangat tinggi.</li>
              <li>Luas area pemasangan modul surya/panel surya yang sangat besar.</li>
              <li>Perawatan yang berkala dan menimbulkan biaya tinggi (baterai).</li>
              <li>Life time Baterai 2 hingga 3 tahun (harus dilakukan penggantian).</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OffGrid;
