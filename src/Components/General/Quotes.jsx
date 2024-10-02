import React from 'react';

const Quotes = () => {
  const testimonial = {
    quote: "Wind-ui, is probably one of the best libraries I've came across. Good looking, easy to use and above all super accessible.",
    author: "Bill Gates",
    role: "CEO, Microsoft",
    image: "Images/feed3.jfif",
  };

  return (
    <div className="testimonial-container">
      <div className="testimonial-card">
        <p className="testimonial-quote">"{testimonial.quote}"</p>
        <div class="star-rating1">
        <span class="star1 filled1"><i class="fa-solid fa-star"></i></span>
        <span class="star1 filled1"><i class="fa-solid fa-star"></i></span>
        <span class="star1 filled1"><i class="fa-solid fa-star"></i></span>
        <span class="star1 filled1"><i class="fa-solid fa-star"></i></span>
        <span class="star1 filled1"><i class="fa-regular fa-star"></i></span>
    </div>
        <div className="testimonial-author">
          <img
            src={testimonial.image}
            alt={testimonial.author}
            className="testimonial-image"
          />
          <div>
            <h4 className="author-name">{testimonial.author}</h4>
            <p className="author-role">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
