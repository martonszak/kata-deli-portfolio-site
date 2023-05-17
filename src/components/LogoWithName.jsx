import { Box, Typography } from "@mui/material";
import DkLogoSvg from "../assets/dk_logo.svg";

function LogoWithName(props) {
  const handleClick = (event) => {
    event.preventDefault();
    window.location.href = "/";
  };

  return (
    <>
      <Box
        component="img"
        onClick={handleClick}
        sx={{
          height: 64,
          cursor: "pointer",
        }}
        src={DkLogoSvg}
      />
      <Typography
        noWrap
        component="a"
        href="/"
        sx={{
          display: { xs: "none", sm: "flex" },
          fontFamily: "Barlow",
          textDecoration: "none",
          fontWeight: "200",
          fontSize: 24,
          marginLeft: 4,
          color: "black",
        }}
      >
        DELI KATA DOROTTYA
      </Typography>
    </>
  );
}

export default LogoWithName;
