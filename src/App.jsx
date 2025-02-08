import React from "react";
import TopComponent from "./components/TopComponent";
import LifeIs from "./components/LifeISComponent"
import SignIn from "./components/SignIn";
import ButtonGroup from "./components/Buttons";
import "./App.css";
function App() {
  return (
    <div>
      <TopComponent />
      <LifeIs/>
      <SignIn/>
      <ButtonGroup/>
    </div>
    
  );
}

export default App;
