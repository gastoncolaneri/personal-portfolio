import { Divider, Typography } from "@mui/material";

import "./detailRow.css";

interface IDetailRow {
  title: string;
  data: string;
}
const DetailRow = ({ title, data }: IDetailRow) => {
  const isLink = data.includes("https");
  return (
    <>
      <div className="row__container">
        <Typography className="row__title">{title}: </Typography>
        <Typography className="row__data">
          {isLink ? (
            <a href={data} target="_blank" rel="noreferrer">
              {data}
            </a>
          ) : (
            data
          )}
        </Typography>
      </div>
      <Divider className="divider" />
    </>
  );
};

export default DetailRow;
