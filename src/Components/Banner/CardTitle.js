import React from 'react';
import './CardTitle.scss';  // Tu peux garder le SCSS pour les autres styles si nécessaire

function CardTitle({ title, backgroundImage, brightness }) {
  return (
    <div className="title-card">
      <img
        src={backgroundImage}
        alt={title}
        className="background-Img"
        style={{ filter: `brightness(${brightness}%)` }}  
      />
      <h1>{title}</h1>
    </div>
  );
}

export default CardTitle;
