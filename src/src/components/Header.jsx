import React from 'react';
import '../styles/Header.css'; 
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="India Gov Logo" className="logo" />
      <div className="header-content">
        <h1>Ministry of</h1>
        <p>Housing and Urban Affairs</p>
      </div>
    </header>
  );
};

export default Header;
