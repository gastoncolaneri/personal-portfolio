import { Typography } from "@mui/material";
import { ITitleSections } from "../../interfaces/sections/titleSections";
import { backTitleLayout, mainTitleLayout } from "../../utils/constants";

import "./titleSections.css";

const TitleSections = ({ title, fadedTitle }: ITitleSections) => {
  return (
    <div className="title__container">
      <Typography className="title" sx={mainTitleLayout}>
        {title}
      </Typography>
      <Typography className="fadedTitle" sx={backTitleLayout}>
        {fadedTitle}
      </Typography>
    </div>
  );
};

export default TitleSections;
