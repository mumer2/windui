import React from 'react'
import Card from './Card'
import CodePre from './CodePre'

export const Features = () => {
  const htmlCode = ` <div className="card-section">
      <div className="card">
      <i class="fa-solid fa-bolt card-icon"></i>
        <p className="card-title"><b>Responsive Design:</b> wind UI ensures your web application looks and functions flawlessly.</p>
      </div>
      <div className="card">
      <i className="fa-solid fa-list card-icon"></i>
        <p className="card-title"><b>Effortless Customization:</b>  Easily customize the library's CSS to match your brand's unique aesthetics without the need for extensive coding.</p>
      </div> <div className="card">
      <i className="fa-regular fa-user card-icon"></i>
        <p className="card-title"><b>Community-Driven Support:</b> Join a thriving community of developers and get access to regular updates, tutorials, and responsive support for your projects.</p>
      </div>
    </div>


    -------------------CSS-------------------

    
/* ******************* */
    /* Features */
/* ******************* */


.features{
  margin-top: 15%;
  margin-left: 2%;
  color: gray;
}

.features h1{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 600;
}
.features p{
  font-size: 18px;
}
.features-content{
  margin-top: 15%;
  margin-left: 2%;
  color: rgb(71 ,85, 105);
}
.features-content h2{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.8rem;
  line-height: 2.25rem;
  font-weight: 400;
}
.features-content h3{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  line-height: 2.25rem;
  font-weight: 600;
}

/* Card */

/* Styling for the card section */
.card-section {
  display: flex;
  justify-content: space-around;
  margin: 20px;
  padding: 36px;
  border: 1px solid rgb(230, 227, 227);
  border-radius: 10px;
  background-color: white;
}

.card {
  padding: 10px;
  text-align: center;
  max-width: 260px;
}

/* Icon styling */
.card-icon {
  font-size: 20px;
  color: #3ca547;
}

/* Card title */
.card .card-title {
  font-size: 18px;
  color: rgb(100 ,116, 139);
}
.card .card-title b{
  font-weight: 600;
  color: rgb(71, 85, 105);
}

/* Card text */
.card-text {
  font-size: 16px;
  color: #666;
}

/* Responsive styling */
@media (max-width: 768px) {
  .card-section {
    flex-direction: column;
    align-items: center;
  }

  .card {
    margin-bottom: 20px;
  }
}
  `;

const reactCode = `import React from 'react';

const Card = () => {
  return (
    <div className="card-section">
      <div className="card">
      <i class="fa-solid fa-bolt card-icon"></i>
        <p className="card-title"><b>Responsive Design:</b> wind UI ensures your web application looks and functions flawlessly.</p>
      </div>
      <div className="card">
      <i className="fa-solid fa-list card-icon"></i>
        <p className="card-title"><b>Effortless Customization:</b>  Easily customize the library's CSS to match your brand's unique aesthetics without the need for extensive coding.</p>
      </div> <div className="card">
      <i className="fa-regular fa-user card-icon"></i>
        <p className="card-title"><b>Community-Driven Support:</b> Join a thriving community of developers and get access to regular updates, tutorials, and responsive support for your projects.</p>
      </div>
    </div>
  );
};

export default Card;


------------------CSS-------------------



/* ******************* */
    /* Features */
/* ******************* */


.features{
  margin-top: 15%;
  margin-left: 2%;
  color: gray;
}

.features h1{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 600;
}
.features p{
  font-size: 18px;
}
.features-content{
  margin-top: 15%;
  margin-left: 2%;
  color: rgb(71 ,85, 105);
}
.features-content h2{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.8rem;
  line-height: 2.25rem;
  font-weight: 400;
}
.features-content h3{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  line-height: 2.25rem;
  font-weight: 600;
}

/* Card */

/* Styling for the card section */
.card-section {
  display: flex;
  justify-content: space-around;
  margin: 20px;
  padding: 36px;
  border: 1px solid rgb(230, 227, 227);
  border-radius: 10px;
  background-color: white;
}

.card {
  padding: 10px;
  text-align: center;
  max-width: 260px;
}

/* Icon styling */
.card-icon {
  font-size: 20px;
  color: #3ca547;
}

/* Card title */
.card .card-title {
  font-size: 18px;
  color: rgb(100 ,116, 139);
}
.card .card-title b{
  font-weight: 600;
  color: rgb(71, 85, 105);
}

/* Card text */
.card-text {
  font-size: 16px;
  color: #666;
}

/* Responsive styling */
@media (max-width: 768px) {
  .card-section {
    flex-direction: column;
    align-items: center;
  }

  .card {
    margin-bottom: 20px;
  }
}

`;
  return (
    <div>
        <div className="features">
            <h1>Features</h1>
            <p>The Feature component is designed to highlight and showcase a specific feature, functionality, or offering within a product, application, or website. It provides a visually appealing 
                and informative way to present essential information about the feature to the user.</p>
        </div>

        <Card/>

    <div className="features-content">
        <h2>Variations</h2>
        <h3>One-line feature items with icon on the left</h3>
    </div>
    <div className="code-cont">
    <CodePre htmlCode={htmlCode} reactCode={reactCode}/>
    </div>
    <Card/>
    </div>
  )
}
