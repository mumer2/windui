import React from 'react'
import Slider2 from './Slider2'
import CodePreview from './CodePreview'

export const SlidersN = () => {
  return (
    <div>
        <div className="slider-n">
            <h1>Sliders</h1>
            <p>A slider is a design element used to display images and videos on your website. It works like a slideshow, showing one image or video at a time. The content changes after a few seconds or when the visitor clicks to view the next one.</p>
        </div>
        <Slider2/>

        <div className="slider-n">
            <h2>Variations</h2>
            <h4>Controls Inside </h4>
        </div>
        <CodePreview/>

        <Slider2/>
    </div>
  )
}
