import React from 'react';

const ListLayout = () => {
  return (
    <div className="container1">
      {/* Section 1 - Products */}
      <div className="section products">
        <div className="product-item">
          <img src="Images/l1.jpeg" alt="Product 1" />
          <div className="product-info">
            <span className="product-name">Velocity Shoes</span>
            <span className="product-price">$234</span>
          </div>
        </div>
        <div className="product-item">
          <img src="Images/l2.jpeg" alt="Product 2" />
          <div className="product-info">
            <span className="product-name">Gravity Gloves</span>
            <span className="product-price">$189</span>
          </div>
        </div>
        <div className="product-item">
          <img src="Images/l3.jpeg" alt="Product 3" />
          <div className="product-info">
            <span className="product-name">S4 Turbo Sneakers</span>
            <span className="product-price">$98</span>
          </div>
        </div>

        <div className="product-item">
          <img src="Images/l4.jpeg" alt="Product 3" />
          <div className="product-info">
            <span className="product-name">Flex Fit</span>
            <span className="product-price">$89</span>
          </div>
        </div>

        <div className="product-item">
          <img src="Images/l5.jpeg" alt="Product 3" />
          <div className="product-info">
            <span className="product-name">Endurance Pro</span>
            <span className="product-price">$78</span>
          </div>
        </div>
      </div>

      {/* Section 2 - Settings */}
      <div className="section settings">
        <div className="setting-item">
        <i class="fa-solid fa-bell icon"></i>
          <div className="setting-info">
            <span>Push Notifications</span>
            <small>Get instant updates</small>
          </div>
          {/* <input type="checkbox" checked /> */}
          <label class="toggle-label">
        <input type="checkbox" class="toggle-input"/>
        <span class="toggle-slider3"></span>
         </label>
        </div>
        <div className="setting-item">
        <i class="fa-solid fa-location-dot icon"></i>
          <div className="setting-info">
            <span>Location Services</span>
            <small>Find you and others</small>
          </div>
          {/* <input type="checkbox" /> */}
          <label class="toggle-label">
        <input type="checkbox" class="toggle-input"/>
        <span class="toggle-slider3"></span>
         </label>
        </div>
        <div className="setting-item">
        <i class="fa-solid fa-volume-high icon"></i>
          <div className="setting-info">
            <span>In-App Sound</span>
            <small>Turn on/off sound</small>
          </div>
          {/* <input type="checkbox" checked /> */}
          <label class="toggle-label">
        <input type="checkbox" class="toggle-input"/>
        <span class="toggle-slider3"></span>
         </label>
        </div>
        <div className="setting-item">
        <i class="fa-solid fa-moon icon"></i>
          <div className="setting-info">
            <span>In-App Sound</span>
            <small>Switch to a darker color scheme</small>
          </div>
          {/* <input type="checkbox" checked /> */}
          <label class="toggle-label">
        <input type="checkbox" class="toggle-input"/>
        <span class="toggle-slider3"></span>
         </label>
        </div>
        <div className="setting-item">
        <i class="fa-solid fa-chart-simple icon"></i>
          <div className="setting-info">
            <span>In-App Sound</span>
            <small>Help us improve by sharing </small>
          </div>
          {/* <input type="checkbox" checked /> */}
          <label class="toggle-label">
        <input type="checkbox" class="toggle-input"/>
        <span class="toggle-slider3"></span>
         </label>
        </div>
      </div>

      {/* Section 3 - User List */}
      <div className="section user-list">
        <div className="user-item">
          <img src="Images/feed1.jfif" alt="User 1" />
          <div className="user-info">
            <span className="user-name">Ellen Ripley</span><br/>
            <small>A tough, resourceful space officer.</small>
          </div>
          <span className="notification-badge">4</span>
        </div>
        <div className="user-item">
          <img src="Images/feed2.jfif" alt="User 2" />
          <div className="user-info">
            <span className="user-name">Thomas Anderson</span><br/>
            <small>The chosen one, a hacker against the rules.</small>
          </div>
          <span className="notification-badge">2</span>
        </div>
        <div className="user-item">
          <img src="Images/feed3.jfif" alt="User 3" />
          <div className="user-info">
            <span className="user-name">Luke Skywalker</span><br/>
            <small>A Jedi warrior who fights against the dark side.</small>
          </div>
        </div>


        <div className="user-item">
          <img src="Images/feed2.jfif" alt="User 2" />
          <div className="user-info">
            <span className="user-name">Sarah Connor</span><br/>
            <small>A fierce leader who fights against machines.</small>
          </div>
          <span className="notification-badge">1</span>
        </div>
        <div className="user-item">
          <img src="Images/feed1.jfif" alt="User 2" />
          <div className="user-info">
            <span className="user-name">Captain James T. Kirk</span><br/>
            <small>A charismatic and adventurous captain.</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListLayout;
