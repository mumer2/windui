import React from 'react'
import CodePre from './CodePre'

export const Cards = () => {
  const htmlCode = `   <div className="card-main">
      <div class="newclass-profile-section">
        {/* <!-- Left side image --> */}
        <div class="newclass-profile-image">
          <img src="Images/card-img.jpg" alt="Left Side Image" />
        </div>

        {/* <!-- Right side profile card --> */}
        <div class="newclass-profile-card">
          <div class="newclass-profile-header">
            <img src="Images/card-icon.jfif" alt="Profile Icon" class="newclass-profile-icon" />
            <div class="newclass-profile-info">
              <h2 class="newclass-profile-name">A day under the sun</h2>
              <p class="newclass-profile-designation">By Sue, Jun 3 2023</p>
            </div>
          </div>
          <div class="newclass-profile-caption">
            <p>
              After a walk through history, there is nothing left to do but admire the hypnotizing landscapes that exist in every direction. From vast deserts to rainbow mountains, and everything in between.
            </p>
          </div>
        </div>
      </div>

      </div>

      ---------------CSS--------------

      
/* *************************** */
           /* Cards */
/* *************************** */

/* Container for the entire profile section */

.card-main{
  padding: 5% 10%;
  border: 1px solid rgb(235, 226, 226);
  border-radius: 10px;
  margin: 10px;
}
.newclass-profile-section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  /* padding: 20px; */
  background-color: #f7f9fc;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: fit-content;
  margin: 20px auto;
}

/* Left side image */
.newclass-profile-image img {
  width: 100%;
  max-width: 400px;
  height: 350px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

}

/* Right side profile card */
.newclass-profile-card {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0px;
}

.newclass-profile-header {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.newclass-profile-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
}

.newclass-profile-info {
  flex-grow: 1;
}

.newclass-profile-name {
  font-size: 1.3rem;
  margin-bottom: 4px;
  font-weight: bold;
  color: #2c3e50;
}

.newclass-profile-designation {
  font-size: 0.9rem;
  color: #888;
}

.newclass-profile-caption {
  font-size: 1.2rem;
  line-height: 1.6;
  color: #555;
}
/* Responsive styles */
@media (max-width: 1024px) {
  .newclass-profile-section {
    flex-direction: column;
    max-width: 400px;
  }
  .newclass-profile-icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 15px;
    margin-left: 10px;
  }

  .newclass-profile-card {
    padding: 15px;
  }
  .newclass-profile-caption {
    margin-left: 10px;
  }

  .newclass-profile-image img {
    max-width: 100%;
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 0px;
  }

  .newclass-profile-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .newclass-profile-icon {
    margin-right: 0;
    margin-bottom: 10px;
  }
}
/* Responsive styles */
@media (max-width: 768px) {
  .newclass-profile-section {
    flex-direction: column;
    max-width: 400px;
    overflow: hidden;
  }
  .newclass-profile-icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 15px;
    margin-left: 10px;
  }

  .newclass-profile-card {
    padding: 15px;
  }
  .newclass-profile-caption {
    margin-left: 10px;
  }

  .newclass-profile-image img {
    max-width: 100%;
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 0px;
  }

  .newclass-profile-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .newclass-profile-icon {
    margin-right: 0;
    margin-bottom: 10px;
  }
}
.cards{
  margin-top: 16%;
  margin-left: 2%;
  color: gray;
}
.cards h1{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 600;
}
.card-content{
  margin-top: 12%;
  margin-left: 2%;
  color: rgb(71 ,85, 105);
}
.card-content h2{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.8rem;
  line-height: 2.25rem;
  font-weight: 400;
}


/* Container for the whole section */
.profile-section {
  margin: 10%;
  display: flex;
  gap: 20px;
  padding: 20px;
  align-items: center;
  background-color: #f9f9f9;
  flex-wrap: wrap; /* Enables wrapping for responsiveness */
}

/* Left side image */
.profile-image img {
  width: 100%;
  max-width: 300px; /* Adjust this as per the size you want */
  height: 300px;
  border-radius: 10px;
  object-fit: cover;
}

/* Profile card container */
.profile-card {
  flex: 1;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 10px;
}

/* Profile header (icon and info) */
.profile-header {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.profile-icon {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 15px;
}

/* Profile info (name and designation) */
.profile-info {
  display: flex;
  flex-direction: column;
}

.profile-name {
  font-size: 1.5rem;
  margin: 0;
  color: #374151;
}

.profile-designation {
  font-size: 1rem;
  color: #6b7280;
  margin: 5px 0 0;
}

/* Profile caption */
.profile-caption {
  font-size: 1.2rem;
  color: #66707d;
  line-height: 1.6;
}
.card-cont{
  display: flex;
  border: 1px solid rgb(227, 227, 227);
  border-radius: 10px;
  margin: 20px;
  padding: 30px;
  justify-content: center;
}

/* Responsive design for small screens */
@media (max-width: 768px) {
  /* Stack the image and profile card vertically */
  .profile-section {
    flex-direction: column;
    align-items: flex-start;
  }

  /* Center align image and card */
  .profile-image img {
    max-width: 100%; /* Full width on small screens */
    margin-bottom: 20px;
  }

  .profile-card {
    width: 100%; /* Full width for profile card */
  }

  /* Reduce font sizes for smaller screens */
  .profile-name {
    font-size: 1.25rem;
  }

  .profile-designation {
    font-size: 0.9rem;
  }

  .profile-caption {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  /* Further adjustments for very small screens */
  .profile-icon {
    width: 50px;
    height: 50px;
  }

  .profile-name {
    font-size: 1.1rem;
  }

  .profile-designation {
    font-size: 0.8rem;
  }

  .profile-caption {
    font-size: 0.85rem;
  }
}
.captin{
  text-align: center;
  justify-content: center;
  width: 300px;
}

.captin .text-captn{
  width: auto;
  justify-content: center;
  text-align: left;
  /* margin-left: 30%; */
}

  `;

const reactCode = `import React from 'react'
import CodePre from './CodePre'

export const Cards = () => {
return (
    <div>
      <div className="cards">
        <h1>Cards</h1>
        <p>A card can be used to display content related to a single subject. The content can consist of multiple elements of varying types and sizes.</p>
      </div>
      <div className="card-main">
      <div class="newclass-profile-section">
        {/* <!-- Left side image --> */}
        <div class="newclass-profile-image">
          <img src="Images/card-img.jpg" alt="Left Side Image" />
        </div>

        {/* <!-- Right side profile card --> */}
        <div class="newclass-profile-card">
          <div class="newclass-profile-header">
            <img src="Images/card-icon.jfif" alt="Profile Icon" class="newclass-profile-icon" />
            <div class="newclass-profile-info">
              <h2 class="newclass-profile-name">A day under the sun</h2>
              <p class="newclass-profile-designation">By Sue, Jun 3 2023</p>
            </div>
          </div>
          <div class="newclass-profile-caption">
            <p>
              After a walk through history, there is nothing left to do but admire the hypnotizing landscapes that exist in every direction. From vast deserts to rainbow mountains, and everything in between.
            </p>
          </div>
        </div>
      </div>

      </div>

      <div className="card-content">
        <h2>Variations</h2>
        <h4>Basic Card</h4>

        <div className="code-cont">
    <CodePre htmlCode={htmlCode} reactCode={reactCode}/>
    </div>

<div className="card-cont">

        <div className='captin'>
          <div className="text-captn">
            <h3>Something to remember</h3>
            <p>All components can be copied and pasted and easily implemented in your tailwind css projects. You can either copy all the components in the preview window from the copy icon on the top right corner in the code blocks or
              just hover and click on the one component you need and paste it on your project.</p>
          </div>
        </div>
      </div>
</div>


    </div>
  )
}

-----------------------CSS-----------------------


/* *************************** */
           /* Cards */
/* *************************** */

/* Container for the entire profile section */

.card-main{
  padding: 5% 10%;
  border: 1px solid rgb(235, 226, 226);
  border-radius: 10px;
  margin: 10px;
}
.newclass-profile-section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  /* padding: 20px; */
  background-color: #f7f9fc;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: fit-content;
  margin: 20px auto;
}

/* Left side image */
.newclass-profile-image img {
  width: 100%;
  max-width: 400px;
  height: 350px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

}

/* Right side profile card */
.newclass-profile-card {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0px;
}

.newclass-profile-header {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.newclass-profile-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
}

.newclass-profile-info {
  flex-grow: 1;
}

.newclass-profile-name {
  font-size: 1.3rem;
  margin-bottom: 4px;
  font-weight: bold;
  color: #2c3e50;
}

.newclass-profile-designation {
  font-size: 0.9rem;
  color: #888;
}

.newclass-profile-caption {
  font-size: 1.2rem;
  line-height: 1.6;
  color: #555;
}
/* Responsive styles */
@media (max-width: 1024px) {
  .newclass-profile-section {
    flex-direction: column;
    max-width: 400px;
  }
  .newclass-profile-icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 15px;
    margin-left: 10px;
  }

  .newclass-profile-card {
    padding: 15px;
  }
  .newclass-profile-caption {
    margin-left: 10px;
  }

  .newclass-profile-image img {
    max-width: 100%;
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 0px;
  }

  .newclass-profile-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .newclass-profile-icon {
    margin-right: 0;
    margin-bottom: 10px;
  }
}
/* Responsive styles */
@media (max-width: 768px) {
  .newclass-profile-section {
    flex-direction: column;
    max-width: 400px;
    overflow: hidden;
  }
  .newclass-profile-icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 15px;
    margin-left: 10px;
  }

  .newclass-profile-card {
    padding: 15px;
  }
  .newclass-profile-caption {
    margin-left: 10px;
  }

  .newclass-profile-image img {
    max-width: 100%;
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 0px;
  }

  .newclass-profile-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .newclass-profile-icon {
    margin-right: 0;
    margin-bottom: 10px;
  }
}
.cards{
  margin-top: 16%;
  margin-left: 2%;
  color: gray;
}
.cards h1{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 600;
}
.card-content{
  margin-top: 12%;
  margin-left: 2%;
  color: rgb(71 ,85, 105);
}
.card-content h2{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.8rem;
  line-height: 2.25rem;
  font-weight: 400;
}


/* Container for the whole section */
.profile-section {
  margin: 10%;
  display: flex;
  gap: 20px;
  padding: 20px;
  align-items: center;
  background-color: #f9f9f9;
  flex-wrap: wrap; /* Enables wrapping for responsiveness */
}

/* Left side image */
.profile-image img {
  width: 100%;
  max-width: 300px; /* Adjust this as per the size you want */
  height: 300px;
  border-radius: 10px;
  object-fit: cover;
}

/* Profile card container */
.profile-card {
  flex: 1;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 10px;
}

/* Profile header (icon and info) */
.profile-header {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.profile-icon {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 15px;
}

/* Profile info (name and designation) */
.profile-info {
  display: flex;
  flex-direction: column;
}

.profile-name {
  font-size: 1.5rem;
  margin: 0;
  color: #374151;
}

.profile-designation {
  font-size: 1rem;
  color: #6b7280;
  margin: 5px 0 0;
}

/* Profile caption */
.profile-caption {
  font-size: 1.2rem;
  color: #66707d;
  line-height: 1.6;
}
.card-cont{
  display: flex;
  border: 1px solid rgb(227, 227, 227);
  border-radius: 10px;
  margin: 20px;
  padding: 30px;
  justify-content: center;
}

/* Responsive design for small screens */
@media (max-width: 768px) {
  /* Stack the image and profile card vertically */
  .profile-section {
    flex-direction: column;
    align-items: flex-start;
  }

  /* Center align image and card */
  .profile-image img {
    max-width: 100%; /* Full width on small screens */
    margin-bottom: 20px;
  }

  .profile-card {
    width: 100%; /* Full width for profile card */
  }

  /* Reduce font sizes for smaller screens */
  .profile-name {
    font-size: 1.25rem;
  }

  .profile-designation {
    font-size: 0.9rem;
  }

  .profile-caption {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  /* Further adjustments for very small screens */
  .profile-icon {
    width: 50px;
    height: 50px;
  }

  .profile-name {
    font-size: 1.1rem;
  }

  .profile-designation {
    font-size: 0.8rem;
  }

  .profile-caption {
    font-size: 0.85rem;
  }
}
.captin{
  text-align: center;
  justify-content: center;
  width: 300px;
}

.captin .text-captn{
  width: auto;
  justify-content: center;
  text-align: left;
  /* margin-left: 30%; */
}

`;
  return (
    <div>
      <div className="cards">
        <h1>Cards</h1>
        <p>A card can be used to display content related to a single subject. The content can consist of multiple elements of varying types and sizes.</p>
      </div>
      <div className="card-main">
      <div class="newclass-profile-section">
        {/* <!-- Left side image --> */}
        <div class="newclass-profile-image">
          <img src="Images/card-img.jpg" alt="Left Side Image" />
        </div>

        {/* <!-- Right side profile card --> */}
        <div class="newclass-profile-card">
          <div class="newclass-profile-header">
            <img src="Images/card-icon.jfif" alt="Profile Icon" class="newclass-profile-icon" />
            <div class="newclass-profile-info">
              <h2 class="newclass-profile-name">A day under the sun</h2>
              <p class="newclass-profile-designation">By Sue, Jun 3 2023</p>
            </div>
          </div>
          <div class="newclass-profile-caption">
            <p>
              After a walk through history, there is nothing left to do but admire the hypnotizing landscapes that exist in every direction. From vast deserts to rainbow mountains, and everything in between.
            </p>
          </div>
        </div>
      </div>

      </div>

      <div className="card-content">
        <h2>Variations</h2>
        <h4>Basic Card</h4>

        <div className="code-cont">
    <CodePre htmlCode={htmlCode} reactCode={reactCode}/>
    </div>

<div className="card-cont">

        <div className='captin'>
          <div className="text-captn">
            <h3>Something to remember</h3>
            <p>All components can be copied and pasted and easily implemented in your tailwind css projects. You can either copy all the components in the preview window from the copy icon on the top right corner in the code blocks or
              just hover and click on the one component you need and paste it on your project.</p>
          </div>
        </div>
      </div>
</div>


    </div>
  )
}
