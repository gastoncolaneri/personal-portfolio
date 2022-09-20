import Navbar from "../../components/Navbar";
import {
  AboutMe,
  Contact,
  Home,
  Portfolio,
  Resume,
} from "../../components/Sections";

import "./mainPage.css";

const MainPage = () => {
  return (
    <div className="main__container">
      <div className="left__block">
        <Navbar />
      </div>
      <div className="right__block">
        <Home />
        <AboutMe />
        <Resume />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
};

export default MainPage;
