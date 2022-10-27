import { Box } from "@mui/material";
import { spanishData } from "data";
import { footerLayout } from "utils/constants";

import "./footer.css";

const Footer = () => {
  return (
    <Box className="background-1 footer" sx={footerLayout}>
      <p>
        Copyright © 2022
        <a
          href={spanishData?.socialNetworks?.linkedin}
          target="_blank"
          rel="noreferrer"
          className="name__rights"
        >
          Gastón Colaneri
        </a>
        . All Rights Reserved.
      </p>
    </Box>
  );
};

export default Footer;
