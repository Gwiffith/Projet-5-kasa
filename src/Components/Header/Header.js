import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';  
import logo from '../../Assets/Logo-Kasa.png';  

const Header = () => {
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
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className={({ isActive }) => isActive ? 'active-link' : ''}
              >
                A Propos
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
