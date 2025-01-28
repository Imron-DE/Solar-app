import React from "react";
import Image from "next/image";
const PanelCard = () => {
  return (
    <>
      <div class="flex flex-col items-center justify-center text-center bg-white py-44 px-4">
        <div class="flex flex-col-reverse sm:flex-row items-center justify-center gap-8 w-full">
          <div class="sm:w-1/2 text-center sm:text-left">
            <h2 class="text-3xl font-bold text-orange-500 mb-4">Tentang Panel Surya</h2>
            <p class="text-gray-700">
              Pembangkit Listrik Tenaga Surya (PLTS) adalah sistem yang mengubah energi matahari menjadi listrik menggunakan panel surya. Komponen utama PLTS meliputi panel surya, inverter, dan baterai untuk penyimpanan energi. Sistem ini
              ramah lingkungan, tidak menghasilkan emisi karbon, dan dapat digunakan untuk memenuhi kebutuhan listrik di sektor residensial, industri, dan komersial.
            </p>
          </div>
          <Image src="https://shams.id/wp-content/uploads/2022/02/Image-21.png" alt="Panel Surya 1" className="w-100 h-100 " width={500} height={500} />
        </div>
      </div>
    </>
  );
};

export default PanelCard;
