import React from 'react';
import { useParams , Navigate } from 'react-router-dom';
import logementsData from '../Data/logements.json'; 
import Slideshow from '../Components/Slideshow/Slideshow.js';
import TitleLocation from '../Components/LogementInfos/TitleLocation/TitleLocation.js';
import Tags from '../Components/LogementInfos/Tags/Tags.js';
import HostInfo from '../Components/LogementInfos/HostInfo/HostInfo.js';
import Rating from '../Components/LogementInfos/StarRating/StarRating.js';
import Collapse from '../Components/Collapse/Collapse.js';
import './Logement.scss'

function Logement() {
  const { id } = useParams();  // Récupère l'id du logement à partir des paramètres de l'URL
  const logement = logementsData.find(logement => logement.id === id);  // Trouve le logement correspondant

  if (!logement) {
    return <Navigate to="/not-found" />;  // Gère le cas où le logement n'existe pas
  }

  return (
    <div className='main'>
      <div className='slideshow'>
        {/* Utilise le Slideshow pour afficher plusieurs images */}
        <Slideshow images={logement.pictures} />  {/* Passe les images du logement */}
      </div>
      
      <div className='logement-overview'>

        <div className='title-location-and-tags'>
        {/* Titre et lieu */}
          <TitleLocation title={logement.title} location={logement.location} />

        {/* Tags */}
          <Tags tags={logement.tags} />
        </div>

        <div className="host-rating">
          {/* Infos de l'hôte */}
          <HostInfo host={logement.host} />

          {/* Rating (note) */}
          <Rating rating={logement.rating} />
        </div>

      </div>

      <div className='collapses'>
        {/* Collapse pour la description */}
        <Collapse title="Description">
          <p>{logement.description}</p>  {/* Affiche la description */}
        </Collapse>

        {/* Collapse pour les équipements */}
        <Collapse title="Équipements">
          <ul>
            {logement.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}

export default Logement;