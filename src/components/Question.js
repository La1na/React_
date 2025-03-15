import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { answerQuestion } from "../features/questionnaire/questionnaireSlice";

const Question = ({ question }) => {
  const dispatch = useDispatch();
  const selectedAnswer = useSelector((state) => state.questionnaire.answers[question.id]);

  return (
    <div>
      <h3>{question.text}</h3>
      {question.options.map((option, index) => (
        <label key={index} style={{ display: "block" }}>
          <input
            type="radio"
            name={`question-${question.id}`}
            value={index}
            checked={selectedAnswer === index}
            onChange={() => dispatch(answerQuestion({ questionId: question.id, answerIndex: index }))}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default Question;
