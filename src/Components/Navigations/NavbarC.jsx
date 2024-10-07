import React from 'react'
import Navbar1 from './Navbar1'
import CodePreview from '../General/CodePreview'
import Nav2 from './Nav2'

export const NavbarC = () => {
  return (
    <div>
        <div className="navbarc">
            <h1>Navigation Bars</h1>
            <p>Navigation bars offer a persistent and convenient way to switch between primary destinations in an app. A navigation bar implementation is considered one of the key points of Web design and usability.</p>
        </div>


        <Navbar1/>

        <div className="navbarc">
            <h2>Variations</h2>
            <h4>Basic Navigation</h4>
        </div>

        <CodePreview/>

        <Nav2/>
    </div>
  )
}
