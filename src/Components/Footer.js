import React from 'react';
import logo from '../Assets/Logo-Kasa-white.png'
import './Footer.scss';  

const Footer = () => {
    return (
        <footer className="footer">
            <div>
                <img src={logo} alt="Logo de Kasa Blanc" className="logo" />
            </div>
            <p>&copy; 2020 Kasa. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
