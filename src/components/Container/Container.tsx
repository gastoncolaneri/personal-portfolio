import { Box } from "@mui/material";
import { IContainer } from "interfaces";

import "./container.css";

const Container = ({ children, customClassname }: IContainer) => {
  return <Box className={`container ${customClassname}`}>{children}</Box>;
};

export default Container;
