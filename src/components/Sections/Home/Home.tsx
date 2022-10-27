import { useState, useEffect } from "react";
import { CardMedia, Typography } from "@mui/material";
import Typewriter from "typewriter-effect";
import { IListItems } from "../../../interfaces/navbar/listItems";

import "./home.css";
import { roles } from "../../../utils/constants";

const Home = ({ id }: IListItems) => {
  const [roleName, setRoleName] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRoleName(roles[0].slice(0, roleName.length + 1));
    }, 100);
    return () => clearTimeout(timeout);
  }, [roleName]);

  const typeWriterInit = (typewriter: any) => {
    typewriter
      .typeString(roles[0])
      .pauseFor(1500)
      .deleteAll()
      .pauseFor(500)
      .typeString(roles[1])
      .pauseFor(1500)
      .deleteAll()
      .pauseFor(500)
      .typeString(roles[2])
      .pauseFor(1500)
      .start();
  };

  return (
    <div id={id} className="container">
      <CardMedia
        component="img"
        image={require("../../../assets/backgroundGif.gif")}
        className="background__home"
      />
      <div className="text__container">
        <Typography variant="h4" className="mb-20">
          Bienvenido!
        </Typography>
        <Typography variant="h2" className="mb-20">
          Mi nombre es Gastón Colaneri
        </Typography>
        <div>
          <Typewriter
            onInit={typeWriterInit}
            options={{
              loop: true,
              autoStart: true,
              delay: 80,
            }}
          />
        </div>

        {/* <div className="typewritter__container mb-20">
          <Typography variant="h4">
            Soy{" "}
            <span className="typewritter__text">desarrollador de software</span>
          </Typography>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
