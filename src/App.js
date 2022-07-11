import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HomePage from "./components/homePage/HomePage";
import { Box } from "@mui/material";

function App() {
  const darkTheme = createTheme({
    palette: {
      background: {
        default: "#242132",
        paper: "#FEFCFF",
      },
      primary: {
        main: "#90caf9",
      },
      secondary: {
        main: "#ce93d8",
      },
    },
    typography: {
      fontFamily: "Lexend Deca",
      allVariants: {
        color: "#FEFCFF",
        accentColor: "#242132",
      },
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box className="App">
        <HomePage />
      </Box>
    </ThemeProvider>
  );
}

export default App;
