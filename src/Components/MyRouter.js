import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import NotFound from '../Pages/NotFound';
import Logement from '../Pages/Logement';

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
