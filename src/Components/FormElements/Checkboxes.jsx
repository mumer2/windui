import React from 'react'
import CodePreview from '../General/CodePreview'

export const Checkboxes = () => {
  return (
    <div>
        <div className="checkboxes">
            <h1>Checkboxes</h1>
            <p>Checkboxes are used to let a user select one or more options of a limited number of choices. Checkboxes can turn an option on or off.</p>
        </div>

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

        <div className="checkboxes">
            <h2>Variations</h2>
            <h4>Primary Checkboxes</h4>
        </div>
        <CodePreview/>
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
  )
}
