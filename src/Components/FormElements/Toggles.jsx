import React from 'react'
import CodePre from '../General/CodePre'

export const Toggles = () => {
    const htmlCode = `  <div className="togglessection">
                <div class="toggle-container">
                    <label class="toggle-label">
                        <input type="checkbox" class="toggle-input" checked />
                        <span class="toggle-slider"></span>
                        Primary
                    </label>
                    <label class="toggle-label">
                        <input type="checkbox" class="toggle-input" />
                        <span class="toggle-slider2"></span>
                        Secondary
                    </label>
                </div>

            </div>
    `;
  
  const reactCode = ` import React from 'react'
import CodePre from '../General/CodePre'

export const Toggles = () => {
    return(
  <div className="togglessection">
                <div class="toggle-container">
                    <label class="toggle-label">
                        <input type="checkbox" class="toggle-input" checked />
                        <span class="toggle-slider"></span>
                        Primary
                    </label>
                    <label class="toggle-label">
                        <input type="checkbox" class="toggle-input" />
                        <span class="toggle-slider2"></span>
                        Secondary
                    </label>
                </div>

            </div>
                )
}
`;

const cssCode =`.toggles{
  margin-top: 15%;
  margin-left: 2%;
  color: rgb(101, 96, 96);
  font-size: 18px;
}
.toggles h1{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 600;
}
.toggles h2{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.8rem;
  line-height: 2.25rem;
  font-weight: 400;
}
.toggles h4{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  line-height: 2.25rem;
  font-weight: 600;
}
.togglessection{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2%;
  border: 1px solid rgb(227, 227, 227);
  border-radius: 10px;
  padding: 60px;
  margin: 20px;
}

.togglemenus{
  border: 1px solid rgb(227, 227, 227);
border-radius: 10px;
padding: 40px;
margin: 20px;
}

.toggle-container {
  display: flex;
  align-items: center;
  margin-top: 20px;
  gap: 30px;
}

.toggle-label {
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  color: rgb(100 ,116, 139); /* Darker gray */
}

.toggle-input {
  display: none; /* Hide the default checkbox */
}

.toggle-slider {
  width: 48px;
  height: 24px;
  background-color: #A7F3D0; /* Light gray */
  border-radius: 20px;
  border: 0px solid #E5E7Eb;
  position: relative;
  transition: background-color 0.2s ease;
  margin-right: 10px;
}
.toggle-slider2 {
  width: 48px;
  height: 24px;
  background-color: #A7F3D0; /* Light gray */
  border-radius: 20px;
  border: 0px solid #E5E7EB;
  position: relative;
  transition: background-color 0.2s ease;
  margin-right: 10px;
}
.toggle-slider3 {
  width: 35px;
  height: 16px;
  background-color: #A7F3D0; 
  border-radius: 10px;
  position: relative;
  transition: background-color 0.2s ease;
  margin-right: 10px;
}

.toggle-slider:before {
  content: "";
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #018156;
  border: 1px solid #018156;
  position: absolute;
  top: -1px;
  left: 0px;
  transition: transform 0.2s ease;
}
.toggle-slider2:before {
  content: "";
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: white;
  border: 2px solid #02b583;
  position: absolute;
  top: -2px;
  left: -2px;
  transition: transform 0.2s ease;
}
.toggle-slider3:before {
  content: "";
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #09c284;
  border: 1px solid #09c284;
  position: absolute;
  top: -1px;
  left: 0px;
  transition: transform 0.2s ease;
}

.toggle-input:checked + .toggle-slider {
  background-color: #34D399; /* Blue when checked */
  border: 1px solid #34D399;
}

.toggle-input:checked + .toggle-slider:before {
  transform: translateX(100%); /* Move to the right */
}
.toggle-input:checked + .toggle-slider2 {
  background-color: #A7F3D0; /* Blue when checked */
  border: 2px solid #02b583;
}

.toggle-input:checked + .toggle-slider2:before {
  transform: translateX(100%); /* Move to the right */
}

.toggle-input:checked + .toggle-slider3 {
  background-color: #A7F3D0; /* Blue when checked */
}

.toggle-input:checked + .toggle-slider3:before {
  transform: translateX(100%); /* Move to the right */
}

.toggle-label-m {
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  color: #374151; /* Darker gray */
}

.toggle-input {
  display: none; /* Hide the default checkbox */
}

.toggle-slider-m {
  width: 34px;
  height: 16px;
  background-color: #d1d5db; /* Light gray */
  border-radius: 10px;
  position: relative;
  transition: background-color 0.2s ease;
  margin-right: 10px;
}
.toggle-slider-m:before {
  content: "";
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: gray;
  border: 1px solid #018156;
  position: absolute;
  top: -1px;
  left: 0px;
  transition: transform 0.2s ease;
}
.toggle-input:checked + .toggle-slider-m {
  background-color: #34D399; /* Blue when checked */
  border: 1px solid #34D399;
}

.toggle-input:checked + .toggle-slider-m:before {
  transform: translateX(100%); /* Move to the right */
}


.toggle-label-m2 {
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  color: #374151; /* Darker gray */
}

.toggle-input {
  display: none; /* Hide the default checkbox */
}

.toggle-slider-m2 {
  width: 38px;
  height: 20px;
  background-color: #d1d5db; /* Light gray */
  border-radius: 10px;
  position: relative;
  transition: background-color 0.2s ease;
  margin-right: 10px;
}
.toggle-slider-m2:before {
  content: "";
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: gray;
  border: 1px solid #018156;
  position: absolute;
  top: -1px;
  left: 0px;
  transition: transform 0.2s ease;
}
.toggle-input:checked + .toggle-slider-m2 {
  background-color: #34D399; /* Blue when checked */
  border: 1px solid #34D399;
}

.toggle-input:checked + .toggle-slider-m2:before {
  transform: translateX(100%); /* Move to the right */
}

/* Mobile responsiveness */
@media (max-width: 600px) {
  .toggle-container {
      flex-direction: column;
      align-items: flex-start;
  }
.togglemenus{
  flex-direction: column;
  align-items: flex-start;
}
  .toggle-label {
      font-size: 14px;
  }
}
.togglemenus{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  line-height: 80px;
}

.toggle-input:disabled + .toggle-slider {
  background-color: #e5e7eb; /* Light gray for disabled state */
  cursor: not-allowed; /* Indicate that it's not interactive */
}

.toggle-input:disabled + .toggle-slider:before {
  background-color: #a1a1a1; /* Darker gray for the slider knob */
}
.toggle-input:disabled + .toggle-slider-m {
  background-color: #e5e7eb; /* Light gray for disabled state */
  cursor: not-allowed; /* Indicate that it's not interactive */
  color: #e5e7eb;
}

.toggle-input:disabled + .toggle-slider-m:before {
  background-color: #a1a1a1; /* Darker gray for the slider knob */
}
.toggle-input:disabled + .toggle-slider-m2 {
  background-color: #e5e7eb; /* Light gray for disabled state */
  cursor: not-allowed; /* Indicate that it's not interactive */
  color: #e5e7eb;
}

.toggle-input:disabled + .toggle-slider-m2:before {
  background-color: #a1a1a1; /* Darker gray for the slider knob */
}`;

    return (
        <div>
            <div className="toggles">
                <h1>Toggles</h1>
                <p>Switches - toggle the state of a single setting on or off. They are the preferred way to adjust settings on mobile.</p>
            </div>


            <div className="togglessection">
                <div class="toggle-container">
                    <label class="toggle-label">
                        <input type="checkbox" class="toggle-input" checked />
                        <span class="toggle-slider"></span>
                        Primary
                    </label>
                    <label class="toggle-label">
                        <input type="checkbox" class="toggle-input" />
                        <span class="toggle-slider2"></span>
                        Secondary
                    </label>
                </div>

            </div>

            <div className="toggles">
                <h2>Variations</h2>
                <h4>Primary Toggles</h4>
            </div>

            <div className="code-cont">
    <CodePre htmlCode={htmlCode} reactCode={reactCode} cssCode={cssCode}/>
    </div>
  

            <div className="togglemenus">
                <div className="menu1">
                    <p>Base size:</p>
                    <label class="toggle-label-m">
                        <input type="checkbox" class="toggle-input" />
                        <span class="toggle-slider-m"></span>
                        Primary basic
                    </label>


                    <div class="toggle-container">
                        <label class="toggle-label-m">
                            <input type="checkbox" class="toggle-input" disabled />
                            <span class="toggle-slider-m"></span>
                            Primary disabled
                        </label>
                    </div>

                    <label class="toggle-label-m" style={{ marginTop: '13px' }}>
                        <input type="checkbox" class="toggle-input" />
                        <span class="toggle-slider-m"></span>
                        Primary with helper text
                    </label>


                </div>
                <div className="menu1">
                    <p>Large size:</p>
                    <label class="toggle-label-m2">
                        <input type="checkbox" class="toggle-input" />
                        <span class="toggle-slider-m2"></span>
                        Primary basic
                    </label>

                    <div class="toggle-container">
                        <label class="toggle-label-m2">
                            <input type="checkbox" class="toggle-input" disabled />
                            <span class="toggle-slider-m2"></span>
                            Primary disabled
                        </label>
                    </div>

                    <label class="toggle-label-m2" style={{ marginTop: '13px' }}>
                        <input type="checkbox" class="toggle-input" />
                        <span class="toggle-slider-m2"></span>
                        Primary with helper text
                    </label>

                </div>
            </div>
        </div>
    )
}
