import React from 'react'
import CodePre from '../General/CodePre'


export const Footer = () => {
  const htmlCode = ` <div className="footer-cont">

        <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Product</h3>
          <ul>
            <li>Features</li>
            <li>Customers</li>
            <li>Why us?</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Docs & help</h3>
          <ul>
            <li>Documentation</li>
            <li>Training</li>
            <li>System status</li>
            <li>FAQ's</li>
            <li>Help Center</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>About us</h3>
          <ul>
            <li>About us</li>
            <li>Careers</li>
            <li>Leadership</li>
            <li>Blog</li>
            <li>Events</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Get in touch</h3>
          <ul>
            <li>Contact</li>
            <li>Support</li>
            <li>Partners</li>
            <li>Join research</li>
          </ul>
        </div>
      </div>
     
    </footer>
    <div className="footer-bottom">
        <p>Copyright 2022 Brand</p>
        <div className="social-icons">
          <span><i class="fa-brands fa-facebook"></i></span> {/* Example social icon, replace with actual icons */}
          <span><i class="fa-brands fa-twitter"></i></span>
          <span><i className="fa-brands fa-discord dis"></i></span>
        </div>
      </div>
      </div>

  `;

const reactCode = `import React from 'react'
import CodePre from '../General/CodePre'


export const Footer = () => {
  return(
<div className="footer-cont">

        <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Product</h3>
          <ul>
            <li>Features</li>
            <li>Customers</li>
            <li>Why us?</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Docs & help</h3>
          <ul>
            <li>Documentation</li>
            <li>Training</li>
            <li>System status</li>
            <li>FAQ's</li>
            <li>Help Center</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>About us</h3>
          <ul>
            <li>About us</li>
            <li>Careers</li>
            <li>Leadership</li>
            <li>Blog</li>
            <li>Events</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Get in touch</h3>
          <ul>
            <li>Contact</li>
            <li>Support</li>
            <li>Partners</li>
            <li>Join research</li>
          </ul>
        </div>
      </div>
     
    </footer>
    <div className="footer-bottom">
        <p>Copyright 2022 Brand</p>
        <div className="social-icons">
          <span><i class="fa-brands fa-facebook"></i></span> {/* Example social icon, replace with actual icons */}
          <span><i class="fa-brands fa-twitter"></i></span>
          <span><i className="fa-brands fa-discord dis"></i></span>
        </div>
      </div>
      </div>

`;

const cssCode = `.footers {
  margin-top: 15%;
  margin-left: 2%;
  color: rgb(94, 80, 80);
}

.footers h1, .footers h2, .footers h4 {
  color: rgb(71, 85, 105);
  line-height: 2.25rem;
  font-weight: 600;
}

.footers h1 {
  font-size: 1.875rem;
}

.footers h2 {
  font-size: 1.8rem;
  font-weight: 400;
}
.footers p{
  font-size: 18px;
}
.footer-cont{
  border: 1px solid rgb(227, 227, 227);
  margin: 20px;
}

.footer {
  background-color: #10B981;
  color: white;
  /* padding: 8px; */
  /* margin-left: 2%; */
  margin-top: 10%;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap; /* Ensures wrapping on small screens */
  margin-left: 20px;
}

.footer-section {
  flex: 1;
  margin-right: 20px;
  min-width: 200px; /* Prevents collapsing to very small sizes */
  margin-bottom: 20px; /* Adds space on small screens */
}

.footer-section h3 {
  margin-bottom: 15px;
}

.footer-section ul {
  list-style-type: none;
  padding: 0;
}

.footer-section li {
  margin: 5px 0;
  color: rgb(137, 252, 202);
}

.footer-bottom {
  margin-top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #048762;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  color: white;
  padding: 10px 20px;
  /* margin-left: 2%; */
}

.footer-bottom p {
  margin-left: 3%;
  color: rgb(131, 246, 190);
}

.social-icons {
  display: flex;
  justify-content: flex-end;
}

.social-icons span {
  margin-right: 15px;
}

/* Responsive Design */

@media (max-width: 768px) {
  .footer-content {
    display: grid; /* Use grid layout */
    grid-template-columns: repeat(2, 1fr); /* 2 columns on small screens */
    gap: 20px; /* Space between columns */
  }

  .footer-section {
    margin-right: 0;
    margin-bottom: 20px; /* Add space between sections */
  }

  .footer-bottom {
    flex-direction:row;
    text-align: center;
  }

  .footer-bottom p {
    margin-left: 0;
    margin-top: 10px;
  }

  .social-icons {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .footer-content {
    grid-template-columns: repeat(2, 1fr); /* Keep two columns for mobile */
    gap: 10px; /* Reduce gap for mobile screens */
  }

  .footer {
    padding: 20px 10px;
  }

  .footer-section {
    min-width: 100%; /* Full width for small screens */
  }

  .footer-section h3 {
    font-size: 1.5rem; /* Reduce font size on smaller screens */
  }

  .footer-bottom {
    padding: 10px;
  }

  .social-icons span {
    margin-right: 10px;
  }
}`;
  return (
    <div>
        <div className="footers">
            <h1>Footers</h1>
            <p>The website footer is the section of content at the very bottom of a web page. It typically contains a copyright notice, link to a privacy policy, sitemap, logo, contact information, social media icons, and an email sign-up form. In short, a footer contains information that improves a website's overall usability.</p>
        </div>

<div className="footer-cont">

        <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Product</h3>
          <ul>
            <li>Features</li>
            <li>Customers</li>
            <li>Why us?</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Docs & help</h3>
          <ul>
            <li>Documentation</li>
            <li>Training</li>
            <li>System status</li>
            <li>FAQ's</li>
            <li>Help Center</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>About us</h3>
          <ul>
            <li>About us</li>
            <li>Careers</li>
            <li>Leadership</li>
            <li>Blog</li>
            <li>Events</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Get in touch</h3>
          <ul>
            <li>Contact</li>
            <li>Support</li>
            <li>Partners</li>
            <li>Join research</li>
          </ul>
        </div>
      </div>
     
    </footer>
    <div className="footer-bottom">
        <p>Copyright 2022 Brand</p>
        <div className="social-icons">
          <span><i class="fa-brands fa-facebook"></i></span> {/* Example social icon, replace with actual icons */}
          <span><i class="fa-brands fa-twitter"></i></span>
          <span><i className="fa-brands fa-discord dis"></i></span>
        </div>
      </div>
      </div>

      <div className="footers">
            <h2>Variations</h2>
            <p>Three Columns</p>
      </div>

      <div className="code-cont">
    <CodePre htmlCode={htmlCode} reactCode={reactCode} cssCode={cssCode}/>
    </div>

    </div>
  )
}
