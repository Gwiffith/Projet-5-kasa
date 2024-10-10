import React from 'react';
import './HostInfo.scss';

function HostInfo({ host }) {
  // Sépare le prénom et le nom de famille
  const [firstName, lastName] = host.name.split(' ');

  return (
    <div className="host-info">
      <p className="host-name">
        <span className="first-name">{firstName}</span>  {/* Prénom */}
        <br />
        <span className="last-name">{lastName}</span>  {/* Nom de famille */}
      </p>
      <img src={host.picture} alt={host.name} className="host-picture" />
    </div>
  );
}

export default HostInfo;
