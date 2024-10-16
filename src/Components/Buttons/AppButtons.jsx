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
    <CodePre htmlCode={htmlCode} reactCode={reactCode}/>
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
