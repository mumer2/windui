import React, { useState } from 'react';

const CopyCode = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    // Copy code logic here
    navigator.clipboard.writeText("Your code goes here");
    
    // Change icon to indicate that the code is copied
    setIsCopied(true);
    
    // Revert the icon back to the original after a delay
    setTimeout(() => {
      setIsCopied(false);
    }, 2000); // Change the icon back after 2 seconds
  };

  return (
    <div className="code-container" style={{ position: 'relative' }}>
      <button className="copy-btn" onClick={handleCopy}>
        {isCopied ? (
          <span>&#10003; Copied</span> // Checkmark icon after copying
        ) : (
          <span>&#128203; Copy</span> // Clipboard icon before copying
        )}
      </button>
      <pre>
        <code>Your code block here</code>
      </pre>
    </div>
  );
};

export default CopyCode;
