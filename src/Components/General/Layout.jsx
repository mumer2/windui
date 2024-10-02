import React from 'react'
import CodePreview from './CodePreview'

export const Layout = () => {
  return (
    <div>
        <div className="layouts">
            <h1>Layouts</h1>
            <p>A layout system allows you to visually organize your content and adapt to screen size, ensuring consistency and hierarchy.</p>
        </div>

        <div className="container">
      <div className="column column-left">
        <p>Column 1/3</p>
      </div>
      <div className="column column-center">
        <p>Column 2/3</p>
      </div>
      <div className="column column-right">
        <p>Column 3/3</p>
      </div>
    </div>

    <div className="layout-content">
        <h2>Variations</h2>
        <h4>One Column Layout</h4>
    </div>
    <CodePreview/>

    <div className="container">
      <div className="column1">
        <p>Column 1/3</p>
      </div>
    </div>
    </div>
  )
}
