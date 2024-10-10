import React from 'react';

const TopNavbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="logo-main">
        <a href="/" className="nav-logo">
          <img src="https://wind-ui.com/favicon.ico" alt="Wind UI" className="rotating-icon" />
        </a>
        <a href="/" className="logo">
          Wind <sup className="ui">ui</sup>
        </a>
        </div>
      <div className="top-links">
 {/* Links */}
 <div className="nav-links">
          <a href="/" className="nav-item"><i className="fa-solid fa-border-all"></i><span className="link-text">Components</span></a>
          <a href="/" className="nav-item"><i className="fa-regular fa-paste"></i><span className="link-text">Theme</span></a>
          <a href="/" className="nav-item"><i className="fa-brands fa-figma"></i></a>
          <a href="/" className="nav-item"><i className="fa-brands fa-discord dis"></i></a>
          
          {/* Support Button, visible only on large screens */}
          <button className="nav-item btn1 support-btn">Support us</button>
        </div>
      </div>
       
      </div>
    </nav>
  );
};

export default TopNavbar;
