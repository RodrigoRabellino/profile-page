import {
  AppBar,
  Box,
  Collapse,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import { useState } from "react";

const NavBar = () => {
  const mq600 = useMediaQuery("(min-width:600px)");
  const [isScroll, setIsScroll] = useState(false);
  const [openName, setOpenName] = useState(false);
  const onScrollPage = () => {
    setIsScroll(window.scrollY >= 80);
    setOpenName(window.scrollY >= 300);
  };
  window.addEventListener("scroll", onScrollPage);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        elevation={isScroll ? 5 : 0}
        sx={{
          position: "-webkit-sticky",
          top: "0",
          background: isScroll ? "#fff" : "transparent",
          borderRadius: "0",
        }}
      >
        <Container>
          <Toolbar
            disableGutters
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              paddingX: 0,
              marginX: 0,
            }}
          >
            <Box
              display="flex"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              sx={{ cursor: "pointer" }}
            >
              <Collapse
                in={openName}
                orientation="horizontal"
                collapsedSize={15}
              >
                <Typography
                  overflow="hidden"
                  variant="h6"
                  sx={
                    openName
                      ? { transition: "", width: "7ch" }
                      : { transition: "0.2s", width: "1ch" }
                  }
                >
                  Rodrigo
                </Typography>
              </Collapse>
              <Collapse
                in={openName}
                orientation="horizontal"
                collapsedSize={15}
              >
                <Typography
                  overflow="hidden"
                  variant="h6"
                  sx={
                    openName
                      ? { transition: "", width: "9ch" }
                      : { transition: "0.2s", width: "1ch" }
                  }
                >
                  Rabellino
                </Typography>
              </Collapse>
            </Box>

            {mq600 ? (
              <NavBarItems />
            ) : (
              <IconButton>
                <Menu />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

const NavBarItems = () => {
  return (
    <Stack direction="row" justifyContent="space-between" spacing={2}>
      <Typography
        sx={{ cursor: "pointer" }}
        onClick={() => {
          document
            .getElementById("myProjectSection")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        My Projects
      </Typography>
      <Typography
        sx={{ cursor: "pointer" }}
        onClick={() => {
          document
            .getElementById("myAboutSection")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        About
      </Typography>
      <Typography
        sx={{ cursor: "pointer" }}
        onClick={() => {
          document
            .getElementById("myContactSection")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        Contact
      </Typography>
    </Stack>
  );
};

export default NavBar;
