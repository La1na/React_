import React from "react";
import { useLanguage } from "./LanguageContext";

const LanguageText = () => {
  const { language } = useLanguage();
  return (
    <h1 className="text">
      {language === "en" ? "English language was chosen" : "Выбран русский язык"}
    </h1>
  );
};

export default LanguageText;
