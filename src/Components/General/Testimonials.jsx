import React from 'react'
import Quotes from './Quotes'
import CodePre from './CodePre'
import Quotes2 from './Quotes2'

export const Testimonials = () => {
  const htmlCode = `  <div className="testimonial-container">
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

    ------------------CSS-------------------

    
/* ******************* */
    /* Testimonials*/
/* ******************* */

.testimonials{
  margin-top: 15%;
  margin-left: 2%;
  color: rgb(104, 102, 102);
}
.testimonials h1{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 600;
}
.testimonials h2{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.8rem;
  line-height: 2.25rem;
  font-weight: 400;
}
.testimonials h4{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  line-height: 2.25rem;
  font-weight: 600;
}
.testimonial-cont{
  border: 1px solid rgb(227, 227, 227);
  border-radius: 10px;
  margin: 20px;
  padding: 60px;
}
.testimonial-container {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.testimonial-card {
  text-align: center;
  padding: 20px;
}

.testimonial-quote {
  font-size: 20px;
  line-height: 1.5;
  color: #334155;
  margin-bottom: 20px;
}

.testimonial-author {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-top: 10px;
}

.testimonial-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}

.author-name {
  font-size: 16px;
  font-weight: bold;
  color: #07a87a;
  text-transform: uppercase;
}

.author-role {
  font-size: 16px;
  color: #64748b;
  color: #19a580;
  margin-left: 20px;

}



/* Stars */

.star-rating1 {
  display: flex;
  align-items: center;
  margin-left: 40%;
}

.star1 {
  font-size: 24px;
  color: #e5e7eb; /* Light gray for empty stars */
  margin-right: 4px; /* Space between stars */
}

.star1.filled1 {
  color: #f59e0b; /* Gold color for filled stars */
}
  `;

const reactCode = `import React from 'react';

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

-----------------CSS------------------


/* ******************* */
    /* Testimonials*/
/* ******************* */

.testimonials{
  margin-top: 15%;
  margin-left: 2%;
  color: rgb(104, 102, 102);
}
.testimonials h1{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 600;
}
.testimonials h2{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.8rem;
  line-height: 2.25rem;
  font-weight: 400;
}
.testimonials h4{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  line-height: 2.25rem;
  font-weight: 600;
}
.testimonial-cont{
  border: 1px solid rgb(227, 227, 227);
  border-radius: 10px;
  margin: 20px;
  padding: 60px;
}
.testimonial-container {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.testimonial-card {
  text-align: center;
  padding: 20px;
}

.testimonial-quote {
  font-size: 20px;
  line-height: 1.5;
  color: #334155;
  margin-bottom: 20px;
}

.testimonial-author {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-top: 10px;
}

.testimonial-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}

.author-name {
  font-size: 16px;
  font-weight: bold;
  color: #07a87a;
  text-transform: uppercase;
}

.author-role {
  font-size: 16px;
  color: #64748b;
  color: #19a580;
  margin-left: 20px;

}



/* Stars */

.star-rating1 {
  display: flex;
  align-items: center;
  margin-left: 40%;
}

.star1 {
  font-size: 24px;
  color: #e5e7eb; /* Light gray for empty stars */
  margin-right: 4px; /* Space between stars */
}

.star1.filled1 {
  color: #f59e0b; /* Gold color for filled stars */
}

`;
  return (
    <div>
      <div className="testimonials">
        <h1>Testimonials</h1>
        <p>A testimonial is an honest endorsement of your product or service that usually comes from a customer, colleague, or peer who has benefited from or experienced success as a result of the work you did for them.
        </p>
      </div>

      <div className="testimonial-cont">
        <Quotes />

      </div>

      <div className="testimonials">
        <h2>Variations</h2>
        <h4>Simple Basic</h4>
      </div>

      <div className="code-cont">
    <CodePre htmlCode={htmlCode} reactCode={reactCode}/>
    </div>
      <div className="testimonial-cont">
        <Quotes2 />

      </div>
    </div>
  )
}
