import React, { useState, useEffect } from 'react';
import './Home.scss';
import backgroundHome from '../Assets/backgroundHome.png'
import logementsData from '../Data/logements.json';

function Home() {

    const [logements, setLogements] = useState([]);

    // Charger les données de logements depuis le fichier JSON
    useEffect(() => {
        setLogements(logementsData);  // Met à jour l'état avec les données JSON
    }, []);

    return (
        <main>
            <div className='title-card'>
                <img src={backgroundHome} className='background-Img' />
                <h1>Chez vous, partout et ailleurs</h1>
            </div>

            {/* Galerie de logements */}
            <div className='gallery'>
                {logements.map((logement) => (
                    <div key={logement.id} className="logement-card">
                        <img src={logement.cover} alt={logement.title} className="logement-image" />
                        <div className="logement-info">
                            <h2>{logement.title}</h2>
                            <p>{logement.location}</p>
                            <p>{logement.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            
        </main>
    )
}

export default Home;
