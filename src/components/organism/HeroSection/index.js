import React from "react";

const HeroSection = () => {
  return (
    <>
      <section class="relative">
        <div class="relative overflow-hidden w-full h-[80vh]">
          <div class="flex transition-transform duration-1000 ease-in-out" id="slider">
            <img src="https://shams.id/wp-content/uploads/2024/07/Image-carousel-web-shams-05.png" alt="Panel Surya 1" class="w-full h-full object-cover" />
            <img src="https://shams.id/wp-content/uploads/2024/07/Image-carousel-web-shams-04-1.png" alt="Panel Surya 2" class="w-full h-full object-cover" />
            <img src="https://shams.id/wp-content/uploads/2024/07/Image-carousel-web-shams-02.png" alt="Panel Surya 3" class="w-full h-full object-cover" />
            <img src="https://shams.id/wp-content/uploads/2024/07/Image-carousel-web-shams-01-1.png" alt="Panel Surya 3" class="w-full h-full object-cover" />
          </div>

          <div class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 cursor-pointer" onclick="moveSlide(-1)">
            &#10094;
          </div>

          <div class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 cursor-pointer" onclick="moveSlide(1)">
            &#10095;
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
