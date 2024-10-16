import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

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
          <NavLink to="/" className="sidebar-item" activeClassName="active">Accordions</NavLink>
          {/* <NavLink to="Accord" className="sidebar-item" activeClassName="active">Accord</NavLink> */}

          <NavLink to="/avatars" className="sidebar-item" activeClassName="active">Avatars</NavLink>
          <NavLink to="/badges" className="sidebar-item" activeClassName="active">Badges</NavLink>
          <NavLink to="/cards" className="sidebar-item" activeClassName="active">Cards</NavLink>
          <NavLink to="/carousels" className="sidebar-item" activeClassName="active">Carousel</NavLink>
          <NavLink to="/features" className="sidebar-item" activeClassName="active">Features</NavLink>
          <NavLink to="/feed" className="sidebar-item" activeClassName="active">Feeds</NavLink>
          <NavLink to="/layouts" className="sidebar-item" activeClassName="active">Layouts</NavLink>
          <NavLink to="/list" className="sidebar-item" activeClassName="active">Lists</NavLink>
          <NavLink to="/pricingtables" className="sidebar-item" activeClassName="active">Pricing Tables</NavLink>
          <NavLink to="/ratings" className="sidebar-item" activeClassName="active">Ratings</NavLink>
          <NavLink to="/slidern" className="sidebar-item" activeClassName="active">Sliders</NavLink>
          <NavLink to="/tables" className="sidebar-item" activeClassName="active">Tables</NavLink>
          <NavLink to="/tabs" className="sidebar-item" activeClassName="active">Tabs</NavLink>
          <NavLink to="/testimonials" className="sidebar-item" activeClassName="active">Testimonials</NavLink>

          {/* Buttons */}
          <p className="t">Buttons</p>
          <NavLink to="/appbuttons" className="sidebar-item" activeClassName="active">App Buttons</NavLink>
          <NavLink to="/buttons" className="sidebar-item" activeClassName="active">Buttons</NavLink>
          <NavLink to="/buttonsgroup" className="sidebar-item" activeClassName="active">Button Groups</NavLink>
          <NavLink to="/buttonswitch" className="sidebar-item" activeClassName="active">Button Switchers</NavLink>
          <NavLink to="/dropdowns" className="sidebar-item" activeClassName="active">Dropdowns</NavLink>
          <NavLink to="/fabs" className="sidebar-item" activeClassName="active">FABs</NavLink>

          {/* Navigations */}
          <p className="t">Navigations</p>
          <NavLink to="/breadcrumbs" className="sidebar-item" activeClassName="active">Breadcrumbs</NavLink>
          <NavLink to="/footers" className="sidebar-item" activeClassName="active">Footers</NavLink>
          <NavLink to="/paginations" className="sidebar-item" activeClassName="active">Paginations</NavLink>
          <NavLink to="/sidenavigations" className="sidebar-item" activeClassName="active">Side Navigations</NavLink>
          <NavLink to="/navbar" className="sidebar-item" activeClassName="active">Navbar</NavLink>

          {/* Feedback */}
          <p className="t">Feedback</p>
          <NavLink to="/alerts" className="sidebar-item" activeClassName="active">Alerts</NavLink>
          <NavLink to="/chipnotifications" className="sidebar-item" activeClassName="active">Chip Notifications</NavLink>
          <NavLink to="/modals" className="sidebar-item" activeClassName="active">Modals</NavLink>
          <NavLink to="/notifications" className="sidebar-item" activeClassName="active">Notifications</NavLink>
          <NavLink to="/progressbars" className="sidebar-item" activeClassName="active">Progress Bars</NavLink>
          <NavLink to="/spinners" className="sidebar-item" activeClassName="active">Spinners</NavLink>
          <NavLink to="/toltips" className="sidebar-item" activeClassName="active">Toltips</NavLink>

          {/* Form Elements */}
          <p className="t">Form Elements</p>
          <NavLink to="/checkboxes" className="sidebar-item" activeClassName="active">Checkboxes</NavLink>
          <NavLink to="/datepickers" className="sidebar-item" activeClassName="active">Datepickers</NavLink>
          <NavLink to="/fileinputs" className="sidebar-item" activeClassName="active">File Inputs</NavLink>
          <NavLink to="/inputgroups" className="sidebar-item" activeClassName="active">Input Groups</NavLink>
          <NavLink to="/radiogroups" className="sidebar-item" activeClassName="active">Radio Groups</NavLink>
          <NavLink to="/searchinputs" className="sidebar-item" activeClassName="active">Search Inputs</NavLink>
          <NavLink to="/selectmenus" className="sidebar-item" activeClassName="active">Select Menus</NavLink>
          <NavLink to="/textareas" className="sidebar-item" activeClassName="active">Textareas</NavLink>
          <NavLink to="/toggles" className="sidebar-item" activeClassName="active">Toggles</NavLink>
        </nav>
      </aside>
    </>
  );
};

export default LeftNavbar;
