import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [
    { id: 1, text: "Question 1?", options: ["Option 1", "Option 2"], correct: 0 },
    { id: 2, text: "Question 2?", options: ["Option 1", "Option 2"], correct: 1 },
    { id: 3, text: "Question 3?", options: ["Option 1", "Option 2"], correct: 0 },
    { id: 4, text: "Question 4?", options: ["Option 1", "Option 2"], correct: 0 },
    { id: 5, text: "Question 5?", options: ["Option 1", "Option 2"], correct: 1 },
  ],
  answers: {},
  score: null,
};

const questionnaireSlice = createSlice({
  name: "questionnaire",
  initialState,
  reducers: {
    answerQuestion: (state, action) => {
      state.answers[action.payload.questionId] = action.payload.answerIndex;
    },
    submitAnswers: (state) => {
      let score = 0;
      state.questions.forEach((q) => {
        if (state.answers[q.id] === q.correct) {
          score++;
        }
      });
      state.score = score;
    },
  },
});

export const { answerQuestion, submitAnswers } = questionnaireSlice.actions;
export default questionnaireSlice.reducer;
