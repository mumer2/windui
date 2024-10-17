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

const cssCode =`.buttonswitch{
  margin-top: 15%;
  margin-left: 2%;
  color: rgb(115, 105, 105);
}
.buttonswitch h1{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 600;
}
.buttonswitch h2{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.8rem;
  line-height: 2.25rem;
  font-weight: 400;
}
.buttonswitch h4{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  line-height: 2.25rem;
  font-weight: 600;
}
.button-switcher {
  display: flex;
  border-radius: 8px;
  overflow: hidden; /* Prevent rounded corners from showing overflow */
  margin-top: 10%;
  max-width: 35%;
  margin-left: 30%;
  flex-wrap: wrap;
}

.switch-button {
  flex: 1;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: rgb(105, 87, 87); /* Default text color */
  transition: background-color 0.3s ease, color 0.3s ease;
}

.switch-button.active {
  background-color: #02b583; /* Active background color */
  color: white; /* Active text color */
}

.switch-button:not(.active):hover {
  background-color: rgba(59, 130, 246, 0.1); /* Light hover effect for inactive buttons */
}`;

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
    <CodePre htmlCode={htmlCode} reactCode={reactCode} cssCode={cssCode}/>
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