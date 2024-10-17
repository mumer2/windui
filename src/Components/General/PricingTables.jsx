import React from 'react'
import Pricing from './Pricing'
import CodePre from './CodePre'
import Price from './Price2'

export const PricingTables = () => {
  const htmlCode = `  <div className="pricing-container">
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
  `;

const reactCode = `import React from 'react';

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

`;

const cssCode = `.pricingtables{
  margin-top: 15%;
  margin-left: 2%;
  color: gray;
}
.pricingtables h1{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 600;
}
.pricingtables h2{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.8rem;
  line-height: 2.25rem;
  font-weight: 600;
}
.pricingtables h4{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  line-height: 2.25rem;
  font-weight: 600;
}

.pricing-container {
  max-width: 1200px;
  margin: 50px auto;
  text-align: left;

}

.pricing-title {
  font-size: 2.5rem;
  margin-bottom: 30px;
}

.pricing-cards {
  display: flex;
  justify-content: space-between;
  gap: 30px;
}

.pricing-card {
  background-color: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  flex: 1;
  transition: transform 0.3s;
}

.pricing-card:hover {
  transform: translateY(-5px);
}

.featured {
  background-color: rgb(5, 179, 138);
  border: 1px solid rgb(0, 198, 152);
  color: white;
  font-size: 18px;
}

.card-title {
  font-size: 1.8rem;
  margin-bottom: 10px;
}

.card-price {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 20px;
}

.card-features {
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
  text-align: left;
}

.card-features li {
  margin: 10px 0;
}

.card-button {
  background-color: rgb(5, 179, 138);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  width: 80%;
  height: 50px;
  transition: background-color 0.3s;
}
.white{
  background-color: white;
  color: rgb(5, 179, 138);
  font-weight: 600;
}

.card-button:hover {
  background-color: #33f9c7;
}

/* Media Query for Responsive Design */
@media (max-width: 768px) {
  .pricing-cards {
    flex-direction: column;
  }
}

.lrg{
  font-size: 50px;
}`;
  return (
    <div>
        <div className="pricingtables">
            <h1>Pricing Tables</h1>
            <p>The pricing table component allows users to get an overview of what pricing plans are offered and how they differ, on a product or service.</p>
        </div>

        <Pricing/>

        <div className="pricingtables">
            <h2>Variations</h2>
            <h4>Basic</h4>
        </div>

        <div className="code-cont">
    <CodePre htmlCode={htmlCode} reactCode={reactCode} cssCode={cssCode}/>
    </div>

        <Price/>
    </div>
  )
}
