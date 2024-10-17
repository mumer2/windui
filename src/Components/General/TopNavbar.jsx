import React from 'react';

const TopNavbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="logo-main">
        <a href="/" className="nav-logo">
          <img src="https://wind-ui.com/favicon.ico" alt="Wind UI" className="rotating-icon" />
        </a>
        <a href="/" className="logo">
          Wind <sup className="ui">ui</sup>
        </a>
        <div className="version hide">
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMTUgMTUiPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNNy41IDNRNC43IDMgNCA2cTEuMDUtMS41IDIuNDUtMS4xMjVjLjUzMy4xNDMuOTEzLjU1NyAxLjMzNCAxLjAxNUM4LjQ3MSA2LjYzNiA5LjI2NSA3LjUgMTEgNy41cTIuOCAwIDMuNS0zcS0xLjA1IDEuNS0yLjQ1IDEuMTI1Yy0uNTMzLS4xNDMtLjkxMy0uNTU3LTEuMzM0LTEuMDE1QzEwLjAyOSAzLjg2NCA5LjIzNSAzIDcuNSAzWk00IDcuNXEtMi44IDAtMy41IDNRMS41NSA5IDIuOTUgOS4zNzVjLjUzMy4xNDMuOTEzLjU1NyAxLjMzNCAxLjAxNUM0Ljk3MSAxMS4xMzYgNS43NjUgMTIgNy41IDEycTIuOCAwIDMuNS0zcS0xLjA1IDEuNS0yLjQ1IDEuMTI1Yy0uNTMzLS4xNDMtLjkxMy0uNTU3LTEuMzM0LTEuMDE1QzYuNTI5IDguMzY0IDUuNzM1IDcuNSA0IDcuNVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==" alt="" />
        <p>  v.3.4.3 </p>
        </div>
        </div>
      <div className="top-links">
 {/* Links */}
 <div className="nav-links">
          <a href="/" className="nav-item"><i className="fa-solid fa-border-all"></i><span className="link-text">Components</span></a>
          <a href="/" className="nav-item"><i className="fa-regular fa-paste"></i><span className="link-text">Theme</span></a>
          <a href="/" className="nav-item"><i className="fa-brands fa-figma"></i></a>
          <a href="/" className="nav-item"><i className="fa-brands fa-discord dis"></i></a>
          
          {/* Support Button, visible only on large screens */}
          <button className="nav-item btn1 support-btn">Support us</button>
        </div>
      </div>
       
      </div>
    </nav>
  );
};

export default TopNavbar;
