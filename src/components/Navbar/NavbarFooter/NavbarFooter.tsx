import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { spanishData } from "data";

import "./navbarFooter.css";
import NavbarFooterIcon from "components/Navbar/NavbarFooterIcon";

const NavbarFooter = () => {
  return (
    <div className="navbar__footer icon__footer">
      <NavbarFooterIcon
        title="LinkedIn"
        href={spanishData?.socialNetworks?.linkedin}
        iconClassName="icon__footer"
      >
        <LinkedInIcon />
      </NavbarFooterIcon>
      <NavbarFooterIcon
        title="GitHub"
        href={spanishData?.socialNetworks?.github}
        iconClassName="icon__footer"
      >
        <GitHubIcon />
      </NavbarFooterIcon>
    </div>
  );
};

export default NavbarFooter;
