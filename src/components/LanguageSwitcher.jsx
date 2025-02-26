import React from "react";
import { useLanguage } from "./LanguageContext";

const LanguageSwitcher = () => {
  const { toggleLanguage } = useLanguage();
  return (
    <button className="button" onClick={toggleLanguage}>
      Switch language
    </button>
  );
};

export default LanguageSwitcher;
