import { spanishData } from "../../../data/data";
import { IListItems } from "../../../interfaces/navbar/listItems";
import TitleSections from "../../TitleSections/TitleSections";

import "../sections.css";

const AboutMe = ({ id }: IListItems) => {
  return (
    <div id={id} className="sections background-1">
      <TitleSections
        mainTitle={spanishData?.navList[1].title}
        backgroundTitle={spanishData?.subNavList[0]}
      />
    </div>
  );
};

export default AboutMe;
