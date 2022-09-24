import { Typography } from "@mui/material";
import { ISkillsList } from "../../../../../interfaces/sections/resumeSection";
import ItemSkill from "../SkillItem/ItemSkill";

import "./skillsList.css";

const SkillsList = ({ data }: ISkillsList) => {
  return (
    <div>
      <Typography variant="h4" className="card__title mb-20">
        Habilidades
      </Typography>
      <div className="skills__container">
        {data?.map((item) => {
          return (
            <ItemSkill
              name={item?.name}
              number={item?.number}
              key={item?.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SkillsList;
