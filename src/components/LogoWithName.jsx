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
          maxHeight: "3.8rem",
          marginY: "4rem",
          marginX: "1rem",
          cursor: "pointer",
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
          fontSize: "1.2rem",
          marginX: "1rem",
          color: "black",
        }}
      >
        DELI KATA DOROTTYA
      </Typography>
    </>
  );
}

export default LogoWithName;
