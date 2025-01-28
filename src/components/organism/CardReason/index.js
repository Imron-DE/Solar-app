import React from "react";
import Card from "@/components/molecules/Card";
import Image from "next/image";

const data = [
  {
    id: 1,
    title: "Cepat",
    image: "https://shams.id/wp-content/uploads/2023/01/Icon-world-150x150.png",
    description: [
      "Instalasi Efisien: Tim profesional kami memastikan proses instalasi berjalan cepat dan tepat waktu, mengurangi downtime operasional Anda.",
      "Respon Kilat: Layanan pelanggan kami siap membantu Anda dengan cepat untuk segala kebutuhan dan pertanyaan.",
    ],
  },
  {
    id: 2,
    title: "Cekatan",
    image: "https://shams.id/wp-content/uploads/2022/02/icon-17-150x150.png",
    description: [
      "Teknisi Berpengalaman: Para ahli kami memiliki sertifikasi dan pengalaman proyek berskala besar dengan tingkat akurasi tinggi.",
      "Pemeliharaan Proaktif: Kami menawarkan layanan pemeliharaan rutin untuk memastikan sistem Anda selalu beroperasi pada efisiensi maksimal.",
    ],
  },
  {
    id: 3,
    title: "Cermat",
    image: "https://shams.id/wp-content/uploads/2023/01/green-150x150.png",
    description: [
      "Analisis Kebutuhan: Kami melakukan analisis menyeluruh untuk menemukan solusi yang paling sesuai dengan kebutuhan energi spesifik Anda.",
      "Kualitas Terjamin: Kami hanya menggunakan bahan dan teknologi terbaik, memastikan umur panjang dan keandalan sistem panel surya Anda.",
    ],
  },
];

const CardReason = () => {
  return (
    <>
      <section className="relative w-full min-h-screen overflow-hidden">
        <div className="relative w-full h-full">
          <Image src="/images/panel2.jpg" alt="Astra" width={1000} height={1000} className="w-full h-full object-cover mx-auto opacity-75" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-black px-4 w-full">
            <h1 className="text-3xl font-bold mb-8">Mengapa Harus Memilih Kami?</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center w-full max-w-screen-xl">
              {data.map((item) => (
                <Card key={item.id} image={item.image} title={item.title} description={item.description} className="p-6" />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CardReason;
