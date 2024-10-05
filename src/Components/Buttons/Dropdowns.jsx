import React from 'react'
import CodePreview from '../General/CodePreview'
import Dropbutton from './Dropbutton'

export const Dropdowns = () => {
  return (
    <div>
        <div className="dropdowns">
            <h1>Dropdowns</h1>
            <p>Menus allow users to make a selection from multiple options. They are less prominent and take up less space than selection controls, such as a set of radio buttons.</p>
        </div>


        <div className="dropdown-container open">
        <div className="dropdown-menu">
            <div className="dropbtn">
                 Choose one <i class="fa-solid fa-caret-down"></i>
            </div>
        </div>
            <ul className="dropdown-menu">
                <li className="dropdown-item actv"><b><i class="fa-solid fa-gauge"></i>Dashboard</b><br/>
                Quick overview of all basic metrics and settings
                </li>
                <li className="dropdown-item"><b><i class="fa-solid fa-arrow-trend-down"></i>Matrics And analytics</b><br/>
                Quick overview of all basic metrics and settings
                </li><li className="dropdown-item"><b><i class="fa-solid fa-filter"></i>Multi-Cgannel Funnels Ove...</b><br/>
                Quick overview of all basic metrics and settings
                </li><li className="dropdown-item"><b><i class="fa-regular fa-user"></i>User Settings</b><br/>
                Quick overview of all basic metrics and settings
                </li>
                <li className="dropdown-item"><b><i class="fa-solid fa-gear"></i>User Profile</b><br/>
                Quick overview of all basic metrics and settings
                </li>
            </ul>
        </div>

        <div className="dropdowns">
            <h2>Variations</h2>
            <h4>Basic Dropdown</h4>
        </div>
            <CodePreview/>     
        <div className="dropbtnuniq">
            <Dropbutton/>

        </div>
    </div>
  )
}
