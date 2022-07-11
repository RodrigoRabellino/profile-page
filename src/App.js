import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HomePage from "./components/homePage/HomePage";
import { Box } from "@mui/material";

function App() {
  const darkTheme = createTheme({
    palette: {
      background: {
        default: "#242132",
      },
      primary: {
        main: "#90caf9",
      },
      secondary: {
        main: "#ce93d8",
      },
    },

    typography: {
      fontFamily: "Nunito",
      allVariants: {
        color: "#FEFCFF",
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
