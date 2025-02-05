import React from "react";

function CityCard({ city }) {
  return (
    <div className="city-card">
      <h2>{city.name}</h2>
      <div className="img_div">
      <img src={city.imageUrl} alt={city.name} />
      </div>
      <p>{city.description}</p>
      <ul>
        {city.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default CityCard;
