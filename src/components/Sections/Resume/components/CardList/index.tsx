import { Box, Typography } from "@mui/material";
import { ICardList } from "interfaces/sections/resume";
import { resumeLayout, resumeTitles } from "utils/constants";
import CardItem from "components/Sections/Resume/components/CardItem";

import "./cardList.css";

const CardList = ({ title, data }: ICardList) => {
  return (
    <Box className="list__container" sx={resumeLayout}>
      <Typography className="card__title mb-20" sx={resumeTitles}>
        {title}
      </Typography>
      <div>
        <CardItem data={data} />
      </div>
    </Box>
  );
};

export default CardList;
