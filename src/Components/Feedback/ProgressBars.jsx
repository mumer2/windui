import React from "react";
import CodePreview from "../General/CodePreview";

function ProgressBars() {
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
      <CodePreview />


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
