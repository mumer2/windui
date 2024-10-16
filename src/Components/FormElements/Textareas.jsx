import React from 'react'
import CodePre from '../General/CodePre'

export const Textareas = () => {
    const htmlCode = `   <div className="textfields">
        <div class="textarea-container">
    <label for="textarea" class="textarea-label">Write your message <span class="required">*</span></label>
    <textarea id="textarea" class="textarea" rows="4" placeholder="Type your message here...">The textarea element defines a multi-line text input control. It's often used in a form, to collect user inputs like comments or reviews. A text area can hold an unlimited number of characters.</textarea>
    <small class="helper-text">Text field with helper text</small>
        </div>
        </div>
    `;
  
  const reactCode = `  import React from 'react'
import CodePre from '../General/CodePre'

export const Textareas = () => {
    return(
  <div className="textfields">
        <div class="textarea-container">
    <label for="textarea" class="textarea-label">Write your message <span class="required">*</span></label>
    <textarea id="textarea" class="textarea" rows="4" placeholder="Type your message here...">The textarea element defines a multi-line text input control. It's often used in a form, to collect user inputs like comments or reviews. A text area can hold an unlimited number of characters.</textarea>
    <small class="helper-text">Text field with helper text</small>
        </div>
        </div>
          )
}
`;
  return (
    <div>
        <div className="textareas">
            <h1>Textareas</h1>
            <p>The textarea element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example, a comment on a review or feedback form.</p>
        </div>


        <div className="textfields">
        <div class="textarea-container">
    <label for="textarea" class="textarea-label">Write your message <span class="required">*</span></label>
    <textarea id="textarea" class="textarea" rows="4" placeholder="Type your message here...">The textarea element defines a multi-line text input control. It's often used in a form, to collect user inputs like comments or reviews. A text area can hold an unlimited number of characters.</textarea>
    <small class="helper-text">Text field with helper text</small>
        </div>
        </div>


        <div className="textareas">
            <h2>Variations</h2>
            <h4>Basic Text Area</h4>
        </div>
        <div className="code-cont">
    <CodePre htmlCode={htmlCode} reactCode={reactCode}/>
    </div>
        <div className="textfields">
        <div class="textarea-container2">
    <h2>Basic Text Area Base Size: </h2>
    <textarea id="textarea" class="textarea2" rows="4" placeholder="Write your message"></textarea>
        </div>
        <div class="textarea-container2">
    <h2>Basic Text Area Large Size:</h2>
    <textarea id="textarea" class="textarea2" rows="4" placeholder="Write your message"></textarea>
        </div>
        </div>
    </div>
  )
}
