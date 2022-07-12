import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  Container,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";

const MyProjects = () => {
  const mediaQuery600 = useMediaQuery("(min-width:600px)");
  const projects = [
    {
      name: "HackFlix",
      image: require("../../assets/img/hackflix.png"),
      createdAt: "12/12/12",
      gitHubUrl: "https://github.com/RodrigoRabellino/hackflix",
      liveDemo: "https://hackflix-rabellino.netlify.app/",
    },
    {
      name: "Guitarrero",
      image: require("../../assets/img/guitarrero-store.png"),
      createdAt: "12/12/12",
      gitHubUrl: "https://github.com/RodrigoRabellino/e-commerce-front",
      liveDemo: "https://guitarrero.vercel.app/",
    },
    {
      name: "Guitarrero Admin",
      image: require("../../assets/img/guitarrero-admin.png"),
      createdAt: "12/12/12",
      gitHubUrl: "https://github.com/RodrigoRabellino/e-commerce-admin",
      liveDemo: "https://guitarrero-admin.vercel.app/",
    },
    {
      name: "Profile Page",
      image: require("../../assets/img/guitarrero-admin.png"),
      createdAt: "11/07/22",
      gitHubUrl: "https://github.com/RodrigoRabellino/e-commerce-admin",
      liveDemo: "#",
    },
  ];

  return (
    <Box sx={{ py: "5rem" }}>
      <Container>
        <Typography variant="h4" sx={{ pb: "2rem" }}>
          My Projects
        </Typography>

        <Grid
          container
          spacing={2}
          mb="2rem"
          justifyContent={mediaQuery600 ? "space-between" : "center"}
        >
          {projects.map((project, i) => {
            return (
              <Grid item lg="auto" key={i}>
                <Card
                  elevation={1}
                  sx={{
                    width: "250px",
                    p: "5px",
                    transition: "0.4s",
                    ":hover": {
                      transition: "0.4s",
                    },
                  }}
                >
                  <CardMedia
                    sx={{
                      height: "200px",
                      width: "100%",
                      borderRadius: "15px",
                      overflow: "hidden",
                    }}
                    image={project.image}
                  />
                  <CardHeader
                    sx={{ p: "0", px: "1rem" }}
                    title={
                      <Typography
                        color="CaptionText"
                        fontWeight="700"
                        variant="h6"
                      >
                        {project.name}
                      </Typography>
                    }
                    subheader={
                      <>
                        <Typography variant="caption" color="CaptionText">
                          {`Created At: ${project.createdAt}`}
                        </Typography>
                      </>
                    }
                  />
                  <CardActions
                    sx={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <Button
                      onClick={() => window.open(project.gitHubUrl, "_blank")}
                    >
                      View Code
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={() => window.open(project.liveDemo, "_blank")}
                    >
                      Live Demo
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default MyProjects;
