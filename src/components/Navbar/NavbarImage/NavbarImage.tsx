import { Avatar, Typography } from "@mui/material";

import "./navbarImage.css";

const NavbarImage = () => {
  return (
    <div className="image__container">
      <Avatar
        alt="Remy Sharp"
        src={require("../../../assets/foto.jpg")}
        sx={{ width: 170, height: 170 }}
        className="avatar__navbar"
      />
      <Typography variant="h6" mt={1} className="fullname__navbar">
        Gastón Colaneri
      </Typography>
    </div>
  );
};

export default NavbarImage;
