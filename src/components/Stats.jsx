import React from "react";
import StatCard from "./StatCard";

const Stats = ({ className }) => {
  const statObj = [
    {
      id: "01",
      title: "98%",
      text: "Of CEOs agree sustainability is their responsibility",
      bgColor: "bg-[#3a3a3a]",
      titleColor: "text-[#ffffff]",
      textColor: "text-[#e2e2e2]",
    },
    {
      id: "02",
      title: "3X",
      text: "ESG high performers deliver a higher total shareholder return",
      bgColor: "bg-[#28b30e]",
      titleColor: "text-[#1e1e1e]",
      textColor: "text-[#1e1e1e]",
    },
    {
      id: "03",
      title: "37%",
      text: "Of the world's largest companies have a public net zero target. Nearly all are off track",
      bgColor: "bg-[#f5f5f8]",
      titleColor: "text-[#28b30e]",
      textColor: "text-[#28b30e]",
    },
    {
      id: "04",
      title: "18%",
      text: "Of companies are cutting emissions fast enough to reach net zero by 2050",
      bgColor: "bg-[#1e1e1e]",
      titleColor: "text-[#ffffff]",
      textColor: "text-[#e2e2e2]",
    },
  ];

  return (
    <section
      className={`flex flex-col gap-4 md:grid md:grid-cols-2 ${className} md:gap-8 xl:grid-cols-4`}
    >
      {statObj.map((stat) => (
        <StatCard key={stat.id} stat={stat} />
      ))}
    </section>
  );
};

export default Stats;
