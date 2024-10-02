import React, { useState } from 'react';
import CodePreview from '../General/CodePreview';
const ButtonSwitchers = () => {
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
<CodePreview/>
        
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