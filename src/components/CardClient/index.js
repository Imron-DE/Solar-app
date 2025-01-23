import React from "react";
import Image from "next/image";
import Button from "../atoms/Button";
const CardClient = () => {
  return (
    <>
      <div class="flex flex-col items-center justify-center text-center bg-white py-16 px-4">
        <h1 class="text-2xl font-bold text-center">Klien Kami</h1>

        <div class="flex overflow-x-auto space-x-8 py-4 justify-center">
          <div class="flex-shrink-0">
            <Image src="https://shams.id/wp-content/uploads/2022/10/Untitled-3-04.png" alt="Masplene" class="w-40 h-30" width={100} height={100} />
          </div>
          <div class="flex-shrink-0">
            <Image src="https://shams.id/wp-content/uploads/2022/10/Untitled-3-02.png" alt="Astra" class="w-40 h-30" width={100} height={100} />
          </div>
          <div class="flex-shrink-0">
            <Image src="https://shams.id/wp-content/uploads/2022/10/Untitled-3-03-1.png" alt="Jasamarga" class="w-40 h-30" width={100} height={100} />
          </div>

          <div class="flex-shrink-0">
            <Image src="https://shams.id/wp-content/uploads/2022/10/Untitled-3-04.png" alt="Masplene" class="w-40 h-30" width={100} height={100} />
          </div>
          <div class="flex-shrink-0">
            <Image src="https://shams.id/wp-content/uploads/2022/10/Untitled-3-02.png" alt="Astra" class="w-40 h-30" width={100} height={100} />
          </div>
          <div class="flex-shrink-0">
            <Image src="https://shams.id/wp-content/uploads/2022/10/Untitled-3-03-1.png" alt="Jasamarga" class="w-40 h-30" width={100} height={100} />
          </div>
        </div>

        <div class="flex justify-center mt-4">
          <Button buttonClassname="bg-orange-500 hover:bg-orange-700 text-white py-2 px-4 rounded-md"> Lebih Banyak Lagi</Button>
        </div>
      </div>
    </>
  );
};

export default CardClient;
