import React from "react";
import Layout from "../../components/templates/Layout";
import Image from "next/image";

const ShamService = () => {
  return (
    <>
      <Layout>
        <div className="w-full h-full ">
          <Image
            src="/images/shamservice.jpg"
            alt="PLTS On Grid"
            layout="intrinsic" // Menjaga aspect ratio
            width={1200} // Ukuran gambar sesuai kebutuhan
            height={800} // Ukuran gambar sesuai kebutuhan
            className="object-cover w-full h-full"
          />
        </div>
      </Layout>
    </>
  );
};

export default ShamService;
