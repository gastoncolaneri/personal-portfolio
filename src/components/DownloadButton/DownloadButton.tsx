import { Button } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { spanishData } from "../../data/data";

const DownloadButton = () => {
  return (
    <Button
      variant="contained"
      endIcon={<FileDownloadIcon />}
      href={spanishData?.resumeDownloadLink?.link}
      target="_blank"
      download={spanishData?.resumeDownloadLink?.label}
      className="download__button"
    >
      Descargar CV
    </Button>
  );
};

export default DownloadButton;
