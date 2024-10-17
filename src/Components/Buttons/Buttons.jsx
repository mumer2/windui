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

const cssCode = `/* General Button Section */
.butns {
  margin-top: 15%;
  margin-left: 2%;
  color: rgb(116, 107, 107);
}

.butns h1 {
  font-size: 1.875rem;
  line-height: 2.25rem;
  color: rgb(71, 85, 105);
  font-weight: 600;
}

.butns h2 {
  font-size: 1.8rem;
  line-height: 2.25rem;
  color: rgb(71, 85, 105);
  font-weight: 400;
}

.butns h3 {
  font-size: 18px;
  color: rgb(71, 85, 105);
  line-height: 2.25rem;
  font-weight: 600;
}

/* Button Container */
.button-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin: 20px;
  border: 1px solid rgb(227, 227, 227);
  padding: 70px;
}

/* Button Styles */
.app-button {
  padding: 15px 24px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  color: white;
  border: none;
  outline: none;
  transition: all 0.3s ease;
}

.app-button.primary {
  background-color: #1f9874;
}

.app-button.secondary {
  color: #1f9874;
}

.app-button.secondary:hover {
  background-color: #b2eedc;
  color: #1f9874;
}

.app-button.outline {
  background-color: transparent;
  border: 1px solid #1f9874;
  color: #1f9874;
}

.app-button:hover {
  opacity: 0.9;
}

/* Size Variations */
.medium {
  width: 13%; /* Keep width same across all screens */
  height: 50px;
  font-size: 16px;
  padding: 10px;
}

.small {
  width: 12%; /* Keep width same across all screens */
  height: 40px;
  font-size: 12px;
  padding: 10px;
}

/* Additional Button Container */
.button-container2 {
  display: flex;
  flex-wrap: wrap;
  gap: 80px;
  justify-content: center;
  margin: 20px;
  border: 1px solid rgb(227, 227, 227);
  padding: 70px;
}

/* Media Queries */

/* Large Devices (Desktops) */
@media (min-width: 1200px) {
  .app-button,
  .medium,
  .small {
    font-size: 14px;
  }
  .medium {
    font-size: 12px;
  }
  .small {
    font-size: 10px;
  }
}

/* Medium Devices (Tablets) */
@media (min-width: 768px) and (max-width: 1199px) {
  .app-button {
    font-size: 14px;
    width: auto;
    height: 50px;
  }

  .medium {
    width: auto;
    height: 45px;
    font-size: 14px;
  }

  .small {
    width: auto;
    height: 35px;
    font-size: 10px;
  }
}

/* Small Devices (Phones) */
@media (max-width: 767px) {
  .button-container {
    flex-direction: column;
    align-items: center;
    gap: 20px; /* Space between buttons */
  }

  .app-button {
    width: 200px; /* Keep the same width on small screens */
    padding: 15px 24px;
    font-size: 14px;
  }

  .medium {
    width: 200px; /* Consistent width for medium size */
    height: 50px;
  }

  .small {
    width: 200px; /* Consistent width for small size */
    height: 40px;
  }
}`;
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
    <CodePre htmlCode={htmlCode} reactCode={reactCode} cssCode={cssCode}/>
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
