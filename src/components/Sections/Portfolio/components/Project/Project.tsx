import { useState } from "react";
import {
  ImageListItem,
  ImageListItemBar,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { IImageItem } from "../../../../../interfaces/sections/portfolioSection";
import { spanishConstants } from "../../../../../utils/constants";
import { srcset } from "../../../../../utils/setSource";

import "./project.css";
import DialogProject from "../DialogProject/DialogProject";

const Project = ({ item, index }: IImageItem) => {
  const [showInfo, setShowInfo] = useState([false, false, false, false]);
  const [showDialog, setShowDialog] = useState(false);
  const tooltipText = spanishConstants.tooltipButtonPortfolio;
  const { projectType } = spanishConstants;

  const handleClick = (index: number) => {
    const tmpList = showInfo.map((item, idx) => {
      if (index === idx) {
        return !item;
      }
      return false;
    });
    setShowInfo(tmpList);
  };
  return (
    <>
      <ImageListItem
        key={item.name}
        cols={item?.cols}
        rows={item?.rows}
        className="image__container"
        onMouseEnter={() => handleClick(index)}
        onMouseLeave={() => handleClick(index)}
        onClick={() => setShowDialog(true)}
      >
        <img
          {...srcset(item?.image[0], 350, 300, 1, 1)}
          alt={item.name}
          loading="lazy"
          className={`image__portfolio ${
            showInfo[index] && "overlay__opacity"
          }`}
        />
        {showInfo[index] && (
          <div className="overlay__imagen">
            <Typography className="overlay__title">{item?.name}</Typography>
            <Typography className="overlay__title">
              {item?.isApp ? projectType?.app : projectType?.web}
            </Typography>
          </div>
        )}
        <ImageListItemBar
          className="image__title"
          position="top"
          actionIcon={
            <Tooltip title={item?.isApp ? tooltipText?.app : tooltipText?.web}>
              <IconButton
                sx={{ color: "#fffff3ab" }}
                aria-label={item.name}
                href={item?.web}
                target="_blank"
                className="image__button"
              >
                {item?.isApp ? <FileDownloadIcon /> : <LaunchIcon />}
              </IconButton>
            </Tooltip>
          }
          actionPosition="right"
        />
      </ImageListItem>
      {showDialog && (
        <DialogProject
          data={item}
          isOpen={showDialog}
          setIsOpen={setShowDialog}
        />
      )}
    </>
  );
};

export default Project;