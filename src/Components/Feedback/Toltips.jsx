import React from 'react'
import CodePreview from '../General/CodePreview'

export const Toltips = () => {
  return (
    <div>
        <div className="toltips">
            <h1>Toltip</h1>
            <p>A tooltip is a popup that displays information related to an element when the mouse hovers over it. It after a small delay and disappears on the mouse out.</p>
        </div>

<div className="tooltip-cont">

<div className="tooltip-container">
      <div className="tooltip-item tooltip-top">
        Top
        <span className="tooltip-text tooltip-text-top">Thanks for Hovering! I'm a top toltip</span>
      </div>
      <div className="tooltip-item tooltip-right">
        Right
        <span className="tooltip-text tooltip-text-right">Thanks for Hovering! I'm a right toltip</span>
      </div>
      <div className="tooltip-item tooltip-bottom">
        Bottom
        <span className="tooltip-text tooltip-text-bottom">Thanks for Hovering! I'm a bottom toltip</span>
      </div>
      <div className="tooltip-item tooltip-left">
        Left
        <span className="tooltip-text tooltip-text-left">Thanks for Hovering! I'm a left toltip</span>
      </div>
    </div>
    </div>

    <div className="toltips">
            <h2>Variations</h2>
            <h4>Base Sized Tooltip</h4>
            <p>The base size tooltip uses bigger text and internal padding.</p>
        </div>
<CodePreview/>
<div className="tooltip-cont">

        <div className="tooltip-container">
      <div className="tooltip-item tooltip-top">
        Top
        <span className="tooltip-text tooltip-text-top">Thanks for Hovering! I'm a top toltip</span>
      </div>
      <div className="tooltip-item tooltip-right">
        Right
        <span className="tooltip-text tooltip-text-right">Thanks for Hovering! I'm a right toltip</span>
      </div>
      <div className="tooltip-item tooltip-bottom">
        Bottom
        <span className="tooltip-text tooltip-text-bottom">Thanks for Hovering! I'm a bottom toltip</span>
      </div>
      <div className="tooltip-item tooltip-left">
        Left
        <span className="tooltip-text tooltip-text-left">Thanks for Hovering! I'm a left toltip</span>
      </div>
    </div>
</div>

    </div>
  )
}
