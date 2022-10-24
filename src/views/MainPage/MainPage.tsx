import { Box } from "@mui/material";
import Navbar from "../../components/Navbar";
import CollapseNavbar from "../../components/Navbar/CollapseNavbar/CollapseNavbar";
import {
  AboutMe,
  Contact,
  Home,
  Portfolio,
  Resume,
  Footer,
} from "../../components/Sections";
import { collapseNavbarLayout, navbarLayout } from "../../utils/constants";

import "./mainPage.css";

const MainPage = () => {
  return (
    <Box className="main__container">
      <Box className="left__block" sx={navbarLayout}>
        <Navbar />
      </Box>
      <Box sx={collapseNavbarLayout}>
        <CollapseNavbar />
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
