import React from 'react';

const Stars = () => {
  const ratings = [15, 19, 5, 2, 1];
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
      
    </div>
  );
};

export default Stars;
