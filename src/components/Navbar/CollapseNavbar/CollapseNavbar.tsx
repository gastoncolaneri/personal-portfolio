import { useState } from "react";
import { AppBar, Box, Drawer, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Navbar from "components/Navbar";

const CollapseNavbar = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);

  const openDrawer = () => {
    setIsOpenDrawer(!isOpenDrawer);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="secondary">
        <Toolbar>
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
