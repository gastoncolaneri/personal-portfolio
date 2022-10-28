import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { IItemData } from "interfaces/sections/portfolio";
import { spanishConstants } from "utils/constants";
import DetailRow from "components/Sections/Portfolio/components/DetailRow";

import "./dialogProject.css";

interface IDialogProject {
  data: IItemData;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DialogProject = ({ data, isOpen, setIsOpen }: IDialogProject) => {
  const [indexImg, setIndexImg] = useState(0);
  const toolsUsed = data?.tools.join(", ");
  const type = data?.isApp
    ? spanishConstants.projectType.app
    : spanishConstants.projectType.web;
  const handleClose = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    if (indexImg < 2) {
      return setIndexImg((prev) => prev + 1);
    }
    return setIndexImg(0);
  };

  const previousImage = () => {
    if (indexImg > 0) {
      return setIndexImg((prev) => prev - 1);
    }
    return setIndexImg(2);
  };

  return (
    <Dialog
      onClose={handleClose}
      open={isOpen}
      maxWidth="xl"
      className="d-flex justify-center "
    >
      <DialogTitle className="project__dialog dialog-title__container font-bolder">
        <div className="dialog__title">{data?.name}</div>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          className="text-grey flex-1"
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent className="project__dialog d-flex">
        <div className="image-dialog__container">
          <img
            alt={data?.name}
            loading="lazy"
            src={data?.image[indexImg]}
            className="w-100"
          />
          <IconButton
            aria-label="change-left"
            onClick={previousImage}
            className="left__button carousel__button"
          >
            <ChevronLeftIcon />
          </IconButton>
          <IconButton
            aria-label="change-right"
            onClick={nextImage}
            className="right__button carousel__button"
          >
            <ChevronRightIcon />
          </IconButton>
        </div>
        <div className="flex-1">
          <div className="mb-30">
            <Typography className="section__title">
              {spanishConstants.modalTitles.projectInfo}
            </Typography>
            <div className="info__text">{data?.spanishDescription}</div>
          </div>
          <div>
            <Typography className="section__title">
              {spanishConstants.modalTitles.projectDetails}
            </Typography>
            <DetailRow
              title={spanishConstants.modalTitles.tools}
              data={toolsUsed}
            />
            <DetailRow title={spanishConstants.modalTitles.type} data={type} />
            {data?.isApp ? (
              <DetailRow title="APK" data={data?.web} />
            ) : (
              <DetailRow title="URL" data={data?.web} />
            )}
            <DetailRow title="GitHub" data={data?.github} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogProject;
