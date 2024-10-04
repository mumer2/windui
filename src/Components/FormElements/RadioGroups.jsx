import React from 'react'
import CodePreview from '../General/CodePreview'

export const RadioGroups = () => {
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

        <CodePreview/>
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
