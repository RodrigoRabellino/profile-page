import { Box, Fade } from "@mui/material";
import About from "../about/About";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import MyProjects from "../myProjects/MyProjects";
import NavBar from "../nabVar/NavBar";
import bounceIn from "react-animations";

const HomePage = () => {
  return (
    <>
      <main>
        <NavBar />
        <Box>
          <Header />
          <MyProjects />
          <About />
          <Contact />
        </Box>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
