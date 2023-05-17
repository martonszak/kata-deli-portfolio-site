import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Barlow",
    fontSize: 16,
  },
  palette: {
    primary: {
      main: "#F2F2F2",
    },
    secondary: {
      main: "#1253FF",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1060,
      xl: 1536,
    },
  },
});

export default theme;
