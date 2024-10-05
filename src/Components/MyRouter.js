import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home/Home.js';
import About from '../Pages/About/About.js';
import NotFound from '../Pages/NotFound/NotFound.js';
import Logement from '../Pages/Logement/Logement.js';

const MyRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/logement/:id" element={<Logement />} />  {/* Route dynamique */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default MyRouter;
