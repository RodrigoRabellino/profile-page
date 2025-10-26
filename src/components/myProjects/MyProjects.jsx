import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useState } from "react";
import { projects } from "../services/data";
import MyProjectCard from "./ProjectCard";

const MyProjects = () => {
  const mediaQuery600 = useMediaQuery("(min-width:600px)");
  const [myProjects, setMyProjects] = useState([]);
  const [filter, setFilter] = useState("all");
  const HOVER_STYLE = {"&:hover": {
                    transition: "0.5s",
                    backgroundColor: "#525557",
                    color: "#e8f1ed",
                  }}

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
                disableRipple
                sx={HOVER_STYLE}
              >
                All
              </Button>
              <Button
                onClick={() => onChangeFilter("front")}
                variant={filter === "front" ? "contained" : "outlined"}
                disableRipple
                sx={HOVER_STYLE}
              >
                Front
              </Button>
              <Button
                onClick={() => onChangeFilter("back")}
                variant={filter === "back" ? "contained" : "outlined"}
                disableRipple
                sx={HOVER_STYLE}
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

export default MyProjects;
