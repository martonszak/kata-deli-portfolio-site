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

function CustomNavbar(props) {
  const { onSwitch } = props;
  const language = useContext(LanguageContext);
  const pages = Object.values(language.home.pages);
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
        sx={{ boxShadow: 0, height: 192, justifyContent: "center" }}
      >
        <Container maxWidth="lg" disableGutters>
          <Toolbar disableGutters>
            <LogoWithName />
            <Divider
              orientation="horizontal"
              color="black"
              sx={{ flexGrow: 1, m: 4 }}
            />
            <Box
              width="50%"
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "space-between",
              }}
            >
              {pages.map((pageName) => (
                <CustomButton
                  buttonText={pageName}
                  key={pageName}
                  onClick={handleCloseNavMenu}
                ></CustomButton>
              ))}
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
                {pages.map((pageName) => (
                  <MenuItem key={pageName} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{pageName}</Typography>
                  </MenuItem>
                ))}
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
