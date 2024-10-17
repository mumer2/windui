import React from 'react'
import  Slider  from './Slider'
import  CodePre  from './CodePre'


export const Carousel = () => {
  const htmlCode = `  <div className="carousel">
      <div className="carousel-track-container">
        <div
          className="carousel-track">
          <div className="carousel-slide">
            <img src="Images/carousel-image-01.jpg" alt="Cactus 1" />
          </div>
          <div className="carousel-slide">
            <img src="Images/carousel-image-02.jpg" alt="Cactus 2" />
          </div>
          <div className="carousel-slide">
            <img src="Images/carousel-image-03.jpg" alt="Cactus 3" />
          </div>
          <div className="carousel-slide">
            <img src="Images/carousel-image-04.jpg" alt="Cactus 4" />
          </div>
          <div className="carousel-slide">
            <img src="Images/carousel-image-05.jpg" alt="Cactus 5" />
          </div>
          {/* Add more slides as necessary */}
        </div>
      </div>

      {/* Navigation buttons */}
      <button className="carousel-button carousel-button-left" onClick={prevSlide}>
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      <button className="carousel-button carousel-button-right" onClick={nextSlide}>
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>

  `;

const reactCode = `import React, { useState, useEffect } from 'react';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5; // Adjust this based on the number of images
  const visibleSlides = 3; // Number of visible slides (3 in this case)

  // Calculate the total number of "slides" that can be scrolled through
  const slideCount = totalSlides - visibleSlides;

  // Automatic slide change
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % (slideCount + 1)); // +1 to include the last group
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(slideInterval);
  }, [slideCount]);

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slideCount : prevSlide - 1
    );
  };

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slideCount ? 0 : prevSlide + 1
    );
  };

  // Function to navigate to a specific slide
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="carousel">
      <div className="carousel-track-container">
        <div
          className="carousel-track">
          <div className="carousel-slide">
            <img src="Images/carousel-image-01.jpg" alt="Cactus 1" />
          </div>
          <div className="carousel-slide">
            <img src="Images/carousel-image-02.jpg" alt="Cactus 2" />
          </div>
          <div className="carousel-slide">
            <img src="Images/carousel-image-03.jpg" alt="Cactus 3" />
          </div>
          <div className="carousel-slide">
            <img src="Images/carousel-image-04.jpg" alt="Cactus 4" />
          </div>
          <div className="carousel-slide">
            <img src="Images/carousel-image-05.jpg" alt="Cactus 5" />
          </div>
          {/* Add more slides as necessary */}
        </div>
      </div>

      {/* Navigation buttons */}
      <button className="carousel-button carousel-button-left" onClick={prevSlide}>
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      <button className="carousel-button carousel-button-right" onClick={nextSlide}>
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default Slider;

`;

const cssCode =`.carousels{
  margin-top: 12%;
  margin-left: 2%;
  color: gray;
}
.carousels h1{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 600;
}
.carousels-content{
  margin-top: 12%;
  margin-left: 2%;
}
.carousels-content h2{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.8rem;
  line-height: 2.25rem;
  font-weight: 400;
}
.carousels-content h3{
  font-size: 16px;
  color: rgb(71 ,85, 105);
  line-height: 2.25rem;
  font-weight: 600;
}



/* General styling for the carousel */
.carousel {
  position: relative;
  max-width: 800px;
  padding: 50px;
  margin-top: 10%;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

/* Carousel Track (slides wrapper) */
.carousel-track-container {
  overflow: hidden;
  position: relative;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

/* Each individual slide */
.carousel-slide {
  min-width: 33.33%; /* Show 3 slides at a time */
  transition: transform 0.3s ease;
}

.carousel-slide img {
  width: 100%;
  height: auto;
  border-radius: 12px;
}

/* Navigation buttons */
.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.8);
  border: none;
  font-size: 24px;
  padding: 10px;
  cursor: pointer;
  border-radius: 50%;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}

.carousel-button-left {
  left: 10px;
}

.carousel-button-right {
  right: 10px;
}

/* Dots navigation */
.carousel-nav {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.carousel-indicator {
  background-color: #ccc;
  border: none;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  cursor: pointer;
}

.carousel-indicator.active {
  background-color: #333;
}

/* Responsive design */
@media (max-width: 768px) {
  .carousel-slide {
    min-width: 100%; /* On small screens, show one image at a time */
  }

  .carousel-button {
    font-size: 20px;
    padding: 8px;
  }
}`;
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

        <div className="code-cont">
    <CodePre htmlCode={htmlCode} reactCode={reactCode} cssCode={cssCode}/>
    </div>

        <Slider/>
    </div>
  )
}
