import React from "react";
import Image from "next/image";
import Layout from "@/components/templates/Layout";

const About = () => {
  return (
    <>
      <Layout>
        {/* Bagian pertama dengan gambar */}
        <section className="relative w-full h-[60vh] overflow-hidden">
          <div className="relative w-full h-full">
            <Image src="/images/about1.png" alt="Astra" width={1920} height={1080} className="w-full h-full object-cover mx-auto" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-4">
              <h1 className="text-5xl font-bold">SERVICE TO EXCELLENT</h1>
            </div>
          </div>
        </section>

        {/* Bagian kedua dengan gambar dan teks */}
        <section>
          <div className="relative">
            <Image src="/images/about2.png" alt="PT Kusuma Energi Mentari" width={1920} height={1080} className="h-[160vh] w-full object-bottom overflow-hidden" />
            <div className="absolute top-[1%] left-1/2 transform -translate-x-1/2 text-left text-white px-2">
              <h1 className="text-3xl font-bold mb-4 text-orange-500 text-left">PT. Kusuma Energi Mentari</h1>
              <p className="text-black mb-4 text-left px-2 sm:px-8 md:px-16">
                Kebutuhan energi dunia sebagian besar masih dipenuhi melalui sumber-sumber energi tak terbarukan. Pemakaian sumber energi tak terbarukan ini perlu dikurangi, bukan hanya karena semakin berkurangnya serta semakin langkanya
                pasokan energi, tapi juga karena menimbulkan beberapa masalah besar untuk bumi kita, seperti pemanasan global, yang disebabkan oleh produksi gas karbon dioksida (CO2) hasil pembakaran bahan bakar.
                <br />
                <br />
                Oleh karena itu, Kami hadir memberikan solusi, menjawab dan memberikan alternatif sumber energi yang bersih dan ramah lingkungan. Kami PT Kusuma Energi Mentari dengan brand Shams Energy berdiri pada tahun 2018, adalah
                perusahaan yang berfokus pada bidang energi terbarukan, dengan spesialisasi panel surya. Kami menawarkan layanan EPC (Engineering Procurement Construction), O&M (Operation & Maintenance), serta jasa instalasi dan konstruksi
                sistem Pembangkit Listrik Tenaga Surya (PLTS) untuk sektor residensial, industri, dan komersial. Shams Energy juga menyediakan penjualan perangkat solar panel, inverter, baterai, serta perangkat pendukung lainnya. Dengan
                komitmen terhadap kualitas dan keberlanjutan, Shams Energy berupaya untuk menjadi pemimpin dalam solusi energi bersih dan efisien.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
