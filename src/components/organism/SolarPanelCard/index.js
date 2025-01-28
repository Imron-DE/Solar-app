import React from "react";
import Image from "next/image";
import Button from "@/components/atoms/Button";

const SolarPanelCard = () => {
  return (
    <>
      <section className="container mx-auto py-16">
        <div className="flex flex-row justify-between gap-8 overflow-x-auto">
          <div className="flex flex-col items-center">
            <Image src="/images/logoproduct1.png" alt="SolarQuest" width={200} height={100} className="mx-auto" />
            <Button buttonClassname="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-4">See Product</Button>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/images/2.png" alt="SolarQuest" width={200} height={100} className="mx-auto" />
            <Button buttonClassname="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-4">See Product</Button>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/images/3.png" alt="SolarQuest" width={200} height={100} className="mx-auto" />
            <Button buttonClassname="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-4">See Product</Button>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/images/4.png" alt="SolarQuest" width={200} height={100} className="mx-auto" />
            <Button buttonClassname="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-4">See Product</Button>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/images/5.png" alt="SolarQuest" width={200} height={100} className="mx-auto" />
            <Button buttonClassname="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-4">See Product</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SolarPanelCard;
