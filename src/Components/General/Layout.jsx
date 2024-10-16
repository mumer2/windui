import React from 'react'
import CodePre from './CodePre'

export const Layout = () => {
  const htmlCode = `  <div className="container-layout">
      <div className="column column-left">
        <p>Column 1/3</p>
      </div>
      <div className="column column-center">
        <p>Column 2/3</p>
      </div>
      <div className="column column-right">
        <p>Column 3/3</p>
      </div>
    </div>

    ------------------CSS------------------


    /* ******************* */
    /* Layouts */
/* ******************* */

.layouts{
  margin-top: 15%;
  margin-left: 2%;
  color: gray;
  font-size: 18px;
}
.layouts h1{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 600;
}
.layout-content{
  margin-top: 10%;
  margin-left: 2%;
  font-size: 18px;
  overflow: hidden;
}
.layout-content h2{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.8rem;
  line-height: 2.25rem;
  font-weight: 400;
}
.layout-content h4{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  line-height: 2.25rem;
  font-weight: 600;
}
.container {
  display: flex;
  justify-content: space-between;
  margin: 20px auto;
  padding: 50px;
  max-width: 1000px;
}
.container-layout {
  display: flex;
  justify-content: space-between;
  margin: 25px 15px;
  padding: 60px;
  max-width: 1000px;
  border: 1px solid rgb(235, 232, 232);
  border-radius: 10px;
  gap: 20px;
}

.column {
  background-color: #ecf5f5;
  border-radius: 8px;
  padding: 25px;
  width: 30%; /* Each column takes 30% of the container's width */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.column1 {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  width: 100%; /* Each column takes 30% of the container's width */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  color: gray;
  overflow: hidden;
}
.column p {
  text-align: center;
  font-size: 0.8rem;
  color: #555;
}


/* Responsive Design for Smaller Screens */
@media (max-width: 768px) {
  .container-layout {
    flex-direction: column;
    align-items: center;
  }

  .column {
    width: 70%;
    margin-bottom: 20px;
    overflow: hidden;
  }
  .column1{
    width: 70%;
  }
}
    `;

const reactCode = `  import React from 'react'
import CodePre from './CodePre'

export const Layout = () => {
return (
    <div>
        <div className="layouts">
            <h1>Layouts</h1>
            <p>A layout system allows you to visually organize your content and adapt to screen size, ensuring consistency and hierarchy.</p>
        </div>

        <div className="container-layout">
      <div className="column column-left">
        <p>Column 1/3</p>
      </div>
      <div className="column column-center">
        <p>Column 2/3</p>
      </div>
      <div className="column column-right">
        <p>Column 3/3</p>
      </div>
    </div>

    <div className="layout-content">
        <h2>Variations</h2>
        <h4>One Column Layout</h4>
    </div>
    <div className="code-cont">
    <CodePre htmlCode={htmlCode} reactCode={reactCode}/>
    </div>

    <div className="container">
      <div className="column1">
        <p>Column 1/3</p>
      </div>
    </div>
    </div>
  )
}




------------------CSS-------------------



/* ******************* */
    /* Layouts */
/* ******************* */

.layouts{
  margin-top: 15%;
  margin-left: 2%;
  color: gray;
  font-size: 18px;
}
.layouts h1{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 600;
}
.layout-content{
  margin-top: 10%;
  margin-left: 2%;
  font-size: 18px;
  overflow: hidden;
}
.layout-content h2{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.8rem;
  line-height: 2.25rem;
  font-weight: 400;
}
.layout-content h4{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  line-height: 2.25rem;
  font-weight: 600;
}
.container {
  display: flex;
  justify-content: space-between;
  margin: 20px auto;
  padding: 50px;
  max-width: 1000px;
}
.container-layout {
  display: flex;
  justify-content: space-between;
  margin: 25px 15px;
  padding: 60px;
  max-width: 1000px;
  border: 1px solid rgb(235, 232, 232);
  border-radius: 10px;
  gap: 20px;
}

.column {
  background-color: #ecf5f5;
  border-radius: 8px;
  padding: 25px;
  width: 30%; /* Each column takes 30% of the container's width */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.column1 {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  width: 100%; /* Each column takes 30% of the container's width */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  color: gray;
  overflow: hidden;
}
.column p {
  text-align: center;
  font-size: 0.8rem;
  color: #555;
}


/* Responsive Design for Smaller Screens */
@media (max-width: 768px) {
  .container-layout {
    flex-direction: column;
    align-items: center;
  }

  .column {
    width: 70%;
    margin-bottom: 20px;
    overflow: hidden;
  }
  .column1{
    width: 70%;
  }
}
`;
  return (
    <div>
        <div className="layouts">
            <h1>Layouts</h1>
            <p>A layout system allows you to visually organize your content and adapt to screen size, ensuring consistency and hierarchy.</p>
        </div>

        <div className="container-layout">
      <div className="column column-left">
        <p>Column 1/3</p>
      </div>
      <div className="column column-center">
        <p>Column 2/3</p>
      </div>
      <div className="column column-right">
        <p>Column 3/3</p>
      </div>
    </div>

    <div className="layout-content">
        <h2>Variations</h2>
        <h4>One Column Layout</h4>
    </div>
    <div className="code-cont">
    <CodePre htmlCode={htmlCode} reactCode={reactCode}/>
    </div>

    <div className="container">
      <div className="column1">
        <p>Column 1/3</p>
      </div>
    </div>
    </div>
  )
}
