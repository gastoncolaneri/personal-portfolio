import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { IItemData } from "../../../../../interfaces/sections/portfolioSection";
import { spanishConstants } from "../../../../../utils/constants";
import DetailRow from "../DetailRow/DetailRow";

import "./dialogProject.css";

interface IDialogProject {
  data: IItemData;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  type: string;
}

const DialogProject = ({ data, isOpen, setIsOpen, type }: IDialogProject) => {
  const toolsUsed = data?.tools.join(", ");
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <Dialog
      onClose={handleClose}
      open={isOpen}
      maxWidth="xl"
      className="dialog__container"
    >
      <DialogTitle className="project__dialog dialog-title__container">
        <div className="dialog__title">{data?.name}</div>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          className="dialog__button"
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent className="project__dialog dialog__content">
        <div className="image-dialog__container">
          <img
            alt={data?.name}
            loading="lazy"
            src={data?.image[0]}
            className="dialog__image"
          />
        </div>
        <div className="info__dialog">
          <div className="project-info__container">
            <Typography className="section__title">
              {spanishConstants.modalTitles.projectInfo}:
            </Typography>
            <div className="info__text">{data?.description}</div>
          </div>
          <div>
            <Typography className="section__title">
              {spanishConstants.modalTitles.projectDetails}:
            </Typography>
            <DetailRow
              title={spanishConstants.modalTitles.tools}
              data={toolsUsed}
            />
            <DetailRow title={spanishConstants.modalTitles.type} data={type} />
            {!data?.isApp && <DetailRow title="URL" data={data?.web} />}
            <DetailRow title="GitHub" data={data?.github} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogProject;
