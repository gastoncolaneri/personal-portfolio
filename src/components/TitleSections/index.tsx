import { Typography } from "@mui/material";
import { ITitleSections } from "interfaces";
import { backTitleLayout, mainTitleLayout } from "utils/constants";

import "./titleSections.css";

const TitleSections = ({ title, fadedTitle }: ITitleSections) => {
  return (
    <div className="d-flex relative justify-center">
      <Typography className="title font-bolder" sx={mainTitleLayout}>
        {title}
      </Typography>
      <Typography className="fadedTitle font-bolder" sx={backTitleLayout}>
        {fadedTitle}
      </Typography>
    </div>
  );
};

export default TitleSections;
