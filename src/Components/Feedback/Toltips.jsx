import React from 'react'
import CodePre from '../General/CodePre'

export const Toltips = () => {
  const htmlCode = ` <div className="tooltip-cont">

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
  `;

const reactCode = `import React from 'react'
import CodePre from '../General/CodePre'

export const Toltips = () => {
  return(
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
      )
}

`;

const cssCode = `.toltips {
  margin-top: 15%;
  margin-left: 2%;
  color: rgb(113, 103, 103);
}
.toltips p{
  font-size: 18px;
  color: rgb(100 ,116, 139);
}
.toltips h1 {
  font-size: 18px;
  color: rgb(71, 85, 105);
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 600;
}

.toltips h2 {
  font-size: 18px;
  color: rgb(71, 85, 105);
  font-size: 1.8rem;
  line-height: 2.25rem;
  font-weight: 400;
}

.toltips h4 {
  font-size: 18px;
  color: rgb(71, 85, 105);
  line-height: 2.25rem;
  font-weight: 600;
}
.tooltip-cont{
  border: 1px solid rgb(227, 227, 227);
  border-radius: 10px;
  margin: 20px;
  padding: 30px;
}
/* Tooltip container */
.tooltip-container {
  display: flex;
  justify-content: center;
  margin-top: 2%;
  gap: 10px;

}

/* Tooltip item */
.tooltip-item {
  position: relative;
  cursor: pointer;
  padding: 10px;
  background-color: none;
  color: rgb(100 ,116, 139);
  border-radius: 4px;
  text-align: center;
}

/* Tooltip text */
.tooltip-text {
  visibility: hidden;
  position: absolute;
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 10px;
  width: 150px;
  border-radius: 4px;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

/* Show tooltip on hover */
.tooltip-item:hover .tooltip-text {
  visibility: visible;
  opacity: 1;
}

/* Tooltip positioning */
.tooltip-text-top {
  bottom: 150%;
  left: 50%;
  transform: translateX(-50%);
}

.tooltip-text-right {
  top: 50%;
  left: 150%;
  transform: translateY(-50%);
}

.tooltip-text-bottom {
  top: 150%;
  left: 50%;
  transform: translateX(-50%);
}

.tooltip-text-left {
  top: 50%;
  right: 150%;
  transform: translateY(-50%);
}

/* Responsive adjustments */
@media screen and (max-width: 768px) {
  .tooltip-container {
    flex-direction: column; /* Change to column layout */
    align-items: center; /* Center items in column */
    gap: 20px; /* Increase gap for clarity in column layout */
  }

  .tooltip-text {
    width: 120px; /* Adjust width */
    font-size: 0.875rem;
    padding: 8px;
  }
}

/* For small screens (phones) */
@media screen and (max-width: 480px) {
  .tooltip-container {
    flex-direction: column; /* Ensure column layout on smaller screens */
    align-items: center; /* Center items */
  }

  .tooltip-text {
    width: 100px; /* Reduce width */
    font-size: 0.75rem;
    padding: 6px;
  }
}`;

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
        <div className="code-cont">
    <CodePre htmlCode={htmlCode} reactCode={reactCode} cssCode={cssCode}/>
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

    </div>
  )
}
