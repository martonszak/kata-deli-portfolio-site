import { Box, IconButton, Stack } from "@mui/material";
import DkLogoSvg from "../assets/dk_logo.svg";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  const handleClick = (event) => {
    event.preventDefault();
    window.location.href = "/";
  };
  return (
    <>
      <Box
        sx={{
          height: 192,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F2F2F2",
          width: "100%",
        }}
      >
        <Stack direction="row" spacing={4}>
          <Box
            component="img"
            onClick={handleClick}
            sx={{
              height: 48,
              cursor: "pointer",
            }}
            src={DkLogoSvg}
          />
          <IconButton
            size="large"
            href={`mailto:katadeli@gmail.com`}
            sx={{
              border: 1,
              borderColor: "#1253FF",
              borderRadius: 0,
              height: 48,
              width: 48,
              ":hover": {
                backgroundColor: "#1253FF",
                color: "#F2F2F2",
                borderColor: "#F2F2F2",
              },
            }}
          >
            <EmailIcon
              sx={{
                color: "#1253FF",
                ":hover": {
                  color: "#F2F2F2",
                },
              }}
            />
          </IconButton>
          <IconButton
            sx={{
              border: 1,
              borderColor: "#1253FF",
              borderRadius: 0,
              height: 48,
              width: 48,
              ":hover": {
                backgroundColor: "#1253FF",
                color: "#F2F2F2",
                borderColor: "#F2F2F2",
              },
            }}
            size="large"
            href={`https://www.instagram.com/delidorottya`}
            target="_blank"
          >
            <InstagramIcon
              sx={{
                color: "#1253FF",
                ":hover": {
                  color: "#F2F2F2",
                },
              }}
            />
          </IconButton>
        </Stack>
      </Box>
    </>
  );
}

export default Footer;
