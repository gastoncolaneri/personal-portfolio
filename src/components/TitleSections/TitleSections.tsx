import { Typography } from "@mui/material";
import { ITitleSections } from "../../interfaces/sections/titleSections";

import "./titleSections.css";

const TitleSections = ({ mainTitle, backgroundTitle }: ITitleSections) => {
  return (
    <div className="title__container">
      <Typography variant="h1" gutterBottom className="mainTitle">
        {mainTitle}
      </Typography>
      <Typography className="backgroundTitle">{backgroundTitle}</Typography>
    </div>
  );
};

export default TitleSections;
