import React from 'react';

const Price = () => {
  return (
    <div className="pricing-container">
      <div className="pricing-cards">
        <div className="pricing-card">
          <h3 className="card-title">Basic</h3>
          <p>Ideal for individual developers.</p>
          <p className="card-price">$<b className='lrg'>15</b>/month</p>
          <button className="card-button">Try For Free</button>
        </div>

        <div className="pricing-card featured">
          <h3 className="card-title">Team</h3>
          <p>Ideal for a small team.</p>
          <p className="card-price">$<b className='lrg'>25</b>/month</p>
          <button className="card-button white">Try For Free</button>

        </div>

        <div className="pricing-card">
          <h3 className="card-title">Premium</h3>
          <p>Ideal for organizations.</p>
          <p className="card-price">$<b className='lrg'>85</b>/month</p>
          <button className="card-button">Try For Free</button>
        </div>
      </div>
    </div>
  );
};

export default Price;