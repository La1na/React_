import React from 'react';
import Rating from './rating';
import List from "./list";

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>Оцените наш сервис</h1>
      <Rating />
      <div style={{ marginTop: "40px" }}>
        <List />
      </div>
    </div>
  );
}
export default App;

