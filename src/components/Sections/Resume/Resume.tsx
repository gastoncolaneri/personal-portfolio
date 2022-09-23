import { spanishData } from "../../../data/data";
import { IListItems } from "../../../interfaces/navbar/listItems";
import TitleSections from "../../TitleSections/TitleSections";

const Resume = ({ id }: IListItems) => {
  return (
    <div id={id} className="sections background-2">
      <TitleSections
        mainTitle={spanishData?.navList[2].title}
        backgroundTitle={spanishData?.subNavList[1]}
      />
    </div>
  );
};

export default Resume;
