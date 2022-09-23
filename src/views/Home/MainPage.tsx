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
        <Home id="homeItem" />
        <AboutMe id="aboutMeItem" />
        <Resume id="resumeItem" />
        <Portfolio id="portfolioItem" />
        <Contact id="contactItem" />
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
