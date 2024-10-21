import React, { useState } from 'react';

const VerticalNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the navbar
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="unique-vertical-navbar">
      {/* Toggle button for small screens */}
      <button className="unique-toggle-btn" onClick={toggleNavbar}>
        <i className={`fa ${isOpen ? 'fa-times' : 'fa-bars'}`} aria-hidden="true"></i>
      </button>

      {/* Vertical Navbar, hidden on small screens unless toggled */}
      <div className={`unique-navbar-content ${isOpen ? 'open' : ''}`}>
        <div className="unique-profile-section">
          <img src="Images/sn1.jfif" alt="Profile" className="unique-profile-icon" />
          <div className="unique-profile-name"><b>Luke Skywalker</b><br />Jedi warrior</div>
        </div>
        <hr />
        <nav className="unique-nav-links2">
          <a href="#dashboard" className="unique-nav-link2"><i className="fa-solid fa-table-columns"></i> Dashboard</a>
          <a href="#messages" className="unique-nav-link2"><i className="fa-regular fa-comment-dots"></i> Messages</a>
          <a href="#team" className="unique-nav-link2"><i className="fa-solid fa-people-group"></i> Team members</a>
          <a href="#tasks" className="unique-nav-link2"><i className="fa-solid fa-cubes-stacked"></i> Tasks</a>
          <a href="#notifications" className="unique-nav-link2"><i className="fa-solid fa-bell"></i> Notifications</a>
          <a href="#documents" className="unique-nav-link2"><i className="fa-regular fa-folder"></i> Documents</a>
          <a href="#media" className="unique-nav-link2"><i className="fa-solid fa-camera"></i> Media & Files</a>
          <a href="#storage" className="unique-nav-link2"><i className="fa-solid fa-database"></i> Storage</a>
          <div className="unique-blue-cont">
            <b>Backup completed.</b>
            <p>You successfully read this important alert message. Blue often indicates a neutral informative change or action.</p>
          </div>
          <a href="#logout" className="unique-nav-link2"><i className="fa-solid fa-arrow-right-from-bracket"></i> Logout</a>
        </nav>
      </div>
    </div>
  );
};

export default VerticalNavbar;
