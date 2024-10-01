import React, { useState } from 'react';
import './Slideshow.scss';

function Slideshow({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);  // Gère l'index de l'image actuelle

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Vérifie si le logement n'a qu'une seule image
  const isSingleImage = images.length === 1;

  return (
    <div className="slideshow">
      {/* Affiche les boutons seulement s'il y a plus d'une image */}
      {!isSingleImage && (
        <>
          <button className="prev-slide" onClick={prevSlide}>❮</button>
          <button className="next-slide" onClick={nextSlide}>❯</button>
        </>
      )}
      
      <img src={images[currentIndex]} alt="Slideshow" className="slideshow-image" />

      {/* Affiche la numérotation seulement s'il y a plus d'une image */}
      {!isSingleImage && (
        <div className="slideshow-counter">
          {currentIndex + 1}/{images.length}
        </div>
      )}
    </div>
  );
}

export default Slideshow;
