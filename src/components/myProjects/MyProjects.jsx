import {
  Button,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";

const MyProjects = () => {
  const projects = [
    {
      name: "HackFlix",
      image: require("../../assets/img/hackflix.png"),
      createdAt: "12/12/12",
    },
    {
      name: "Guitarrero",
      image: require("../../assets/img/guitarrero-store.png"),
      createdAt: "12/12/12",
    },
    {
      name: "HackFlix",
      image: require("../../assets/img/hackflix.png"),
      createdAt: "12/12/12",
    },
  ];
  return (
    <Container>
      <Typography variant="h4">My Projects</Typography>
      <Grid
        container
        spacing={2}
        my="2rem"
        sx={{ justifyContent: "space-between" }}
      >
        {projects.map((project, i) => {
          return (
            <Grid item lg="auto" key={i}>
              <Card
                elevation={3}
                sx={{
                  width: "250px",
                  borderRadius: "15px",
                  p: "5px",
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
                  <Button color="secondary">Live Demo</Button>
                  <Button>View Code</Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default MyProjects;
