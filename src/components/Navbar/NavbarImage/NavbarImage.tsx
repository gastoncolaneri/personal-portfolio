import { Avatar, Typography } from "@mui/material";
import { ICustomClassname } from "interfaces";

import "./navbarImage.css";

const NavbarImage = ({ customClassname }: ICustomClassname) => {
  return (
    <div className="d-flex flex-column justify-center align-center">
      <Avatar
        alt="Gastón Colaneri"
        src={require("assets/foto.jpg")}
        className={customClassname}
      />
      <Typography
        variant="h6"
        mt={1}
        className="fullname__navbar text-white font-bolder"
      >
        Gastón Colaneri
      </Typography>
    </div>
  );
};

export default NavbarImage;
