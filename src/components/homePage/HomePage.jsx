import { Box, Container, Typography } from "@mui/material";
import About from "../about/About";
import Header from "../header/Header";
import MyProjects from "../myProjects/MyProjects";
import NavBar from "../nabVar/NavBar";

const HomePage = () => {
  return (
    <>
      <main>
        <NavBar />
        <Box py="64px">
          <Header />
          <MyProjects />
          <About />
        </Box>
      </main>
    </>
  );
};

export default HomePage;
