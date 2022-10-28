import { ImageList } from "@mui/material";
import { spanishData } from "data";
import { IListItems } from "interfaces/sections/navbar";
import TitleSections from "components/TitleSections";
import Project from "./components/Project";
import { portfolioLayout } from "utils/constants";

const Portfolio = ({ id }: IListItems) => {
  return (
    <div id={id} className="sections background-1">
      <TitleSections
        fadedTitle={spanishData?.navList[3].title}
        title={spanishData?.subNavList[2]}
      />
      <ImageList gap={20} className="section__container" sx={portfolioLayout}>
        {spanishData?.portfolio.map((item, index) => (
          <Project item={item} index={index} key={item?.name} />
        ))}
      </ImageList>
    </div>
  );
};

export default Portfolio;
