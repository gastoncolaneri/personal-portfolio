import { Button } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { spanishData } from "../../data/data";
import { IDownloadButton } from "../../interfaces";

const DownloadButton = ({ customClassname }: IDownloadButton) => {
  return (
    <Button
      variant="contained"
      endIcon={<FileDownloadIcon />}
      href={spanishData?.resumeDownloadLink?.link}
      target="_blank"
      download={spanishData?.resumeDownloadLink?.label}
      className={`button ${customClassname}`}
    >
      Descargar CV
    </Button>
  );
};

export default DownloadButton;
