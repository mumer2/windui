import React from 'react'
import CodePre from '../General/CodePre'

export const Paginations = () => {
    const htmlCode = `
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
    `;
  
  const reactCode = `import React from 'react'
import CodePre from '../General/CodePre'

export const Paginations = () => {
    return(
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
`;
  return (
    <div>
        <div className="paginations">
            <h1>Paginations</h1>
            <p>Pagination communicates the number of elements (pages, posts etc) that can be loaded within a given context. It shows the current position and enables direct access to previous and subsequent content items.</p>
        </div>

<div className="page-cont">


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
        <div className="paginations">
            <h2>Variations</h2>
            <h4>Primary Pagination</h4>
            <p>Staring from top, basic pagination, pagination with all options, pagination with helper text and elevated pagination.</p>
        </div>

        <div className="code-cont">
    <CodePre htmlCode={htmlCode} reactCode={reactCode}/>
    </div>

<div className="page-cont">

        <div className="pagenumber">
            <div className="pg1"><i class="fa-solid fa-angle-left"></i></div>
            
            <div className="pg1"><span className='hide'>1</span></div>
            <div className="pg1"><span className='hide'>2</span></div>
            <div className="pg1"><span className='hide Active'>3</span></div>
            <div className="pg1"><span className='hide'>4</span></div>
            <div className="pg1"><span className='hide'>5</span></div>
            
            <div className="pg1"><i class="fa-solid fa-angle-right"></i></div>

        </div>
<br/><br/>

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
    </div>
  )
}
