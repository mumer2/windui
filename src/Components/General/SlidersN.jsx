import React from 'react'
import Slider2 from './Slider2'
import CodePre from './CodePre'

export const SlidersN = () => {
  const htmlCode = ` <div className="carousel2">
        <div className="carousel-track-container2">
          <div
            className="carousel-track2"
          >
            <div className="carousel-slide2">
              <img src="Images/carousel-image-01.jpg" alt="Cactus 1" />
            </div>
            <div className="carousel-slide2">
              <img src="Images/carousel-image-02.jpg" alt="Cactus 2" />
            </div>
            <div className="carousel-slide2">
              <img src="Images/carousel-image-03.jpg" alt="Cactus 3" />
            </div>
            <div className="carousel-slide2">
              <img src="Images/carousel-image-04.jpg" alt="Cactus 4" />
            </div>
            <div className="carousel-slide2">
              <img src="Images/carousel-image-05.jpg" alt="Cactus 5" />
            </div>
            {/* Add more slides as necessary */}
          </div>
        </div>

        {/* Navigation buttons */}
        <button className="carousel-button carousel-button-left2" onClick={prevSlide}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button className="carousel-button carousel-button-right2" onClick={nextSlide}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>

  `;

const reactCode = `import React, { useState, useEffect } from 'react';

const Slider2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5; // Adjust this based on the number of images

  // Automatic slide change
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides); // Cycle through all slides
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(slideInterval);
  }, [totalSlides]);

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? totalSlides - 1 : prevSlide - 1
    );
  };

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === totalSlides - 1 ? 0 : prevSlide + 1
    );
  };

  // Function to navigate to a specific slide
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <div className="carousel2">
        <div className="carousel-track-container2">
          <div
            className="carousel-track2"
          >
            <div className="carousel-slide2">
              <img src="Images/carousel-image-01.jpg" alt="Cactus 1" />
            </div>
            <div className="carousel-slide2">
              <img src="Images/carousel-image-02.jpg" alt="Cactus 2" />
            </div>
            <div className="carousel-slide2">
              <img src="Images/carousel-image-03.jpg" alt="Cactus 3" />
            </div>
            <div className="carousel-slide2">
              <img src="Images/carousel-image-04.jpg" alt="Cactus 4" />
            </div>
            <div className="carousel-slide2">
              <img src="Images/carousel-image-05.jpg" alt="Cactus 5" />
            </div>
            {/* Add more slides as necessary */}
          </div>
        </div>

        {/* Navigation buttons */}
        <button className="carousel-button carousel-button-left2" onClick={prevSlide}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button className="carousel-button carousel-button-right2" onClick={nextSlide}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </>
  );
};

export default Slider2;
`;

const cssCode = `.slider-n{
  margin-top: 15%;
  margin-left: 2%;
  color:rgb(120, 114, 114);
}
.slider-n h1{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 600;
}
.slider-n h2{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.8rem;
  line-height: 2.25rem;
  font-weight: 500;
}
.slider-n h4{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  line-height: 2.25rem;
  font-weight: 600;
}


/* Slider2 */


.carousel2 {
  position: relative;
  overflow: hidden;
  max-width: 700px; /* Adjust as needed */
  margin: 10% auto;
  
}

.carousel-track-container2 {
  width: 100%;
  overflow: hidden;
}

.carousel-track2 {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-slide2 {
  min-width: 100%; /* Ensure only one slide is shown at a time */
  transition: transform 0.5s ease-in-out;
}

.carousel-slide2 img {
  width: 100%;
  height: auto;
  display: block;
}

.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: white;
  border: 1px solid black;
  color: rgb(0, 0, 0);
  padding: 10px;
  cursor: pointer;
  z-index: 2;
}

.carousel-button-left2 {
  left: 10px;
  background-color: white;
  border: 1px solid black;
  color: #000;
}

.carousel-button-right2 {
  right: 10px;
  background-color: white;
  border: 1px solid black;
  color:  black;
}

.carousel-nav2 {
  text-align: center;
  margin-top: 10px;
}

.carousel-indicator {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 5px;
  background-color: #e0e0e0;
  border-radius: 50%;
  border: none;
  cursor: pointer;
}

.carousel-indicator.active {
  background-color: #cfccc6; /* Highlight active slide */
}`;
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
        <div className="code-cont">
    <CodePre htmlCode={htmlCode} reactCode={reactCode} cssCode={cssCode}/>
    </div>
  

        <Slider2/>
    </div>
  )
}
