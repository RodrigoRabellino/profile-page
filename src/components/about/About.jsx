import { Box, Typography, Container, Grid, Button } from "@mui/material";
import { FileDownload } from "@mui/icons-material";
import reactLogo from "../../assets/icons/react.svg";
import htmlLogo from "../../assets/icons/html2.svg";
import jsLogo from "../../assets/icons/js.svg";
import cssLogo from "../../assets/icons/css2.svg";
import nodeLogo from "../../assets/icons/node.svg";
import materialLogo from "../../assets/icons/material.svg";
import mongooseLogo from "../../assets/icons/mongoose.svg";
import flutterLogo from "../../assets/icons/flutter.svg";
import dartLogo from "../../assets/icons/dart.svg";
import pythonLogo from "../../assets/icons/python2.svg";

const About = () => {
  const handleDownloadCv = () => {
    const cvLink = process.env.REACT_APP_CV_LINK;
    console.log(cvLink);
    window.open(cvLink, "_blank");
  };

  return (
    <Box sx={{ background: "#e9d5d3", py: "5rem" }} id="myAboutSection">
      <Container>
        <Typography variant="h4" sx={{ pb: "2rem" }}>
          About me
        </Typography>
        <Grid
          container
          spacing={2}
          display="flex"
          justifyContent="space-evenly"
          pb="3rem"
        >
          <Grid item xs={12} md={6}>
            <Typography maxWidth="65ch">
              Mi interés por la tecnología comienza en la adolescencia con la
              adquisición de la primera PC en casa. En un principio fue con el
              hardware afición que continúa hasta el día de hoy. Estudiando
              reparación PC descubrí el mundo de la programación el cual me
              apasionó.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography maxWidth="65ch">
              También quiero destacar la actuación y la música como actividades
              que complementan mi vida.
            </Typography>
          </Grid>
        </Grid>
        <Button variant="outlined" onClick={handleDownloadCv}>
          <FileDownload />
          Download CV
        </Button>

        <MySkills />
        <Learning />
      </Container>
    </Box>
  );
};

const MySkills = () => {
  const technologies = [
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
    {
      name: "Mongoose",
      image: mongooseLogo,
    },
  ];
  return (
    <Box mt="2rem">
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

const Learning = () => {
  const technologies = [
    {
      name: "R. Native",
      image: reactLogo,
    },
    {
      name: "Flutter",
      image: flutterLogo,
    },
    {
      name: "Dart",
      image: dartLogo,
    },
    {
      name: "Python",
      image: pythonLogo,
    },
  ];
  return (
    <Box mt="3rem">
      <Typography variant="h4" sx={{ pb: "2rem" }} textAlign="center">
        Learning/Interests
      </Typography>
      <Grid container spacing={2} display="flex" justifyContent="center">
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