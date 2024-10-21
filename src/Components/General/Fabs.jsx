import React from 'react'
import CodePre from './CodePre'

export const Fabs = () => {
  const htmlCode = `   <div class="container">
  <div class="fab-container">
    <button class="fab">+</button>
    <div class="fab-menu">
    <button class="fab-item"><i class="fa-solid fa-square-share-nodes"></i></button>
    <button class="fab-item"><i class="fa-solid fa-camera"></i></button>
    <button class="fab-item"><i class="fa-regular fa-copy"></i></button>
    <button class="fab-item"><i class="fa-regular fa-pen-to-square"></i></button>
    </div>
  </div>
  `;

const reactCode = `  import React from 'react'
import CodePre from './CodePre'

export const Fabs = () => {
  return(
<div class="container">
  <div class="fab-container">
    <button class="fab">+</button>
    <div class="fab-menu">
    <button class="fab-item"><i class="fa-solid fa-square-share-nodes"></i></button>
    <button class="fab-item"><i class="fa-solid fa-camera"></i></button>
    <button class="fab-item"><i class="fa-regular fa-copy"></i></button>
    <button class="fab-item"><i class="fa-regular fa-pen-to-square"></i></button>
    </div>
  </div>
`;
    
const cssCode = `.fabs{
  margin-top: 15%;
  margin-left: 2%;
  color: rgb(102, 91, 91);
}
.fabs h1{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 600;
}
.fabs h2{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.8rem;
  line-height: 2.25rem;
  font-weight: 400;
}
.fabs h4{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  line-height: 2.25rem;
  font-weight: 600;
}
.cont-fab{
  border: 1px solid rgb(227, 227, 227);
  border-radius: 10px;
  margin: 20px;
  padding: 30px;
}
.container {
  position: relative;
  width: 90%;
  height: 260px; /* Adjust as needed */
}

.fab-container {
  position: absolute;
  bottom: 20px;
  right: 20px;
}

.fab {
  width: 50px;
  height: 50px;
  border-radius: 20%;
  background-color:#02b583;
  color: white;
  border: none;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}

.fab-menu {
  position: absolute;
  bottom: 80px;
  right: 0;
  display: none;
  flex-direction: column;
  gap: 10px;
}

.fab-container:hover .fab-menu {
  display: flex;
}

.fab-item {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: rgb(37, 34, 34);
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}



/* Media Queries for Specific Screen Sizes */

/* Large devices (desktops, 1200px and up) */
@media (min-width: 1200px) {
  .fab, .fab-item {
    width: 50px;
    height: 50px;
    font-size: 24px;
  }

  .fab-container {
    bottom: 20px;
    right: 20px;
  }

  .fab-menu {
    bottom: 80px;
    gap: 10px;
  }
}

/* Medium devices (tablets, 768px to 1199px) */
@media (min-width: 768px) and (max-width: 1199px) {
  .fab, .fab-item {
    width: 10vw;
    height: 10vw;
    max-width: 50px;
    max-height: 50px;
    font-size: 20px;
  }

  .fab-container {
    bottom: 4vw;
    right: 4vw;
  }

  .fab-menu {
    bottom: 14vw;
    gap: 3vw;
  }
}

/* Small devices (phones, less than 768px) */
@media (max-width: 767px) {
  .fab, .fab-item {
    width: 12vw;
    height: 12vw;
    max-width: 45px;
    max-height: 45px;
    font-size: 18px;
  }

  .fab-container {
    bottom: 6vw;
    right: 15vw;
  }

  .fab-menu {
    bottom: 18vw;
    gap: 4vw;
  }
}`;
  return (
    <div>
        <div className="fabs">
            <h1>Fabs</h1>
            <p>A Floating Action Button (FAB) is a high-emphasis button that lets the user perform a primary action.</p>
        </div>
        
        <div class="fab-container">
  <div class="fab-buttons">
    <button class="fab-main">
      <span class="fab-icon">
        <i class="fa-light fa-plus"></i> 
      </span>
    </button>

    <button class="fab-action">
      <span class="fab-icon"><i class="fa-regular fa-pen-to-square"></i></span>
      <span class="fab-tooltip">Edit</span>
    </button>

    <button class="fab-action">
      <span class="fab-icon"><i class="fa-regular fa-copy"></i></span>
      <span class="fab-tooltip">Copy</span>
    </button>

    <button class="fab-action">
      <span class="fab-icon"><i class="fa-solid fa-camera"></i></span>
      <span class="fab-tooltip">Camera</span>
    </button>

    <button class="fab-action">
      <span class="fab-icon"><i class="fa-solid fa-share-nodes"></i></span>
      <span class="fab-tooltip">Share</span>
    </button>
  </div>
</div>



        <div className="fabs">
            <h2>Variations</h2>
            <h4>Basic floating action buttons, left and right sided</h4>
        </div>

        <div className="code-cont">
    <CodePre htmlCode={htmlCode} reactCode={reactCode} cssCode={cssCode}/>
    </div>


    <div class="fab-container">
  <div class="fab-buttons">
    <button class="fab-main">
      <span class="fab-icon">
        <i class="fa-light fa-plus"></i> 
      </span>
    </button>

    <button class="fab-action">
      <span class="fab-icon"><i class="fa-regular fa-pen-to-square"></i></span>
      <span class="fab-tooltip">Edit</span>
    </button>

    <button class="fab-action">
      <span class="fab-icon"><i class="fa-regular fa-copy"></i></span>
      <span class="fab-tooltip">Copy</span>
    </button>

    <button class="fab-action">
      <span class="fab-icon"><i class="fa-solid fa-camera"></i></span>
      <span class="fab-tooltip">Camera</span>
    </button>

    <button class="fab-action">
      <span class="fab-icon"><i class="fa-solid fa-share-nodes"></i></span>
      <span class="fab-tooltip">Share</span>
    </button>
  </div>
</div>
{/* <div className="cont-fab">

        <div class="container">
  <div class="fab-container">
    <button class="fab">+</button>
    <div class="fab-menu">
    <button class="fab-item"><i class="fa-solid fa-square-share-nodes"></i></button>
    <button class="fab-item"><i class="fa-solid fa-camera"></i></button>
    <button class="fab-item"><i class="fa-regular fa-copy"></i></button>
    <button class="fab-item"><i class="fa-regular fa-pen-to-square"></i></button>
    </div>
  </div>
</div>
</div> */}

    </div>
  )
}
