import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Banner from './Banner';
import MyRouter from './MyRouter';
import Footer from './Footer';

function App() {
  return (
    <Router>  {/* Le Router principal */}
      <div>
        <Banner />  {/* Le Banner avec les liens */}
        <MyRouter />  {/* Les Routes gérées par MyRouter */}
        <Footer />  {/* Le Footer de la page */}
      </div>
    </Router>
  );
}

export default App;
