import React from "react";

const HeadingWithBackground = ({ text, bgImage, className, showHeading = true, showParagraph = true }) => {
  return (
    <div className={`h-64 flex flex-col justify-center items-center ${className} ${bgImage ? "bg-cover bg-center" : "bg-gray-200"}`} style={bgImage ? { backgroundImage: `url(${bgImage})` } : {}}>
      {showHeading && <h1 className="text-4xl font-bold ">{text}</h1>}
      {showParagraph && <p className="text-base text-gray-700 mt-2">{text}</p>}
    </div>
  );
};

export default HeadingWithBackground;
