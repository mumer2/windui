import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const LeftNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className='tgle'>
        {/* Toggle Button for small screens */}
        <button className="toggle-btn" onClick={toggleSidebar}>
        <i className="fa-solid fa-bars"></i>
      </button>
    </div>
    

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <nav className="sidebar-nav">
          <p className="t">General</p>
          <Link to="/" className="sidebar-item">Accordions</Link>
          <Link to="/avatars" className="sidebar-item">Avatars</Link>
          <Link to="/badges" className="sidebar-item">Badges</Link>
          <Link to="/cards" className="sidebar-item">Cards</Link>
          <Link to="/carousels" className="sidebar-item">Carousel</Link>
          <Link to="/features" className="sidebar-item">Features</Link>
          <Link to="/feed" className="sidebar-item">Feeds</Link>
          <Link to="/layouts" className="sidebar-item">Layouts</Link>
          <Link to="/list" className="sidebar-item">Lists</Link>
          <Link to="/pricingtables" className="sidebar-item">Pricing Tables</Link>
          <Link to="/ratings" className="sidebar-item">Ratings</Link>
          <Link to="/slidern" className="sidebar-item">Sliders</Link>
          <Link to="/tables" className="sidebar-item">Tables</Link>
          <Link to="/tabs" className="sidebar-item">Tabs</Link>
          <Link to="/testimonials" className="sidebar-item">Testimonials</Link>

          {/* Buttons */}
          <p className="t">Buttons</p>
          <Link to="/appbuttons" className="sidebar-item">App Buttons</Link>
          <Link to="/buttons" className="sidebar-item">Buttons</Link>
          <Link to="/buttonsgroup" className="sidebar-item">Button Groups</Link>
          <Link to="/buttonswitch" className="sidebar-item">Button Switchers</Link>
          <Link to="/dropdowns" className="sidebar-item">Dropdowns</Link>
          <Link to="/fabs" className="sidebar-item">FABs</Link>

          {/* Navigations */}
          <p className="t">Navigations</p>
          <Link to="/breadcrumbs" className="sidebar-item">Breadcrumbs</Link>
          <Link to="/footers" className="sidebar-item">Footers</Link>
          <Link to="/paginations" className="sidebar-item">Paginations</Link>
          <Link to="/sidenavigations" className="sidebar-item">Side Navigations</Link>
          <Link to="/navbar" className="sidebar-item">Navbar</Link>

          {/* Feedback */}
          <p className="t">Feedback</p>
          <Link to="/alerts" className="sidebar-item">Alerts</Link>
          <Link to="/chipnotifications" className="sidebar-item">Chip Notifications</Link>
          <Link to="/modals" className="sidebar-item">Modals</Link>
          <Link to="/notifications" className="sidebar-item">Notifications</Link>
          <Link to="/progressbars" className="sidebar-item">Progress Bars</Link>
          <Link to="/spinners" className="sidebar-item">Spinners</Link>
          <Link to="/toltips" className="sidebar-item">Toltips</Link>








        </nav>
      </aside>
    </>
  );
};

export default LeftNavbar;
