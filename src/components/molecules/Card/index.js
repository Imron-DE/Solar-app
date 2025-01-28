import React from "react";
import Image from "next/image";

const Card = ({ image, title, description }) => {
  return (
    <div class="bg-white flex flex-col justify-center rounded-lg shadow-md p-6 w-[380px] h-[450px] hover:shadow-xl transition-shadow duration-300 ">
      <div class="flex justify-center mb-4">
        <Image src={image} alt="Card image" width={300} height={300} className="rounded-lg w-40 h-36 object-cover" />
      </div>
      <h2 class="text-2xl font-bold text-gray-800 mb-10 text-center">{title}</h2>
      <p class="text-gray-500 text-lg text-center mb-5">{description}</p>
    </div>
  );
};

export default Card;
