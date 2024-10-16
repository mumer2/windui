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
    <CodePre htmlCode={htmlCode} reactCode={reactCode}/>
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
