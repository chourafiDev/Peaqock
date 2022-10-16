import NavLinks from "./NavLinks";
import User from "./User";
import ResponsiveNav from "./ResponsiveNav";
import ToggleButton from "./ToggleButton";
import { useState } from "react";

const Index = () => {
  const [nav, setNav] = useState<boolean>(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav className="md:pl-20 pl-4">
        <div className="flex items-center justify-end gap-8 p-5 border-b">
          <NavLinks />
          <ToggleButton handleNav={handleNav} />
          <User />
        </div>
      </nav>
      <ResponsiveNav nav={nav} handelNav={handleNav} />
    </>
  );
};

export default Index;
