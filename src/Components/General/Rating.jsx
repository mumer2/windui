import React from 'react'
import StarRating from './StarRating'
import Stars from './Stars'
import CodePre from './CodePre'


export const Rating = () => {
  const htmlCode = ` <div className="rating-section">
      <div className="rating-summary">
      <h4>Customer reviews</h4>

        <div className="stars">
          {[...Array(5)].map((_, index) => (
            <span key={index} className={index < Math.floor(averageRating) ? 'filled-star' : 'empty-star'}>
              <i class="fa-solid fa-star"></i>
            </span>
          ))}
          <span className="rating-score">{averageRating} out of 5</span>
        </div>
        <p>based on {totalRatings} user ratings</p>
      </div>
      <div className="rating-breakdown">
        {ratings.map((count, index) => (
          <div className="rating-bar" key={index}>
            <span>{5 - index} star</span>
      
            <span>{count}</span>
          </div>
        ))}
      </div>
    </div>

  `;

const reactCode = `import React from 'react';

const StarRating = () => {
  const ratings = [112, 17, 12, 2, 4];
  const totalRatings = ratings.reduce((acc, val) => acc + val, 0);
  const averageRating = (ratings.reduce((acc, val, idx) => acc + val * (5 - idx), 0) / totalRatings).toFixed(1);

  return (
    <div className="rating-section">
      <div className="rating-summary">
      <h4>Customer reviews</h4>

        <div className="stars">
          {[...Array(5)].map((_, index) => (
            <span key={index} className={index < Math.floor(averageRating) ? 'filled-star' : 'empty-star'}>
              <i class="fa-solid fa-star"></i>
            </span>
          ))}
          <span className="rating-score">{averageRating} out of 5</span>
        </div>
        <p>based on {totalRatings} user ratings</p>
      </div>
      <div className="rating-breakdown">
        {ratings.map((count, index) => (
          <div className="rating-bar" key={index}>
            <span>{5 - index} star</span>
            
            <span>{count}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StarRating;
`;

const cssCode = `/* General Ratings Section */
.ratings {
  margin-top: 10%;
  margin-left: 2%;
  color: rgb(97, 94, 94);
}
.ratings h1 {
  font-size: 1.875rem; /* 18px */
  line-height: 2.25rem;
  color: rgb(71, 85, 105);
  font-weight: 600;
}
.ratings h2 {
  font-size: 1.8rem; /* 18px */
  line-height: 2.25rem;
  color: rgb(71, 85, 105);
  font-weight: 400;
}

/* Container for Ratings */
.container-rate {
  border: 1px solid rgb(227, 227, 227);
  margin: 10px;
  padding: 40px;
  border-radius: 10px;
}

/* Rating Section Container */
.rating-section {
  width: 90%;
  max-width: 400px;
  padding: 20px;
  background-color: #f9fafc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  margin: 5% auto;
}

/* Rating Summary Section */
.rating-summary {
  text-align: center;
  margin-bottom: 20px;
}

/* Stars */
.stars {
  font-size: 6vw; /* Responsive font size */
  color: #ffb400;
}

/* Star Colors */
.filled-star {
  color: #ffb400;
}
.empty-star {
  color: #d4c9c9;
}

/* Rating Score */
.rating-score {
  font-size: 5vw; /* Responsive font size */
  color: #444;
  margin-left: 10px;
}

/* Rating Breakdown Section */
.rating-breakdown .rating-bar {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  line-height: 25px;
}

/* Rating Label */
.rating-bar span:first-child {
  width: 15%;
  font-weight: 500;
  font-size: 4vw; /* Responsive font size */
  text-align: center;
}

/* Progress Bar */
.bar {
  flex-grow: 1;
  height: 12px;
  width: auto;
  background-color: #eaeaea;
  border-radius: 4px;
  margin: 0 10px;
  position: relative;
}

/* Filled Portion of Bar */
.filled {
  height: 100%;
  background-color: #ffb400;
  border-radius: 4px;
}

/* Percentage */
.rating-bar span:last-child {
  width: 15%;
  text-align: center;
  font-size: 4vw; /* Responsive font size */
  font-weight: 600;
}

/* Media Queries for Larger Devices */
@media (min-width: 768px) {
  .stars {
    font-size: 24px;
  }
  .rating-score {
    font-size: 18px;
  }
  .rating-bar span:first-child,
  .rating-bar span:last-child {
    font-size: 16px;
  }
}

/* Media Queries for Smaller Devices */
@media (max-width: 768px) {
  .stars {
    font-size: 20px;
  }
  .rating-score {
    font-size: 14px;
  }
  .rating-bar span:first-child,
  .rating-bar span:last-child {
    font-size: 12px;
  }
}`;
  return (
    <div>
        <div className="ratings">
            <h1> Rating
            </h1>
            <p>The ratings component allows users to view and/or set a star rating for a product or a service.</p>
        <div className="container-rate">
        <StarRating/>
        </div>
        </div>

        <div className="ratings">
            <h2> Validations
            </h2>
            <h4>Basic</h4>
            <div className="code-cont">
    <CodePre htmlCode={htmlCode} reactCode={reactCode} cssCode={cssCode}/>
    </div>
        <div className="container-rate">
        <Stars/>
        <Stars/>

        </div>
        </div>
        
    </div>
  )
}
