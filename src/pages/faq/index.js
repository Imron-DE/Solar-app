import Layout from "@/components/templates/Layout";
import React from "react";
import Image from "next/image";
import FAQItem from "@/components/organism/FaqItem";
const faqs = [
  {
    question: "APA ITU PLTS?",
    answer:
      "PLTS adalah Pembangkit Listrik Tenaga Surya, yaitu sebuah sistem kelistrikan yang terdiri dari perangkat Panel Surya, Inverter, Baterai, dan beberapa perangkat tambahan lainnya. PLTS memanfaatkan sinar matahari sebagai sumber listrik untuk digunakan dalam kehidupan sehari-hari.",
  },
  {
    question: "ADA BERAPA SISTEM PLTS?",
    answer: "Ada 3 sistem PLTS yaitu: PLTS ON GRID, PLTS OFF GRID, dan PLTS HYBRID.",
  },
  {
    question: "APA PERBEDAAN PLTS ONGRID, OFF GRID DAN HYBRID?",
    answer:
      "PLTS ON GRID: Masih tersambung ke jaringan listrik konvensional (PLN), terdiri dari 2 komponen utama yaitu panel surya dan inverter.\n\nPLTS OFF GRID: Bersifat mandiri/independen (tidak tersambung ke jaringan konvensional), terdiri dari 3 komponen utama yaitu panel surya, inverter, dan baterai sebagai media penyimpanan energi listrik yang digunakan saat mendung dan malam hari.\n\nPLTS HYBRID: Gabungan dari PLTS On Grid dan Off Grid, masih tersambung dengan jaringan konvensional (PLN), tetapi memiliki baterai sebagai cadangan daya untuk membackup ketika listrik padam.",
  },
  {
    question: "SISTEM PLTS APA YANG COCOK UNTUK SAYA GUNAKAN?",
    answer:
      "Jika rumah Anda berada di kota besar dan jarang mengalami listrik padam, maka opsi panel surya On Grid menjadi pilihan terbaik.\n\nJika rumah Anda berada di kota dan memerlukan listrik yang terus menyala, opsi PLTS Hybrid cocok untuk Anda gunakan karena terdapat backup daya di baterai sebagai antisipasi ketika ada pemadaman listrik.\n\nJika Anda berada di daerah terpencil dan belum ada akses jaringan listrik yang memadai, maka opsi PLTS Off Grid menjadi pilihan terbaik, karena bersifat mandiri dan fleksibel.",
  },
  {
    question: "APA YANG TERJADI PADA PLTS SAAT CUACA MENDUNG ATAU HUJAN?",
    answer:
      "PLTS bekerja dengan cara mengubah sinar matahari menjadi energi listrik. Jadi, jika cuaca hujan atau mendung, selama masih ada sinar matahari, PLTS tetap akan menghasilkan listrik, tetapi produksinya tidak optimal seperti saat cuaca cerah.",
  },
  {
    question: "BERAPA LAMA PLTS DAPAT BERTAHAN?",
    answer: "Umur dari panel surya sendiri bisa sampai 20-25 tahun. Setelah itu, panel surya tidak langsung mati, tetapi masih tetap bisa digunakan dengan catatan efisiensinya sudah berkurang jauh.",
  },
  {
    question: "BAGAIMANA CARA PERAWATAN PLTS?",
    answer:
      "Perawatan PLTS cukup mudah:\n1. Bersihkan Panel surya dengan air bersih dan kain lembut setiap 6 bulan sekali.\n2. Pantau produksi panel surya melalui aplikasi monitoring.\n3. Lakukan pemeriksaan profesional setidaknya 1 tahun sekali untuk memastikan sistem bekerja secara optimal.",
  },
];

const faq = () => {
  return (
    <Layout>
      <div className="relative w-full h-screen flex items-center justify-center bg-black">
        <Image src="/images/visimisi.png" alt="PLTS On Grid" layout="fill" className="object-cover opacity-60" />
        <h1 className="absolute text-5xl font-bold text-white text-center px-4">FAQ</h1>
      </div>

      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        {faqs.map((faq, index) => (
          <div key={index} className="max-w-2xl w-full bg-white shadow-md rounded-lg p-6 mb-4">
            <FAQItem question={faq.question} answer={faq.answer} />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default faq;
