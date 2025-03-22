import { useState } from "react";
import logoIcon from "../assets/Company Logo 1.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <section className="relative xl:px-[4%]">
      <div className="p-4 flex items-center justify-between lg:gap-[20%] max-w-[1320] mx-auto xl:px-0 xl:py-10">
        <div className="flex items-center gap-2">
          <img src={logoIcon} alt="" />
          <span className="font-semibold text-xl">Carboncrunch</span>
        </div>
        <button className="lg:hidden" onClick={() => setToggle(!toggle)}>
          {toggle ? <IoClose size={25} /> : <GiHamburgerMenu size={20} />}
        </button>
        {/* desktop Navbar */}
        <DesktopNavbar />
      </div>
      {/* mobile Navbar */}
      <MobileNavbar toggle={toggle} />
    </section>
  );
};

export default Navbar;
