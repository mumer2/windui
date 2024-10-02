import React from 'react'
import CodePreview from './CodePreview'

export const Cards = () => {
  return (
    <div>
        <div className="cards">
            <h1>Cards</h1>
            <p>A card can be used to display content related to a single subject. The content can consist of multiple elements of varying types and sizes.</p>
        </div>

        {/* <div className='card-section'>
        <div className="card-image">
            <img src="Images/card-img.jpg" alt="" />
        </div>
        <div className="card-caption">

        </div>
        </div> */}


<div class="profile-section">
  {/* <!-- Left side image --> */}
  <div class="profile-image">
    <img src="Images/card-img.jpg" alt="Left Side Image" />
  </div>

  {/* <!-- Right side profile card --> */}
  <div class="profile-card">
    <div class="profile-header">
      <img src="Images/card-icon.jfif" alt="Profile Icon" class="profile-icon" />
      <div class="profile-info">
        <h2 class="profile-name">A day under the sun</h2>
        <p class="profile-designation">By Sue, jun 3 2023</p>
      </div>
    </div>
    <div class="profile-caption">
      <p>
      After a walk through history, there is nothing left to do but admire the hypnotizing landscapes that exist in every direction. From vast deserts to rainbow mountains, and everything in between.
      </p>
    </div>
  </div>
</div>


<div className="card-content">
    <h2>Variations</h2>
    <h4>Basic Card</h4>
    <CodePreview/>

    <div className='captin'>
        <div className="text-captn">
            <h3>Something to remember</h3>
            <p>All components can be copied and pasted and easily implemented in your tailwind css projects. You can either copy all the components in the preview window from the copy icon on the top right corner in the code blocks or
                 just hover and click on the one component you need and paste it on your project.</p>
        </div>
    </div>
</div>

    </div>
  )
}
