import { Typography, Box } from "@mui/material";
import { ISkillsList } from "../../../../../interfaces/sections/resumeSection";
import { resumeTitles, skillsLayout } from "../../../../../utils/constants";
import ItemSkill from "../SkillItem/ItemSkill";

import "./skillsList.css";

const SkillsList = ({ data }: ISkillsList) => {
  return (
    <Box className="mb-20">
      <Typography className="card__title mb-20" sx={resumeTitles}>
        Habilidades
      </Typography>
      <Box className="skills__container" sx={skillsLayout}>
        {data?.map((item) => {
          return (
            <ItemSkill
              name={item?.name}
              number={item?.number}
              key={item?.name}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default SkillsList;
