import { IconButton, Tooltip, Box } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { spanishData } from "data";

import "./socialNetworkIcons.css";

const SocialNetworkIcons = () => {
  return (
    <Box>
      <Tooltip title="LinkedIn" placement="top">
        <IconButton
          className="p-left-0 icon__footer"
          aria-label="LinkedIn"
          href={spanishData?.socialNetworks?.linkedin}
          target="_blank"
        >
          <LinkedInIcon className="mr-15 text-grey icon__footer" />
        </IconButton>
      </Tooltip>
      <Tooltip title="GitHub" placement="top">
        <IconButton
          className="p-left-0 icon__footer"
          aria-label="GitHub"
          href={spanishData?.socialNetworks?.github}
          target="_blank"
        >
          <GitHubIcon className="mr-15 text-grey icon__footer" />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default SocialNetworkIcons;
