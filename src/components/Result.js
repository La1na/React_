import React from "react";
import { useSelector } from "react-redux";

const Result = () => {
  const score = useSelector((state) => state.questionnaire.score);

  if (score === null) return null;

  return <h2>Your Score: {score}</h2>;
};

export default Result;
