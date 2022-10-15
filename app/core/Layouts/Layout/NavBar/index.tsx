import { useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import NavBarButtons from "./NavBarButtons";
import ToggelButton from "./ToggleButton";
import ResponsiveNav from "./ResponsiveNav";

const NavBar = () => {
  const [nav, setNav] = useState<boolean>(false);

  const handelNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav className="fixed lg:pl-20 pl-5 top-0 w-full flex justify-between items-center z-40 bg-gray-opacity backdrop-blur-[5px]">
        <Logo />
        <div className="flex items-center gap-16">
          <NavLinks />
          <div className="lg:block hidden w-56">
            <NavBarButtons />
          </div>
          <ToggelButton handelNav={handelNav} />
        </div>
      </nav>
      <ResponsiveNav nav={nav} handelNav={handelNav} />
    </>
  );
};

export default NavBar;
