import React from 'react';
import './Banner.scss';  

function Banner({ title, backgroundImage, brightness }) {
  return (
    <div className="banner">
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

export default Banner;
