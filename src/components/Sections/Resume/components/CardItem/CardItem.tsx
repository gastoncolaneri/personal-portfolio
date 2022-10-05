import { Typography } from "@mui/material";
import { ICardItem } from "../../../../../interfaces/sections/resumeSection";

import "./cardItem.css";

const CardItem = ({ data }: ICardItem) => {
  return (
    <div>
      {data?.map((item) => {
        return (
          <div
            className="card__item mb-20"
            key={`
          ${item?.place}`}
          >
            <div className="date__item">
              <div>
                {item?.dates?.start} - {item?.dates?.end}
              </div>
            </div>
            <Typography variant="h6" className="name__item">
              {item?.name}
            </Typography>
            <Typography className="place__item">
              <a href={item?.url} target="_blank" rel="noreferrer">
                {item?.place}
              </a>
            </Typography>
            {item?.description && (
              <Typography className="description__item">
                {item?.description}
              </Typography>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CardItem;
