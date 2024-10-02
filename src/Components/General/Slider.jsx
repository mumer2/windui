import React, { useState, useEffect } from 'react';

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
          className="carousel-track"
          style={{
            transform: `translateX(-${currentSlide * 33.33}%)`, // Move by 33.33% per slide
          }}
        >
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

      {/* Navigation dots */}
      <div className="carousel-nav">
        {[...Array(slideCount + 1)].map((_, index) => (
          <button
            key={index}
            className={`carousel-indicator ${currentSlide === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
