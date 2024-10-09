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

      <div className="date-cont">
        <Date />
      </div>

      <div className="datepickers">
        <h2>Variations</h2>
        <h4>Basic Datepicker Input</h4>
      </div>
      <CodePreview />

      <div className="date-sec">
        <div className="d1-s">
          <b>Basic Size</b>
          <Date />
        </div>
        <div className="d1-s">
          <b>Large Size</b>
          <Date />
        </div>

      </div>
    </div>
  )
}
