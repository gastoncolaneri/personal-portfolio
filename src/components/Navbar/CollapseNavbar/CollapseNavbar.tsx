import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const CollapseNavbar = () => {
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
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Gastón Colaneri
          </Typography>
          <Avatar
            alt="Gastón Colaneri"
            src={require("../../../assets/foto.jpg")}
            className="avatar__navbar-collapse"
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default CollapseNavbar;
