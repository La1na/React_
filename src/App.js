import React from "react";
import Quote from "./components/Quote";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.app}>
      <h1>Случайная цитата</h1>
      <Quote />
    </div>
  );
};

export default App;
