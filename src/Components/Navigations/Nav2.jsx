import React from 'react';

const Nav2 = () => {
  return (
    <nav className="unique1-simple-navbar">
      <div className="unique1-navbar-logo">Brand</div>
      <div className="unique1-navbar-links">
        <a href="#home" className="unique1-nav-link">Home</a>
        <a href="#about" className="unique1-nav-link Active">Features</a>
        <a href="#services" className="unique1-nav-link">Pricing</a>
        <a href="#contact" className="unique1-nav-link">About</a>
      </div>
    </nav>
  );
};

export default Nav2;
