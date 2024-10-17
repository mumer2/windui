import React from 'react'
import ListLayout from './ListLayout'
import CodePre from './CodePre';

export const List = () => {
  const htmlCode = `  <div className="container1">
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
        <input type="checkbox" class="toggle-input" checked/>
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
          <label class="toggle-label-m">
        <input type="checkbox" class="toggle-input"/>
        <span class="toggle-slider-m"></span>
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
        <input type="checkbox" class="toggle-input" checked/>
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
        <input type="checkbox" class="toggle-input" checked/>
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
          <label class="toggle-label-m">
        <input type="checkbox" class="toggle-input"/>
        <span class="toggle-slider-m"></span>
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
  `;

  const reactCode = `import React from 'react';

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
        <input type="checkbox" class="toggle-input" checked/>
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
          <label class="toggle-label-m">
        <input type="checkbox" class="toggle-input"/>
        <span class="toggle-slider-m"></span>
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
        <input type="checkbox" class="toggle-input" checked/>
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
        <input type="checkbox" class="toggle-input" checked/>
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
          <label class="toggle-label-m">
        <input type="checkbox" class="toggle-input"/>
        <span class="toggle-slider-m"></span>
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

`;

const cssCode = `.lists {
  margin-top: 15%;
  margin-left: 2%;
  font-family: 'Inter', sans-serif;
}

.lists h1 {
  font-size: 1.875rem; /* 30px */
  line-height: 2.25rem; /* 36px */
  font-weight: 600;
  color: rgb(71,85, 105);
}

.lists p {
  font-size: 1.1rem; /* 16px */
  line-height: 1.5rem; /* 24px */
  color: rgb(100 ,116, 139);
}

.container1 {
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 30px;
  max-width: 100%;
  margin: 20px;
  flex-wrap: wrap; /* Allow items to wrap on smaller screens */
  border: 1px  solid rgb(225, 223, 223);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(229, 245, 248, 0.863);

}

.section {
  background-color: white;
  border-radius: 12px;
  padding: 20px;
  width: 26%;
  height: fit-content;
  box-shadow: 0 4px 8px rgba(202, 194, 194, 0.863);
}

/* Product Section */
.products .product-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
}

.product-item img {
  width: 40px;
  height: 40px;
  border-radius: 8px;
}

.product-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%; /* Take up available space */
}

.product-name {
  font-weight: 500;
  color: rgb(100 ,116, 139);
  font-size: 1rem;
  margin-left: 20px;
}

.product-price {
  color: #888;
  font-size: 0.875rem;
}

/* Settings Section */
.settings .setting-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
}

.icon {
  font-size: 24px;
  margin-right: 15px;
  color: #70b276;
}

.setting-info {
  flex-grow: 1;
  font-size: 10px;
}

.setting-info span {
  display: block;
  font-weight: 600;
  color: rgb(100 ,116, 139);
  font-size: 1rem;
}

.setting-info small {
  color: #888;
  font-size: 0.875rem;
}

/* User List Section */
.user-list .user-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
}

.user-item img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.user-info {
  flex-grow: 1;
  margin-left: 10px;
  color: rgb(100 ,116, 139);
}

.user-name {
  font-weight: 600;
  color: rgb(100 ,116, 139);
  font-size: 1.1rem;
}

.user-info small {
  color: rgb(100 ,116, 139);
  font-size: 0.9rem;
}

.notification-badge {
  background-color: rgb(236, 72 ,153);
  color: white;
  padding: 1px 6px;
  border-radius: 50%;
  font-size: 14px;
}

/* Media Query for Responsive Design */
@media (max-width: 1200px) {
  .container1 {
    justify-content: center;
  }

  .section {
    width: 45%;
    margin-bottom: 20px;
  }
}

@media (max-width: 768px) {
  .container1 {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: flex;
    overflow: hidden;
  }

  .section {
    width: 80%;
    margin-bottom: 20px;
  }

  .product-item img, .user-item img {
    width: 50px;
    height: 50px;
  }
}

@media (max-width: 480px) {
  .product-name, .user-name, .setting-info span {
    font-size: 0.875rem;
  }

  .product-price, .user-info small, .setting-info small {
    font-size: 0.75rem;
  }

  .product-item img, .user-item img {
    width: 40px;
    height: 40px;
  }
}`;
  return (
    <div>
      <div className="lists">
        <h1>Lists</h1>
        <p>Lists are a continuous group of items in a structured format. They can contain primary and supplemental actions, which are often represented by icons, text and images.
        </p>
      </div>

      <ListLayout />

      <div className="lists">
        <h1 style={{ fontSize: '20px' }}>Variations</h1>
      </div>
      <div className="code-cont">
        <CodePre htmlCode={htmlCode} reactCode={reactCode} cssCode={cssCode}/>
      </div>
    </div>
  )
}
