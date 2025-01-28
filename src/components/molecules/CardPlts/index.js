import React from "react";
import Image from "next/image";
import Button from "@/components/atoms/Button";
import Link from "next/link";

const CardPlts = ({ image, title, description, Buttontext, href }) => {
  return (
    <div className="bg-white rounded-lg p-6 max-w-sm mx-auto hover:shadow-2xl transition-shadow duration-300">
      <Image src={image} alt="Card image" width={300} height={300} className="rounded-lg mb-4 w-full h-64 object-cover" />
      <h3 className="text-2xl font-semibold text-gray-800 text-center mb-2">{title}</h3>
      <p className="text-gray-600 text-center text-sm mb-4">{description}</p>
      <Link href={href}>
        <Button buttonClassname="w-full py-3 bg-orange-500 text-white text-sm font-semibold rounded-lg hover:bg-orange-600 transition duration-300">{Buttontext}</Button>
      </Link>
    </div>
  );
};

export default CardPlts;
