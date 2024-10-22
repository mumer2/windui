import React from 'react';
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
import { ChipNotification } from './Components/Feedback/ChipNotification';
import { Modals } from './Components/Feedback/Modals';
import { Notifications } from './Components/Feedback/Notifications';
import ProgressBars from './Components/Feedback/ProgressBars';
import  Spinners  from './Components/Feedback/Spinners';
import { Toltips } from './Components/Feedback/Toltips';
import { Checkboxes } from './Components/FormElements/Checkboxes';
import { Datepickers } from './Components/FormElements/Datepickers';
import { FileInputs } from './Components/FormElements/FileInputs';
import { InputGroups } from './Components/FormElements/InputGroups';
import { RadioGroups } from './Components/FormElements/RadioGroups';
import { SearchInputs } from './Components/FormElements/SearchInputs';
import { SelectMenus } from './Components/FormElements/SelectMenus';
import { Textareas } from './Components/FormElements/Textareas';
import { Toggles } from './Components/FormElements/Toggles';
// import Accord from './Components/General/Accord';

function App() {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleSidebar = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <div>
      <Router>
        {/* <button className="toggle-btn" onClick={toggleSidebar}>
          ☰
        </button> */}
            <TopNavbar />

        <div className="grid-container">
          {/* <div className="item1">
          </div> */}
          {/* <div className={`item2 ${setIsOpen ? 'open' : ''}`}>
          </div> */}
          <LeftNavbar />

          <div className="item3">
            <Routes>
                {/* Default route redirects to /accordions */}
                <Route path="/" element={<Navigate to="/accordions" replace />} />
                <Route path="/accordions" element={<Accordians />} />
                {/* <Route path="/Accord" element={<Accord />} /> */}

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
                <Route path="/chipnotifications" element={<ChipNotification />} />
                <Route path="/modals" element={<Modals />} />
                <Route path="/notifications" element={<Notifications/>} />
                <Route path="/progressbars" element={<ProgressBars/>} />
                <Route path="/spinners" element={<Spinners/>} />
                <Route path="/toltips" element={<Toltips/>} />

                {/* Form Elements */}

                <Route path="/checkboxes" element={<Checkboxes/>} />
                <Route path="/datepickers" element={<Datepickers/>} />
                <Route path="/fileinputs" element={<FileInputs/>} />
                <Route path="/inputgroups" element={<InputGroups/>} />
                <Route path="/radiogroups" element={<RadioGroups/>} />
                <Route path="/searchinputs" element={<SearchInputs/>} />
                <Route path="/selectmenus" element={<SelectMenus/>} />
                <Route path="/textareas" element={<Textareas/>} />
                <Route path="/toggles" element={<Toggles/>} />

            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
