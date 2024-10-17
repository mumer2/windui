import React from "react";
import CodePre from "../General/CodePre";

function Spinners() {
  const htmlCode = `  <div className="App2">

      <div className="spinners-container">
        {/* Spinner 1: Circular Border Spinner */}
        <div className="spinner-border"></div>

        <div className="spinner-border2"></div>
        
        <div className="spinner-border3"></div>

      </div>
    </div>
  `;

const reactCode = `import React from "react";
import CodePre from "../General/CodePre";

function Spinners() {
return(
 <div className="App2">

      <div className="spinners-container">
        {/* Spinner 1: Circular Border Spinner */}
        <div className="spinner-border"></div>

        <div className="spinner-border2"></div>
        
        <div className="spinner-border3"></div>

      </div>
    </div>
      );
}

export default Spinners;

`;

const cssCode = `.spinners{
  margin-top: 15%;
  margin-left: 2%;
  color: rgb(121, 110, 110);
}
.spinners h1{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 600;
}
.spinners h2{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.8rem;
  line-height: 2.25rem;
  font-weight: 400;
}
.spinners h4{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  line-height: 2.25rem;
  font-weight: 600;
}
.App2 {
  margin: 50px;
  padding: 60px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid rgb(214, 213, 213);
  justify-content: center;
}

.title {
  text-align: center;
  margin-bottom: 30px;
}

.spinners-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
}

/* Spinner 1: Circular Border Spinner */
.spinner-border {
  width: 40px;
  height: 40px;
  border: 6px solid #e0e0e0;
  border-top: 6px solid #09c284;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-top: 20px;

}
.spinner-border2 {
  width: 30px;
  height: 30px;
  border: 6px solid #e0e0e0;
  border-top: 6px solid #09c284;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-top: 20px;

}.spinner-border3 {
  width: 20px;
  height: 20px;
  border: 6px solid #e0e0e0;
  border-top: 6px solid #09c284;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-top: 20px;

}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}`;
  return (
    <div>

      <div className="spinners">
        <h1>Spinners</h1>
        <p>Indicates the loading state of a page or a page section.</p>
      </div>
    <div className="App2">

      <div className="spinners-container">
        {/* Spinner 1: Circular Border Spinner */}
        <div className="spinner-border"></div>

        <div className="spinner-border2"></div>
        
        <div className="spinner-border3"></div>

      </div>
    </div>

    <div className="spinners">
        <h2>Variations</h2>
        <h4>Basic Spinners</h4>
      </div>
      <div className="code-cont">
    <CodePre htmlCode={htmlCode} reactCode={reactCode} cssCode={cssCode}/>
    </div>


      <div className="App2">

<div className="spinners-container">
  {/* Spinner 1: Circular Border Spinner */}
  <div className="spinner-border"></div>

  <div className="spinner-border2"></div>
  
  <div className="spinner-border3"></div>

</div>
<div className="spinners-container">
  {/* Spinner 1: Circular Border Spinner */}
  <div className="spinner-border"></div>

  <div className="spinner-border2"></div>
  
  <div className="spinner-border3"></div>

</div>
<div className="spinners-container">
  {/* Spinner 1: Circular Border Spinner */}
  <div className="spinner-border"></div>

  <div className="spinner-border2"></div>
  
  <div className="spinner-border3"></div>

</div>
</div>
    </div>
  );
}

export default Spinners;
