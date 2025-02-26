import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./styless.css";
import { LanguageProvider } from "./components/LanguageContext";
import LanguageText from "./components/LanguageText";
import LanguageSwitcher from "./components/LanguageSwitcher";

const App = () => {
  return (
    <LanguageProvider>
      <div className="container">
        <LanguageText />
        <LanguageSwitcher />
      </div>
    </LanguageProvider>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={<div>Loading...</div>}>
    <App />
  </Suspense>
);

export default App;