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
          height: { xs: 32, sm: 64 },
          cursor: "pointer",
          marginLeft: { xs: 2, lg: 0 },
        }}
        src={DkLogoSvg}
      />
      <Typography
        noWrap
        component="a"
        href="/"
        sx={{
          display: "flex",
          fontFamily: "Barlow",
          textDecoration: "none",
          fontWeight: "200",
          fontSize: 24,
          marginLeft: { xs: 2, lg: 4 },
          color: "black",
        }}
      >
        DELI KATA DOROTTYA
      </Typography>
    </>
  );
}

export default LogoWithName;
