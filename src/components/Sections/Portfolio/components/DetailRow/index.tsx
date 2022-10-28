import { Divider, Typography, Tooltip } from "@mui/material";
import { spanishConstants, normalText } from "utils/constants";

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
      <div className="d-flex">
        <Typography className="text-white mr-5 font-bolder" sx={normalText}>
          {title}:
        </Typography>
        <Typography className="row__data" sx={normalText}>
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
