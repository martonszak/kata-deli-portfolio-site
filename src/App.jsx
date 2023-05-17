import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import LandingPage from "./components/LandingPage";
import ProjectsPage from "./components/ProjectsPage";
import CvPage from "./components/CvPage";
import { createContext, useState } from "react";
import hunJson from "./data/hun.json";
import engJson from "./data/eng.json";
import Footer from "./components/Footer";
export const LanguageContext = createContext(null);
import { Routes, Route } from "react-router-dom";

function App() {
  const [language, setLanguage] = useState(engJson);

  function changeLanguage() {
    language === engJson ? setLanguage(hunJson) : setLanguage(engJson);
  }
  return (
    <>
      <LanguageContext.Provider value={language}>
        <CustomNavbar onSwitch={changeLanguage} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="cv" element={<CvPage />} />
        </Routes>
        <Footer />
      </LanguageContext.Provider>
    </>
  );
}

export default App;
