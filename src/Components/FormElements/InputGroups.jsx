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

const cssCode = `.inputgroups{
  margin-top: 15%;
  margin-left: 2%;
  color: gray;
  font-size: 18px;
}
.inputgroups h1{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 600;
}
.inputgroups h2{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.8rem;
  line-height: 2.25rem;
  font-weight: 400;
}
.inputgroups h4{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  line-height: 2.25rem;
  font-weight: 600;
}
.inptgrop{
  border: 1px solid rgb(227, 227, 227);
  border-radius: 10px;
  padding: 50px;
  margin: 20px;
}
.input-cont{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30%;
  color: rgb(71 ,85, 105);

}
.input-cont .inputgrop{
  width: 200px;
}
.inputgrop label{
  color: rgb(71 ,85, 105);

  font-size: 12px;
}
.inputgrop p{
  color: rgb(71 ,85, 105);
  font-size: 12px;
}
.inputgrop h4{
  color: rgb(71 ,85, 105);

  font-size: 16px;
}
.inputgrop input{
  border: none;
}
.inputgrop input:hover{
  border-bottom: 1px solid rgb(19, 207, 157);
}
.inputgrop input[type="text"]{
  border-bottom: none;
  outline: none;
}
.inputgrop input[type="text"]:hover{
  border-bottom: 1px solid #2e8b57;
  outline: none;
}
.steric{
  color: red;
}`;

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
    <CodePre htmlCode={htmlCode} reactCode={reactCode} cssCode={cssCode}/>
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
