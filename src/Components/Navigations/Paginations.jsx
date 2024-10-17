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

const cssCode = `.paginations {
  margin-top: 15%;
  margin-left: 2%;
  color: rgb(101, 86, 86);
}
.paginations h1 {
  font-size: 1.875rem; /* 30px */
  line-height: 2.25rem; /* 36px */
  font-weight: 600;
  color: rgb(71, 85, 105);
}
.paginations h2 {
  font-size: 1.8rem; /* 28px */
  line-height: 2.25rem; /* 36px */
  font-weight: 400;
  color: rgb(71, 85, 105);
}
.paginations h4 {
  font-size: 18px;
  line-height: 2.25rem; /* 36px */
  font-weight: 600;
  color: rgb(71, 85, 105);
}
.page-cont {
  border: 1px solid rgb(227, 227, 227);
  border-radius: 10px;
  margin: 20px;
  padding: 50px;
  box-sizing: border-box;
}

.pagenumber {
  margin-top: 2%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  cursor: pointer;
  color: rgb(100, 116, 139);
}

.pagenumber .pg1:hover {
  color: #02b583;
}

.pagenumber .Active:hover {
  color: #ffffff;
  background-color: #018156;
}

.pagenumber .Active {
  background-color: #02b583;
  color: white;
  padding: 6px 20px;
  border-radius: 5px;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .paginations {
    margin-top: 10%;
    margin-left: 5%;
  }

  .paginations h1, .paginations h2, .paginations h4 {
    font-size: 1.5rem;
  }

  .page-cont {
    margin: 15px;
    padding: 20px;
  }

  .pagenumber {
    gap: 15px;
    padding: 10px;
  }

  .pagenumber .Active {
    padding: 4px 15px;
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .paginations {
    margin-top: 5%;
    margin-left: 3%;
  }

  .paginations h1, .paginations h2, .paginations h4 {
    font-size: 1.2rem;
  }

  .page-cont {
    margin: 10px;
    padding: 15px;
  }

  .pagenumber {
    gap: 10px;
    flex-direction: column;
    padding: 5px;
  }

  .pagenumber .Active {
    padding: 3px 10px;
    font-size: 12px;
  }
}`;
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
    <CodePre htmlCode={htmlCode} reactCode={reactCode} cssCode={cssCode}/>
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
