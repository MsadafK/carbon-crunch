import React from "react";

const StatCard = ({ stat }) => {
  const { title, text, bgColor, titleColor, textColor } = stat;

  return (
    <div
      className={`shadow-md rounded-xl p-4 ${bgColor} flex flex-col items-start gap-2 transition duration-300 hover:scale-105 cursor-pointer`}
    >
      <h2 className={`text-xl font-bold ${titleColor} xl:text-4xl`}>{title}</h2>
      <p className={`text-sm xl:text-[15px] ${textColor}`}>{text}</p>
    </div>
  );
};

export default StatCard;
