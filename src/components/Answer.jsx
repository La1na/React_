import React, { useState } from "react";

function Answer({ onAnswer }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      onAnswer(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Введите ответ"
      />
      <button type="submit">Проверить</button>
    </form>
  );
}

export default Answer;
