import React from 'react'
import CodePre from './CodePre'

export const Avatars = () => {
  const htmlCode = `  <div class="image-box-container">
    <div class="image-box">
      <div class="badge">7</div>
      <img src="Images/48.jfif" alt="" />

    </div>
    <div class="image-box">
      <div class="badge">7</div>
      <img src="Images/40.jfif" alt="" />

    </div>
    <div class="image-box">
      <div class="badge">7</div>
      <img src="Images/32.jfif" alt="" />

    </div>
    <div class="image-box">
      <div class="badge4"></div>
      <img src="Images/24.jfif" alt="" />

    </div>
  </div>

  `;
  
  const reactCode = `import React from 'react'
import CodePre from './CodePre'

export const Avatars = () => {
   return (
    <div>
      <div className="avatars-content">
      <h1>Avatars</h1>
<p>An Avatar is a graphical representation of a user. The user can be represented by an image, an icon or the user initials. Avatars can provide additional information like the user status or user notifications.</p>
      </div>


      <div class="image-box-container">
    <div class="image-box">
      <div class="badge">7</div>
      <img src="Images/48.jfif" alt="" />

    </div>
    <div class="image-box">
      <div class="badge">7</div>
      <img src="Images/40.jfif" alt="" />

    </div>
    <div class="image-box">
      <div class="badge">7</div>
      <img src="Images/32.jfif" alt="" />

    </div>
    <div class="image-box">
      <div class="badge4"></div>
      <img src="Images/24.jfif" alt="" />

    </div>
  </div>

  <div className="avatars-content">
  <h1>Variations</h1>  
  <h4>Rounded avatars</h4>
  <div className="code-cont">
    <CodePre htmlCode={htmlCode} reactCode={reactCode}/>
    </div>

  <div class="image-box-container">
    <div class="image-box">
      <img src="Images/1.jfif" alt="" />

    </div>
    <div class="image-box">
      <img src="Images/2.jfif" alt="" />

    </div>
    <div class="image-box">
      <img src="Images/3.jfif" alt="" />

    </div>
    <div class="image-box">
      <img src="Images/4.jfif" alt="" />
    </div>
  </div>
  <div class="image-box-container2">
    <div class="image-box">
      <img src="Images/1.jfif" alt="" />

    </div>
    <div class="image-box">
      <img src="Images/2.jfif" alt="" />

    </div>
    <div class="image-box">
      <img src="Images/3.jfif" alt="" />

    </div>
    <div class="image-box">
      <img src="Images/4.jfif" alt="" />
    </div>
  </div>

  <div class="image-box-container3">
    <div class="image-box">
      <img src="Images/1.jfif" alt="" />

    </div>
    <div class="image-box">
      <img src="Images/2.jfif" alt="" />

    </div>
    <div class="image-box">
      <img src="Images/3.jfif" alt="" />

    </div>
    <div class="image-box">
      <img src="Images/4.jfif" alt="" />
    </div>
  </div>

  </div>

  
    </div>
  )
}

`;

const cssCode = `
.avatars-content{
  margin-top: 15%;
  margin-left: 2%;
  color: rgb(71 ,85, 105);

}
.avatars-content h1{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 600;
}
.avatars-content h3{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.8rem;
  line-height: 2.25rem;
  font-weight: 400;
}

.image-box-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  padding: 50px;
}
.image-box-container2 {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}
.image-box-container3 {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-top: 5%;
}

.image-box {
  position: relative;
  display: inline-block;
  margin-left: 30px;
}
.image-box img{
  border-radius: 10px;
}

.badge {
  position: absolute;
  top: -5px;
  right: -5px;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background-color: rgb(255, 84, 112);
  color: white;
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
}
.badge4 {
  position: absolute;
  top: -5px;
  right: -5px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgb(255, 84, 112);
  color: white;
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
}`;
  return (
    <div>
      <div className="avatars-content">
      <h1>Avatars</h1>
<p>An Avatar is a graphical representation of a user. The user can be represented by an image, an icon or the user initials. Avatars can provide additional information like the user status or user notifications.</p>
      </div>


      <div class="image-box-container">
    <div class="image-box">
      <div class="badge">7</div>
      <img src="Images/48.jfif" alt="" />

    </div>
    <div class="image-box">
      <div class="badge">7</div>
      <img src="Images/40.jfif" alt="" />

    </div>
    <div class="image-box">
      <div class="badge">7</div>
      <img src="Images/32.jfif" alt="" />

    </div>
    <div class="image-box">
      <div class="badge4"></div>
      <img src="Images/24.jfif" alt="" />

    </div>
  </div>

  <div className="avatars-content">
  <h1>Variations</h1>  
  <h4>Rounded avatars</h4>
  <div className="code-cont">
    <CodePre htmlCode={htmlCode} reactCode={reactCode} cssCode={cssCode}/>
    </div>

  <div class="image-box-container">
    <div class="image-box">
      <img src="Images/1.jfif" alt="" />

    </div>
    <div class="image-box">
      <img src="Images/2.jfif" alt="" />

    </div>
    <div class="image-box">
      <img src="Images/3.jfif" alt="" />

    </div>
    <div class="image-box">
      <img src="Images/4.jfif" alt="" />
    </div>
  </div>
  <div class="image-box-container2">
    <div class="image-box">
      <img src="Images/1.jfif" alt="" />

    </div>
    <div class="image-box">
      <img src="Images/2.jfif" alt="" />

    </div>
    <div class="image-box">
      <img src="Images/3.jfif" alt="" />

    </div>
    <div class="image-box">
      <img src="Images/4.jfif" alt="" />
    </div>
  </div>

  <div class="image-box-container3">
    <div class="image-box">
      <img src="Images/1.jfif" alt="" />

    </div>
    <div class="image-box">
      <img src="Images/2.jfif" alt="" />

    </div>
    <div class="image-box">
      <img src="Images/3.jfif" alt="" />

    </div>
    <div class="image-box">
      <img src="Images/4.jfif" alt="" />
    </div>
  </div>

  </div>

  
    </div>
  )
}
