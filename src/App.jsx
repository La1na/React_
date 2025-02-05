import React, { useState } from "react";
import CitySelector from "./components/CitySelector";
import CityCard from "./components/CityCard";
import { citiesData } from "./components/CityDatas";
import "./App.css";

function App() {
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <div className="app-container">
      <h1>City Cards</h1>
      <CitySelector cities={citiesData} onSelectCity={setSelectedCity} />
      {selectedCity && <CityCard city={selectedCity} />}
    </div>
  );
}

export default App;
