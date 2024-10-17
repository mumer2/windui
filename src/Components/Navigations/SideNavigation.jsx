import React from 'react'
import VerticalNavbar from './VerticalNavbar'
import CodePre from '../General/CodePre'

export const SideNavigation = () => {
  const htmlCode = `  <div className="vertical-navbar">
      <div className="profile-section">
        <img src="Images/sn1.jfif" alt="Profile" className="profile-icon" />
        <div className="profile-name">Luke Skywalker<br/>Jedi warrior</div>
      </div>
      <nav className="nav-links2">
        <a href="#dashboard" className="nav-link2"><i class="fa-solid fa-table-columns"></i> Dashboard</a>
        <a href="#settings" className="nav-link2"><i class="fa-regular fa-comment-dots"></i> Messages</a>
        <a href="#profile" className="nav-link2"><i class="fa-solid fa-people-group"></i> Team members</a>
        <a href="#help" className="nav-link2"><i class="fa-solid fa-cubes-stacked"></i> Tasks</a>
        <a href="#logout" className="nav-link2"><i class="fa-solid fa-bell"></i> Notifications</a>

        <a href="#logout" className="nav-link2"><i class="fa-regular fa-folder"></i> Documents</a>
        <a href="#logout" className="nav-link2"><i class="fa-solid fa-camera"></i> Media & Files</a>
        <a href="#logout" className="nav-link2"><i class="fa-solid fa-database"></i> Storage</a>


<div className="blue-cont">
    <b>Backup completed.</b>
    <p>You successfully read this important alert message. Blue often indicates a neutral informative change or action.</p>
</div>

<a href="#logout" className="nav-link2"><i class="fa-solid fa-arrow-right-from-bracket"></i> Logout</a>

      </nav>
    </div>
  `;

const reactCode = `import React from 'react';

const VerticalNavbar = () => {
  return (
    <div className="vertical-navbar">
      <div className="profile-section">
        <img src="Images/sn1.jfif" alt="Profile" className="profile-icon" />
        <div className="profile-name">Luke Skywalker<br/>Jedi warrior</div>
      </div>
      <nav className="nav-links2">
        <a href="#dashboard" className="nav-link2"><i class="fa-solid fa-table-columns"></i> Dashboard</a>
        <a href="#settings" className="nav-link2"><i class="fa-regular fa-comment-dots"></i> Messages</a>
        <a href="#profile" className="nav-link2"><i class="fa-solid fa-people-group"></i> Team members</a>
        <a href="#help" className="nav-link2"><i class="fa-solid fa-cubes-stacked"></i> Tasks</a>
        <a href="#logout" className="nav-link2"><i class="fa-solid fa-bell"></i> Notifications</a>

        <a href="#logout" className="nav-link2"><i class="fa-regular fa-folder"></i> Documents</a>
        <a href="#logout" className="nav-link2"><i class="fa-solid fa-camera"></i> Media & Files</a>
        <a href="#logout" className="nav-link2"><i class="fa-solid fa-database"></i> Storage</a>


<div className="blue-cont">
    <b>Backup completed.</b>
    <p>You successfully read this important alert message. Blue often indicates a neutral informative change or action.</p>
</div>

<a href="#logout" className="nav-link2"><i class="fa-solid fa-arrow-right-from-bracket"></i> Logout</a>

      </nav>
    </div>
  );
};

export default VerticalNavbar;

`;

const cssCode = `.sidenavigations{
  margin-top: 15%;
  margin-left: 2%;
  color: rgb(91, 79, 79);
}

.sidenavigations h1{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 600;
}
.sidenavigations P{
  color:  rgb(100, 116, 139);
}
/* Vertical Navbar */



.vertical-navbar {
  width: 250px; /* Width of the navbar */
  background-color: #f8fafc; /* Light background */
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column; /* Vertical layout */
  position: relative; /* For responsive positioning */
}

.profile-section {
  display: flex;
  align-items: center; /* Center items vertically */
  margin-bottom: 30px; /* Space between profile and nav links */
}

.profile-icon {
  width: 50px; /* Profile icon size */
  height: 50px;
  border-radius: 50%; /* Circular profile icon */
  margin-left: 10%;
}

.profile-name {
  font-size: 18px; /* Font size for the name */
  color: #2d3748; /* Dark text color */
}

.nav-links2 {
  display: flex;
  flex-direction: column; /* Stack links vertically */
}

.nav-link2 {
  padding: 10px;
  background-color: #ffffff; /* White background for links */
  border-radius: 5px; /* Rounded corners */
  margin: 5px 0; /* Space between links */
  color: #4a5568; /* Text color */
  text-decoration: none; /* Remove underline */
  transition: background-color 0.2s; /* Smooth transition */
}

.nav-link2:hover {
  background-color: #e2e8f0; /* Darker background on hover */
}

/* Responsive Styles */
@media (max-width: 768px) {
  .vertical-navbar {
    width: 100%; /* Full width on smaller screens */
    /* position: fixed;  */
    /* Fixed position for easy access */
    height: 100%; /* Full height */
    left: 0; /* Align to the left */
    /* z-index: 1000;  */
    /* Keep above other content */
  }
}

.blue-cont{
  margin-top: 10%;
  color: #02b583;
}`;
  return (
    <div>
      <div className="sidenavigations">
        <h1>Side Navigation</h1>
        <p>The side navigation component (often referred to as a "sidebar" or "side menu") is a user interface element that is typically positioned on the side of a webpage or application screen, such as the left or right side. It is used to provide navigation and access to various sections, features, or pages of the application.</p>
      </div>

      <VerticalNavbar />

      <div className="sidenavigations">
        <h1>Variations</h1>
      </div>

      <div className="code-cont">
    <CodePre htmlCode={htmlCode} reactCode={reactCode} cssCode={cssCode}/>
    </div>
    </div>
  )
}
