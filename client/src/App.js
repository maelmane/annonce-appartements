import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [annonces, setAnnonces] = useState([]);

  useEffect(() => {
    document.title = 'Appartements à louer';
    fetch("http://localhost:8000/proprietes")
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        setAnnonces(data);
      });
  }, []);

  return (
    <div className="App">
      <div class="container">
      <h1>Appartements à louer</h1>
        {annonces.map((annonce) => (
          <div key={annonce._id}>
        <div class="product">
          <img src="https://www.immobiliere-manon.com/Repo/biens/705/photos/5789.jpg" alt="Appartement"/>
          <h2>{annonce.Colocation_name}</h2>
          <p>
           {annonce.Address}
          </p>
          <p>
            Nombre de chambres: {annonce.Number_of_bedroom}
          </p>
          <p>
            Nombre de salles de bain: {annonce.Number_of_Bathrooms}
          </p>
          <p>
            Description: {annonce.Apartment_description}
          </p>
          <p>Prix: {annonce.Price}$ /mois</p>
          <p>
            Date de disponibilté: {annonce.Date_de_disponibilite}
          </p>
          <button>Voir plus</button>
        </div>
        </div>
        ))}
      </div>
    </div>
  );
}

export default App;
