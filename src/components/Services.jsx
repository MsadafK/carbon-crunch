import React from "react";
import EcoFriendlyComputerImage from "../assets/ecoFriendlyComputer.png";
import ServiceCard from "./ServiceCard";
import downArrow from "../assets/downarrow.svg";

const Services = () => {
  const serviceDataObj = [
    {
      id: "01",
      title: "GHG Accounting",
      text: "We provide GHG accounting services, measuring and reporting Scope 1, 2, and 3 emissions. Our process ensures compliance and helps organizations track and reduce their carbon footprint.",
    },
    {
      id: "02",
      title: "GHG Accounting",
      text: "We provide GHG accounting services, measuring and reporting Scope 1, 2, and 3 emissions. Our process ensures compliance and helps organizations track and reduce their carbon footprint.",
    },
  ];

  return (
    <section className="p-4 xl:p-0">
      {/* title & text container */}
      <div className="flex flex-col gap-4">
        <h5 className="font-semibold text-green ml-4 xl:ml-10 xl:ml-[53%]">
          OUR SERVICES
        </h5>
        <p className="font-bold text-2xl xl:text-4xl xl:ml-[51%]">
          What do <span className="text-yellow">we do</span>?
        </p>
        {/* grid container */}
        <div className="p-4 flex flex-col gap-4 xl:p-0 xl:mt-4 xl:grid xl:grid-cols-2 xl:gap-8">
          {/* image div */}
          <div className="xl:w-[75%] xl:mx-auto flex justify-center">
            <img src={EcoFriendlyComputerImage} alt="" />
          </div>
          {/* card div container */}
          <div className="flex flex-col gap-4 relative md:grid md:grid-cols-2 md:gap-8 xl:gap-4 xl:grid xl:grid-cols-1 xl:gap-8">
            {serviceDataObj.map((card) => (
              <ServiceCard key={card.id} serviceData={card} />
            ))}
            <img
              className="w-[15%] absolute -bottom-[3.5%] right-[35%] transform -translate-x-[50%] md:w-[5%] md:right-[45%] md:-bottom-[10%] xl:-bottom-[2.5%] animate-bounce cursor-pointer"
              src={downArrow}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
