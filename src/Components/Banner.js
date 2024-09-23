import React from 'react';
import { NavLink } from 'react-router-dom';
import './Banner.scss';  
import logo from '../Assets/Logo-Kasa.png';  

const Banner = () => {
  return (
    <header className="header">
      <div>
        <img src={logo} alt="Logo de Kasa" className="logo" />
      </div>
      <div>
        <nav>
          <ul className="nav-links">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? 'active-link' : ''}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className={({ isActive }) => isActive ? 'active-link' : ''}
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Banner;
