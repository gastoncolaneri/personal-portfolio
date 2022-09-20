import { spanishData } from "../../../data/data";
import Link from "@mui/material/Link";

import "./navbarList.css";

const NavbarList = () => {
  return (
    <div className="navbar__list">
      {spanishData?.navList.map((item) => {
        return (
          <Link href="#" underline="none" className="navbar__item"  color="#fff" >
            {item}
          </Link>
        );
      })}
    </div>
  );
};

export default NavbarList;
