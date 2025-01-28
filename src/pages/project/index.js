import Layout from "@/components/templates/Layout";
import React from "react";
import Image from "next/image";
import Button from "@/components/atoms/Button";

const projects = [
  {
    title: "Panel Surya On Grid 20.25 KWP",
    location: "Surabaya, Jawa Timur",
    videoUrl: "https://www.youtube.com/embed/KQB7RiZ9Rzw",
    id: 1,
  },
  {
    title: "PANEL SURYA ON GRID SISTEM 10.350 WATT PEAK | SURABAYA | JAWA TIMUR | SOLAR PANEL INDONESIA",
    location: "Tangerang, Banten",
    videoUrl: "https://www.youtube.com/embed/e2nqhhzj2Nk",
    id: 2,
  },
  {
    title: "PANEL SURYA ON GRID SISTEM 20.240 WATT PEAK | TEBET | SOLAR PANEL",
    location: "Tebet, Jakarta Selatan",
    videoUrl: "https://www.youtube.com/embed/tsHXfnF4SxA",
    id: 3,
  },
  {
    title: "PANEL SURYA ON GRID 10.000 WATT PEAK | JAKARTA | SURYA PANEL | SHAMS ENERGY",
    location: "Jakarta, DKI Jakarta",
    videoUrl: "https://www.youtube.com/embed/Lvgrf6cBmao",
    id: 4,
  },
  {
    title: "PANEL SURYA ON GRID 10.120 WATT PEAK | SEMARANG | SURYA PANEL | SHAMS ENERGY #0033",
    location: "Semarang, Jawa Tengah",
    videoUrl: "https://www.youtube.com/embed/ptYm5HjCvMg",
    id: 5,
  },
  {
    title: "PANEL SURYA ON GRID SISTEM 10.000 WATT PEAK STARBUCKS CIPONDOH TANGERANG",
    location: "Tangerang, Banten",
    videoUrl: "https://www.youtube.com/embed/sjBapnyKDSLg",
    id: 6,
  },
  {
    title: "PANEL SURYA OFF GRID SISTEM 3.6 KWP | PAPUA | INDONESIA",
    location: "Papua, Indonesia",
    videoUrl: "https://www.youtube.com/embed/xRd9DtsZagU",
    id: 7,
  },
  {
    title: "PANEL SURYA SISTEM TANPA BATERAI BERSAMA RAFFI AHMAD SULTAN ANDARA | PANEL SURYA ANTIMISKIN",
    location: "Jakarta, DKI Jakarta",
    videoUrl: "https://www.youtube.com/embed/HLYOp2dCAvI",
    id: 8,
  },
  {
    title: "PANEL SURYA ON GRID 7.600 WATT PEAK | SEMARANG | SURYA PANEL | SHAMS ENERGY #0019",
    location: "Semarang, Jawa Tengah",
    videoUrl: "https://www.youtube.com/embed/AJ5cyAQUrLw",
    id: 9,
  },
];

const Project = () => {
  return (
    <>
      <Layout>
        <section className="relative w-full h-[70vh] overflow-hidden">
          <div className="relative w-full h-full">
            <Image src="/images/project.png" alt="Astra" width={1000} height={1000} className="w-full h-full object-cover mx-auto" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[280%] text-center text-black px-4">
              <h1 className="text-4xl font-bold mb-4 text-white">PROJECT MAP SHAMS ENERGY</h1>
            </div>
          </div>
        </section>

        <div className="bg-gray-100 min-h-screen p-8">
          <h1 className="text-2xl font-bold text-center mb-8">Beberapa Project yang Telah Kami Kerjakan</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="bg-white shadow-lg rounded-md overflow-hidden">
                <div className="relative">
                  {/* Mengatur ukuran iframe */}
                  <iframe
                    className="w-full h-[300px]" // Mengatur tinggi video menjadi lebih seragam
                    src={project.videoUrl}
                    title={project.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-semibold">{project.title}</h2>
                  <p className="text-sm text-gray-600">{project.location}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Tombol untuk melihat lebih banyak */}
          <div className="flex justify-center items-center h-full mt-10">
            <a href="https://www.youtube.com/c/SHAMSENERGY" target="_blank" rel="noopener noreferrer">
              <Button buttonClassname="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">See More Project</Button>
            </a>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Project;
