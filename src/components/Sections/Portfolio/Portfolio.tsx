import { spanishData } from "../../../data/data";
import { IListItems } from "../../../interfaces/navbar/listItems";
import TitleSections from "../../TitleSections/TitleSections";

const Portfolio = ({ id }: IListItems) => {
  return (
    <div id={id} className="sections background-1">
      <TitleSections
        mainTitle={spanishData?.navList[3].title}
        backgroundTitle={spanishData?.subNavList[2]}
      />
    </div>
  );
};

export default Portfolio;
