import { Box } from "@mui/material";
import { spanishData } from "data";
import { IListItems } from "interfaces/sections/navbar";
import { sectionsLayout } from "utils/constants";
import DownloadButton from "components/DownloadButton";
import TitleSections from "components/TitleSections";
import CardList from "./components/CardList";
import SkillsList from "./components/SkillsList";

import "./resume.css";

const Resume = ({ id }: IListItems) => {
  return (
    <div id={id} className="sections background-2">
      <TitleSections
        fadedTitle={spanishData?.navList[2].title}
        title={spanishData?.subNavList[1]}
      />
      <div className="resume__container section__container">
        <Box className="d-flex space-between" sx={sectionsLayout}>
          <CardList title="Experiencia laboral" data={spanishData?.jobs} />
          <CardList title="Educación" data={spanishData?.education} />
        </Box>
        <SkillsList data={spanishData?.skills} />
        <DownloadButton customClassname="button__skills" />
      </div>
    </div>
  );
};

export default Resume;
