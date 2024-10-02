import React from 'react'
import  Slider  from './Slider'
import  CodePreview  from './CodePreview'


export const Carousel = () => {
  return (
    <div>
        <div className="carousels">
            <h1>Carousels</h1>
            <p>A carousel is a design element used to display images and videos on your website. It works like a slideshow, showing more than one image or video at a time. The content changes after a few seconds or when the visitor clicks to view the next one.</p>
        </div>

        <Slider/>

        <div className='carousels-content'>
          <h2>Variations</h2>
          <h3>Carousel with controls inside</h3>
        </div>

        <CodePreview/>
        <Slider/>
    </div>
  )
}
