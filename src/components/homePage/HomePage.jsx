import { Container, Box, Typography, Button } from "@mui/material";
import { LinkedIn, GitHub } from "@mui/icons-material";

const HomePage = () => {
  return (
    <Container
      sx={{ height: "100vh", display: "flex", alignItems: "center" }}
      fixed
    >
      <Box display="flex" flexDirection="column" sx={{ mx: "auto" }}>
        <Typography fontSize="25px" fontWeight="700" color="HighlightText">
          Hello, this page is in development. See more:
        </Typography>
        <Box
          sx={{
            mt: "2rem",
            width: "100%",
            sm: {
              display: "flex",
              flexDirection: "column",
            },
            md: {
              display: "flex",
              justifyContent: "space-around",
            },
          }}
        >
          <Button
            sx={{ fontWeight: 700 }}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/rodrigorabellino/",
                "_blank"
              )
            }
          >
            <LinkedIn />
            /RodrigoRabellino
          </Button>
          <Button
            color="secondary"
            sx={{ fontWeight: 700 }}
            onClick={() =>
              window.open("https://github.com/RodrigoRabellino", "_blank")
            }
          >
            <GitHub />
            /RodrigoRabellino
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default HomePage;
