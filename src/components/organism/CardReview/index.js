import React from "react";

const CardReview = () => {
  return (
    <>
      <div class="flex flex-col items-center justify-center text-center bg-white py-16 px-4">
        <h1 class="text-3xl font-bold mb-8 text-center">5 Alasan Mengapa Anda Perlu Memasang Panel Surya</h1>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white rounded-lg shadow-md p-6">
            <img src="https://shams.id/wp-content/uploads/2023/01/Icon-world-150x150.png" alt="Ramah Lingkungan" class="mb-4 rounded-md w-32 h-32 object-contain mx-auto" />
            <h2 class="text-xl font-semibold mb-4">Ramah Lingkungan</h2>
            <p>Panel surya tidak menghasilkan limbah saat dioperasikan sehingga alat ini sangat ramah lingkungan.</p>
          </div>

          <div class="bg-white rounded-lg shadow-md p-6">
            <img src="https://shams.id/wp-content/uploads/2022/02/icon-17-150x150.png" alt="Investasi Jangka Panjang" class="mb-4 rounded-md w-32 h-32 object-contain mx-auto" />
            <h2 class="text-xl font-semibold mb-4">Investasi Jangka Panjang</h2>
            <p>Memutuskan untuk memasang panel surya adalah keputusan tepat karena Anda telah melakukan investasi jangka panjang. Anda juga dapat terhindar dari inflasi atau kenaikan tarif dasar listrik di kemudian hari.</p>
          </div>

          <div class="bg-white rounded-lg shadow-md p-6">
            <img src="https://shams.id/wp-content/uploads/2023/01/green-150x150.png" alt="Energi Bersih Terbarukan" class="mb-4 rounded-md w-32 h-32 object-contain mx-auto" />
            <h2 class="text-xl font-semibold mb-4">Energi Bersih Terbarukan</h2>
            <p>Berbeda dengan energi fosil, panel surya memanfaatkan energi terbarukan yaitu matahari sehingga energi yang dimanfaatkan oleh alat ini tidak akan pernah habis.</p>
          </div>

          <div class="bg-white rounded-lg shadow-md p-6">
            <img src="https://shams.id/wp-content/uploads/2022/02/icon-13.png" alt="Hemat Tagihan Listrik" class="mb-4 rounded-md w-32 h-32 object-contain mx-auto" />
            <h2 class="text-xl font-semibold mb-4">Hemat Tagihan Listrik</h2>
            <p>Memasang panel surya pada bangunan tempat tinggal, kantor, industri, komersial, dll, dapat menghemat tagihan listrik bulanan. Hal ini karena panel surya ikut membantu menyediakan energi listrik untuk beban listrik Anda.</p>
          </div>

          <div class="bg-white rounded-lg shadow-md p-6">
            <img src="https://shams.id/wp-content/uploads/2023/01/net.png" alt="Meningkatkan Nilai Jual Properti" class="mb-4 rounded-md w-32 h-32 object-contain mx-auto" />
            <h2 class="text-xl font-semibold mb-4">Meningkatkan Nilai Jual Properti</h2>
            <p>Dengan memasang panel surya, nilai properti Anda otomatis akan meningkat.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardReview;
