import React from 'react'
import CodePreview from '../General/CodePreview'

export const Paginations = () => {
  return (
    <div>
        <div className="paginations">
            <h1>Paginations</h1>
            <p>Pagination communicates the number of elements (pages, posts etc) that can be loaded within a given context. It shows the current position and enables direct access to previous and subsequent content items.</p>
        </div>


        <div className="pagenumber">
            <div className="pg1"><i class="fa-solid fa-angles-left"></i></div>
            <div className="pg1"><i class="fa-solid fa-angle-left"></i></div>
            <div className="pg1"> <span className='hide'>1</span></div>
            <div className="pg1"><span className='hide Active'>2</span></div>
            <div className="pg1"><span className='hide'>3</span></div>
            <div className="pg1"><span className='hide'>...</span></div>
            <div className="pg1"><span className='hide'>97</span></div>
            <div className="pg1"><span className='hide'>98</span></div>
            <div className="pg1"><span className='hide'>99</span></div>
            <div className="pg1"><i class="fa-solid fa-angle-right"></i></div>
            <div className="pg1"><i class="fa-solid fa-angles-right"></i></div>

        </div>

        <div className="paginations">
            <h2>Variations</h2>
            <h4>Primary Pagination</h4>
            <p>Staring from top, basic pagination, pagination with all options, pagination with helper text and elevated pagination.</p>
        </div>

        <CodePreview/>


        <div className="pagenumber">
            <div className="pg1"><i class="fa-solid fa-angle-left"></i></div>
            
            <div className="pg1"><span className='hide'>1</span></div>
            <div className="pg1"><span className='hide'>2</span></div>
            <div className="pg1"><span className='hide Active'>3</span></div>
            <div className="pg1"><span className='hide'>4</span></div>
            <div className="pg1"><span className='hide'>5</span></div>
            
            <div className="pg1"><i class="fa-solid fa-angle-right"></i></div>

        </div>


        <div className="pagenumber">
            <div className="pg1"><i class="fa-solid fa-angles-left"></i></div>
            <div className="pg1"><i class="fa-solid fa-angle-left"></i></div>
            <div className="pg1"> <span className='hide'>1</span></div>
            <div className="pg1"><span className='hide Active'>2</span></div>
            <div className="pg1"><span className='hide'>3</span></div>
            <div className="pg1"><span className='hide'>...</span></div>
            <div className="pg1"><span className='hide'>97</span></div>
            <div className="pg1"><span className='hide'>98</span></div>
            <div className="pg1"><span className='hide'>99</span></div>
            <div className="pg1"><i class="fa-solid fa-angle-right"></i></div>
            <div className="pg1"><i class="fa-solid fa-angles-right"></i></div>

        </div>
    </div>
  )
}
