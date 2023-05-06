import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CustomNavbar />
      </ThemeProvider>
    </>
  );
}

export default App;
