import "./home.css";

const Home = () => {
  return (
    <div className="main__container">
      <div className="left__block">
        <p style={{ color: "#c0c1c2" }}>Left block</p>
      </div>
      <div className="right__block">
        <img
          src={require("../../assets/backgroundGif.gif")}
          alt="backgroundGif"
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
};

export default Home;
