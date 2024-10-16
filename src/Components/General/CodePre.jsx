import React, { useEffect, useState } from 'react';
import './CodeShow.css';
import Prism from 'prismjs'; // Import Prism.js
import 'prismjs/components/prism-jsx'; // Ensure Prism.js supports JSX
import 'prismjs/themes/prism-okaidia.css'; // Import a dark theme (Okaidia)

const CodePre = ({ htmlCode, reactCode }) => {
  const [showCode, setShowCode] = useState(false);
  const [codeType, setCodeType] = useState('HTML');

  // Run Prism.js after rendering to apply syntax highlighting
  useEffect(() => {
    Prism.highlightAll(); // This highlights all the code blocks
  }, [showCode, codeType]);

  // Toggle between Preview and Code view
  const handleCodeClick = () => setShowCode(true);
  const handlePreviewClick = () => setShowCode(false);

  // Toggle between HTML and React code
  const handleCodeTypeToggle = () => {
    setCodeType((prevType) => (prevType === 'HTML' ? 'React' : 'HTML'));
  };

  // Copy the current code to the clipboard
  const handleCopyCode = () => {
    const codeToCopy = codeType === 'HTML' ? htmlCode : reactCode;
    navigator.clipboard.writeText(codeToCopy);
    // alert('Code copied to clipboard!');
  };

  return (
    <div className="code-view-cont">
      <div className="code-preview-container">
        <div className="code-preview-header">
          {/* Left: Preview and Code buttons */}
          <div className="code-view">
            <button
              className={`preview-btn ${!showCode ? 'active' : ''}`}
              onClick={handlePreviewClick}
            >
              <i className="fa-regular fa-eye"></i>
              <span className="hide">Preview</span>
            </button>
            <button
              className={`code-btn ${showCode ? 'active' : ''}`}
              onClick={handleCodeClick}
            >
              <i className="fa-solid fa-code"></i>
              <span className="hide">Code</span>
            </button>
          </div>

          {/* Right: Toggle button and Copy functionality */}
          <div className="code-options">
            <span className="hide">Copy as:</span>
            <div className="toggle-container" onClick={handleCodeTypeToggle}>
              <span className={`${codeType === 'HTML' ? 'active' : ''}`}>HTML</span>
              <div className={`toggle-button ${codeType === 'React' ? 'toggled' : ''}`}>
                <span className="slider"></span>
              </div>
              <span className={`${codeType === 'React' ? 'active' : ''}`}>React</span>
            </div>
          </div>
        </div>

        {/* Conditionally show the code or preview */}
        {showCode ? (
          <div className="code-section">
            <button className="copy-btn" onClick={handleCopyCode} title="Copy Code">
              <i className="fa-solid fa-copy"></i> Copy Code
            </button>
            <pre className="code-content">
              {/* Prism.js language class */}
              <code className={`language-${codeType === 'HTML' ? 'html' : 'jsx'}`}>
                {codeType === 'HTML' ? htmlCode : reactCode}
              </code>
            </pre>
          </div>
        ) : (
          <div className="preview-content">
            {/* Your preview content goes here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default CodePre;
