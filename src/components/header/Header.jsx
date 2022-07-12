import { Box, Typography, Paper } from "@mui/material";

const Header = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      py="2rem"
    >
      <Box sx={{ py: "3rem", background: "" }}>
        <Typography variant="h2" fontWeight="600">
          Rodrigo
        </Typography>
        <Typography variant="h2" fontWeight="600">
          Rabellino
        </Typography>
        <Typography variant="h6">Fullstack Dev | Actor</Typography>
      </Box>
      <Box width="250px" borderRadius="50%" overflow="hidden">
        <img
          style={{ width: "100%", objectFit: "cover" }}
          srcSet={require("../../assets/img/fotoCv1crop.jpg")}
          alt="Rodrigo Rabellino profile"
        />
      </Box>
    </Box>
  );
};

export default Header;
