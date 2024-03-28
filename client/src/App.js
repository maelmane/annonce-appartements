import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [annonces, setAnnonces] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/proprietes")
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        setAnnonces(data);
      });
  }, []);

  return (
    <div className="App">
      <h1>Appartements à louer</h1>
      {annonces.map((annonce) => (
        <div key={annonce._id}> 
          <h2>{annonce.Colocation_name}</h2>
          <p>Nombre de chambre: {annonce.Number_of_bedrooms}</p>
          <p>Nombre de salles de bain: {annonce.Number_of_Bathrooms}</p>
          <p>Prix: {annonce.Price}$</p>
          <p>Description: {annonce.Apartment_description}</p>
          <p>Adresse: {annonce.Address}</p>
          <p>Included:</p>
          <ul>
            {annonce.included.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p>Date_de_disponibilite: {annonce.Date_de_disponibilite}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
