import React from 'react'
import CodePreview from '../General/CodePreview'

export const Breadcrumb = () => {
  return (
    <div>
        <div className="breadcrumbs">
            <h1>Breadcrumbs</h1>
            <p>Breadcrumbs consist of a list of links that help a user visualize a page's location within the hierarchical structure of a website, and allow navigation up to any of its "ancestors".</p>
        </div>


        <nav className="breadcrumb">
      <ul>
        <li>
          <a href="/">🏠</a>
        </li>
        <li>
          <span><b>Projects</b></span>
        </li>
        <li>
          <span><b>UI components</b></span>
        </li>
        <li>
          <span>Project</span>
        </li>
      </ul>
    </nav>

    <div className="breadcrumbs">
            <h2>Variations</h2>
            <h4>Elevated Breadcrumbs</h4>
        </div>
<CodePreview/>

<nav className="breadcrumb">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <span><b>Projects</b></span>
        </li>
        <li>
          <span><b>UI components</b></span>
        </li>
        <li>
          <span>Project</span>
        </li>
      </ul>
    </nav>
    </div>
  )
}
