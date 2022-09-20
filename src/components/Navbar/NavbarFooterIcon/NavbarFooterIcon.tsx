import { IconButton, Tooltip } from "@mui/material";
import { IFooterButtons } from "../../../interfaces/navbar/Footer";

const NavbarFooterIcon = ({
  title,
  href,
  iconClassName,
  children,
}: IFooterButtons) => {
  return (
    <Tooltip title={title} placement="top">
      <IconButton
        className={iconClassName}
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
