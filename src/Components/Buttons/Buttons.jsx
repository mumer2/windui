import React from 'react'
import CodePre from '../General/CodePre'

export const Buttons = () => {
  const htmlCode = `    <div className="btns2">
    <div className="button-container">
            <button className="app-button primary">Primary Button</button>
            <button className="app-button secondary">Secondary Button</button>
            <button className="app-button outline">Outline Button</button>
        </div>
    </div>
  `;

const reactCode = `import React from 'react'
import CodePre from '../General/CodePre'

export const Buttons = () => {
  return (
    <div className="btns2">
    <div className="button-container">
            <button className="app-button primary">Primary Button</button>
            <button className="app-button secondary">Secondary Button</button>
            <button className="app-button outline">Outline Button</button>
        </div>
    </div>
`;
  return (
    <div>
        <div className="butns">
            <h1>Buttons</h1>
            <p>Buttons are interactive elements activated by a user with a mouse, keyboard, or tap. Once activated, it then performs a programmable action, such as submitting a form or opening a dialog.</p>
        </div>
    
    <div className="btns2">
    <div className="button-container">
            <button className="app-button primary">Primary Button</button>
            <button className="app-button secondary">Secondary Button</button>
            <button className="app-button outline">Outline Button</button>
        </div>
    </div>

    <div className="butns">
            <h2>Variations</h2>
            <h3>Primary buttons</h3>
            <div className="code-cont">
    <CodePre htmlCode={htmlCode} reactCode={reactCode}/>
    </div>

            <div className="button-container2">
            <button className="app-button primary large">Large Button</button>
            <button className="app-button primary medium">Base Button</button>
            <button className="app-button primary small">Small Button</button>

        </div>
        </div>

    </div>

  )
}
