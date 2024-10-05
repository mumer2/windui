import React from 'react';

const Quotes2 = () => {
  const testimonial = {
    quote: "Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierced.",
    author: "George Orwell",
    role: "Nineteen Eighty-Four",
  };

  return (
    <div className="testimonial-container">
      <div className="testimonial-card">
        <p className="testimonial-quote">"{testimonial.quote}"</p>
        <div className="testimonial-author">
          <div>
            <h4 className="author-name">{testimonial.author}</h4>
            <p className="author-role">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotes2;
