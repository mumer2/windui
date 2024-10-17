import React from 'react'
import Navbar1 from './Navbar1'
import CodePre from '../General/CodePre'
import Nav2 from './Nav2'

export const NavbarC = () => {
  const htmlCode = `  <div className="unique-navbar-container">
      {/* Top Line */}
      <div className="unique-top-line">
        <div className="unique-phone-number"><i class="fa-solid fa-phone"></i> +306750009800</div>
        <div className="unique-social-icons">
          <a href="#facebook"><FaFacebook /></a>
          <a href="#twitter"><FaTwitter /></a>
          <a href="#instagram"><FaInstagram /></a>
        </div>
      </div>
      
      {/* Navbar Line */}
      <div className="unique-navbar">
        <div className="unique-navbar-logo">Brand</div>

          {/* Toggle Button for Small Screens */}
          <button className="unique-toggle-button" onClick={handleToggleNavbar}>
          {isNavbarOpen ? <FaTimes /> : <FaBars />}
        </button>
        
        <div >
          <a href="#home" className="unique-nav-link">Shop</a>
          <a href="#about" className="unique-nav-link Active">Account</a>
          <a href="#services" className="unique-nav-link">Wishlist</a>
        </div>
        <div className="unique-navbar-cart">
          <FaShoppingCart />
        </div>
      </div>
    </div>
  `;

const reactCode = `import React , { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaShoppingCart ,FaBars, FaTimes} from 'react-icons/fa';

const Navbar1 = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const handleToggleNavbar = () => {
      setIsNavbarOpen(!isNavbarOpen);
    };
  return (
    <div className="unique-navbar-container">
      {/* Top Line */}
      <div className="unique-top-line">
        <div className="unique-phone-number"><i class="fa-solid fa-phone"></i> +306750009800</div>
        <div className="unique-social-icons">
          <a href="#facebook"><FaFacebook /></a>
          <a href="#twitter"><FaTwitter /></a>
          <a href="#instagram"><FaInstagram /></a>
        </div>
      </div>
      
      {/* Navbar Line */}
      <div className="unique-navbar">
        <div className="unique-navbar-logo">Brand</div>

          {/* Toggle Button for Small Screens */}
          <button className="unique-toggle-button" onClick={handleToggleNavbar}>
          {isNavbarOpen ? <FaTimes /> : <FaBars />}
        </button>
        
        <div>
          <a href="#home" className="unique-nav-link">Shop</a>
          <a href="#about" className="unique-nav-link Active">Account</a>
          <a href="#services" className="unique-nav-link">Wishlist</a>
        </div>
        <div className="unique-navbar-cart">
          <FaShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default Navbar1;

`;

const cssCode = `.navbarc{
  margin-top: 15%;
  margin-left: 2%;
  color: rgb(104, 95, 95);
}
.navbarc h1{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 600;
}
.navbarc  h2{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.8rem;
  line-height: 2.25rem;
  font-weight: 400;
}
.navbarc h4{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  line-height: 2.25rem;
  font-weight: 600;
}

/* General Navbar Container */
.unique-navbar-container {
  width: 100%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
}

/* Top Line */
.unique-top-line {
  display: flex;
  justify-content: space-between;
  background-color: #f0f4f8; /* Light grey background */
  padding: 10px 20px;
  font-size: 14px;
}

.unique-phone-number {
  color: #2d3748; /* Dark text color */
}

.unique-social-icons a {
  margin-left: 15px;
  color: #2d3748;
  transition: color 0.2s;
}

.unique-social-icons a:hover {
  color: #38b2ac; /* Teal hover color */
}

/* Navbar Line */
.unique-navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  background-color: #ffffff;
  flex-wrap: wrap; /* Wrap elements when screen size is small */
}

.unique-navbar-logo {
  font-size: 24px;
  font-weight: bold;
  color: #2d3748; /* Dark text color */
  flex: 1 1 auto;
}

/* Toggle Button for Small Screens */
.unique-toggle-button {
  display: none; /* Hidden by default */
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
  color: #2d3748;
}

/* Navbar Links */
.unique-navbar-links {
  display: flex;
  gap: 30px; /* Space between nav links */
  flex: 2 1 auto;
  justify-content: center;
}

.unique-nav-link {
  text-decoration: none;
  color: #2d3748;
  font-size: 16px;
  transition: color 0.2s;
}

.unique-nav-link:hover {
  color: #38b2ac; /* Teal hover color */
}

.unique-navbar-cart {
  font-size: 20px;
  color: #2d3748;
  cursor: pointer;
  flex: 1 1 auto;
  display: flex;
  justify-content: flex-end;
}

.unique-navbar-links .Active{
  color: #02b583;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .unique-top-line {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 5px 10px;
  }

  .unique-navbar {
    padding: 10px 15px;
  }

  .unique-toggle-button {
    display: block; /* Show toggle button on small screens */
  }

  .unique-navbar-links {
    display: none; /* Hide links initially on small screens */
    flex-direction: column;
    gap: 15px;
    width: 100%;
    padding: 10px 0;
    text-align: center;
  }

  .unique-navbar-links.open {
    display: flex; /* Show links when toggle button is clicked */
  }
}

@media (max-width: 480px) {
  .unique-navbar-logo {
    font-size: 20px;
  }

  .unique-nav-link {
    font-size: 14px;
  }

  .unique-navbar-cart {
    display: none;
  }
}



/* Nav2 */

/* General Navbar Styles */
.unique1-simple-navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background-color: #ffffff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
}

.unique1-navbar-logo {
  font-size: 24px;
  font-weight: bold;
  color: #2d3748; /* Dark text color */
}

/* Navbar Links */
.unique1-navbar-links {
  display: flex;
  gap: 30px; /* Space between nav links */
}

.unique1-nav-link {
  text-decoration: none;
  color: #2d3748;
  font-size: 16px;
  transition: color 0.2s;
}
.unique1-navbar-links .Active{
  color: #02b583;
  font-weight: 500;
}

.unique1-nav-link:hover {
  color: #38b2ac; /* Teal hover color */
}

/* Responsive Styles */
@media (max-width: 768px) {
  .unique1-navbar-links {
    gap: 20px;
  }
}

@media (max-width: 480px) {
  .unique1-navbar-logo {
    font-size: 20px;
  }

  .unique1-nav-link {
    font-size: 14px;
  }
}`;
  return (
    <div>
        <div className="navbarc">
            <h1>Navigation Bars</h1>
            <p>Navigation bars offer a persistent and convenient way to switch between primary destinations in an app. A navigation bar implementation is considered one of the key points of Web design and usability.</p>
        </div>


        <Navbar1/>

        <div className="navbarc">
            <h2>Variations</h2>
            <h4>Basic Navigation</h4>
        </div>

        <div className="code-cont">
    <CodePre htmlCode={htmlCode} reactCode={reactCode} cssCode={cssCode}/>
    </div>

        <Nav2/>
    </div>
  )
}
