import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitAnswers } from "./features/questionnaire/questionnaireSlice";
import Question from "./components/Question";
import Result from "./components/Result";
import "./App.css";
const App = () => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questionnaire.questions);

  return (
    <div style={{ textAlign: "center", maxWidth: "400px", margin: "auto" }}>
      <h1>Questionnaire</h1>
      {questions.map((q) => (
        <Question key={q.id} question={q} />
      ))}
      <button
        onClick={() => dispatch(submitAnswers())}
        style={{ backgroundColor: "blue", color: "white", padding: "10px", marginTop: "10px" }}
      >
        Submit
      </button>
      <Result />
    </div>
  );
};

export default App;

