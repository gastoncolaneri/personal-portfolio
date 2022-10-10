import { Snackbar, Alert } from "@mui/material";
import { IAlertSuccess } from "../../interfaces/sections/contactSection";

const CustomAlert = ({ open, onClose, type, message }: IAlertSuccess) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
    >
      <Alert onClose={onClose} severity={type} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CustomAlert;
