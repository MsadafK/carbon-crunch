import React from "react";
import FeatureCard from "./FeatureCard";
import firstImg from "../assets/GroupOne.svg";
import secondImg from "../assets/GroupTwo.svg";
import forthImg from "../assets/GroupFour.svg";
import fifthImg from "../assets/GroupFive.svg";

const Features = () => {
  const featureCardObj = [
    {
      id: "01",
      imgUrl: firstImg,
      title: "Automated Data Collection",
      text: "Our system automates carbon data collection, saving time, reducing errors, and ensuring accurate sustainability reporting.",
    },
    {
      id: "02",
      imgUrl: secondImg,
      title: "Monitoring & Reporting",
      text: "Effortlessly track and report carbon emissions with automated monitoring, ensuring accuracy and compliance in sustainability reporting.",
    },
    {
      id: "03",
      imgUrl: secondImg,
      title: "Monitoring & Reporting",
      text: "Effortlessly track and report carbon emissions with automated monitoring, ensuring accuracy and compliance in sustainability reporting.",
    },
    {
      id: "04",
      imgUrl: forthImg,
      title: "Simplified Certification Process",
      text: "Streamline your certification process with our simplified, automated solution, reducing complexity and ensuring faster compliance.",
    },
    {
      id: "05",
      imgUrl: fifthImg,
      title: "AI-Driven Insights",
      text: "Leverage AI-driven insights to uncover hidden patterns, optimize sustainability strategies, and drive impactful decision-making.",
    },
    {
      id: "06",
      imgUrl: fifthImg,
      title: "AI-Driven Insights",
      text: "Leverage AI-driven insights to uncover hidden patterns, optimize sustainability strategies, and drive impactful decision-making.",
    },
  ];

  return (
    <section className="p-4 flex flex-col items-start gap-4 xl:p-0 xl:gap-10">
      {/* title and text container */}
      <div className="flex flex-col items-start gap-4">
        <h3 className="font-semibold text-green ml-4 xl:ml-10">FEATURES</h3>
        <p className="text-2xl font-bold xl:text-4xl">
          <span className="text-yellow">WHY </span>CARBON CRUNCH?
        </p>
      </div>
      {/* card grid container */}
      <div className="bg-veryLightGray p-4 flex flex-col gap-4 rounded-xl md:grid md:grid-cols-2 md:gap-8 md:p-8 xl:grid-cols-3">
        {featureCardObj.map((card) => (
          <FeatureCard key={card.id} cardData={card} />
        ))}
      </div>
    </section>
  );
};

export default Features;
