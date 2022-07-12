import { Box, Typography, Container, Grid } from "@mui/material";
import reactLogo from "../../assets/icons/react.svg";
import htmlLogo from "../../assets/icons/html2.svg";
import jsLogo from "../../assets/icons/js.svg";
import cssLogo from "../../assets/icons/css.svg";
import nodeLogo from "../../assets/icons/node.svg";
import materialLogo from "../../assets/icons/material.svg";
import dramaLogo from "../../assets/icons/drama.svg";

const About = () => {
  return (
    <Box sx={{ background: "#e9d5d3", py: "5rem" }}>
      <Container>
        <Typography variant="h4" sx={{ pb: "2rem" }}>
          About me
        </Typography>
        <Box display="flex" justifyContent="space-evenly" pb="3rem">
          <Typography width="60ch">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
            similique laudantium quidem incidunt voluptatum sint ratione quo
            accusantium. Harum dicta ipsum qui modi nisi, aliquam perferendis
            excepturi eaque a dolore!
          </Typography>
          <Typography width="60ch">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
            similique laudantium quidem incidunt voluptatum sint ratione quo
            accusantium. Harum dicta ipsum qui modi nisi, aliquam perferendis
            excepturi eaque a dolore!
          </Typography>
        </Box>
        <MySkills />
      </Container>
    </Box>
  );
};

const MySkills = () => {
  const technologies = [
    {
      name: "Actor",
      image: dramaLogo,
    },
    {
      name: "React",
      image: reactLogo,
    },
    {
      name: "HTML",
      image: htmlLogo,
    },
    {
      name: "CSS",
      image: cssLogo,
    },
    {
      name: "JavaScript",
      image: jsLogo,
    },
    {
      name: "Material UI",
      image: materialLogo,
    },
    {
      name: "Node",
      image: nodeLogo,
    },
  ];
  return (
    <Box>
      <Typography variant="h4" sx={{ pb: "2rem" }} textAlign="center">
        Skills
      </Typography>
      <Grid container spacing={2} display="flex" justifyContent="space-evenly">
        {technologies.map((item) => {
          return (
            <Grid lg="auto" item>
              <Box
                width="90px"
                height="90px"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="space-between"
              >
                <img
                  alt={item.name}
                  srcset={item.image}
                  style={{
                    width: "64px",
                    height: "64px",
                    objectFit: "cover",
                    fill: "#3c4043",
                  }}
                />
                <Typography>{item.name}</Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default About;
