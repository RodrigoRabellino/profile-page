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
import { technologies, learning } from "../services/data";

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
      setShowAbout(true);
    }
  };
  window.addEventListener("scroll", onScrollPage);

  const handleDownloadCv = () => {
    const cvLink = process.env.REACT_APP_CV_LINK;
    window.open(cvLink, "_blank");
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

        <TechnologiesList name="Skills" items={technologies} />
        <TechnologiesList name="Learning/Interest" items={learning} />
      </Container>
    </Box>
  );
};

const TechnologiesList = ({ items, name }) => {
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
    <Box mt="2rem">
      <Typography variant="h4" sx={{ pb: "2rem" }} textAlign="center">
        {name}
      </Typography>
      <Grid
        container
        spacing={2}
        display="flex"
        justifyContent={items.length > 6 ? "space-evenly" : "center"}
      >
        {items.map((technology) => {
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

export default About;
