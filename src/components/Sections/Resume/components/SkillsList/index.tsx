import { Typography, Box } from "@mui/material";
import { ISkillsList } from "interfaces/sections/resume";
import { subtitles, skillsLayout } from "utils/constants";
import ItemSkill from "components/Sections/Resume/components/SkillItem";

import "./skillsList.css";

const SkillsList = ({ data }: ISkillsList) => {
  return (
    <Box className="mb-20">
      <Typography className="font-bolder mb-20 text-grey" sx={subtitles}>
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
