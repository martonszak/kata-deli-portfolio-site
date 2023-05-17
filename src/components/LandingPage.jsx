import { Box, Divider, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { LanguageContext } from "../App";
import { useContext } from "react";
import cloudPicture from "../assets/clouds.webp";
import Image from "mui-image";

function LandingPage() {
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
          sx={{
            backgroundColor: "#F2F2F2",
          }}
          direction={{ xs: "column-reverse", md: "row" }}
          maxWidth="lg"
          justifyContent="center"
          alignItems={{ xs: "center", md: "flex-start" }}
          spacing={{ xs: 4, md: 4, lg: 10 }}
          marginX={{ md: 2, lg: 0 }}
        >
          <Stack
            spacing={{ xs: 0, sm: 4 }}
            direction="row"
            sx={{
              maxWidth: { xs: "90%", sm: "100%", md: "50%", lg: "50%" },
              marginX: { sm: 2, lg: 0 },
            }}
          >
            <Divider
              orientation="vertical"
              flexItem
              color="#1253FF"
              sx={{ display: { xs: "none", sm: "block" } }}
            />
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
          <Box
            sx={{
              minWidth: { xs: "100%", sm: "100%", md: "45%", lg: "50%" },
              height: { xs: 410, md: 822 },
            }}
          >
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

export default LandingPage;
