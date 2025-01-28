import React, { useRef } from "react";
import Image from "next/image";

const HeroSection = () => {
  const sliderRef = useRef(null);

  const images = [
    "https://shams.id/wp-content/uploads/2024/07/Image-carousel-web-shams-05.png",
    "https://shams.id/wp-content/uploads/2024/07/Image-carousel-web-shams-04-1.png",
    "https://shams.id/wp-content/uploads/2024/07/Image-carousel-web-shams-02.png",
    "https://shams.id/wp-content/uploads/2024/07/Image-carousel-web-shams-01-1.png",
  ];

  const moveSlide = (direction) => {
    const slider = sliderRef.current;
    const slideWidth = slider.offsetWidth;

    if (direction === "left") {
      slider.scrollLeft -= slideWidth;
    } else if (direction === "right") {
      slider.scrollLeft += slideWidth;
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div ref={sliderRef} className="flex w-full h-full overflow-x-scroll scroll-smooth transition-transform duration-500">
        {images.map((src, index) => (
          <div key={index} className="relative flex-shrink-0 w-full h-full">
            <Image src={src} alt={`Panel Surya ${index + 1}`} layout="fill" objectFit="cover" />
          </div>
        ))}
      </div>

      {/* Tombol Panah */}
      <button onClick={() => moveSlide("left")} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-orange-500 transition-colors">
        ❮
      </button>
      <button onClick={() => moveSlide("right")} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-orange-500 transition-colors">
        ❯
      </button>
    </section>
  );
};

export default HeroSection;
