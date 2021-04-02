import React from 'react';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className="LogoContainer">
      <img style={{padding: '15px', width:'100px', height: '100px' }} alt='logo' src={brain}/>
    </div>
  );
}

export default Logo;