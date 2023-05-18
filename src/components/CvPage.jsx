import { Box, Typography } from "@mui/material";
import Image from "mui-image";
import profilePicture from "../assets/dk_portrait.webp";
import { Stack } from "@mui/system";
import { LanguageContext } from "../App";
import { useContext } from "react";

function CvPage() {
  const language = useContext(LanguageContext);
  const others = Object.values(language.cv.others);
  const programs = Object.values(language.cv.programs);
  const works = Object.values(language.cv.works);

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
          justifyContent="space-between"
          direction={{ xs: "column", lg: "row" }}
          width="100%"
          maxWidth="lg"
          spacing={{ xs: 0, lg: 8 }}
        >
          <Box
            sx={{
              backgroundColor: "#E9E9E9",
              minWidth: "40%",
              height: { xs: 1150, sm: 1300, lg: 1850 },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyItems: "flex-start",
              paddingTop: 8,
            }}
          >
            <Box sx={{ maxWidth: "60%", marginBottom: 10 }}>
              <Image
                src={profilePicture}
                bgColor="#E9E9E9"
                duration={2000}
                fit="cover"
                style={{
                  borderRadius: "50%",
                  borderColor: "black",
                  borderWidth: 1,
                  borderStyle: "solid",
                  boxShadow: 3,
                }}
              />
            </Box>
            <Box sx={{ textAlign: "left", width: "75%" }}>
              <Typography sx={{ fontWeight: 600, fontSize: 24 }}>
                {language.cv.studies}
              </Typography>
              <br />
              <Typography>{language.cv.schools.school_1.years}</Typography>
              <Typography sx={{ fontWeight: 600 }}>
                {language.cv.schools.school_1.name}
              </Typography>
              <Typography>{language.cv.schools.school_1.title}</Typography>
              <br />
              <Typography>{language.cv.schools.school_2.years}</Typography>
              <Typography sx={{ fontWeight: 600 }}>
                {language.cv.schools.school_2.name}
              </Typography>
              <Typography>
                {language.cv.schools.school_2.courses_title}
              </Typography>
              <Typography sx={{ display: "list-item", marginLeft: 4 }}>
                {language.cv.schools.school_2.courses.title_1}
              </Typography>
              <Typography sx={{ display: "list-item", marginLeft: 4 }}>
                {language.cv.schools.school_2.courses.title_2}
              </Typography>
              <br />
              <Typography sx={{ fontWeight: 600 }}>
                {language.cv.language}
              </Typography>
              <Typography>{language.cv.language_skill}</Typography>
              <br />
              <Typography sx={{ fontWeight: 600 }}>
                {language.cv.programs_title}
              </Typography>
              {programs.map((program, i) => (
                <Typography key={"program" + i}>{program}</Typography>
              ))}
              <br />
              <Typography sx={{ fontWeight: 600 }}>
                {language.cv.others_title}
              </Typography>
              {others.map((other, i) => (
                <Typography
                  sx={{ display: "list-item", marginLeft: 4 }}
                  key={"other" + i}
                >
                  {other}
                </Typography>
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              minWidth: "0%",
              height: 1800,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyItems: "flex-start",
              paddingTop: 4,
            }}
          >
            <Box sx={{ textAlign: "left", width: { xs: "75%", lg: "85%" } }}>
              <Typography
                key={language.cv.work_experience_title}
                sx={{ fontWeight: 600, fontSize: 24 }}
              >
                {language.cv.work_experience_title}
                <br />
                <br />
              </Typography>
              {works.map((work, i) => (
                <>
                  <Typography key={"years" + i}>
                    {work.years}
                    <br />
                  </Typography>
                  <Typography sx={{ fontWeight: 600 }} key={"company" + i}>
                    {work.company}
                    <br />
                  </Typography>
                  <Typography key={"job" + i}>
                    {work.job}
                    <br />
                    <br />
                  </Typography>
                </>
              ))}
            </Box>
          </Box>
        </Stack>
      </Box>
    </>
  );
}

export default CvPage;
