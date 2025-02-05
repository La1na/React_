import React, { useState } from "react";
import Answer from "./Answer";

function MathQuiz() {
  const [a, setA] = useState(generateRandomNumber());
  const [b, setB] = useState(generateRandomNumber());
  const [score, setScore] = useState(0);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }

  const handleAnswer = (userAnswer) => {
    const correctAnswer = a + b;
    if (parseInt(userAnswer) === correctAnswer) {
      setScore(score + 1);
    } else {
      setScore(score - 1);
    }
    // Генерация новой задачи
    setA(generateRandomNumber());
    setB(generateRandomNumber());
  };

  return (
    <div className="math-quiz">
      <p>Ваши очки: {score}</p>
      <p>{a} + {b} = ?</p>
      <Answer onAnswer={handleAnswer} />
    </div>
  );
}

export default MathQuiz;
