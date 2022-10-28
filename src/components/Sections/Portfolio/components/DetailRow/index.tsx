import { Divider, Typography, Tooltip } from "@mui/material";
import { spanishConstants } from "../../../../../utils/constants";

import "./detailRow.css";

interface IDetailRow {
  title: string;
  data: string;
}
const DetailRow = ({ title, data }: IDetailRow) => {
  const isLink = data.includes("https");
  const isAPK = data?.includes("drive");
  const tooltipText = spanishConstants.tooltipButtonPortfolio;

  return (
    <>
      <div className="d-flex align-end">
        <Typography className="text-white mr-10 font-bolder">
          {title}:{" "}
        </Typography>
        <Typography className="row__data">
          {isLink ? (
            <Tooltip
              title={isAPK ? tooltipText.app : tooltipText.web}
              placement="top"
              arrow
            >
              <a href={data} target="_blank" rel="noreferrer">
                {isAPK ? spanishConstants.tooltipButtonPortfolio.app : data}
              </a>
            </Tooltip>
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
