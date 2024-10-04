import React from 'react'
import CodePreview from '../General/CodePreview'

export const SearchInputs = () => {
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
            <CodePreview/>


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
