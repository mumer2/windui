import React from 'react';

const StarRating = () => {
  const ratings = [112, 17, 12, 2, 4];
  const totalRatings = ratings.reduce((acc, val) => acc + val, 0);
  const averageRating = (ratings.reduce((acc, val, idx) => acc + val * (5 - idx), 0) / totalRatings).toFixed(1);

  return (
    <div className="rating-section">
      <div className="rating-summary">
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
            <div className="bar">
              <div className="filled" style={{ width: `${(count / totalRatings) * 100}%` }}></div>
            </div>
            <span>{count}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StarRating;
