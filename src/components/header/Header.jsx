import {
  Box,
  Typography,
  useMediaQuery,
  Container,
  Fade,
  Slide,
} from "@mui/material";
import { useEffect, useState } from "react";
import styles from "./header.module.css";
import profilePhoto from "../../assets/img/photos/fotoCv1crop.jpg";

const Header = () => {
  const mediaQuery600 = useMediaQuery("(min-width:600px)");
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    setShowImage(true);
  }, []);

  return (
    <section className={styles.section}>
      <Box
        display="flex"
        alignItems="center"
        height="400px"
        py="5rem"
        bgcolor="#e3ffe6"
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Slide
              in={showImage}
              direction="right"
              timeout={{ appear: 1000, enter: 1000, exit: 1000 }}
            >
              <Typography
                fontSize={{ sm: "75px", xs: "60px" }}
                fontWeight="600"
              >
                Rodrigo
              </Typography>
            </Slide>
            <Slide
              in={showImage}
              direction="right"
              timeout={{ appear: 1500, enter: 1500, exit: 1500 }}
            >
              <Typography
                fontSize={{ sm: "75px", xs: "60px" }}
                fontWeight="600"
              >
                Rabellino
              </Typography>
            </Slide>
            <Slide
              in={showImage}
              direction="right"
              timeout={{ appear: 2000, enter: 2000, exit: 2000 }}
            >
              <Typography fontSize="20px" ml="3px">
                Fullstack Developer
              </Typography>
            </Slide>
          </Box>

          <Fade
            in={showImage}
            timeout={{ appear: 2000, enter: 2000, exit: 2000 }}
          >
            <Box
              width="300px"
              height="300px"
              borderRadius="500px"
              overflow="hidden"
              display={mediaQuery600 ? "flex" : "none"}
            >
              <img
                className="image__profile"
                style={{
                  width: "100%",
                  objectFit: "cover",
                }}
                src={profilePhoto}
                alt="Rodrigo Rabellino profile"
              />
            </Box>
          </Fade>
        </Container>
      </Box>
    </section>
  );
};

export default Header;
