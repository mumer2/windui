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

const cssCode = `.dropdowns {
  margin-top: 15%;
  margin-left: 2vw;
  color: rgb(138, 120, 120);
}
.dropdowns h1{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 600;
}
.dropdowns h2{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.8rem;
  line-height: 2.25rem;
  font-weight: 400;
}
.dropdowns p{
  font-size: 18px;
}
.dropdowns h4{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  line-height: 2.25rem;
  font-weight: 600;
}
.drop-cont{
  border: 1px solid rgb(227, 227, 227);
  border-radius: 10px;
  margin: 20px;
  padding: 30px;
}
.dropdown-menu {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.dropbtn {
  background-color: #02b583;
  color: white;
  padding: 3vw;
  border-radius: 0.5em;
  width: 100%;
  height: auto;
  text-align: center;
  font-size: 4vw;
  font-weight: 400;
  cursor: pointer;
}

.dropdown-container {
  display: flex;
  flex-wrap: wrap;
  width: 80vw; /* Adjust width for responsiveness */
  max-width: 400px; /* Set a max width */
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
  justify-content: center;
  margin: 5vw auto; /* Centering the dropdown container */
}

.dropdown-toggle {
  width: 100%;
  padding: 3vw;
  background-color: #3b82f6;
  color: white;
  font-size: 4vw;
  border: none;
  text-align: left;
  font-weight: 600;
  cursor: default;
  transition: background-color 0.3s ease;
}

.dropdown-menu {
  list-style: none;
  border-top: 1px solid #e5e7eb;
  color: rgb(100 ,116, 139);
}
.dropdown-menu i{
  margin-right: 10px;
}
.actv {
  color: #02b583;
}

.dropdown-item {
  padding: 3vw;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.dropdown-item:hover {
  background-color: #f3f4f6;
}
.dropbtnuniq{
  border: 1px solid rgb(227, 227, 227);
  margin: 20px;
  border-radius: 10px;
  padding: 40px;
}
/* Media Queries for Specific Screen Sizes */

/* Large devices (desktops, 1200px and up) */
@media (min-width: 1200px) {
  .dropdown-container {
    width: 310px;
  }

  .dropbtn,
  .dropdown-toggle {
    padding: 16px;
    font-size: 18px;
  }

  .dropdown-item {
    padding: 12px 16px;
  }
}

/* Medium devices (tablets, 768px to 1199px) */
@media (min-width: 768px) and (max-width: 1199px) {
  .dropdown-container {
    width: 60vw;
  }

  .dropbtn,
  .dropdown-toggle {
    padding: 14px;
    font-size: 16px;
  }

  .dropdown-item {
    padding: 10px 14px;
  }
}

/* Small devices (phones, less than 768px) */
@media (max-width: 767px) {
  .dropdown-container {
    width: 60vw;
  }

  .dropbtn,
  .dropdown-toggle {
    padding: 10px;
    font-size: 14px;
  }

  .dropdown-item {
    padding: 8px 10px;
  }
}


/* Dropbutton */

.dropbtnuniq{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

/* Dropdown container */
.unique-dropdown-container {
  position: relative;
  display: inline-block;
}

/* Dropdown button */
.unique-dropbtn {
  background-color: #018156; /* Blue color */
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

/* Change background color on hover */
.unique-dropbtn:hover {
  background-color: #02b583; /* Darker blue */
}

/* Dropdown content (hidden by default) */
.unique-dropdown-content {
  position: absolute;
  background-color: white;
  min-width: 300px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  z-index: 1;
  display: flex;
  flex-direction: column;
}

/* Dropdown links */
.unique-dropdown-content a {
  color: #333;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  transition: background-color 0.3s ease;
}

/* Change background color on link hover */
.unique-dropdown-content a:hover {
  color: #018156;
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .unique-dropbtn {
    padding: 12px;
    font-size: 14px;
  }

  .unique-dropdown-content {
    min-width: 120px;
  }

  .unique-dropdown-content a {
    padding: 10px 12px;
    font-size: 14px;
  }
}`;

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
    <CodePre htmlCode={htmlCode} reactCode={reactCode} cssCode={cssCode}/>
    </div>    
        <div className="dropbtnuniq">
            <Dropbutton/>

        </div>
    </div>
  )
}
