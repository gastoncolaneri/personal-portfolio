import { ImageList } from "@mui/material";
import { spanishData } from "data";
import { IListItems } from "interfaces/sections/navbar";
import TitleSections from "components/TitleSections";
import Project from "./components/Project";

const Portfolio = ({ id }: IListItems) => {
  return (
    <div id={id} className="sections background-1">
      <TitleSections
        fadedTitle={spanishData?.navList[3].title}
        title={spanishData?.subNavList[2]}
      />
      <ImageList
        gap={20}
        className="section__container"
        sx={{
          display: { xs: "flex", sm: "grid" },
          flexDirection: { xs: "column" },
          gridTemplateColumns: { xs: "none", sm: "repeat(3, 1fr) !important" },
        }}
      >
        {spanishData?.portfolio.map((item, index) => (
          <Project item={item} index={index} />
        ))}
      </ImageList>
    </div>
  );
};

export default Portfolio;
