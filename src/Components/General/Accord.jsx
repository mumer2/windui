import React from 'react';
import './CodeShow.css';

import CodePre from './CodePre';

const Accord = () => {
  
  const htmlCode = ` <div className='acc-uniq'>
    `;
  
  const reactCode = `import React, { useState } from 'react';
`;

  return (
    <>
    <div className="code-cont">
    <CodePre htmlCode={htmlCode} reactCode={reactCode}/>
    </div>
  
    
    <div className="accordion">
        <h3>Accordion Header</h3>
        <p>Accordion Content</p>
      </div>
    </>
  );
};

export default Accord;
