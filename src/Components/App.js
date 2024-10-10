import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Header from './Header/Header.js';
import MyRouter from './MyRouter';
import Footer from './Footer/Footer.js';
import './App.scss'

function App() {
  return (
    <Router>  {/* Le Router principal */}
      <div className="app-container">  {/* Ajoute un conteneur parent avec Flexbox */}
        <Header />  {/* Le Banner avec les liens */}
        <div className="main-content">
          <MyRouter />  {/* Les Routes gérées par MyRouter */}
        </div>
        <Footer />  {/* Le Footer de la page */}
      </div>
    </Router>
  );
}


export default App;
