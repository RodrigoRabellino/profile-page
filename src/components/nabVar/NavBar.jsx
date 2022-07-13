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
  Menu,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const NavBar = () => {
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
            <MenuNavBar />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

const MenuNavBar = () => {
  const mq600 = useMediaQuery("(min-width:600px)");

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {mq600 ? (
        <NavBarItems direction={"row"} />
      ) : (
        <>
          <IconButton
            id="menu-navbar-button"
            aria-haspopup="true"
            aria-controls={open ? "basic-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            sx={{ p: "2rem" }}
            id="menu-navbar"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <NavBarItems direction={"column"} handleClose={handleClose} />
          </Menu>
        </>
      )}
    </>
  );
};

const NavBarItems = ({ direction, handleClose }) => {
  return (
    <Stack
      direction={direction}
      justifyContent="space-between"
      spacing={2}
      px={direction === "column" ? "2rem" : "0"}
    >
      <Typography
        noWrap
        sx={{ cursor: "pointer" }}
        onClick={() => {
          if (direction === "column") handleClose();
          setTimeout(() => {
            document
              .getElementById("myProjectSection")
              .scrollIntoView({ behavior: "smooth" });
          }, 5);
        }}
      >
        My Projects
      </Typography>
      <Typography
        sx={{ cursor: "pointer" }}
        onClick={() => {
          if (direction === "column") handleClose();
          setTimeout(() => {
            document
              .getElementById("myAboutSection")
              .scrollIntoView({ behavior: "smooth" });
          }, 5);
        }}
      >
        About
      </Typography>
      <Typography
        sx={{ cursor: "pointer" }}
        onClick={() => {
          if (direction === "column") handleClose();
          setTimeout(() => {
            document
              .getElementById("myContactSection")
              .scrollIntoView({ behavior: "smooth" });
          }, 5);
        }}
      >
        Contact
      </Typography>
    </Stack>
  );
};

export default NavBar;
