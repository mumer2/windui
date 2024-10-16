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
    <CodePre htmlCode={htmlCode} reactCode={reactCode}/>
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
