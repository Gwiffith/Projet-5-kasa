import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import './StarRating.scss';

function StarRating({ rating }) {
  const maxStars = 5;

  return (
    <div className="star-rating">
      {Array(maxStars).fill(0).map((_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={index < rating ? solidStar : solidStar}  // Affiche l'étoile colorée ou grise
          className={index < rating ? 'star filled' : 'star empty'}
        />
      ))}
    </div>
  );
}

export default StarRating;
