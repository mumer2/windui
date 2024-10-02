import React from 'react'
import Accordion from './Accordion'
import CodePreview from './CodePreview'
import TailwindDrops from './TailwindDrops'

export const Accordians = () => {
  return (
    <div>
         <div className="accordions-container">
      {/* Accordion content goes here */}
      <h1>Accordions</h1>
            <p>The accordion component is a collection of vertically collapsing header and body elements that can be used to show and hide information.</p>
    </div>
    <Accordion/>
    <div className="accordions-container">
      <h1>Variations</h1>

      <h4>Basic Accordion</h4>
    <CodePreview/>

    <TailwindDrops/>
    </div>
    </div>
  )
}
