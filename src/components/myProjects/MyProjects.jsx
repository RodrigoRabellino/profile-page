import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useState } from "react";
import { projects } from "../services/data";

const MyProjects = () => {
  const mediaQuery600 = useMediaQuery("(min-width:600px)");
  const [myProjects, setMyProjects] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    setMyProjects(projects);
  }, []);

  useEffect(() => {
    if (filter === "all") return setMyProjects(projects);
    if (filter === "front") {
      return setMyProjects(
        projects.filter((project) => project.type === "front")
      );
    }
    setMyProjects(projects.filter((project) => project.type === "back"));
  }, [filter]);

  const onChangeFilter = (type) => setFilter(type);

  return (
    <section>
      <Box
        sx={{
          minHeight: "500px",
          py: "5rem",
          pt: "4rem",
        }}
        id="myProjectSection"
      >
        <Container>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="start"
            pb="2rem"
          >
            <Typography variant="h4" id="project__title">
              My Projects
            </Typography>
            <ButtonGroup disableElevation size="small">
              <Button
                onClick={() => onChangeFilter("all")}
                variant={filter === "all" ? "contained" : "outlined"}
              >
                All
              </Button>
              <Button
                onClick={() => onChangeFilter("front")}
                variant={filter === "front" ? "contained" : "outlined"}
              >
                Front
              </Button>
              <Button
                onClick={() => onChangeFilter("back")}
                variant={filter === "back" ? "contained" : "outlined"}
              >
                Back
              </Button>
            </ButtonGroup>
          </Box>
          <Grid
            container
            spacing={2}
            mb="2rem"
            justifyContent={mediaQuery600 ? "center" : "center"}
          >
            {myProjects.map((project, i) => {
              return <MyProjectCard project={project} key={i} />;
            })}
          </Grid>
        </Container>
      </Box>
    </section>
  );
};

const MyProjectCard = ({ project }) => {
  return (
    <Grid item lg="auto">
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
          image={process.env.REACT_APP_SUPABASE_URL + project.image}
        />
        <CardHeader
          sx={{ p: "0", px: "0" }}
          title={
            <Typography color="CaptionText" fontWeight="700" variant="h6">
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
          <Button onClick={() => window.open(project.gitHubUrl, "_blank")}>
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
};

export default MyProjects;
