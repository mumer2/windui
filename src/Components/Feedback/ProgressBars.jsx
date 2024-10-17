import React from "react";
import CodePre from "../General/CodePre";

function ProgressBars() {
  const htmlCode = ` <div className="progressbars">
        <h1>Progress Bars</h1>
        <p>Progress indicators inform users about the status of ongoing processes.</p>
      </div>
      <div className="progress-cont">

      <div className="App">

        <div className="progress-container">
          {/* Progress Bar 1 */}
          <label>Loading...</label>
          <div className="progress-bar">
            <div className="progress-bar-fill" style={{ width: "30%" }}>
            </div>
          </div>

          {/* Progress Bar 2 */}
          <div className="progress-bar">
            <div className="progress-bar-fill bg-green" style={{ width: "50%" }}>
            </div>
          </div>

          {/* Progress Bar 3 */}
          <div className="progress-bar">
            <div className="progress-bar-fill bg-red" style={{ width: "70%" }}>
            </div>
          </div>
          <label>Loading...</label>
          <div className="progress-bar">
            <div className="progress-bar-fill bg-red" style={{ width: "90%" }}>
            </div>
          </div>
        </div>
      </div>
      </div>
  `;

const reactCode = `import React from "react";
import CodePre from "../General/CodePre";

function ProgressBars() {
return (
<div className="progressbars">
        <h1>Progress Bars</h1>
        <p>Progress indicators inform users about the status of ongoing processes.</p>
      </div>
      <div className="progress-cont">

      <div className="App">

        <div className="progress-container">
          {/* Progress Bar 1 */}
          <label>Loading...</label>
          <div className="progress-bar">
            <div className="progress-bar-fill" style={{ width: "30%" }}>
            </div>
          </div>

          {/* Progress Bar 2 */}
          <div className="progress-bar">
            <div className="progress-bar-fill bg-green" style={{ width: "50%" }}>
            </div>
          </div>

          {/* Progress Bar 3 */}
          <div className="progress-bar">
            <div className="progress-bar-fill bg-red" style={{ width: "70%" }}>
            </div>
          </div>
          <label>Loading...</label>
          <div className="progress-bar">
            <div className="progress-bar-fill bg-red" style={{ width: "90%" }}>
            </div>
          </div>
        </div>
      </div>
      </div>
`;

const cssCode = `.progressbars{
  margin-top: 15%;
  margin-left: 2%;
  color: rgb(112, 102, 102);
}
.progressbars h1{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 600;
}
.progressbars h2{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.8rem;
  line-height: 2.25rem;
  font-weight: 400;
}
.progressbars h4{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  line-height: 2.25rem;
  font-weight: 600;
}
.progress-cont{
  border: 1px solid rgb(227, 227, 227);
  border-radius: 10px;
  margin: 20px;
  padding: 30px;
}
.App {
  max-width: 600px;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.progress-container label{
  margin-bottom: -32px;
  color: rgb(100 ,116, 139);
  font-size: 12px;
}
.title {
  text-align: center;
  margin-bottom: 30px;
}

.progress-container {
  display: flex;
  flex-direction: column;
  gap: 36px;
}

.progress-bar {
  width: 100%;
  background-color: #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  height: 18px;
}

.progress-bar-fill {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  border-radius: 10px 0 0 10px;
  transition: width 0.3s ease-in-out;
}

.bg-green {
  background-color: #28a745; /* Green */
}

.bg-red {
  background-color: #dc3545; /* Red */
}

/* Default Progress Fill */
.progress-bar-fill {
  background-color:#02b583; /* Blue */
}`;

return (
    <div>
      <div className="progressbars">
        <h1>Progress Bars</h1>
        <p>Progress indicators inform users about the status of ongoing processes.</p>
      </div>
      <div className="progress-cont">

      <div className="App">

        <div className="progress-container">
          {/* Progress Bar 1 */}
          <label>Loading...</label>
          <div className="progress-bar">
            <div className="progress-bar-fill" style={{ width: "30%" }}>
            </div>
          </div>

          {/* Progress Bar 2 */}
          <div className="progress-bar">
            <div className="progress-bar-fill bg-green" style={{ width: "50%" }}>
            </div>
          </div>

          {/* Progress Bar 3 */}
          <div className="progress-bar">
            <div className="progress-bar-fill bg-red" style={{ width: "70%" }}>
            </div>
          </div>
          <label>Loading...</label>
          <div className="progress-bar">
            <div className="progress-bar-fill bg-red" style={{ width: "90%" }}>
            </div>
          </div>
        </div>
      </div>
      </div>


      <div className="progressbars">
        <h2>Variations</h2>
        <h4>Basic</h4>
      </div>
      <div className="code-cont">
    <CodePre htmlCode={htmlCode} reactCode={reactCode} cssCode={cssCode}/>
    </div>


<div className="progress-cont">

      <div className="App">

        <div className="progress-container">
          {/* Progress Bar 1 */}
          <div className="progress-bar">
            <div className="progress-bar-fill" style={{ width: "30%" }}>
            </div>
          </div>

          {/* Progress Bar 2 */}
          <div className="progress-bar">
            <div className="progress-bar-fill bg-green" style={{ width: "50%" }}>
            </div>
          </div>

          {/* Progress Bar 3 */}
          <div className="progress-bar">
            <div className="progress-bar-fill bg-red" style={{ width: "70%" }}>
            </div>
          </div>

          <div className="progress-bar">
            <div className="progress-bar-fill bg-red" style={{ width: "90%" }}>
            </div>
          </div>
        </div>
      </div>
</div>

    </div>
  );
}

export default ProgressBars;
