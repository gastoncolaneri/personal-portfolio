import { Box, Fab } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
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
        <Fab aria-label="top" className="fab__button" href={"#home"}>
          <ArrowUpwardIcon />
        </Fab>
      </Box>
    </Box>
  );
};

export default MainPage;
