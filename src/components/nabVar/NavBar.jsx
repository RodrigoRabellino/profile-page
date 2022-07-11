import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";

const NavBar = () => {
  return (
    <Box position="sticky" top="0" zIndex={900}>
      <Container>
        <AppBar color="primary">
          <Toolbar>
            <Typography
              color="CaptionText"
              variant="h6"
              fontWeight="700"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Rodrigo Rabellino
            </Typography>
          </Toolbar>
        </AppBar>
      </Container>
    </Box>
  );
};

export default NavBar;
