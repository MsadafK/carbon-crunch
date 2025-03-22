import React from "react";

const Main = ({ children }) => {
  return (
    <main className="flex flex-col gap-12 my-12 max-w-[90%] mx-auto md:gap-16 xl:max-w-[100%] xl:max-w-[1320px] xl:gap-40 xl:my-20">
      {children}
    </main>
  );
};

export default Main;
