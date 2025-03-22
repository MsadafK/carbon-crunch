import React from "react";

const DesktopNavbar = () => {
  return (
    <div className="hidden lg:block lg:flex lg:justify-between lg:items-center lg:w-[50%] flex-grow">
      <nav>
        <ul className="flex gap-4 text-sm font-semibold text-slate xl:gap-10">
          <li className="transition delay-150 duration-300 ease-in-out hover:translate-y-1 hover:scale-110 hover:text-green">
            <a href="#">Home</a>
          </li>
          <li className="transition delay-150 duration-300 ease-in-out hover:translate-y-1 hover:scale-110 hover:text-green">
            <a href="#">Services</a>
          </li>
          <li className="transition delay-150 duration-300 ease-in-out hover:translate-y-1 hover:scale-110 hover:text-green">
            <a href="#">Blog</a>
          </li>
          <li className="transition delay-150 duration-300 ease-in-out hover:translate-y-1 hover:scale-110 hover:text-green">
            <a href="#">About Us</a>
          </li>
          <li className="transition delay-150 duration-300 ease-in-out hover:translate-y-1 hover:scale-110 hover:text-green">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>

      <div className="flex gap-4">
        <button className="font-semibold bg-lightGreen text-green px-8 py-1 rounded-md transition delay-150 duration-300 ease-in-out hover:translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:text-white cursor-pointer">
          Login
        </button>
        <button className="font-semibold bg-green px-8 py-1 rounded-md transition delay-150 duration-300 ease-in-out hover:translate-y-1 hover:scale-110 hover:bg-red-200 cursor-pointer">
          Book Demo
        </button>
      </div>
    </div>
  );
};

export default DesktopNavbar;
