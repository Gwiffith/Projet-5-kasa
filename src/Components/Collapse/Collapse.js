import React, { useState } from 'react';
import './Collapse.scss';

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);  // Gère l'état ouvert/fermé

  const toggleCollapse = () => {
    setIsOpen(!isOpen);  // Inverse l'état quand on clique
  };

  return (
    <div className="collapse">
      {/* Titre cliquable pour ouvrir/fermer */}
      <button className="collapse-title" onClick={toggleCollapse}>
        {title}  {/* Le titre est passé en props */}
        <span className={`material-symbols-outlined collapse-icon ${isOpen ? 'open' : ''}`}>
        keyboard_arrow_up  {/* Icône pour flèche vers le haut */}
        </span>
      </button>

      {/* Contenu conditionnel qui se montre/se cache selon isOpen */}
      <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
        {children}
      </div>
    </div>
  );
}

export default Collapse;


