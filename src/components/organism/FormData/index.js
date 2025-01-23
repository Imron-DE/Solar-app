import React from "react";

const FormData = () => {
  return (
    <>
      <div class="flex flex-col items-center justify-center text-center bg-white py-16 px-4">
        <h1 class="text-3xl font-bold text-center mb-8">Formulir Data Pra-Proyek PLTS</h1>
        <p class="mb-8 text-center">
          Selamat datang DI SHAMS ENERGY, Kami berikan GRATIS: KONSULTASI dan PERENCANAAN PEMASANGAN. Juga dapatkan penawaran menarik untuk DISCOUNT harga melalui PENAWARAN dengan Area pemasangan kami di seluruh Indonesia. Untuk Informasi
          lebih lanjut dan penawaran harga mohon cantumkan data sbb :
        </p>

        <form>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label for="daya_pln" class="block text-sm font-medium text-gray-700">
                Daya PLN saat ini
              </label>
              <input type="text" name="daya_pln" id="daya_pln" class="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label for="bentuk_bangunan" class="block text-sm font-medium text-gray-700">
                Bentuk Bangunan
              </label>
              <input type="text" name="bentuk_bangunan" id="bentuk_bangunan" class="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label for="area_pemasangan" class="block text-sm font-medium text-gray-700">
                Area Pemasangan
              </label>
              <input type="text" name="area_pemasangan" id="area_pemasangan" class="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label for="Nama" class="block text-sm font-medium text-gray-700">
                Nama
              </label>
              <input type="text" name="daya_pln" id="daya_pln" class="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label for="Handphone" class="block text-sm font-medium text-gray-700">
                Handphone / WA
              </label>
              <input type="text" name="bentuk_bangunan" id="bentuk_bangunan" class="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label for="Email" class="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input type="text" name="area_pemasangan" id="area_pemasangan" class="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div class="col-span-3">
              <label for="alamat" class="block text-sm font-medium text-gray-700">
                Alamat Lengkap
              </label>
              <textarea name="alamat" id="alamat" rows="4" class="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
            </div>
          </div>
          <button type="submit" class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 justify-start">
            Kirim
          </button>
        </form>
      </div>
    </>
  );
};

export default FormData;
