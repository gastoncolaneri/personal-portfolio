import { Typography, LinearProgress } from "@mui/material";
import { IItemSkill } from "interfaces/sections/resume";

import "./itemSkill.css";

const ItemSkill = ({ name, number }: IItemSkill) => {
  return (
    <div className="item__container mb-20">
      <div className="w-100">
        <div
          className="
        item-label__container"
        >
          <Typography className="item__label">{name}</Typography>
          <Typography className="item__label">{number}%</Typography>
        </div>
        <LinearProgress
          variant="determinate"
          value={number}
          className="skill__status"
        />
      </div>
    </div>
  );
};

export default ItemSkill;
