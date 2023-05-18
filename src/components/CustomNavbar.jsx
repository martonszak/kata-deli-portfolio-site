import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import CustomButton from "./CustomButton";
import LogoWithName from "./LogoWithName";
import { LanguageContext } from "../App";
import { useContext } from "react";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";

function CustomNavbar(props) {
  const { onSwitch } = props;
  const language = useContext(LanguageContext);
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{
          boxShadow: 0,
          height: { xs: 96, sm: 96, md: 192, lg: 192 },
          width: { xs: "100%" },
          justifyContent: "center",
        }}
      >
        <Container maxWidth="lg" disableGutters sx={{ width: { xs: "100%" } }}>
          <Toolbar
            disableGutters
            sx={{
              justifyContent: {
                xs: "space-between",
              },
            }}
          >
            <LogoWithName linkTo="/" />
            <Divider
              orientation="horizontal"
              color="black"
              sx={{ flexGrow: 1, m: 4, display: { xs: "none", lg: "flex" } }}
            />
            <Box
              width={{ md: "45%", lg: "50%" }}
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "space-between",
                marginRight: { md: 2, lg: 0 },
              }}
            >
              <CustomButton
                buttonText={language.home.pages.projects}
                key={language.home.pages.projects}
                onClick={handleCloseNavMenu}
                linkTo="projects"
              ></CustomButton>
              <CustomButton
                buttonText={language.home.pages.cv}
                key={language.home.pages.cv}
                onClick={handleCloseNavMenu}
                linkTo="cv"
              ></CustomButton>
              <CustomButton
                buttonText={language.home.switchlanguage}
                key={language.home.switchlanguage}
                onClick={onSwitch}
              ></CustomButton>
            </Box>
            <Box
              sx={{
                display: { xs: "flex", sm: "flex", md: "none" },
                justifyContent: "center",
              }}
            >
              <IconButton
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{ color: "#1253FF" }}
                size="large"
              >
                <MenuIcon sx={{ fontSize: "3rem" }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <Link
                  to="projects"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <MenuItem
                    key={language.home.pages.projects}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center">
                      {language.home.pages.projects}
                    </Typography>
                  </MenuItem>
                </Link>
                <Link
                  to="cv"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <MenuItem
                    key={language.home.pages.cv}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center">
                      {language.home.pages.cv}
                    </Typography>
                  </MenuItem>
                </Link>
                <MenuItem key={language.home.switchlanguage} onClick={onSwitch}>
                  <Typography textAlign="center">
                    {language.home.switchlanguage}
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default CustomNavbar;
