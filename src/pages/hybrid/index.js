import Layout from "@/components/templates/Layout";
import React from "react";
import Image from "next/image";

const Hybrid = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative w-full h-screen flex items-center justify-center bg-black">
        <Image src="/images/hybrid.png" alt="PLTS On Grid" layout="fill" className="object-cover opacity-60" />
        <h1 className="absolute text-3xl font-bold text-white text-center px-4">PLTS Sistem Hybrid</h1>
      </div>

      {/* Content Section */}
      <div className="py-12 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mt-8">
            <Image src="/images/hybrid2.png" alt="Diagram On Grid" width={1000} height={1000} className="w-full h-full object-cover mx-auto" />
          </div>
        </div>
      </div>

      {/* Advantages and Disadvantages Section */}
      <div className="py-12 bg-white">
        <h1 className="text-1xl  text-center mb-8 leading-relaxed px-56">
          Sistem Hybrid merupakan gabungan dari sistem On-Grid dan Off-Grid dimana sistem ini bekerja dengan berhubungan dengan Grid (Tower PLN) tetapi juga mempunyai baterai yang berfungsi sebagai backup power ketika listrik mati (critical
          load). Sistem ini merupakan sistem yang baru sehingga penggunaannya pun lebih tepat di area perkotaan dan daerah yang sudah teraliri listrik PLN.
        </h1>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Advantages */}

          <div>
            <h2 className="text-3xl font-bold mb-6 text-orange-500">Kelebihan</h2>
            <ul className="list-decimal list-inside space-y-4 text-gray-700">
              <li>Dapat menghemat tagihan listrik PLN untuk kapasitas rumah.</li>
              <li>Terdapat critical back up baterai (tidak menyeluruh).</li>
              <li>Luas area pemasangan modul surya/panel surya sangat efisien.</li>
              <li>Luas area pemasangan modul surya/panel surya yang sangat efisien.</li>
              <li>Cocok untuk Rumah (daerah perkotaan/yang terdapat jaringan PLN)..</li>
            </ul>
          </div>

          {/* Disadvantages */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-orange-500">Kekurangan</h2>
            <ul className="list-decimal list-inside space-y-4 text-gray-700">
              <li>Life time Baterai 2 hingga 3 tahun (harus dilakukan penggantian).</li>
              <li>Perawatan yang berkala dan menimbulkan biaya tinggi (baterai).</li>
              <li>Investasi Alat yang cukup tinggi.</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Hybrid;
