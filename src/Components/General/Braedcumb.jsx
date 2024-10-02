import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Breadcumb = ({ toggleSidebar }) => {
  const location = useLocation();

  // Extract the last part of the URL (component name)
  const currentPath = location.pathname.split('/').filter(Boolean).pop();

  // Map to display proper names instead of URLs
  const componentNames = {
    'accordions': 'Accordions',
    'avatars': 'Avatars',
    'badges': 'Badges',
    'cards': 'Cards',
    'carousel': 'Carousel',
    'features': 'Features',
    'feeds': 'Feeds',
    'layouts': 'Layouts',
    'lists': 'Lists',
    'pricing-tables': 'Pricing Tables',
    'ratings': 'Ratings',
    'sliders': 'Sliders'
  };

  return (
    <header className="top-navbar2">
      {/* Toggle button */}
      {/* <button className="toggle-btn" onClick={toggleSidebar}>
        <i className="fa-solid fa-bars"></i>
      </button> */}

      {/* Breadcrumb or Current Component Name */}
      <nav className="breadcrumb">
        <span>Components</span>
        <span className="breadcrumb-separator"> &gt; </span>
        <span>{componentNames[currentPath] || 'Home'}</span>
      </nav>
    </header>
  );
};

export default Breadcumb;
