import MainPage from "./views/MainPage";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import { collapseNavbarLayout } from "utils/constants";
import CollapseNavbar from "components/Navbar/CollapseNavbar/CollapseNavbar";

const theme = createTheme({
  palette: {
    primary: {
      main: "#20c997",
    },
    secondary: {
      main: "#282d31",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={collapseNavbarLayout}>
        <CollapseNavbar />
      </Box>
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
