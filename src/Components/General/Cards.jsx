import React from 'react'
import CodePreview from './CodePreview'

export const Cards = () => {
  return (
    <div>
      <div className="cards">
        <h1>Cards</h1>
        <p>A card can be used to display content related to a single subject. The content can consist of multiple elements of varying types and sizes.</p>
      </div>
      <div className="card-main">
      <div class="newclass-profile-section">
        {/* <!-- Left side image --> */}
        <div class="newclass-profile-image">
          <img src="Images/card-img.jpg" alt="Left Side Image" />
        </div>

        {/* <!-- Right side profile card --> */}
        <div class="newclass-profile-card">
          <div class="newclass-profile-header">
            <img src="Images/card-icon.jfif" alt="Profile Icon" class="newclass-profile-icon" />
            <div class="newclass-profile-info">
              <h2 class="newclass-profile-name">A day under the sun</h2>
              <p class="newclass-profile-designation">By Sue, Jun 3 2023</p>
            </div>
          </div>
          <div class="newclass-profile-caption">
            <p>
              After a walk through history, there is nothing left to do but admire the hypnotizing landscapes that exist in every direction. From vast deserts to rainbow mountains, and everything in between.
            </p>
          </div>
        </div>
      </div>

      </div>

      <div className="card-content">
        <h2>Variations</h2>
        <h4>Basic Card</h4>
        <CodePreview />

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
