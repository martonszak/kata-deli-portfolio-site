import { Box, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import { LanguageContext } from "../App";
import { useContext } from "react";

function LandingPageTextBox() {
  const language = useContext(LanguageContext);

  return (
    <Container sx={{ display: "flex", backgroundColor: "primary.main" }}>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Typography item="true" sx={{ textAlign: "justify" }}>
          {language.home.introduction}
        </Typography>
      </Box>

      <img
        item="true"
        src="https://static.wixstatic.com/media/999169_59d89bee81614d6e99c1b1c81406e897~mv2.jpg/v1/fill/w_608,h_1000,fp_0.40_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/35999778_1422927451184562_2362225205276835840_n.jpg"
      />
    </Container>
  );
}

export default LandingPageTextBox;
