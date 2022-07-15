import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  Tab,
  Slide,
} from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
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
import { useState } from "react";

const About = () => {
  const [value, setValue] = useState("1");
  const [showAbout, setShowAbout] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const isInViewport = () => {
    const div = document.getElementById("myAboutSection");
    let distance = div.getBoundingClientRect();
    return (
      distance.top <
        (window.innerHeight || document.documentElement.clientHeight) &&
      distance.bottom > 0
    );
  };

  const onScrollPage = () => {
    if (isInViewport()) {
      console.log(showAbout);
      setShowAbout(true);
    }
  };
  window.addEventListener("scroll", onScrollPage);

  const handleDownloadCv = () => {
    const cvLink = process.env.REACT_APP_CV_LINK;
    window.open(cvLink, "_blank");
  };

  const itemStyle = {
    width: "90px",
    height: "90px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    transition: "0.2s",
    ":hover": {
      transition: "0.2s",
      transform: "translateY(-5px)",
    },
  };

  return (
    <Box sx={{ background: "#e9d5d3", py: "5rem" }} id="myAboutSection">
      <Container>
        <Slide
          in={showAbout}
          direction="right"
          timeout={{ appear: 900, enter: 900, exit: 900 }}
        >
          <Typography variant="h4" sx={{ pb: "2rem" }} id="title__about">
            About me
          </Typography>
        </Slide>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} color="#3c4043">
              <Tab label="Spanish" value="1" />
              <Tab label="English" value="2" disabled />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Grid
              container
              spacing={2}
              display="flex"
              justifyContent="space-evenly"
              pb="3rem"
            >
              <Grid item xs={12} md={6}>
                <Typography maxWidth="65ch">
                  Mi interés por la tecnología comienza en la adolescencia con
                  la adquisición de la primera PC en casa. En un principio fue
                  con el hardware afición que continúa hasta el día de hoy.
                  Estudiando reparación PC descubrí el mundo de la programación
                  el cual me apasionó.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography maxWidth="65ch">
                  También quiero destacar la actuación y la música como
                  actividades que complementan mi vida.
                </Typography>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value="2">
            <Typography>Coming soon</Typography>
          </TabPanel>
        </TabContext>

        <Button variant="outlined" onClick={handleDownloadCv}>
          <FileDownload />
          Download CV
        </Button>

        <MySkills itemStyle={itemStyle} />
        <Learning itemStyle={itemStyle} />
      </Container>
    </Box>
  );
};

const MySkills = ({ itemStyle }) => {
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
        {technologies.map((technology) => {
          return (
            <Grid lg="auto" item key={technology.name}>
              <Box
                width="90px"
                height="90px"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="space-between"
                sx={itemStyle}
              >
                <img
                  alt={technology.name}
                  srcSet={technology.image}
                  style={{
                    width: "64px",
                    height: "64px",
                    objectFit: "cover",
                  }}
                />
                <Typography>{technology.name}</Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

const Learning = ({ itemStyle }) => {
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
        {technologies.map((technology) => {
          return (
            <Grid lg="auto" item key={technology.name}>
              <Box sx={itemStyle}>
                <img
                  alt={technology.name}
                  srcSet={technology.image}
                  style={{
                    width: "64px",
                    height: "64px",
                    objectFit: "cover",
                  }}
                />
                <Typography>{technology.name}</Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default About;
