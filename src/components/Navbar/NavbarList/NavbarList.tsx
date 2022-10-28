import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "@mui/material";
import { spanishData } from "data";
import { INavbarList } from "interfaces/sections/navbar";

import "./navbarList.css";

const NavbarList = ({ setIsOpenDrawer }: INavbarList) => {
  const [itemSelected, setItemSelected] = useState<number>(0);

  const handleClick = (index: number) => {
    setIsOpenDrawer && setIsOpenDrawer(false);
    setItemSelected(index);
  };

  return (
    <Router>
      <nav className="d-flex flex-column justify-center align-center">
        {spanishData?.navList.map((item, index) => {
          return (
            <Link
              href={`#${item?.id}`}
              onClick={() => handleClick(index)}
              className={`navbar__item text-grey mb-30 font-bolder ${
                itemSelected === index && "text-green"
              }`}
              key={item?.id}
              underline="none"
            >
              {item?.title}
            </Link>
          );
        })}
      </nav>
    </Router>
  );
};

export default NavbarList;
