import { Box, Typography } from "@mui/material";
import DkLogoSvg from "../assets/dk_logo.svg";
import { Link } from "react-router-dom";

function LogoWithName(props) {
  const { linkTo } = props;

  return (
    <>
      <Link
        to={"/"}
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          sx={{
            height: { xs: 32, sm: 64 },
            cursor: "pointer",
            marginLeft: { xs: 2, sm: 2, md: 2, lg: 0 },
          }}
          src={DkLogoSvg}
        />
        <Typography
          noWrap
          sx={{
            display: "flex",
            fontFamily: "Barlow",
            textDecoration: "none",
            fontWeight: "200",
            fontSize: 24,
            marginLeft: { xs: 2, sm: 0, md: 0, lg: 4 },
            color: "black",
          }}
        >
          DELI KATA DOROTTYA
        </Typography>
      </Link>
    </>
  );
}

export default LogoWithName;
