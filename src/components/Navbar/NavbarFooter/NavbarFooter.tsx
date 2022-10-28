import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { spanishData } from "data";

import "./navbarFooter.css";
import NavbarFooterIcon from "components/Navbar/NavbarFooterIcon";

const NavbarFooter = () => {
  return (
    <div className="d-flex justify-center text-grey">
      <NavbarFooterIcon
        title="LinkedIn"
        href={spanishData?.socialNetworks?.linkedin}
        iconClassName="text-grey"
      >
        <LinkedInIcon />
      </NavbarFooterIcon>
      <NavbarFooterIcon
        title="GitHub"
        href={spanishData?.socialNetworks?.github}
        iconClassName="text-grey"
      >
        <GitHubIcon />
      </NavbarFooterIcon>
    </div>
  );
};

export default NavbarFooter;
