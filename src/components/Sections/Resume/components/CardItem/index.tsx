import { Box, Typography } from "@mui/material";
import { ICardItem } from "interfaces/sections/resume";
import { normalText, normalTitle } from "utils/constants";

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
            <Typography className="name__item font-bolder" sx={normalTitle}>
              {item?.name}
            </Typography>
            <Typography className="place__item" sx={normalTitle}>
              <a href={item?.url} target="_blank" rel="noreferrer">
                {item?.place}
              </a>
            </Typography>
            <Box className="date__item font-bolder" sx={normalText}>
              {item?.dates?.start} - {item?.dates?.end}
            </Box>
            {item?.description && (
              <Typography className="text-grey" sx={normalText}>
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
