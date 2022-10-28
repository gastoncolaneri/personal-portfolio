import { useState } from "react";
import { AppBar, Box, Drawer, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Navbar from "components/Navbar";
import SocialNetworkIcons from "components/Navbar/SocialNetworkIcons";

const CollapseNavbar = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);

  const openDrawer = () => {
    setIsOpenDrawer(!isOpenDrawer);
  };

  return (
    <Box className="w-100">
      <AppBar position="fixed" color="secondary" className="navbar-collapse">
        <Toolbar className="d-flex space-between">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, p: 3 }}
            onClick={openDrawer}
          >
            <MenuIcon />
          </IconButton>
          <SocialNetworkIcons />
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={isOpenDrawer}
        onClose={openDrawer}
        PaperProps={{
          style: {
            backgroundColor: "#111418",
            justifyContent: "center",
            alignItems: "center",
            width: "45%",
          },
        }}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <Navbar
          setIsOpenDrawer={setIsOpenDrawer}
          customClassname="avatar__navbar-collapse"
        />
      </Drawer>
    </Box>
  );
};

export default CollapseNavbar;
