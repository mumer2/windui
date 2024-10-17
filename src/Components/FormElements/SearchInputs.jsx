import React from 'react'
import CodePre from '../General/CodePre'

export const SearchInputs = () => {
    const htmlCode = `   <div className="searchboxes">
           
           
        <div class="search-box">
    <input type="search" class="search-input" placeholder="Search here" />
            <button class="search-button">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
             </button>
        </div>
           
                  </div>
    `;
  
  const reactCode = ` import React from 'react'
import CodePre from '../General/CodePre'

export const SearchInputs = () => {
    return(
   <div className="searchboxes">
           
           
        <div class="search-box">
    <input type="search" class="search-input" placeholder="Search here" />
            <button class="search-button">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
             </button>
        </div>
           
                  </div>
)
}                  
`;

const cssCode = `.searchinputs {
  margin-top: 15%;
  margin-left: 2%;
  color: rgb(101, 93, 93);
  font-size: 18px; /* Default font size */
}

.searchinputs h1,
.searchinputs h2,
.searchinputs h4 {
  color: rgb(71, 85, 105);
  line-height: 2.25rem; /* Line height for headings */
}

.searchinputs h1 {
  font-size: 1.875rem; /* Heading size */
  font-weight: 600; /* Bold weight */
}

.searchinputs h2 {
  font-size: 1.8rem; /* Subheading size */
  font-weight: 400; /* Normal weight */
}

.searchinputs h4 {
  font-size: 18px; /* Heading size */
  font-weight: 600; /* Bold weight */
}

.searchboxes {
  display: flex; /* Flexbox layout */
  flex-wrap: wrap; /* Allow wrapping */
  justify-content: space-around; /* Space around items */
  border: 1px solid rgb(227, 227, 227);
  padding: 60px; /* Padding inside the boxes */
  margin: 20px; /* Margin around the boxes */
  border-radius: 10px; /* Rounded corners */
}

/* Search Box Styles */
.search-box,
.search-box2 {
  display: flex; /* Flexbox layout */
  align-items: center; /* Center items vertically */
  border-radius: 8px; /* Rounded corners */
  padding: 5px; /* Padding inside the box */
  width: 300px; /* Fixed width */
  border: 1px solid rgb(227, 227, 227);
}

/* Hover effects */
.search-box:hover {
  border: 1px solid #018156; /* Change border color on hover */
}

.search-box2:hover {
  border-bottom: 1px solid #018156; /* Change border color on hover */
}

/* Input and Button Styles */
.search-input {
  border: none; /* Remove border */
  outline: none; /* Remove outline */
  flex: 1; /* Allow input to take remaining space */
  padding: 8px; /* Padding inside the input */
}

.search-button {
  background: none; /* Remove background */
  border: none; /* Remove border */
  cursor: pointer; /* Pointer cursor on hover */
  padding: 5px; /* Padding inside button */
}

.search-button .icon {
  width: 20px; /* Icon width */
  height: 20px; /* Icon height */
  color: #888; /* Icon color */
}

/* Responsive Design for Small Devices */
@media (max-width: 600px) {
  .searchboxes {
    flex-direction: column; /* Stack items vertically */
    align-items: center; /* Center items */
    padding: 20px; /* Reduced padding for smaller screens */
    gap: 30px;
  }
  
  .search-box,
  .search-box2 {
    width: 100%; /* Full width on small screens */
    margin-bottom: 20px; /* Space between stacked items */
  }
}`;

  return (
    <div>
        <div className="searchinputs">
            <h1>Search Inputs</h1>
            <p>Allow users to enter search queries and receive relevant results with the search input field</p>
        </div>

        <div className="searchboxes">
           
           
        <div class="search-box">
    <input type="search" class="search-input" placeholder="Search here" />
            <button class="search-button">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
             </button>
        </div>
           
                  </div>


        <div className="searchinputs">
            <h2>Variations</h2>
            <h4>Basic Search Input</h4>
        </div>
        <div className="code-cont">
    <CodePre htmlCode={htmlCode} reactCode={reactCode} cssCode={cssCode}/>
    </div>


            <div className="searchboxes">
           
           
           <div class="search-box2">
            <input type="search" class="search-input" placeholder="Search here" />
               <button class="search-button">
           <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
               <circle cx="11" cy="11" r="8"></circle>
               <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
           </svg>
                </button>
           </div>

           <div class="search-box2">
            <input type="search" class="search-input" placeholder="Search here" />
               <button class="search-button">
           <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
               <circle cx="11" cy="11" r="8"></circle>
               <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
           </svg>
                </button>
           </div>

          </div>

    </div>
  )
}
