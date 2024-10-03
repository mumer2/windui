import React from 'react'
import Date from './Date'
import CodePreview from '../General/CodePreview'

export const Datepickers = () => {
  return (
    <div>
        <div className="datepickers">
            <h1>Datepickers</h1>
            <p>The Date Picker component lets users select a date.</p>
        </div>

        <Date/>

        <div className="datepickers">
            <h2>Variations</h2>
            <h4>Basic Datepicker Input</h4>
        </div>
        <CodePreview/>

    <div className="date-sec">
        <p>Basic Size</p>
          <Date/>
        <p>Large Size</p>
          <Date/>

     </div>
</div>
  )
}
