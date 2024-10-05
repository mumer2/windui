import React, { useState } from 'react';

const Dropbutton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown if clicked outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest('.unique-dropdown-container')) {
        return;
      }
      setIsOpen(false);
    };

    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="unique-dropdown-container">
      <button className="unique-dropbtn" onClick={toggleDropdown}>
        Choose one <i class="fa-solid fa-caret-down"></i>
      </button>
      {isOpen && (
        <div className="unique-dropdown-content">
          <a href="#">Dashboard</a>
          <a href="#">Matrics and analytics</a>
          <a href="#">Multi-Channel Funnel overview</a>
          <a href="#">User settings</a>
          <a href="#">User Profile</a>

        </div>
      )}
    </div>
  );
};

export default Dropbutton;
