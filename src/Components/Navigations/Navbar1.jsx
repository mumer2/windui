import React , { useState } from 'react';
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
        
        <div className={`unique-navbar-links ${isNavbarOpen ? 'open' : ''}`}>
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
