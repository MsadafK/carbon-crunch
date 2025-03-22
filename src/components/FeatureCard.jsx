import React from "react";

const FeatureCard = ({ cardData }) => {
  const { imgUrl, title, text } = cardData;
  return (
    <div className="shadow-md p-4 bg-white rounded-xl flex flex-col items-start gap-2 md:p-4 xl:pt-8 xl:pb-14 transition duration-300 hover:translate-x-4 cursor-pointer">
      <img src={imgUrl} alt="" />
      <h4 className="font-semibold text-lg">{title}</h4>
      <p className="text-sm">{text}</p>
    </div>
  );
};

export default FeatureCard;
