import React from 'react'
import CodePreview from './CodePreview'

export const Fabs = () => {
    
  return (
    <div>
        <div className="fabs">
            <h1>Fabs</h1>
            <p>A Floating Action Button (FAB) is a high-emphasis button that lets the user perform a primary action.</p>
        </div>
<div className="cont-fab">


        <div class="container">
  <div class="fab-container">
    <button class="fab">+</button>
    <div class="fab-menu">
    <button class="fab-item"><i class="fa-solid fa-square-share-nodes"></i></button>
    <button class="fab-item"><i class="fa-solid fa-camera"></i></button>
    <button class="fab-item"><i class="fa-regular fa-copy"></i></button>
    <button class="fab-item"><i class="fa-regular fa-pen-to-square"></i></button>
    </div>
  </div>
</div>
</div>

        <div className="fabs">
            <h2>Variations</h2>
            <h4>Basic floating action buttons, left and right sided</h4>
        </div>

        <CodePreview/>
<div className="cont-fab">

        <div class="container">
  <div class="fab-container">
    <button class="fab">+</button>
    <div class="fab-menu">
    <button class="fab-item"><i class="fa-solid fa-square-share-nodes"></i></button>
    <button class="fab-item"><i class="fa-solid fa-camera"></i></button>
    <button class="fab-item"><i class="fa-regular fa-copy"></i></button>
    <button class="fab-item"><i class="fa-regular fa-pen-to-square"></i></button>
    </div>
  </div>
</div>
</div>

    </div>
  )
}
