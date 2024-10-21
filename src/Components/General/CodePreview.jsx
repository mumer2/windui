import React, { useEffect, useState } from 'react';
import './CodeShow.css';
import Prism from 'prismjs'; // Import Prism.js
import 'prismjs/components/prism-jsx'; // Ensure Prism.js supports JSX
import 'prismjs/themes/prism-okaidia.css'; // Import a dark theme (Okaidia)

const CodePreview = ({ htmlCode, reactCode, cssCode }) => {
  const [showCode, setShowCode] = useState(false);
  const [codeType, setCodeType] = useState('HTML');
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    Prism.highlightAll(); // This highlights all the code blocks
  }, [showCode, codeType]);

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false);
      }, 2000); // Reset after 2 seconds
      return () => clearTimeout(timer);
    }
  }, [isCopied]);

  const handleCodeClick = () => setShowCode(true);
  const handlePreviewClick = () => setShowCode(false);

  const handleCodeTypeToggle = () => {
    setCodeType((prevType) => (prevType === 'HTML' ? 'React' : 'HTML'));
  };

  const handleCssClick = () => setCodeType('CSS');

  const handleCopyCode = () => {
    const codeToCopy = codeType === 'HTML' ? htmlCode : codeType === 'React' ? reactCode : cssCode;
    navigator.clipboard.writeText(codeToCopy);
    setIsCopied(true);
  };

  return (
    <div className="code-view-cont">
      <div className="code-preview-container">
        <div className="code-preview-header">
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

          <div className="code-options">
            <span className="hide">Copy as:</span>
            <div className="toggle-container" onClick={handleCodeTypeToggle}>
              <span className={`${codeType === 'HTML' ? 'active' : ''}`} style={{cursor:'pointer'}}>HTML</span>
              <div className={`toggle-button ${codeType === 'React' ? 'toggled' : ''}`}>
                <span className="slider"></span>
              </div>
              <span className={`${codeType === 'React' ? 'active' : ''}`} style={{cursor:'pointer'}}>React</span>
            </div>
          </div>
        </div>

        {showCode ? (
          <div className="code-section" style={{backgroundColor:'#272822'}}>
            <div className="css-code-button" style={{marginTop:'8px',marginLeft:'8px'}}>
              <button className="css-btn" onClick={handleCssClick} style={{backgroundColor:'transparent',color:'white',borderRadius:'5px'}}>
                CSS
              </button>
            </div>

            <button className="copy-btn" onClick={handleCopyCode} title="Copy Code">
              {isCopied ? (
                <i className="fa-solid fa-check" style={{color:' #ffbe00'}}> Copied </i>
              ) : (
                <i className="fa-solid fa-copy"></i>
              )}
            </button>

            <pre className="code-content">
              <code className={`language-${codeType === 'React' ? 'jsx' : codeType.toLowerCase()}`}>
                {codeType === 'HTML' ? htmlCode : codeType === 'React' ? reactCode : cssCode}
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

export default CodePreview;
