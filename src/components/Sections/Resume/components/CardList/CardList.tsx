import { Typography } from "@mui/material";
import { ICardList } from "../../../../../interfaces/sections/resumeSection";
import CardItem from "../CardItem";

import "./cardList.css";

const CardList = ({ title, data }: ICardList) => {
  return (
    <div className="list__container">
      <Typography variant="h4" className="card__title mb-20">
        {title}
      </Typography>
      <div>
        <CardItem data={data} />
      </div>
    </div>
  );
};

export default CardList;
