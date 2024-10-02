import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import { Accordians } from './Components/General/Accordians';
import LeftNavbar from './Components/General/LeftNavbar';
import TopNavbar from './Components/General/TopNavbar';
import { Avatars } from './Components/General/Avatars';
import { Badges } from './Components/General/Badges';
import { Cards } from './Components/General/Cards';
import { Carousel } from './Components/General/Carousel';
import { Features } from './Components/General/Features';
import { Feed } from './Components/General/Feed';
import { Layout } from './Components/General/Layout';
import { List } from './Components/General/List';
import { PricingTables } from './Components/General/PricingTables';
import { Rating } from './Components/General/Rating';
import { SlidersN } from './Components/General/SlidersN';
import Table  from './Components/General/Table';
import { Tabs } from './Components/General/Tabs';
import { Testimonials } from './Components/General/Testimonials';
import { AppButtons } from './Components/Buttons/AppButtons';
import { Buttons } from './Components/Buttons/Buttons';
import { ButtonsGroup } from './Components/Buttons/ButtonsGroup';
import  ButtonSwitchers  from './Components/Buttons/ButtonSwitchers';
import { Dropdowns } from './Components/Buttons/Dropdowns';
import { Fabs } from './Components/General/Fabs';
import { Breadcrumb } from './Components/Navigations/Breadcrumb';
import { Footer } from './Components/Navigations/Footer';
import { Paginations } from './Components/Navigations/Paginations';
import { SideNavigation } from './Components/Navigations/SideNavigation';
import { NavbarC } from './Components/Navigations/NavbarC';
import { Alerts } from './Components/Feedback/Alerts';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Router>
        {/* <button className="toggle-btn" onClick={toggleSidebar}>
          ☰
        </button> */}
        <div className="grid-container">
          <div className="item1">
            <TopNavbar />
          </div>
          <div className={`item2 ${setIsOpen ? 'open' : ''}`}>
            <LeftNavbar />
          </div>
          <div className="item3">
            <Routes>
                {/* Default route redirects to /accordions */}
                <Route path="/" element={<Navigate to="/accordions" replace />} />
                <Route path="/accordions" element={<Accordians />} />
                <Route path="/avatars" element={<Avatars />} />
                <Route path="/badges" element={<Badges />} />
                <Route path="/cards" element={<Cards />} />
                <Route path="/carousels" element={<Carousel />} />
                <Route path="/features" element={<Features />} />
                <Route path="/feed" element={<Feed />} />
                <Route path="/layouts" element={<Layout />} />
                <Route path="/list" element={<List />} />
                <Route path="/pricingtables" element={<PricingTables />} />
                <Route path="/ratings" element={<Rating />} />
                <Route path="/slidern" element={<SlidersN />} />
                <Route path="/tables" element={<Table />} />
                <Route path="/tabs" element={<Tabs />} />
                <Route path="/testimonials" element={<Testimonials />} />

                {/* Buttons */}

                <Route path="/appbuttons" element={<AppButtons />} />
                <Route path="/buttons" element={<Buttons />} />
                <Route path="/buttonsgroup" element={<ButtonsGroup />} />
                <Route path="/buttonswitch" element={<ButtonSwitchers />} />
                <Route path="/dropdowns" element={<Dropdowns />} />
                <Route path="/fabs" element={<Fabs />} />

                {/* Navigations */}

                <Route path="/breadcrumbs" element={<Breadcrumb />} />
                <Route path="/footers" element={<Footer />} />
                <Route path="/paginations" element={<Paginations />} />
                <Route path="/sidenavigations" element={<SideNavigation />} />
                <Route path="/navbar" element={<NavbarC />} />

                {/* Feedback */}

                <Route path="/alerts" element={<Alerts />} />











              {/* Add more routes here */}
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
