import React from 'react';

const Pricing = () => {
  return (
    <div className="pricing-container">
      <div className="pricing-cards">
        <div className="pricing-card">
          <h3 className="card-title">Basic</h3>
          <p style={{color:'gray', fontSize:"18px"}}>Ideal for individual developers.</p>
          <p className="card-price">$<b className='lrg'>15</b>/month</p>
          <button className="card-button">Try For Free</button>
          <ul className="card-features">
            <li style={{color:'gray'}}>✔ Fully featured headless CMS, now including GraphQL</li>
            <li style={{color:'gray'}}>✔ Language and framework agnostic</li>
          </ul>
        </div>

        <div className="pricing-card featured">
          <h3 className="card-title">Team</h3>
          <p style={{color:'white'}}>Ideal for a small team.</p>
          <p style={{color:'white'}} className="card-price">$<b className='lrg'>25</b>/month</p>
          <button className="card-button white">Try For Free</button>

          <ul className="card-features">
            <li>✔ Decoupled microservices architecture evolves with your project</li>
            <li>✔ Expanded authoring roles and locales to support basic publishing workflows</li>
            <li>✔ Easy payment via credit card</li>
          
          </ul>
        </div>

        <div className="pricing-card">
          <h3 className="card-title">Premium</h3>
          <p>Ideal for organizations.</p>
          <p className="card-price">$<b className='lrg'>85</b>/month</p>
          <button className="card-button">Try For Free</button>

          <ul className="card-features" style={{color:'gray'}}>
            <li>✔ Open platform with SDKs, App Framework and design system</li>
            <li>✔ Access technical support via email or in-app messaging</li>
            <li>✔ Optimize your governance model with enough users, roles & permissions, and locales for the largest global organizations</li>
            <li>✔ Access to our Customer Success Managers, Solution Architects and Professional Services offerings</li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pricing;