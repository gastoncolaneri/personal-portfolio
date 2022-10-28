import { Box } from "@mui/material";
import Navbar from "components/Navbar";
import {
  AboutMe,
  Contact,
  Home,
  Portfolio,
  Resume,
  Footer,
} from "components/Sections";
import { navbarLayout } from "utils/constants";

import "./mainPage.css";

const MainPage = () => {
  return (
    <Box className="main__container">
      <Box className="left__block" sx={navbarLayout}>
        <Navbar customClassname="avatar__navbar" />
      </Box>

      <Box className="right__block">
        <Home id="home" />
        <AboutMe id="about" />
        <Resume id="resume" />
        <Portfolio id="portfolio" />
        <Contact id="contact" />
        <Footer />
      </Box>
    </Box>
  );
};

export default MainPage;
