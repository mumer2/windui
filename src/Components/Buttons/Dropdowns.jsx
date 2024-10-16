import React from 'react'
import CodePre from '../General/CodePre'
import Dropbutton from './Dropbutton'

export const Dropdowns = () => {
    const htmlCode = `  <div className="unique-dropdown-container">
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
    `;
  
  const reactCode = `import React, { useState } from 'react';

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

`;
  return (
    <div>
        <div className="dropdowns">
            <h1>Dropdowns</h1>
            <p>Menus allow users to make a selection from multiple options. They are less prominent and take up less space than selection controls, such as a set of radio buttons.</p>
        </div>

<div className="drop-cont">


        <div className="dropdown-container open">
        <div className="dropdown-menu">
            <div className="dropbtn" style={{marginTop:'10px'}}>
                 Choose one <i class="fa-solid fa-caret-down"></i>
            </div>
        </div>
            <ul className="dropdown-menu">
                <li className="dropdown-item actv"><b><i class="fa-solid fa-gauge"></i>Dashboard</b><br/>
                Quick overview of all basic metrics and settings
                </li>
                <li className="dropdown-item"><b><i class="fa-solid fa-arrow-trend-down"></i>Matrics And analytics</b><br/>
                Quick overview of all basic metrics and settings
                </li><li className="dropdown-item"><b><i class="fa-solid fa-filter"></i>Multi-Cgannel Funnels Ove...</b><br/>
                Quick overview of all basic metrics and settings
                </li><li className="dropdown-item"><b><i class="fa-regular fa-user"></i>User Settings</b><br/>
                Quick overview of all basic metrics and settings
                </li>
                <li className="dropdown-item"><b><i class="fa-solid fa-gear"></i>User Profile</b><br/>
                Quick overview of all basic metrics and settings
                </li>
            </ul>
        </div>
        </div>
        <div className="dropdowns">
            <h2>Variations</h2>
            <h4>Basic Dropdown</h4>
        </div>
        <div className="code-cont">
    <CodePre htmlCode={htmlCode} reactCode={reactCode}/>
    </div>    
        <div className="dropbtnuniq">
            <Dropbutton/>

        </div>
    </div>
  )
}
