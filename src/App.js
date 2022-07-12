import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HomePage from "./components/homePage/HomePage";
import { Box } from "@mui/material";

function App() {
  const darkTheme = createTheme({
    palette: {
      background: {
        default: "#e8f1ed",
        paper: "#f8f9fa",
      },
      primary: {
        main: "#3c4043",
      },
      secondary: {
        main: "#e9d5d3",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            padding: "5px 10px 5px 10px",
            transition: "0.4s",
            ":hover": {
              transition: "0.4s",
              borderRadius: "28px",
              backgroundColor: "#3c4043",
              color: "#e8f1ed",
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          elevation: 0,
          root: {
            borderRadius: "15px",
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: "#f8f9fa",
            borderRadius: "15px",
            transition: "0.4s",
            ":hover": {
              transition: "0.4s",
              backgroundColor: "#e8f1ed",
            },
          },
        },
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
