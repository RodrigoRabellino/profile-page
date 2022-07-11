import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HomePage from "./components/homePage/HomePage";
import { Box } from "@mui/material";

function App() {
  const darkTheme = createTheme({
    palette: {
      background: {
        default: "#e8f1ed",
        paper: "#e8f1ed",
      },
      primary: {
        main: "#dfebbf",
      },
      secondary: {
        main: "#e9d5d3",
      },
    },

    typography: {
      fontFamily: "Lexend Deca",
      allVariants: {
        color: "#3c4043",
        accentColor: "#dfebbf",
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
