import React from 'react'
import CodePre from '../General/CodePre'

export const RadioGroups = () => {
    const htmlCode = `  <div className="radiosgrop">
            <div className="radio1">
                <p>Primary Radio Group:</p>
                <input type="radio" />Huey<br/>
                <input type="radio" />Dewey<br/>
                <input type="radio" />Louie<br/>

            </div>
            <div className="radio1">
                <p>Secondary Radio Group:</p>
                <input type="radio" />Huey<br/>
                <input type="radio" />Dewey<br/>
                <input type="radio" />Louie<br/>

            </div>
        </div>
    `;
  
  const reactCode = ` import React from 'react'
import CodePre from '../General/CodePre'

export const RadioGroups = () => {

    return(
  <div className="radiosgrop">
            <div className="radio1">
                <p>Primary Radio Group:</p>
                <input type="radio" />Huey<br/>
                <input type="radio" />Dewey<br/>
                <input type="radio" />Louie<br/>

            </div>
            <div className="radio1">
                <p>Secondary Radio Group:</p>
                <input type="radio" />Huey<br/>
                <input type="radio" />Dewey<br/>
                <input type="radio" />Louie<br/>

            </div>
        </div>
          )
}

`;

const cssCode =`.radiogroups {
  margin-top: 15%;
  margin-left: 2%;
  color: rgb(105, 94, 94);
  font-size: 18px; /* Default font size */

}

.radiogroups h1,
.radiogroups h2,
.radiogroups h4 {
  color: rgb(71, 85, 105);
  line-height: 2.25rem; /* Line height for headings */
}

.radiogroups h1 {
  font-size: 1.875rem; /* Heading size */
  font-weight: 600; /* Bold weight */
}

.radiogroups h2 {
  font-size: 1.8rem; /* Subheading size */
  font-weight: 400; /* Normal weight */
}

.radiogroups h4 {
  font-size: 18px; /* Heading size */
  font-weight: 600; /* Bold weight */
}

.radiosgrop {
  display: flex; /* Flexbox layout */
  flex-wrap: wrap; /* Allow wrapping */
  justify-content: center; /* Center items */
  gap: 50px; /* Space between items */
  line-height: 50px; /* Line height */
  font-size: 18px; /* Font size */
  color: rgb(100 ,116, 139); /* Text color */
  border:  1px solid  rgb(230, 227, 227);
  border-radius: 10px;
  margin: 20px;
  padding: 50px;

}

/* Responsive Design */
@media (max-width: 600px) {
  .radiosgrop {
    flex-direction: column; /* Stack items vertically */
    align-items: center; /* Center items */
    gap: 20px; /* Adjust spacing for smaller screens */
  }
}

.radiosgrop2 {
  display: flex; /* Flexbox layout */
  justify-content: center; /* Center items */
  font-size: 18px; /* Font size */
  color: gray; /* Text color */
  border: 1px solid  rgb(230, 227, 227);
  padding: 50px;
  margin: 20px;
  border-radius: 10px;
}

.radiosgrop2 input {
  margin-left: 50px; /* Spacing for input elements */
}

/* Adjust margin for inputs in smaller screens */
@media (max-width: 600px) {
  .radiosgrop2 input {
    margin-left: 20px; /* Remove left margin on small screens */
    margin-bottom: 10px; /* Add space between inputs */
  }
}`;

  return (
    <div>
        <div className="radiogroups">
            <h1>Radio Groups</h1>
            <p>Radio buttons are generally used in groups - collections, describing a set of related options. Only one radio button in a given group can be selected at the same time.</p>
        </div>

        <div className="radiosgrop">
            <div className="radio1">
                <p>Primary Radio Group:</p>
                <input type="radio" />Huey<br/>
                <input type="radio" />Dewey<br/>
                <input type="radio" />Louie<br/>

            </div>
            <div className="radio1">
                <p>Secondary Radio Group:</p>
                <input type="radio" />Huey<br/>
                <input type="radio" />Dewey<br/>
                <input type="radio" />Louie<br/>

            </div>
        </div>


        <div className="radiogroups">
            <h2>Variations</h2>
            <h4>Primary Radio Buttons</h4>
        </div>

        <div className="code-cont">
    <CodePre htmlCode={htmlCode} reactCode={reactCode} cssCode={cssCode}/>
    </div>
        <div className="radiosgrop2">
            <div className="radio1">
                <p>Primary Radio Group:</p>
                <input type="radio" />Huey
                <input type="radio" />Dewey
                <input type="radio" />Louie

            </div>
        </div>

    </div>
  )
}
