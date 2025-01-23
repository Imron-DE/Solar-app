import Button from "@/components/atoms/Button";
import React from "react";

const About = () => {
  return (
    <>
      <section class="flex flex-col items-center justify-center text-center bg-white py-16 px-4">
        <div>
          <h1 class="text-3xl font-bold mb-4">Shams Energy</h1>
          <p class="text-gray-700 mb-6">Shams Energy, sebagai ahlinya dalam energi terbarukan, hadir dengan solusi lengkap dari konstruksi hingga peralatan panel surya, dengan fokus utama pada kualitas dan keberlanjutan.</p>
          <Button buttonClassname="bg-orange-500 hover:bg-orange-700 text-white py-2 px-4 rounded-md"> Tentang Kami</Button>
        </div>
      </section>
    </>
  );
};

export default About;
