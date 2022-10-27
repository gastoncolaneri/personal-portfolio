import { useState, useEffect, useRef } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";
import { spanishData } from "data";
import { INavbarList } from "interfaces/sections/navbar";

import "./navbarList.css";

const NavbarList = ({ setIsOpenDrawer }: INavbarList) => {
  const [itemSelected, setItemSelected] = useState<number>(0);

  const onChange = () => {
    return true;
  };

  const observer = new IntersectionObserver(onChange, { threshold: [0.5] });

  const scrollWatcher = () => {
    const homeSection = document.getElementById("home");
    const aboutSection = document.getElementById("about");
    const resumeSection = document.getElementById("resume");
    const portfolioSection = document.getElementById("portfolio");
    const contactSection = document.getElementById("contact");
    homeSection && observer.observe(homeSection);
    aboutSection && observer.observe(aboutSection);
    resumeSection && observer.observe(resumeSection);
    portfolioSection && observer.observe(portfolioSection);
    contactSection && observer.observe(contactSection);
  };

  useEffect(() => {
    scrollWatcher();
  }, []);

  return (
    <Router>
      <nav className="navbar__list">
        {spanishData?.navList.map((item, index) => {
          return (
            <Link
              to={`#${item?.id}`}
              onClick={() => {
                setIsOpenDrawer && setIsOpenDrawer(false);
                setItemSelected(index);
              }}
              className={`navbar__item ${itemSelected === index && "selected"}`}
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
