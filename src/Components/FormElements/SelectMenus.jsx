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
    <CodePre htmlCode={htmlCode} reactCode={reactCode}/>
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
