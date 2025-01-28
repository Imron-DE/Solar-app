import React from "react";
import CardPlts from "@/components/molecules/CardPlts";

const dataPlts = [
  {
    id: 1,
    image: "https://shams.id/wp-content/uploads/2023/11/ongrid.png",
    title: "On Grid",
    description: "Sistem On Grid adalah sistem yang terhubung ke jaringan PLN. Sistem ini dapat langsung dialokasikan untuk beban.",
    href: "/ongrid",
  },
  {
    id: 2,
    image: "https://shams.id/wp-content/uploads/2023/01/offgrid.png",
    title: "Off Grid",
    description: "Sistem Off Grid adalah sistem yang tidak terhubung dengan jaringan PLN, menggunakan baterai untuk penyimpanan energi.",
    href: "/offgrid",
  },
  {
    id: 3,
    image: "https://shams.id/wp-content/uploads/2023/01/offgrid.png",
    title: "Hybrid",
    description: "Sistem Hybrid menggabungkan sistem On Grid dan Off Grid untuk fleksibilitas lebih dalam penggunaan energi.",
    href: "/hybrid",
  },
];

const PanelCategoriesCard = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center bg-white py-0 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Sistem PLTS Yang Kami Sediakan</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dataPlts.map((item) => (
          <CardPlts key={item.id} image={item.image} title={item.title} description={item.description} Buttontext="Pelajari Lebih Lanjut" href={item.href} />
        ))}
      </div>
    </div>
  );
};

export default PanelCategoriesCard;
