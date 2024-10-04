import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header/Header.js';
import MyRouter from './MyRouter';
import Footer from './Footer/Footer.js';

function App() {
  return (
    <Router>  {/* Le Router principal */}
      <div>
        <Header />  {/* Le Banner avec les liens */}
        <MyRouter />  {/* Les Routes gérées par MyRouter */}
        <Footer />  {/* Le Footer de la page */}
      </div>
    </Router>
  );
}

export default App;
