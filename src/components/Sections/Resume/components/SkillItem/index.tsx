import { Typography, LinearProgress } from "@mui/material";
import { IItemSkill } from "interfaces/sections/resume";

import "./itemSkill.css";

const ItemSkill = ({ name, number }: IItemSkill) => {
  return (
    <div className="item__container mb-20">
      <div className="w-100">
        <div
          className="
        d-flex space-between w-100 flex-1 mb-10 text-grey"
        >
          <Typography className="item__label font-bolder">{name}</Typography>
          <Typography className="item__label font-bolder">{number}%</Typography>
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
