import { ImageList } from "@mui/material";
import { spanishData } from "../../../data/data";
import { IListItems } from "../../../interfaces/navbar/listItems";
import TitleSections from "../../TitleSections/TitleSections";
import Project from "./components/Project/Project";

const Portfolio = ({ id }: IListItems) => {
  return (
    <div id={id} className="sections background-1">
      <TitleSections
        mainTitle={spanishData?.navList[3].title}
        backgroundTitle={spanishData?.subNavList[2]}
      />
      <ImageList gap={20} className="section__container" cols={3}>
        {spanishData?.portfolio.map((item, index) => (
          <Project item={item} index={index} />
        ))}
      </ImageList>
    </div>
  );
};

export default Portfolio;
