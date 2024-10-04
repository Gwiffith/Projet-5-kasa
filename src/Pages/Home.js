import React, { useState, useEffect } from 'react';
import Banner from '../Components/Banner/Banner.js';
import LogementCard from '../Components/LogementCard/LogementCard.js';
import logementsData from '../Data/logements.json';
import backgroundHome from '../Assets/backgroundHome.png'; 
import './Home.scss'

function Home() {
  const [logements, setLogements] = useState([]);

  // Charger les données de logements depuis le fichier JSON
  useEffect(() => {
    setLogements(logementsData);  // Met à jour l'état avec les données JSON
  }, []);

  return (
    <main>
      {/* Utilisation de CardTitle avec un titre et une image personnalisée */}
      <Banner title="Chez vous, partout et ailleurs" backgroundImage={backgroundHome} brightness={40} />

      {/* Galerie de logements */}
      <div className='gallery'>
        {logements.map((logement) => (
          <LogementCard key={logement.id} logement={logement} />
        ))}
      </div>
    </main>
  );
}

export default Home;

