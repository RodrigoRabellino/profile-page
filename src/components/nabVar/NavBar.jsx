import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";

const NavBar = () => {
  return (
    <Box position="sticky" top="0" zIndex={900}>
      <AppBar>
        <Container>
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
        </Container>
      </AppBar>
    </Box>
  );
};

export default NavBar;
