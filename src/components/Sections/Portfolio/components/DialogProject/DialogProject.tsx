import { Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { IItemData } from "../../../../../interfaces/sections/portfolioSection";

import "./dialogProject.css";

interface IDialogProject {
  data: IItemData;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DialogProject = ({ data, isOpen, setIsOpen }: IDialogProject) => {
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <Dialog
      onClose={handleClose}
      open={isOpen}
      maxWidth="lg"
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
        <div className="info__dialog">Prueba</div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogProject;
