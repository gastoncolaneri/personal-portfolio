import { Box, Typography } from "@mui/material";
import { ICardList } from "interfaces/sections/resume";
import { resumeLayout, subtitles } from "utils/constants";
import CardItem from "components/Sections/Resume/components/CardItem";

import "./cardList.css";

const CardList = ({ title, data }: ICardList) => {
  return (
    <Box className="list__container" sx={resumeLayout}>
      <Typography className="font-bolder mb-20 text-grey" sx={subtitles}>
        {title}
      </Typography>
      <div>
        <CardItem data={data} />
      </div>
    </Box>
  );
};

export default CardList;
