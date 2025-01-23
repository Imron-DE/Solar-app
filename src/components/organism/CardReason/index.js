import React from "react";
import Image from "next/image";

const CardReason = () => {
  return (
    <>
      <div class="flex flex-col items-center justify-center text-center bg-white py-16 px-4">
        <h2 class="text-3xl font-bold text-center mb-8">Mengapa Harus Memilih Kami?</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-gray-100 p-6 rounded-lg shadow-md">
            <Image src="https://shams.id/wp-content/uploads/2023/01/Icon-world-150x150.png" alt="Ramah Lingkungan" class="mb-4 rounded-md w-24 h-24 object-contain mx-auto" width={100} height={100} />
            <h3 class="text-xl font-bold mb-4 text-center">Cepat</h3>
            <p>Instalasi Efisien: Tim profesional kami memastikan proses instalasi berjalan cepat dan tepat waktu, mengurangi downtime operasional Anda.</p>
            <p>Respon Kilat: Layanan pelanggan kami siap membantu Anda dengan cepat untuk segala kebutuhan dan pertanyaan.</p>
          </div>
          <div class="bg-gray-100 p-6 rounded-lg shadow-md">
            <Image src="https://shams.id/wp-content/uploads/2022/02/icon-17-150x150.png" alt="Investasi Jangka Panjang" class="mb-4 rounded-md w-24 h-24 object-contain mx-auto" width={100} height={100} />
            <h3 class="text-xl font-bold mb-4 text-center">Cekatan</h3>
            <p>Teknisi Berpengalaman: Para ahli kami memiliki sertifikasi dan pengalaman proyek berskala besar dengan tingkat akurasi tinggi.</p>
            <p>Pemeliharaan Proaktif: Kami menawarkan layanan pemeliharaan rutin untuk memastikan sistem Anda selalu beroperasi pada efisiensi maksimal.</p>
          </div>
          <div class="bg-gray-100 p-6 rounded-lg shadow-md">
            <Image src="https://shams.id/wp-content/uploads/2023/01/green-150x150.png" alt="Energi Bersih Terbarukan" class="mb-4 rounded-md w-24 h-24 object-contain mx-auto" width={100} height={100} />
            <h3 class="text-xl font-bold mb-4 text-center">Cermat</h3>
            <p>Analisis Kebutuhan: Kami melakukan analisis menyeluruh untuk menemukan solusi yang paling sesuai dengan kebutuhan energi spesifik Anda.</p>
            <p>Kualitas Terjamin: Kami hanya menggunakan bahan dan teknologi terbaik, memastikan umur panjang dan keandalan sistem panel surya Anda.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardReason;
