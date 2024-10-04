import React from 'react';
import { Link } from 'react-router-dom';
import './LogementCard.scss'



function LogementCard({ logement }) {
  return (
    <Link to={`/logement/${logement.id}`} className="logement-card">
      <img src={logement.cover} alt={logement.title} className="logement-image" />
      <div className="logement-info">
        <h2>{logement.title}</h2>
      </div>
    </Link>
  );
}

export default LogementCard;
