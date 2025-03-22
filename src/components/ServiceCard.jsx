import React from "react";

const ServiceCard = ({ serviceData }) => {
  const { title, text } = serviceData;

  return (
    <div className="rounded-lg p-4 bg-veryLightGray flex flex-col items-start gap-2 shadow-md xl:py-8 transition duration-300 hover:scale-102 cursor-pointer">
      <h6 className="font-bold text-2xl text-slate">{title}</h6>
      <p className="text-slate">{text}</p>
      <a
        className="text-sm text-green bg-lightGreen px-3 py-1 font-semibold my-3 "
        href="#"
      >
        See more details
      </a>
    </div>
  );
};

export default ServiceCard;
