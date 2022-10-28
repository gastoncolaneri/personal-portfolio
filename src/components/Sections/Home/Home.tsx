import { useState, useEffect } from "react";
import { CardMedia, Typography, Box } from "@mui/material";
import Typewriter from "typewriter-effect";
import { IListItems } from "interfaces/sections/navbar";
import { homeLayout, roles } from "utils/constants";

import "./home.css";

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
      .typeString(roles[1])
      .pauseFor(1500)
      .deleteAll()
      .typeString(roles[2])
      .pauseFor(1500)
      .deleteAll()
      .typeString(roles[3])
      .pauseFor(1500)
      .start();
  };

  return (
    <div id={id} className="container">
      <CardMedia
        component="img"
        image={require("assets/backgroundGif.gif")}
        className="background__home"
      />
      <Box className="text__container" sx={homeLayout}>
        <Typography variant="h5" className="mb-20">
          Bienvenido!
        </Typography>
        <Box
          className="d-flex align-center justify-center"
          sx={{ flexDirection: { xs: "column", sm: "row" } }}
        >
          <span className="mr-10 home__text">Soy</span>
          <Typewriter
            onInit={typeWriterInit}
            options={{
              loop: true,
              autoStart: true,
              delay: 80,
            }}
          />
        </Box>
      </Box>
    </div>
  );
};

export default Home;
