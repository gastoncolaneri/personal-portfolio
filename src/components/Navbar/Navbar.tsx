import { INavbar } from "interfaces/sections/navbar";
import NavbarFooter from "components/Navbar/NavbarFooter";
import NavbarImage from "components/Navbar/NavbarImage";
import NavbarList from "components/Navbar/NavbarList";

import "./navbar.css";

const Navbar = ({ setIsOpenDrawer, customClassname }: INavbar) => {
  return (
    <div className="navbar__container">
      <NavbarImage customClassname={customClassname} />
      <NavbarList setIsOpenDrawer={setIsOpenDrawer} />
      <NavbarFooter />
    </div>
  );
};

export default Navbar;
