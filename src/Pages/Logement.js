import React from 'react';
import { useParams , Navigate } from 'react-router-dom';
import logementsData from '../Data/logements.json';  // Assure-toi d'avoir les données JSON
import NotFound from './NotFound.js'

function Logement() {
  const { id } = useParams();  // Récupère l'id du logement à partir des paramètres de l'URL
  const logement = logementsData.find(logement => logement.id === id);  // Trouve le logement correspondant

  if (!logement) {
    return <Navigate to="/not-found" />;  // Gère le cas où le logement n'existe pas
  }

  return (
    <div>
      <h1>{logement.title}</h1>
      <img src={logement.cover} alt={logement.title} />
      <p>{logement.description}</p>
      {/* Ajoute plus de détails ici */}
    </div>
  );
}

export default Logement;