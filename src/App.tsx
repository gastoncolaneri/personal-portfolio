import MainPage from "./views/MainPage";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
