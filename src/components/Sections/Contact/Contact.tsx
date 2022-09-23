import { spanishData } from "../../../data/data";
import { IListItems } from "../../../interfaces/navbar/listItems";
import TitleSections from "../../TitleSections/TitleSections";

const Contact = ({ id }: IListItems) => {
  return (
    <div id={id} className="sections background-2">
      <TitleSections
        mainTitle={spanishData?.navList[4].title}
        backgroundTitle={spanishData?.subNavList[3]}
      />
    </div>
  );
};

export default Contact;
