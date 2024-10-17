import React from 'react'
import CodePre from '../General/CodePre'

export const AppButtons = () => {
  const htmlCode = `  <div class="appbtn">
  <div class="btns">
    <button class="applebtn">
      <i class="fa-brands fa-apple"></i>
      <div class="applebtn-text">
        <p>Get it on</p>
        <h3>App Store</h3>
      </div>
    </button>
    <button class="applebtn">
      <i class="fa-brands fa-google-play"></i>
      <div class="applebtn-text">
        <p>Get it on</p>
        <h3>Google Play</h3>
      </div>
    </button>
    {/* <!-- Additional buttons can be added here --> */}
  </div>
</div>
  `;

const reactCode = `import React from 'react'
import CodePre from '../General/CodePre'

export const AppButtons = () => {
  
        <div class="appbtn">
  <div class="btns">
    <button class="applebtn">
      <i class="fa-brands fa-apple"></i>
      <div class="applebtn-text">
        <p>Get it on</p>
        <h3>Google Play</h3>
      </div>
    </button>
    <button class="applebtn">
      <i class="fa-brands fa-google-play"></i>
      <div class="applebtn-text">
        <p>Get it on</p>
        <h3>Google Play</h3>
      </div>
    </button>
    {/* <!-- Additional buttons can be added here --> */}
  </div>
</div>
    </div>
  )
}
`;

const cssCode = `/* General App Button Section */
.appbtn {
  margin-top: 15%;
  margin-left: 2%;
  color: rgb(110, 103, 103);
}

.appbtn h1{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 600;
}
.appbtn h2{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.8rem;
  line-height: 2.25rem;
  font-weight: 400;
}
.appbtn h4{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  line-height: 2.25rem;
  font-weight: 600;
}
/* Container for Buttons */
.btns {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin: 5% auto;
  max-width: 1200px;
}

/* Individual Button Styling */
.applebtn {
  background-color: #02b583;
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 180px;
  border-radius: 8px;
  height: 60px;
  cursor: pointer;
  padding: 10px;
  transition: background-color 0.3s, transform 0.2s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.applebtn:hover {
  background-color: #1f9874;
  transform: translateY(-2px);
}

.applebtn:active {
  transform: translateY(1px);
}

/* Icon Styling */
.applebtn i {
  font-size: 28px;
  margin-right: 15px;
}

/* Button Text Container */
.applebtn-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.applebtn h3 {
  font-size: 16px;
  margin: 0;
}

.applebtn p {
  font-size: 12px;
  margin: 0;
  color: white;
}

/* Media Queries for Responsiveness */

/* Tablet Devices */
@media (max-width: 768px) {
  .btns {
    gap: 15px;
  }

  .applebtn {
    width: 200px;
    height: 50px;
    padding: 8px;
  }

  .applebtn i {
    font-size: 24px;
  }

  .applebtn h3 {
    font-size: 14px;
  }

  .applebtn p {
    font-size: 11px;
  }
}

/* Mobile Devices */
@media (max-width: 480px) {
  .btns {
    flex-direction: column;
    gap: 15px;
  }

  .applebtn {
    width: 90%;
    height: 45px;
    padding: 6px;
  }

  .applebtn i {
    font-size: 20px;
  }

  .applebtn h3,
  .applebtn p {
    font-size: 13px;
  }
}`;
  return (
    <div>
        <div className="appbtn">
            <h1>App Buttons</h1>
            <p>App store buttons are interactive elements that, when clicked, direct users to download or access mobile applications from platforms like Google Play Store and Apple App Store.

</p>
        </div>

        <div class="appbtn">
  <div class="btns">
    <button class="applebtn">
      <i class="fa-brands fa-apple"></i>
      <div class="applebtn-text">
        <p>Get it on</p>
        <h3>App Store</h3>
      </div>
    </button>
    <button class="applebtn">
      <i class="fa-brands fa-google-play"></i>
      <div class="applebtn-text">
        <p>Get it on</p>
        <h3>Google Play</h3>
      </div>
    </button>
    {/* <!-- Additional buttons can be added here --> */}
  </div>
</div>


{/* 
        <div className="btns">
            <div className='applebtn'><i class="fa-brands fa-apple"></i><p>Get it on</p><h3>App Store</h3></div>
            <div className='applebtn'><i class="fa-brands fa-google-play"></i><p>Get it on</p><h3>Google Play</h3></div>
        
        </div> */}

        <div className="appbtn">
            <h2>Variations</h2>
            <h4>Primary App Buttons</h4>
            <div className="code-cont">
    <CodePre htmlCode={htmlCode} reactCode={reactCode} cssCode={cssCode}/>
    </div>
            {/* <div className="btns">
            <div className='applebtn'><i class="fa-brands fa-apple"></i><p>Get it on</p><h3>App Store</h3></div>
            <div className='applebtn'><i class="fa-brands fa-google-play"></i><p>Get it on</p><h3>Google Play</h3></div>
        
        </div> */}
        </div>


        <div class="appbtn">
  <div class="btns">
    <button class="applebtn">
      <i class="fa-brands fa-apple"></i>
      <div class="applebtn-text">
        <p>Get it on</p>
        <h3>Google Play</h3>
      </div>
    </button>
    <button class="applebtn">
      <i class="fa-brands fa-google-play"></i>
      <div class="applebtn-text">
        <p>Get it on</p>
        <h3>Google Play</h3>
      </div>
    </button>
    {/* <!-- Additional buttons can be added here --> */}
  </div>
</div>
    </div>
  )
}
