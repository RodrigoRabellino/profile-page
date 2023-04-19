import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Footer = () => {
  let date = new Date();
  console.log(date.getFullYear());
  return (
    <Box bgcolor="#3c4043" py="1rem">
      <Container>
        <Typography fontWeight="300" sx={{ color: "#fff" }} textAlign="center">
         {date.getFullYear()} - Rodrigo Rabellino® 
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
