import Navbar from "../../components/Navbar";
import {
  AboutMe,
  Contact,
  Home,
  Portfolio,
  Resume,
  Footer,
} from "../../components/Sections";

import "./mainPage.css";

const MainPage = () => {
  return (
    <div className="main__container">
      <div className="left__block">
        <Navbar />
      </div>
      <div className="right__block">
        <Home id="home" />
        <AboutMe id="about" />
        <Resume id="resume" />
        <Portfolio id="portfolio" />
        <Contact id="contact" />
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
