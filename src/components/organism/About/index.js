import Button from "@/components/atoms/Button";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      <section className="relative w-full h-[50vh] overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src="/images/about.jpg"
            alt="Astra"
            width={1000}
            height={1000}
            className="w-full h-full object-cover mx-auto opacity-20" // Menggunakan object-cover untuk memastikan gambar mengisi kontainer
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-black px-4">
            <h1 className="text-3xl font-bold mb-4">Shams Energy</h1>
            <p className="text-black mb-6">Shams Energy, sebagai ahlinya dalam energi terbarukan, hadir dengan solusi lengkap dari konstruksi hingga peralatan panel surya, dengan fokus utama pada kualitas dan keberlanjutan.</p>
            <a href="/about">
              <Button buttonClassname="bg-orange-500 hover:bg-orange-700 text-white py-2 px-4 rounded-md">Tentang Kami</Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
