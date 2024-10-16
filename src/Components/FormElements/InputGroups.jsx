import React from 'react'
import CodePre from '../General/CodePre'

export const InputGroups = () => {
    const htmlCode = ` <div className="inputgroups">
            <h1>Input Groups</h1>
            <p>The input element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. The element is one of the most powerful and complex in all of HTML due to the sheer number of combinations of input types and attributes.</p>
        </div>
<div className="inptgrop">
<div className="input-cont">
            <div className="inputgrop">
                <label>Your Name <span className='steric'>*</span></label>
                <input type='text'></input>
                <p>Text field with helper text</p><p> 1/10</p>
            </div>
        </div>
</div>
    `;
  
  const reactCode = ` import React from 'react'
import CodePre from '../General/CodePre'

export const InputGroups = () => {
    return(
  <div className="inputgroups">
            <h1>Input Groups</h1>
            <p>The input element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. The element is one of the most powerful and complex in all of HTML due to the sheer number of combinations of input types and attributes.</p>
        </div>
<div className="inptgrop">
<div className="input-cont">
            <div className="inputgrop">
                <label>Your Name <span className='steric'>*</span></label>
                <input type='text'></input>
                <p>Text field with helper text</p><p> 1/10</p>
            </div>
        </div>
</div>
  )
}
`;

  return (
    <div>
        <div className="inputgroups">
            <h1>Input Groups</h1>
            <p>The input element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. The element is one of the most powerful and complex in all of HTML due to the sheer number of combinations of input types and attributes.</p>
        </div>
<div className="inptgrop">
<div className="input-cont">
            <div className="inputgrop">
                <label>Your Name <span className='steric'>*</span></label>
                <input type='text'></input>
                <p>Text field with helper text</p><p> 1/10</p>
            </div>
        </div>
</div>
        

        <div className="inputgroups">
            <h2>Variations</h2>
            <h4>Basic Input</h4>
        </div>

        <div className="code-cont">
    <CodePre htmlCode={htmlCode} reactCode={reactCode}/>
    </div>

<div className="inptgrop">
<div className="input-cont">
            <div className="inputgrop">
                <h4>Basic Input Base Size:</h4>
                <input type='text' placeholder='Your name'></input>
            </div>
            <div className="inputgrop">
                <h4>Basic Input Large Size:</h4>
                <input type='text' placeholder='Your name'></input>
            </div>
        </div>
</div>
       
    </div>
  )
}
