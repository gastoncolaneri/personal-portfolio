import { HashLink as Link } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";
import { spanishData } from "../../../data/data";

import "./navbarList.css";

const NavbarList = () => {
  return (
    <Router>
      <nav className="navbar__list">
        {spanishData?.navList.map((item) => {
          return (
            <Link
              to={`#${item?.id}`}
              className="navbar__item"
              smooth
              key={item?.id}
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
