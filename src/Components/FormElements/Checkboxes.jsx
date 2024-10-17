import React from 'react'
import CodePre from '../General/CodePre'

export const Checkboxes = () => {
    const htmlCode = ` <div className="checkbox-cont">

        <div className="check-cont">
        <div className="check1">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" checked/>
            <label for="vehicle1"> Primary Checkbox</label>
            </div>
            <div className="check1">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
            <label for="vehicle1"> Secondary Checkbox</label>
            </div>
        </div>
        </div>
    `;
  
  const reactCode = `import React from 'react'
import CodePre from '../General/CodePre'

export const Checkboxes = () => {
    return(
  <div className="checkbox-cont">

        <div className="check-cont">
        <div className="check1">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" checked/>
            <label for="vehicle1"> Primary Checkbox</label>
            </div>
            <div className="check1">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
            <label for="vehicle1"> Secondary Checkbox</label>
            </div>
        </div>
        </div>
          )
}
`;

const cssCode = `/* General styling for checkboxes section */
.checkboxes {
  margin-top: 15%;
  margin-left: 2%;
  font-size: 18px;
  color: rgb(99, 90, 90);
}

.checkboxes h1 {
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 600;
  color: rgb(71, 85, 105);
}

.checkboxes h2 {
  font-size: 1.8rem;
  line-height: 2.25rem;
  font-weight: 400;
  color: rgb(71, 85, 105);
}

.checkboxes h4 {
  font-size: 18px;
  line-height: 2.25rem;
  font-weight: 600;
  color: rgb(71, 85, 105);
}
.checkbox-cont{
  border: 1px solid rgb(227, 227, 227);
  border-radius: 10px;
  margin: 20px;
  padding: 50px;
}
/* Checkbox container */
.check-cont, .check-cont2 {
  margin-top: 2%;
  display: flex;
  justify-content: center;
  gap: 40px;
  color: rgb(100 ,116, 139);
}
.check-cont2{
  gap: 18%;
}
/* Disabled checkbox text */
.dis {
  color: gray;
}
.date-cont{
  border: 1px solid rgb(219, 216, 216);
  padding: 30px;
  padding-bottom: 40px;
  border-radius: 10px;
  margin: 20px;
}
/* Small checkbox text */
.check1 p {
  font-size: 10px;
  text-align: right;
  color: gray;
}

/* Checkbox input styles */
input[type="checkbox"] {
  width: 15px;
  height: 15px;
  accent-color : #06a771; /* Set checkbox checkmark color */
}
/* Responsive adjustments */
@media screen and (max-width: 768px) {
  .check-cont, .check-cont2 {
    flex-direction: column; /* Arrange checkboxes in column on small screens */
    gap: 20px;
    align-items: center; /* Center the checkboxes */
  }
}`;

  return (
    <div>
        <div className="checkboxes">
            <h1>Checkboxes</h1>
            <p>Checkboxes are used to let a user select one or more options of a limited number of choices. Checkboxes can turn an option on or off.</p>
        </div>
<div className="checkbox-cont">

        <div className="check-cont">
        <div className="check1">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" checked/>
            <label for="vehicle1"> Primary Checkbox</label>
            </div>
            <div className="check1">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
            <label for="vehicle1"> Secondary Checkbox</label>
            </div>
        </div>
        </div>

        <div className="checkboxes">
            <h2>Variations</h2>
            <h4>Primary Checkboxes</h4>
        </div>

        <div className="code-cont">
    <CodePre htmlCode={htmlCode} reactCode={reactCode} cssCode={cssCode}/>
    </div>

<div className="checkbox-cont">

        <div className="check-cont2">
            <div className="check1">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
            <label for="vehicle1"> Primary Checkbox</label>
            </div>
        <div className="check1">
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Secondary Checkbox"/>
        <label for="vehicle1"> With helper text</label>
        <p>Checkbox can also have helper text</p>
        </div>
       <div className="check1">
       <label className='dis' for="vehicle1">Primary Disabled</label>

       </div>
        </div>
        </div>

    </div>
  )
}
