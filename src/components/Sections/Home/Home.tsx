import { CardMedia, Typography } from "@mui/material";
import { IListItems } from "../../../interfaces/navbar/listItems";

import "./home.css";

const Home = ({ id }: IListItems) => {
  return (
    <div id={id} className="container">
      <CardMedia
        component="img"
        image={require("../../../assets/backgroundGif.gif")}
        className="background__home"
      />
      <div className="text__container">
        <Typography variant="h4" className="text mb-20">
          Bienvenido!
        </Typography>
        <Typography variant="h2" className="text mb-20">
          Mi nombre es Gastón Colaneri
        </Typography>
        <Typography variant="h4" className="text mb-20">
          Soy desarrollador de software
        </Typography>
      </div>
    </div>
  );
};

export default Home;
