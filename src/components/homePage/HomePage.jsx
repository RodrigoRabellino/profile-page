import { Box, Container, Typography } from "@mui/material";
import MyProjects from "../myProjects/MyProjects";
import NavBar from "../nabVar/NavBar";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Container sx={{ height: "200vh", pt: "64px" }}>
        <MyProjects />
      </Container>
    </>
  );
};

export default HomePage;
