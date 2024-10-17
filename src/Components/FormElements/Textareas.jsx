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

const cssCode =`
.textareas{
  margin-top: 15%;
  margin-left: 2%;
  color: rgb(101, 96, 96);
  font-size: 18px;
}
.textareas h1{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 600;
}
.textareas h2{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.8rem;
  line-height: 2.25rem;
  font-weight: 400;
}
.textareas h4{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  line-height: 2.25rem;
  font-weight: 600;
}
.textfields{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2%;
  gap: 50px;
  border: 1px solid rgb(227, 227, 227);
  margin: 20px;
  border-radius: 10px;
  padding: 50px;
}
.textarea-container {
  position: relative;
  width: 520px;
  font-size: 10px;
  margin-top: 30px;
}
.textarea-container2 {
  position: relative;
  width: 40%;
  font-size: 10px;
  color: gray;
}

.textarea-label {
  position: absolute;
  top: -10px;
  left: 12px;
  background-color: #f9fafb;
  padding: 0 4px;
  font-size: 12px;
  color: #6b7280; /* Light gray color */
}

.required {
  color: #ef4444; /* Red color for required asterisk */
}

.textarea {
  width: 100%;
  padding: 15px;
  padding-top: 10px; /* Additional top padding to accommodate label */
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 14px;
  color: #797a7b; /* Darker gray for text */
  background-color: #fff;
  outline: none;
  resize: none; /* Disable resizing */
}

.textarea:focus {
  border-color: #018156; /* Blue border on focus */
}
.textarea2 {
  width: 100%;
  padding: 15px;
  padding-top: 10px; /* Additional top padding to accommodate label */
  border: 1px solid white;
  border-radius: 8px;
  font-size: 14px;
  color: #797a7b; /* Darker gray for text */
  background-color: #fff;
  outline: none;
  resize: none; /* Disable resizing */
}

.textarea2:focus {
  border-bottom-color: #018156; /* Blue border on focus */
}

.helper-text {
  font-size: 12px;
  color: #6b7280; /* Light gray color for helper text */
  margin-top: 8px;
}


/* Media Queries for Specific Screen Sizes */

/* Large devices (desktops, 1200px and up) */
@media (min-width: 1200px) {
  .textareas {
    font-size: 18px;
  }

  .textarea-container {
    width: 520px;
    font-size: 10px;
  }
  .textarea-container2 {
    width: 40%;
    font-size: 10px;
  }

  .textarea-label,
  .helper-text {
    font-size: 12px;
  }

  .textarea,
  .textarea2 {
    font-size: 14px;
    padding: 15px;
  }
}

/* Medium devices (tablets, 768px to 1199px) */
@media (min-width: 768px) and (max-width: 1199px) {
  .textareas {
    font-size: 18px;
  }

  .textarea-container,
  .textarea-container2 {
    width: 60vw;
    max-width: 450px;
  }

  .textarea-label,
  .helper-text {
    font-size: 14px;
  }

  .textarea,
  .textarea2 {
    font-size: 16px;
    padding: 12px;
  }
}

/* Small devices (phones, less than 768px) */
@media (max-width: 767px) {
  .textareas {
    font-size: 18px;
  }

  .textarea-container,
  .textarea-container2 {
    width: 90vw;
    justify-content: space-around;
    margin-right: 6%;
  }

  .textarea-label,
  .helper-text {
    font-size: 12px;
  }

  .textarea,
  .textarea2 {
    font-size: 14px;
    padding: 10px;
  }
}`;

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
    <CodePre htmlCode={htmlCode} reactCode={reactCode} cssCode={cssCode}/>
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
