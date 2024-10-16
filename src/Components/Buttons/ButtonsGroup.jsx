import React from 'react'
import CodePre from '../General/CodePre'

export const ButtonsGroup = () => {
    const htmlCode = `  <div className="btngroups">
        <div className="btnsgroup1">
            <div className="btna">Years</div>
            <div className="btna">Months</div>
            <div className="btna">Days</div>
        </div>

        <div className="btnsgroup2">
            <div className="btna">Years</div>
            <div className="btna">Months</div>
            <div className="btna">Days</div>
        </div>

        <div className="btnsgroup3">
            <div className="btna">Years</div>
            <div className="btna">Months</div>
            <div className="btna">Days</div>
        </div>
        </div>
    `;
  
  const reactCode = ` import React from 'react'
import CodePre from '../General/CodePre'

export const ButtonsGroup = () => {
  <div className="btngroups">
        <div className="btnsgroup1">
            <div className="btna">Years</div>
            <div className="btna">Months</div>
            <div className="btna">Days</div>
        </div>

        <div className="btnsgroup2">
            <div className="btna">Years</div>
            <div className="btna">Months</div>
            <div className="btna">Days</div>
        </div>

        <div className="btnsgroup3">
            <div className="btna">Years</div>
            <div className="btna">Months</div>
            <div className="btna">Days</div>
        </div>
        </div>
`;
  return (
    <div>
        <div className="btnsgroup-content">
            <h1>Button Groups</h1>
            <p>Button groups help people select options, switch views, or sort elements.</p>
        </div>

        <div className="btngroups">
        <div className="btnsgroup1">
            <div className="btna">Years</div>
            <div className="btna">Months</div>
            <div className="btna">Days</div>
        </div>

        <div className="btnsgroup2">
            <div className="btna">Years</div>
            <div className="btna">Months</div>
            <div className="btna">Days</div>
        </div>

        <div className="btnsgroup3">
            <div className="btna">Years</div>
            <div className="btna">Months</div>
            <div className="btna">Days</div>
        </div>
        </div>


        <div className="btnsgroup-content">
            <h2>Variations</h2>
            <h4>Primary button groups</h4>
        </div>

        <div className="code-cont">
    <CodePre htmlCode={htmlCode} reactCode={reactCode}/>
    </div>

        <div className="btnsgroup1">
            <div className="btna">Large</div>
            <div className="btna">Large</div>
            <div className="btna">Large</div>
        </div>
        <div className="btnsgroup4 -s">
            <div className="btna">Base</div>
            <div className="btna">Base</div>
            <div className="btna">Base</div>
        </div>

        <div className="btnsgroup5">
            <div className="btna">Samll</div>
            <div className="btna">Small</div>
            <div className="btna">Small</div>
        </div>

    </div>
  )
}
