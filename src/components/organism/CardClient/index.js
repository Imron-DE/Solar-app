import React, { useState } from "react";
import Image from "next/image";
import Button from "../../atoms/Button";

const CardClient = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const clientData = [
    {
      id: 1,
      src: "https://shams.id/wp-content/uploads/2022/10/Untitled-3-04.png",
      alt: "Masplene",
    },
    {
      id: 2,
      src: "https://shams.id/wp-content/uploads/2022/10/Untitled-3-02.png",
      alt: "Astra",
    },
    {
      id: 3,
      src: "https://shams.id/wp-content/uploads/2022/10/Untitled-3-03-1.png",
      alt: "Jasamarga",
    },
    {
      id: 4,
      src: "https://shams.id/wp-content/uploads/2022/10/Untitled-3-04.png",
      alt: "Masplene",
    },
    {
      id: 5,
      src: "https://shams.id/wp-content/uploads/2022/10/Untitled-3-02.png",
      alt: "Astra",
    },
    {
      id: 6,
      src: "https://shams.id/wp-content/uploads/2022/10/Untitled-3-03-1.png",
      alt: "Jasamarga",
    },
  ];

  // Menampilkan slide berdasarkan currentSlide
  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="flex flex-col items-center justify-center text-center bg-white py-16 px-4">
      <h1 className="text-2xl font-bold text-center mb-8">Klien Kami</h1>

      <div className="relative w-full overflow-hidden">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {clientData.map((client) => (
            <div key={client.id} className="flex-shrink-0 w-full sm:w-1/3 lg:w-1/4 px-4">
              <Image src={client.src} alt={client.alt} className="w-full h-40 object-contain mx-auto" width={100} height={100} />
            </div>
          ))}
        </div>

        {/* Navigasi titik */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4 flex space-x-2">
          {clientData.map((_, index) => (
            <button key={index} className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-orange-500" : "bg-gray-400"}`} onClick={() => handleDotClick(index)}></button>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <Button buttonClassname="bg-orange-500 hover:bg-orange-700 text-white py-2 px-4 rounded-md">Lebih Banyak Lagi</Button>
      </div>
    </div>
  );
};

export default CardClient;
