import React, { useState, useEffect } from 'react';

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
            style={{
              transform: `translateX(-${currentSlide * 100}%)`, // Move by 100% per slide
            }}
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

        {/* Navigation dots */}
        <div className="carousel-nav2">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              className={`carousel-indicator ${currentSlide === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Slider2;
