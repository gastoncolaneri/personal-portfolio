import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { spanishData } from "../../../data/data";

import "./navbarFooter.css";
import NavbarFooterIcon from "../NavbarFooterIcon/NavbarFooterIcon";

const NavbarFooter = () => {
  return (
    <div className="navbar__footer icon__footer">
      <NavbarFooterIcon
        title="LinkedIn"
        href={spanishData?.socialNetworks?.linkedin}
      >
        <LinkedInIcon />
      </NavbarFooterIcon>
      <NavbarFooterIcon
        title="GitHub"
        href={spanishData?.socialNetworks?.github}
      >
        <GitHubIcon />
      </NavbarFooterIcon>
    </div>
  );
};

export default NavbarFooter;
