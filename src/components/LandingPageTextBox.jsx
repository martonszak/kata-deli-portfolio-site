import { Box, Divider, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { LanguageContext } from "../App";
import { useContext } from "react";
import cloudPicture from "../assets/clouds.webp";
import Image from "mui-image";

function LandingPageTextBox() {
  const language = useContext(LanguageContext);
  const texts = Object.values(language.home.texts);
  const workflow = Object.values(language.home.workflow);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#F2F2F2",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Stack
          sx={{ backgroundColor: "#F2F2F2" }}
          direction="row"
          maxWidth="lg"
          justifyContent="center"
          alignItems="flex-start"
          spacing={10}
        >
          <Stack spacing={4} direction="row" maxWidth="50%">
            <Divider orientation="vertical" flexItem color="#1253FF" />
            <Box>
              {texts.map((text, i) => (
                <Typography key={i} sx={{ textAlign: "justify" }}>
                  {text}
                  <br />
                  <br />
                </Typography>
              ))}
              <Typography>
                {language.home.workflowtitle}
                <br />
                <br />
              </Typography>
              {workflow.map((text, i) => (
                <Typography
                  key={i}
                  item="true"
                  sx={{
                    textAlign: "justify",
                    display: "list-item",
                    marginLeft: 2,
                  }}
                >
                  {text}
                </Typography>
              ))}
            </Box>
          </Stack>
          <Box sx={{ minWidth: "50%", height: 822 }}>
            <Image
              src={cloudPicture}
              bgColor="#F2F2F2"
              duration={2000}
              fit="cover"
            />
          </Box>
        </Stack>
      </Box>
    </>
  );
}

export default LandingPageTextBox;
