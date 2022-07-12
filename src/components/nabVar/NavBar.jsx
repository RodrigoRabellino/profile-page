import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";

const NavBar = () => {
  return (
    <Container zIndex={900} sx={{ background: "red" }}>
      <Typography>soy en navBar</Typography>
    </Container>
  );
};

export default NavBar;
