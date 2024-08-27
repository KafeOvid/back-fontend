import React from 'react';
import '../styles/Banner.css';
import logo from '../assets/modiji.jpeg';

const Banner = () => {
  return (
    <div className="banner">
      <img src={logo} alt="Union Budget 2024-25" />
    </div>
  );
};

export default Banner;
