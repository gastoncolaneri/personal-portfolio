import "./navbar.css";
import NavbarFooter from "./NavbarFooter";
import NavbarImage from "./NavbarImage";
import NavbarList from "./NavbarList";

const Navbar = () => {
  return (
    <div className="navbar__container">
      <NavbarImage />
      <NavbarList />
      <NavbarFooter />
    </div>
  );
};

export default Navbar;
