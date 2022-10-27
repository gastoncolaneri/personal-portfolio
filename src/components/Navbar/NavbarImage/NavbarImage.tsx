import { Avatar, Typography } from "@mui/material";
import { ICustomClassname } from "interfaces";

import "./navbarImage.css";

const NavbarImage = ({ customClassname }: ICustomClassname) => {
  return (
    <div className="image__container">
      <Avatar
        alt="Gastón Colaneri"
        src={require("assets/foto.jpg")}
        className={customClassname}
      />
      <Typography variant="h6" mt={1} className="fullname__navbar">
        Gastón Colaneri
      </Typography>
    </div>
  );
};

export default NavbarImage;
