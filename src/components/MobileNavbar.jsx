import React from "react";

const MobileNavbar = ({ toggle }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-6 bg-white opacity-[0.90] py-10 w-full absolute ${
        toggle ? "right-[0]" : "-right-[100%]"
      } lg:hidden`}
    >
      {/* navbar */}
      <nav className={`w-1/2 md:w-1/3 `}>
        <ul
          className={`flex flex-col items-center gap-2 text-center md:gap-4 `}
        >
          <li className={`font-semibold border-b w-full pb-2 `}>
            <a href="#">Home</a>
          </li>
          <li className={`font-semibold border-b w-full pb-2 `}>
            <a href="#">Service</a>
          </li>
          <li className={`font-semibold border-b w-full pb-2`}>
            <a href="#">Blog</a>
          </li>
          <li className={`font-semibold border-b w-full pb-2 `}>
            <a href="#">About Us</a>
          </li>
          <li className={`font-semibold border-b w-full pb-2 `}>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      {/* buttons div */}
      <div className={`flex flex-col items-center gap-4 w-1/2 md:w-1/3 `}>
        <button className="font-semibold bg-lightGreen text-green w-full py-1 rounded-md">
          Login
        </button>
        <button className="font-semibold bg-green w-full py-1 rounded-md">
          Book Demo
        </button>
      </div>
    </div>
  );
};

export default MobileNavbar;
