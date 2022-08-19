import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { projects } from "../services/data";

const MyProjects = () => {
  const mediaQuery600 = useMediaQuery("(min-width:600px)");

  return (
    <Box sx={{ py: "5rem" }} id="myProjectSection">
      <Container>
        <Typography variant="h4" sx={{ pb: "2rem" }} id="project__title">
          My Projects
        </Typography>
        <Grid
          container
          spacing={2}
          mb="2rem"
          justifyContent={mediaQuery600 ? "center" : "center"}
        >
          {projects.map((project, i) => {
            return (
              <Grid item lg="auto" key={i}>
                <Card
                  elevation={0}
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
                    sx={{ p: "0", px: "0" }}
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
                          {project.desc}
                        </Typography>
                      </>
                    }
                  />
                  <CardActions
                    sx={{
                      display: "flex",
                      justifyContent: "space-around",
                    }}
                  >
                    <Button
                      onClick={() => window.open(project.gitHubUrl, "_blank")}
                    >
                      View Code
                    </Button>
                    <Button
                      disabled={project.liveDemo === "" ? true : false}
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
