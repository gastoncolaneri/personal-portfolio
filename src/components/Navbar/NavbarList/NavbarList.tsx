import { useState, useEffect } from "react";
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
      <nav className="d-flex flex-column justify-center align-center">
        {spanishData?.navList.map((item, index) => {
          return (
            <Link
              to={`#${item?.id}`}
              onClick={() => {
                setIsOpenDrawer && setIsOpenDrawer(false);
                setItemSelected(index);
                console.log(window.location.hash);
                window.location.hash = `#${item?.id}`;
                console.log(window.location.hash);
              }}
              className={`navbar__item text-grey mb-30 font-bolder ${
                itemSelected === index && "text-green"
              }`}
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
