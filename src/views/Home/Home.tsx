import Navbar from "../../components/Navbar";

import "./home.css";

const Home = () => {
  return (
    <div className="main__container">
      <div className="left__block">
        <Navbar />
      </div>
      <div className="right__block">
        <img
          src={require("../../assets/backgroundGif.gif")}
          alt="backgroundGif"
          style={{ width: "100%" }}
        />
        <div style={{ minHeight: "400px" }}>
          <p>Sobre mi</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
