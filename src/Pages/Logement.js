import React from 'react';
import { useParams } from 'react-router-dom';
import logementsData from '../Data/logements.json';  // Assure-toi d'avoir les données JSON

function Logement() {
  const { id } = useParams();  // Récupère l'id du logement à partir des paramètres de l'URL
  const logement = logementsData.find(logement => logement.id === id);  // Trouve le logement correspondant

  if (!logement) {
    return <p>Logement non trouvé.</p>;  // Gère le cas où le logement n'existe pas
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