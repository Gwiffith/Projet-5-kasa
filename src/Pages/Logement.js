import React from 'react';
import { useParams , Navigate } from 'react-router-dom';
import logementsData from '../Data/logements.json';  // Assure-toi d'avoir les données JSON
import Slideshow from '../Components/Slideshow.js';

function Logement() {
  const { id } = useParams();  // Récupère l'id du logement à partir des paramètres de l'URL
  const logement = logementsData.find(logement => logement.id === id);  // Trouve le logement correspondant

  if (!logement) {
    return <Navigate to="/not-found" />;  // Gère le cas où le logement n'existe pas
  }

  return (
    <div>
      
      {/* Utilise le Slideshow pour afficher plusieurs images */}
      <Slideshow images={logement.pictures} />  {/* Passe les images du logement */}
      <h1>{logement.title}</h1>
      <p>{logement.description}</p>
      {/* Ajoute plus de détails ici */}
    </div>
  );
}

export default Logement;