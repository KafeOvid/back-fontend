import React, { useState } from 'react';
import '../styles/TopHead.css';
import { FaFacebook, FaTwitter, FaInstagram, FaSun, FaMoon } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TopHead = () => {
  const [fontSize, setFontSize] = useState(16);

  const increaseFontSize = () => {
    const newSize = fontSize + 2;
    setFontSize(newSize);
    document.documentElement.style.setProperty('--font-size', `${newSize}px`);
  };

  const decreaseFontSize = () => {
    const newSize = fontSize - 2;
    setFontSize(newSize);
    document.documentElement.style.setProperty('--font-size', `${newSize}px`);
  };

  const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
  };

  return (
    <div className="top-head">
      <div className="font-size-controls">
        <button onClick={increaseFontSize}>A+</button>
        <button onClick={decreaseFontSize}>A-</button>
      </div>
      <div className="dark-mode-toggle">
        <button onClick={toggleDarkMode}>
          {document.body.classList.contains('dark-mode') ? <FaSun /> : <FaMoon />}
        </button>
      </div>
      <div className="auth-buttons">
        <Link to="/login"><button className="login-button">Login</button></Link>
        <Link to="/signup"><button className="signup-button">Signup</button></Link>
      </div>
    </div>
  );
};

export default TopHead;
