import { Box, Typography, useMediaQuery, Container } from "@mui/material";

const Header = () => {
  const mediaQuery600 = useMediaQuery("(min-width:600px)");

  return (
    <Box
      display="flex"
      alignItems="center"
      height="400px"
      py="5rem"
      bgcolor="#e3ffe6"
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box py="3rem">
          <Typography fontSize={{ sm: "75px", xs: "50px" }} fontWeight="600">
            Rodrigo
          </Typography>
          <Typography fontSize={{ sm: "75px", xs: "50px" }} fontWeight="600">
            Rabellino
          </Typography>
          <Typography variant="h6">Fullstack Dev | Actor</Typography>
        </Box>
        <Box
          width="300px"
          height="300px"
          borderRadius="500px"
          overflow="hidden"
          display={mediaQuery600 ? "flex" : "none"}
        >
          <img
            className="image__profile"
            style={{
              width: "100%",
              objectFit: "cover",
            }}
            srcSet={require("../../assets/img/fotoCv1crop.jpg")}
            alt="Rodrigo Rabellino profile"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
