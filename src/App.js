import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HomePage from "./components/homePage/HomePage";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
    typography: {
      fontFamily: "Nunito",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <HomePage />
      </div>
    </ThemeProvider>
  );
}

export default App;
