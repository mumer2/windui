import React from 'react'
import CodePre from '../General/CodePre'

export const SelectMenus = () => {
    const htmlCode = `   <div className="menussection">
        <div class="custom-select-box">
    <label for="customSelect" class="custom-select-label">
        Select an option <span class="required">*</span>
    </label>
    <select id="customSelect" class="custom-select-menu">
        <option value="" disabled selected>Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
    </select>
    <small class="helper-text">Text field with helper text</small>
</div>

        </div>
    `;
  
  const reactCode = ` import React from 'react'
import CodePre from '../General/CodePre'

export const SelectMenus = () => {
    return(
   <div className="menussection">
        <div class="custom-select-box">
    <label for="customSelect" class="custom-select-label">
        Select an option <span class="required">*</span>
    </label>
    <select id="customSelect" class="custom-select-menu">
        <option value="" disabled selected>Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
    </select>
    <small class="helper-text">Text field with helper text</small>
</div>

        </div>
          )
}
`;

const cssCode  = `.selectmenus{
  margin-top: 15%;
  margin-left: 2%;
  color: rgb(104, 101, 101);
}
.selectmenus h1{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 600;
}
.selectmenus p{
  font-size: 18px;
  color: rgb(100 ,116, 139);
}
.selectmenus h2{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.8rem;
  line-height: 2.25rem;
  font-weight: 400;
}
.selectmenus h4{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  line-height: 2.25rem;
  font-weight: 600;
}

.menussection{
  margin-top: 6%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  border: 1px solid rgb(227, 227, 227);
  margin: 20px;
  border-radius: 10px;
  padding: 30px;
}

.custom-select-box {
  position: relative;
  width: 320px;
  margin-top: 40px;
}

.custom-select-label {
  position: absolute;
  top: -10px;
  left: 12px;
  background-color: #f9fafb;
  padding: 0 4px;
  font-size: 12px;
  color: #018156; /* Light gray color */
}

.required {
  color: #ef4444; /* Red color for required asterisk */
}

.custom-select-menu {
  width: 100%;
  padding: 12px;
  padding-top: 20px; /* Additional top padding to accommodate label */
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 16px;
  color: #374151; /* Darker gray for text */
  background-color: #fff;
  appearance: none; /* Remove default styling */
  outline: none;
  cursor: pointer;
}

.custom-select-menu:focus {
  border-color: #018156; /* Blue border on focus */
}
.custom-select-menu2 {
  width: 100%;
  padding: 12px;
  padding-top: 20px; /* Additional top padding to accommodate label */
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 16px;
  color: #374151; /* Darker gray for text */
  background-color: #fff;
  appearance: none; /* Remove default styling */
  outline: none;
  cursor: pointer;
}

.custom-select-menu2:focus {
  border-bottom-color: #018156; /* Blue border on focus */
}

.helper-text {
  font-size: 12px;
  color: #6b7280; /* Light gray color for helper text */
  margin-top: 8px;
}`;

  return (
    <div>
        <div className="selectmenus">
            <h1>Select Menus</h1>
            <p>The select component represents a control that provides a menu of options.</p>
        </div>

        <div className="menussection">
        <div class="custom-select-box">
    <label for="customSelect" class="custom-select-label">
        Select an option <span class="required">*</span>
    </label>
    <select id="customSelect" class="custom-select-menu">
        <option value="" disabled selected>Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
    </select>
    <small class="helper-text">Text field with helper text</small>
</div>

        </div>


        <div className="selectmenus">
            <h2>Variations</h2>
            <h4>Basic Select</h4>
        </div>
        <div className="code-cont">
    <CodePre htmlCode={htmlCode} reactCode={reactCode} cssCode={cssCode}/>
    </div>


        <div className="menussection">
        <div class="custom-select-box">
    <label for="customSelect" class="custom-select-label">
        Select an option <span class="required">*</span>
    </label>
    <select id="customSelect" class="custom-select-menu2">
        <option value="" disabled selected>Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
    </select>
    <small class="helper-text">Text field with helper text</small>
</div>


<div class="custom-select-box">
    <label for="customSelect" class="custom-select-label">
        Select an option <span class="required">*</span>
    </label>
    <select id="customSelect" class="custom-select-menu2">
        <option value="" disabled selected>Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
    </select>
    <small class="helper-text">Text field with helper text</small>
</div>
        </div>
    </div>
  )
}
