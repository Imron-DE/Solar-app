import Layout from "@/components/templates/Layout";
import React from "react";
import Image from "next/image";

const VisiMisi = () => {
  return (
    <>
      <Layout>
        <div className="relative w-full h-screen flex items-center justify-center bg-black">
          <Image src="/images/visimisi.png" alt="PLTS On Grid" layout="fill" className="object-cover opacity-60" />
          <h1 className="absolute text-5xl font-bold text-white text-center px-4">VISI & MISI</h1>
        </div>
        <div className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Advantages */}

            <div>
              <h2 className="text-3xl font-bold mb-6 text-orange-500">VISI</h2>
              <ul className="list-decimal list-inside space-y-4 text-gray-700">Menjadi Perusahaan Terbaik yang menyediakan energi bersih dan hijau di Indonesia.</ul>
            </div>

            {/* Disadvantages */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-orange-500">MISI</h2>
              <ul className="list-disc list-inside space-y-4 text-gray-700">
                <li>Menyediakan sistem panel surya berkelas dunia yang berkualitas dengan harga terjangkau untuk pengguna di Indonesia.</li>
                <li>Memberikan pelayanan berstandar internasional di Indonesia.</li>
                <li>Mensejahterakan karyawan perusahaan dan berpartisipasi dalam pengembangan energi bersih hijau di Indonesia.</li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default VisiMisi;
