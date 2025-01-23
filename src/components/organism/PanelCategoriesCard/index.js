import React from "react";
import Image from "next/image";

const PanelCategoriesCard = () => {
  return (
    <>
      <div class="flex flex-col items-center justify-center text-center bg-white py-16 px-4">
        <h2 class="text-3xl font-bold text-center mb-8">Sistem PLTS Yang Kami Sediakan</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div class="bg-white rounded shadow-md px-8 py-6">
            <Image src="https://shams.id/wp-content/uploads/2023/11/ongrid.png" alt="On Grid" width={100} height={100} />
            <h3 class="text-xl font-bold text-center">On Grid</h3>
            <p class="text-gray-700 text-center">Sistem On Grid adalah sistem yang terhubung ke jaringan PLN. Sistem ini dapat langsung dialokasikan untuk beban.</p>
            <button type="submit" class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Pelajari Lebih Lanjut
            </button>
          </div>

          <div class="bg-white rounded shadow-md px-8 py-6">
            <Image src="https://shams.id/wp-content/uploads/2023/01/offgrid.png" alt="Off Grid" width={100} height={100} />
            <h3 class="text-xl font-bold text-center">Off Grid</h3>
            <p class="text-gray-700 text-center">Sistem Off Grid adalah sistem yang tidak terhubung dengan jaringan PLN, menggunakan baterai untuk penyimpanan energi.</p>
            <button type="submit" class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Pelajari Lebih Lanjut
            </button>
          </div>

          <div class="bg-white rounded shadow-md px-8 py-6">
            <Image src="https://shams.id/wp-content/uploads/2023/11/ongrid.png" alt="Hybrid" width={100} height={100} />
            <h3 class="text-xl font-bold text-center">Hybrid</h3>
            <p class="text-gray-700 text-center">Sistem Hybrid menggabungkan sistem On Grid dan Off Grid untuk fleksibilitas lebih dalam penggunaan energi.</p>
            <button type="submit" class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PanelCategoriesCard;
