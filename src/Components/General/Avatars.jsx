import React from 'react'
import CodePreview from './CodePreview'

export const Avatars = () => {
  return (
    <div>
      <div className="avatars-content">
      <h1>Avatars</h1>
<p>An Avatar is a graphical representation of a user. The user can be represented by an image, an icon or the user initials. Avatars can provide additional information like the user status or user notifications.</p>
      </div>


      <div class="image-box-container">
    <div class="image-box">
      <div class="badge">7</div>
      <img src="Images/48.jfif" alt="" />

    </div>
    <div class="image-box">
      <div class="badge">7</div>
      <img src="Images/40.jfif" alt="" />

    </div>
    <div class="image-box">
      <div class="badge">7</div>
      <img src="Images/32.jfif" alt="" />

    </div>
    <div class="image-box">
      <div class="badge4"></div>
      <img src="Images/24.jfif" alt="" />

    </div>
  </div>

  <div className="avatars-content">
  <h1>Variations</h1>  
  <h4>Rounded avatars</h4>
  <CodePreview/>

  <div class="image-box-container">
    <div class="image-box">
      <img src="Images/1.jfif" alt="" />

    </div>
    <div class="image-box">
      <img src="Images/2.jfif" alt="" />

    </div>
    <div class="image-box">
      <img src="Images/3.jfif" alt="" />

    </div>
    <div class="image-box">
      <img src="Images/4.jfif" alt="" />
    </div>
  </div>
  <div class="image-box-container2">
    <div class="image-box">
      <img src="Images/1.jfif" alt="" />

    </div>
    <div class="image-box">
      <img src="Images/2.jfif" alt="" />

    </div>
    <div class="image-box">
      <img src="Images/3.jfif" alt="" />

    </div>
    <div class="image-box">
      <img src="Images/4.jfif" alt="" />
    </div>
  </div>

  <div class="image-box-container3">
    <div class="image-box">
      <img src="Images/1.jfif" alt="" />

    </div>
    <div class="image-box">
      <img src="Images/2.jfif" alt="" />

    </div>
    <div class="image-box">
      <img src="Images/3.jfif" alt="" />

    </div>
    <div class="image-box">
      <img src="Images/4.jfif" alt="" />
    </div>
  </div>

  </div>

  
    </div>
  )
}
