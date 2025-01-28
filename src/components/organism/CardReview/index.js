import Card from "@/components/molecules/Card";
import React from "react";
import Image from "next/image";
const cardData = [
  {
    id: "1",
    image: "https://shams.id/wp-content/uploads/2023/01/Icon-world-150x150.png",
    title: "Ramah Lingkungan",
    description: "Panel surya tidak menghasilkan limbah saat dioperasikan sehingga alat ini sangat ramah lingkungan.",
  },
  {
    id: "2",
    image: "https://shams.id/wp-content/uploads/2022/02/icon-17-150x150.png",
    title: "Investasi Jangka Panjang",
    description: "Memutuskan untuk memasang panel surya adalah keputusan tepat karena Anda telah melakukan investasi jangka panjang. Anda juga dapat terhindar dari inflasi atau kenaikan tarif dasar listrik di kemudian hari.",
  },
  {
    id: "3",
    image: "https://shams.id/wp-content/uploads/2023/01/green-150x150.png",
    title: "Energi Bersih Terbarukan",
    description: "Berbeda dengan energi fosil, panel surya memanfaatkan energi terbarukan yaitu matahari sehingga energi yang dimanfaatkan oleh alat ini tidak akan pernah habis.",
  },
  {
    id: "4",
    image: "https://shams.id/wp-content/uploads/2022/02/icon-13.png",
    title: "Hemat Tagihan Listrik",
    description: "Memasang panel surya pada bangunan tempat tinggal, kantor, industri, komersial, dll, dapat menghemat tagihan listrik bulanan. Hal ini karena panel surya ikut membantu menyediakan energi listrik untuk beban listrik Anda.",
  },
  { id: "5", image: "https://shams.id/wp-content/uploads/2023/01/net.png", title: "Meningkatkan Nilai Jual Properti", description: "Dengan memasang panel surya, nilai properti Anda otomatis akan meningkat." },
];

const CardReview = () => {
  return (
    <>
      <section className="relative w-full min-h-screen overflow-hidden">
        <div className="relative w-full h-full">
          <Image src="/images/panel.png" alt="Astra" width={1000} height={1000} className="w-full h-full object-cover mx-auto opacity-50" />
          <div className="absolute inset-0 grid place-items-center text-center text-black px-4 w-full">
            <h1 className="text-3xl font-bold mb-8">5 Alasan Mengapa Anda Perlu Memasang Panel Surya</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 justify-center w-full max-w-screen-xl mx-auto ">
              {cardData.map((item) => (
                <Card key={item.id} image={item.image} title={item.title} description={item.description} className="p-6" />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CardReview;
