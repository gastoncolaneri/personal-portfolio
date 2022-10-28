import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { IItemData } from "interfaces/sections/portfolio";
import {
  imageModalLayout,
  modalLayout,
  modalTitle,
  normalText,
  normalTitle,
  spanishConstants,
} from "utils/constants";
import DetailRow from "components/Sections/Portfolio/components/DetailRow";

import "./dialogProject.css";

interface IDialogProject {
  data: IItemData;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DialogProject = ({ data, isOpen, setIsOpen }: IDialogProject) => {
  const typeText = spanishConstants.modalTitles;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
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
      fullScreen={fullScreen}
      className="d-flex justify-center"
      PaperProps={{ style: { maxWidth: "100%", margin: 0 } }}
    >
      <DialogTitle className="project__dialog justify-end d-flex align-center">
        <Typography className="dialog__title font-bolder" sx={modalTitle}>
          {data?.name}
        </Typography>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          className="text-grey justify-end close__button"
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent className="project__dialog d-flex" sx={modalLayout}>
        <Box
          className="relative d-flex flex-1 align-center"
          sx={imageModalLayout}
        >
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
        </Box>
        <div className="flex-1">
          <div className="mb-30">
            <Typography
              className="mb-10 text-white font-bolder"
              sx={normalTitle}
            >
              {typeText.projectInfo}
            </Typography>
            <Typography sx={normalText} className="space-break">
              {data?.spanishDescription}
            </Typography>
          </div>
          <div>
            <Typography
              className="mb-10 text-white font-bolder"
              sx={normalTitle}
            >
              {typeText.projectDetails}
            </Typography>
            <DetailRow title={typeText.tools} data={toolsUsed} />
            <DetailRow title={typeText.type} data={type} />
            {data?.isApp ? (
              <DetailRow title={typeText.apk} data={data?.web} />
            ) : (
              <DetailRow title={typeText.url} data={data?.web} />
            )}
            <DetailRow title={typeText.github} data={data?.github} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogProject;
