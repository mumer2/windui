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
    <CodePre htmlCode={htmlCode} reactCode={reactCode}/>
    </div>
    </div>
  )
}
