import { IconButton, Tooltip } from "@mui/material";
import { IFooterButtons } from "../../../interfaces/Footer/Footer";

const NavbarFooterIcon = ({ title, href, children }: IFooterButtons) => {
  return (
    <Tooltip title={title} placement="top">
      <IconButton
        className="icon__footer"
        aria-label="LinkedIn"
        href={href}
        target="_blank"
      >
        {children}
      </IconButton>
    </Tooltip>
  );
};

export default NavbarFooterIcon;
