import React, { useState } from 'react';
import CodePre from '../General/CodePre';
const ButtonSwitchers = () => {

    const htmlCode = `   <div className="button-switcher">
            <button
                
            
              <i class="fa-solid fa-code"></i>  Code Mode
            </button>
            <button
        
               <i class="fa-regular fa-eye"></i> Visual Mode
            </button>
        </div>
    `;
  
  const reactCode = `import React, { useState } from 'react';
import CodePre from '../General/CodePre';
const ButtonSwitchers = () => {
       const [active, setActive] = useState('Code Mode');

    const handleSwitch = (option) => {
        setActive(option);
    };
    return (
   <div className="button-switcher">
            <button
                
            
              <i class="fa-solid fa-code"></i>  Code Mode
            </button>
            <button
        
               <i class="fa-regular fa-eye"></i> Visual Mode
            </button>
        </div>
`;

    const [active, setActive] = useState('Code Mode');

    const handleSwitch = (option) => {
        setActive(option);
    };

    return (

        <>
         <div className="buttonswitch">
            <h1>Button Switchers</h1>
            <p>Button switchers help people select one of two options or switch between two views.</p>
        </div>
        
        <div className="button-switcher">
            <button
                className={`switch-button ${active === 'Code Mode' ? 'active' : ''}`}
                onClick={() => handleSwitch('Code Mode')}
            >
              <i class="fa-solid fa-code"></i>  Code Mode
            </button>
            <button
                className={`switch-button ${active === 'Visual Mode' ? 'active' : ''}`}
                onClick={() => handleSwitch('Visual Mode')}
            >
               <i class="fa-regular fa-eye"></i> Visual Mode
            </button>
        </div>


        <div className="buttonswitch">
            <h2>Variations</h2>
            <h4>Basic button switchers</h4>
        </div>
        <div className="code-cont">
    <CodePre htmlCode={htmlCode} reactCode={reactCode}/>
    </div>
        
        <div className="button-switcher">
            <button
                className={`switch-button ${active === 'Code Mode' ? 'active' : ''}`}
                onClick={() => handleSwitch('Code Mode')}
            >
               Code Mode
            </button>
            <button
                className={`switch-button ${active === 'Visual Mode' ? 'active' : ''}`}
                onClick={() => handleSwitch('Visual Mode')}
            >
                Visual Mode
            </button>
        </div>
        </>
    );
};

export default ButtonSwitchers;