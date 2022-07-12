import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <Box bgcolor="#3c4043" py="1rem">
      <Container>
        <Typography fontWeight="100" sx={{ color: "#fff" }} textAlign="center">
          ® 2022 - Rodrigo Rabellino
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
