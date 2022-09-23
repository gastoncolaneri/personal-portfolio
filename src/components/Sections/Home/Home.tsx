import { CardMedia, Typography } from "@mui/material";
import { IListItems } from "../../../interfaces/navbar/listItems";

import "./home.css";

const Home = ({ id }: IListItems) => {
  return (
    <div id={id} className="container">
      <CardMedia
        component="img"
        image={require("../../../assets/backgroundGif.gif")}
        sx={{
          width: "100%",
          height: "100vh",
          filter: "brightness(0.4) contrast(100%) grayscale(50%)",
        }}
      />
      <div className="text__container">
        <Typography variant="h4" className="text">
          Bienvenido!
        </Typography>
        <Typography variant="h2" className="text">
          Mi nombre es Gastón Colaneri
        </Typography>
        <Typography variant="h4" className="text">
          Soy desarrollador de software
        </Typography>
      </div>
    </div>
  );
};

export default Home;
