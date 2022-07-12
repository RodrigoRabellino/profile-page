import { GitHub, LinkedIn, MailOutline, Phone } from "@mui/icons-material";
import {
  Box,
  Grid,
  Button,
  Container,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";

const Contact = () => {
  return (
    <Box py="5rem" id="myContactSection">
      <Container>
        <Typography variant="h4" sx={{ pb: "2rem" }}>
          Contact
        </Typography>
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
      placement="bottom"
    >
      <Button name="rorabe93@gmail.com" onClick={handleOpen}>
        {icon} {value}
      </Button>
    </Tooltip>
  );
};

const MyButtonCopy = ({ value, icon }) => {
  const [copy, setCopy] = useState(false);

  const handleCopy = () => {
    setCopy(true);
    navigator.clipboard.writeText(value);
    setTimeout(() => {
      setCopy(false);
    }, 1500);
  };
  return (
    <Tooltip title={copy ? "Copied!" : "Copy to clipboard"} placement="bottom">
      <Button name="rorabe93@gmail.com" onClick={handleCopy}>
        {icon} {value}
      </Button>
    </Tooltip>
  );
};

export default Contact;
