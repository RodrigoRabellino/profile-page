import { GitHub, LinkedIn, MailOutline, Phone } from "@mui/icons-material";
import {
  Box,
  Grid,
  Button,
  Container,
  Tooltip,
  Typography,
  useMediaQuery,
  Slide,
} from "@mui/material";
import { useState } from "react";

const Contact = () => {
  const [showContact, setShowContact] = useState(false);

  const isInViewport = () => {
    const div = document.getElementById("contact__title");
    let distance = div.getBoundingClientRect();
    return (
      distance.top <
        (window.innerHeight || document.documentElement.clientHeight) &&
      distance.bottom > 0
    );
  };

  const onScrollPage = () => {
    if (isInViewport()) {
      console.log(showContact);
      setShowContact(true);
    }
  };
  window.addEventListener("scroll", onScrollPage);

  return (
    <Box py="7rem" id="myContactSection">
      <Container>
        <Slide
          in={showContact}
          direction="right"
          timeout={{ appear: 900, enter: 900, exit: 900 }}
        >
          <Typography variant="h4" sx={{ pb: "2rem" }} id="contact__title">
            Contact
          </Typography>
        </Slide>

        <Grid container spacing={2} display="flex">
          <Grid item xs={12} sm={6} md={3}>
            <MyButtonOpen
              icon={<LinkedIn />}
              value="/RodrigoRabellino"
              handleOnClick={() =>
                window.open("https://github.com/RodrigoRabellino", "_blank")
              }
            ></MyButtonOpen>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <MyButtonOpen
              icon={<GitHub />}
              value="/RodrigoRabellino"
              handleOnClick={() =>
                window.open(
                  "https://www.linkedin.com/in/rodrigorabellino/",
                  "_blank"
                )
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <MyButtonCopy value="rorabe93@gmail.com" icon={<MailOutline />} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <MyButtonCopy value="(+598) 92561775" icon={<Phone />} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

const MyButtonOpen = ({ value, icon, handleOnClick }) => {
  const [click, setClick] = useState(false);
  const mq900 = useMediaQuery("(max-width:900px)");
  const handleOpen = () => {
    setClick(true);
    setTimeout(() => {
      handleOnClick();
      setClick(false);
    }, 1200);
  };
  return (
    <Tooltip
      title={click ? "Arrivederci!" : "Open in new tab"}
      placement={mq900 ? "right" : "bottom"}
    >
      <Button name="rorabe93@gmail.com" onClick={handleOpen}>
        {icon} {value}
      </Button>
    </Tooltip>
  );
};

const MyButtonCopy = ({ value, icon }) => {
  const [copy, setCopy] = useState(false);
  const mq900 = useMediaQuery("(max-width:900px)");
  const handleCopy = () => {
    setCopy(true);
    navigator.clipboard.writeText(value);
    setTimeout(() => {
      setCopy(false);
    }, 1500);
  };
  return (
    <Tooltip
      title={copy ? "Copied!" : "Copy to clipboard"}
      placement={mq900 ? "right" : "bottom"}
    >
      <Button name="rorabe93@gmail.com" onClick={handleCopy}>
        {icon} {value}
      </Button>
    </Tooltip>
  );
};

export default Contact;
