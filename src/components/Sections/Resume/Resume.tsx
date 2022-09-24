import { spanishData } from "../../../data/data";
import { IListItems } from "../../../interfaces/navbar/listItems";
import TitleSections from "../../TitleSections/TitleSections";
import CardList from "./components/CardList";
import SkillsList from "./components/SkillsList";

import "./resume.css";

const Resume = ({ id }: IListItems) => {
  return (
    <div id={id} className="sections background-2">
      <TitleSections
        mainTitle={spanishData?.navList[2].title}
        backgroundTitle={spanishData?.subNavList[1]}
      />
      <div className="resume__container">
        <div className="d-flex space-between">
          <CardList title="Educación" data={spanishData?.education} />
          <CardList title="Experiencia laboral" data={spanishData?.jobs} />
        </div>
        <SkillsList data={spanishData?.skills} />
      </div>
    </div>
  );
};

export default Resume;
