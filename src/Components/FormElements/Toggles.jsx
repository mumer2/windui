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
    <CodePre htmlCode={htmlCode} reactCode={reactCode}/>
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
