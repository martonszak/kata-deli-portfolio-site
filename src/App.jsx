import "./App.css";
import CustomNavbar from "./components/CustomNavbar";

import LandingPageTextBox from "./components/LandingPageTextBox";
import { createContext, useState } from "react";
import hunJson from "./data/hun.json";
import engJson from "./data/eng.json";
import Footer from "./components/Footer";
export const LanguageContext = createContext(null);

function App() {
  const [language, setLanguage] = useState(engJson);

  function changeLanguage() {
    language === engJson ? setLanguage(hunJson) : setLanguage(engJson);
  }
  return (
    <>
      <LanguageContext.Provider value={language}>
        <CustomNavbar onSwitch={changeLanguage} />
        <LandingPageTextBox />
        <Footer />
      </LanguageContext.Provider>
    </>
  );
}

export default App;
