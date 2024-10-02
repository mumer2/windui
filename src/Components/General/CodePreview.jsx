import React, { useState } from 'react';

const CodePreview = () => {
  const [showCode, setShowCode] = useState(false); // State for showing/hiding the code
  const [codeType, setCodeType] = useState('HTML'); // State for HTML or React

  // Handle the button click to toggle between preview and code
  const handleCodeClick = () => {
    setShowCode(true);
  };

  const handlePreviewClick = () => {
    setShowCode(false);
  };

  // Handle the toggle between HTML and React
  const handleCodeTypeToggle = () => {
    setCodeType((prevType) => (prevType === 'HTML' ? 'React' : 'HTML'));
  };

  return (
    <div className="code-preview-container">
      {/* Buttons for Preview and Code */}
      <div className="code-preview-header">
        <button 
          className={`preview-btn ${!showCode ? 'active' : ''}`} 
          onClick={handlePreviewClick}
        >
            <i class="fa-regular fa-eye"></i>
          Preview
        </button>
        <button 
          className={`code-btn ${showCode ? 'active' : ''}`} 
          onClick={handleCodeClick}
        >
          <i class="fa-solid fa-code"></i>
          Code
        </button>

         {/* Toggle switch (right-aligned) */}
         <div className="code-type-toggle">
            <span>Copy as: HTML</span>
            <label className="switch">
              <input 
                type="checkbox" 
                checked={codeType === 'React'} 
                onChange={handleCodeTypeToggle}
              />
              <span className="slider"></span>
            </label>
            <span>{codeType}</span>
          </div>
      </div>

      {/* Code section and toggle switch in one line */}
      {showCode && (
        <div className="code-section-row">
          {/* Code block (left-aligned) */}
          <div className="code-section">
            <pre>
              {codeType === 'HTML'
                ? '<div class="accordion">HTML code example here...</div>'
                : '<AccordionComponent>React code example here...</AccordionComponent>'}
            </pre>
          </div>

         
        </div>
      )}
    </div>
  );
};

export default CodePreview;
