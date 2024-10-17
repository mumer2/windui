import React from 'react'
import CodePre from '../General/CodePre'

export const Breadcrumb = () => {
  const htmlCode = ` <div className="bread-cont">

        <nav className="breadcrumb">
      <ul>
        <li>
          <a href="/">🏠  <i class="fa-solid fa-greater-than"></i>
          </a>
        </li>
        <li>
          <span className='hide'><b>Projects <i class="fa-solid fa-greater-than"></i>
            
            </b></span>
        </li>
        <li>
          <span><b>UI components <i class="fa-solid fa-greater-than"></i>
            
            </b></span>
        </li>
        <li>
          <span>Project</span>
        </li>
      </ul>
    </nav>
    </div>
  `;

const reactCode = `import React from 'react'
import CodePre from '../General/CodePre'

export const Breadcrumb = () => {
  return(

<div className="bread-cont">

        <nav className="breadcrumb">
      <ul>
        <li>
          <a href="/">🏠  <i class="fa-solid fa-greater-than"></i>
          </a>
        </li>
        <li>
          <span className='hide'><b>Projects <i class="fa-solid fa-greater-than"></i>
            
            </b></span>
        </li>
        <li>
          <span><b>UI components <i class="fa-solid fa-greater-than"></i>
            
            </b></span>
        </li>
        <li>
          <span>Project</span>
        </li>
      </ul>
    </nav>
    </div>
`;

const cssCode = `.breadcrumbs{
  margin-top: 15%;
  margin-left: 2%;
  color: rgb(82, 74, 74);
}

.breadcrumbs h1{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 600;
}
.breadcrumbs h2{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.8rem;
  line-height: 2.25rem;
  font-weight: 400;
}
.breadcrumbs h4{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  line-height: 2.25rem;
  font-weight: 600;
}
.breadcrumb {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2%;
  background-color: #fff; /* White background */
  padding: 10px;
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow */
}
.bread-cont{
  border: 1px solid rgb(227, 227, 227);
  border-radius: 10px;
  margin: 20px;
  padding: 50px;
}
.breadcrumb ul {
  list-style: none; /* Remove bullet points */
  display: flex; /* Flex layout */
  margin: 0; /* Remove margin */
  padding: 0; /* Remove padding */
}

.breadcrumb li {
  margin-right: 15px; 
  font-size: 14px; /* Font size */
  color: #756f6f; /* Gray text color */
  cursor: pointer;
}

.breadcrumb li:hover{
  color: #02b583;
}
.breadcrumb li a {
  text-decoration: none; /* Remove underline */
  color:#02b583; /* Link color */
}

.breadcrumb li a:hover {
color: #02b583;
}

/* .breadcrumb li::after {
  content: '>'; 
  margin-left: 15px; 
} */

.breadcrumb i{
  margin-right: 8px;
  margin-left: 8px;
  margin-top: 1px;
}

.breadcrumb li:last-child::after {
  content: ''; /* No separator after last item */
}`;
  return (
    <div>
        <div className="breadcrumbs">
            <h1>Breadcrumbs</h1>
            <p>Breadcrumbs consist of a list of links that help a user visualize a page's location within the hierarchical structure of a website, and allow navigation up to any of its "ancestors".</p>
        </div>

<div className="bread-cont">

        <nav className="breadcrumb">
      <ul>
        <li>
          <a href="/">🏠  <i class="fa-solid fa-greater-than"></i>
          </a>
        </li>
        <li>
          <span className='hide'><b>Projects <i class="fa-solid fa-greater-than"></i>
            
            </b></span>
        </li>
        <li>
          <span><b>UI components <i class="fa-solid fa-greater-than"></i>
            
            </b></span>
        </li>
        <li>
          <span>Project</span>
        </li>
      </ul>
    </nav>
    </div>
    <div className="breadcrumbs">
            <h2>Variations</h2>
            <h4>Elevated Breadcrumbs</h4>
        </div>
        <div className="code-cont">
    <CodePre htmlCode={htmlCode} reactCode={reactCode} cssCode={cssCode}/>
    </div>
<div className="bread-cont">

<nav className="breadcrumb">
      <ul>
        <li>
          <a href="/" className='hide'>Home <i class="fa-solid fa-greater-than"></i>
          
          </a>
        </li>
        <li>
          <span className='hide'><b>Projects <i class="fa-solid fa-greater-than"></i>
            </b></span>
        </li>
        <li>
          <span><b>UI components <i class="fa-solid fa-greater-than"></i>
            </b></span>
        </li>
        <li>
          <span>Project</span>
        </li>
      </ul>
    </nav>
    </div>
    </div>
  )
}
