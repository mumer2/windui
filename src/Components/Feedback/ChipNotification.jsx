import React from 'react'
import CodePre from '../General/CodePre'

export const ChipNotification = () => {
    const htmlCode = `  <div className="chip-cont1">
            <div className="chip-not">
                <button>See whats new</button>
                <h4> Version 3.40 </h4>
                <h4><span className='hide'>With 20 new Components!</span> </h4>

            </div>
            <div className="chip-not">
                <button>See whats new</button>
                <h4> Version 3.40 </h4>
                <h4><span className='hide'>With 20 new Components! </span></h4>

            </div>
            <div className="chip-not">
                <button>veersion 3.40</button>
                <h4> <span className='hide'>With 20 new Components!</span> </h4>
                <h3>Check what's new</h3>

            </div>
            <div className="chip-not">
                <button>veersion 3.40</button>
                <h4> <span className='hide'>With 20 new Components!</span> </h4>
                <h3>Check what's new</h3>

            </div>
        </div>
    `;
  
  const reactCode = ` import React from 'react'
import CodePre from '../General/CodePre'

export const ChipNotification = () => {
    return(
  <div className="chip-cont1">
            <div className="chip-not">
                <button>See whats new</button>
                <h4> Version 3.40 </h4>
                <h4><span className='hide'>With 20 new Components!</span> </h4>

            </div>
            <div className="chip-not">
                <button>See whats new</button>
                <h4> Version 3.40 </h4>
                <h4><span className='hide'>With 20 new Components! </span></h4>

            </div>
            <div className="chip-not">
                <button>veersion 3.40</button>
                <h4> <span className='hide'>With 20 new Components!</span> </h4>
                <h3>Check what's new</h3>

            </div>
            <div className="chip-not">
                <button>veersion 3.40</button>
                <h4> <span className='hide'>With 20 new Components!</span> </h4>
                <h3>Check what's new</h3>

            </div>
        </div>
`;

const cssCode = `.chipnotifications{
  margin-top: 15%;
  margin-left: 2%;
  color: rgb(116, 104, 104);
}
.chipnotifications h1{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 600;
}
.chipnotifications h2{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.8rem;
  line-height: 2.25rem;
  font-weight: 400;
}
.chipnotifications h4{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  line-height: 2.25rem;
  font-weight: 600;
}
.chip-cont{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border: 1px solid rgb(219, 218, 218);
  padding: 50px;
  margin: 20px;
  border-radius: 10px;
}
.chip-cont1{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border: 1px solid rgb(219, 218, 218);
  padding: 50px;
  margin: 20px;
  border-radius: 10px;
  row-gap: 30px;
  background-color: white;
}
.chip-cont1 .chip-not{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  border: 1px solid rgb(228, 219, 219);
  
}
.chip-cont .chip-not{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  border: 1px solid rgb(228, 219, 219);
  
}
.chip-not button{
  background-color: #02b583;
  border: none;
  color: white;
  height: 40px;
  margin-top: 10px;
  border-radius: 6px;
  padding: 10px;
  cursor: pointer;
}
.chip-not button:hover{
  background-color: #018156;
}
.chip-not h4{
  color: rgb(100 ,116, 139);
  font-weight: 600;
}
.chip-not h3{
  color:#02b583;
  cursor: pointer;
  font-weight: 600;
}`;
  return (
    <div>
        <div className="chipnotifications">
            <h1>Chip Notifications</h1>
            <p>Compact elements that allow to highlight meaningful information, or direct users to important content.</p>
        </div>

        <div className="chip-cont">
            <div className="chip-not">
                <button>veersion 3.40</button>
                <h4> <span className='hide'>With 20 new Components!</span> </h4>
                <h3>Check what's new</h3>

            </div>
        </div>

        <div className="chipnotifications">
            <h2>Variations</h2>
            <h4>Chip notifications with leading button</h4>
        </div>

        <div className="code-cont">
    <CodePre htmlCode={htmlCode} reactCode={reactCode} cssCode={cssCode}/>
    </div>


        <div className="chip-cont1">
            <div className="chip-not">
                <button>See whats new</button>
                <h4> Version 3.40 </h4>
                <h4><span className='hide'>With 20 new Components!</span> </h4>

            </div>
            <div className="chip-not">
                <button>See whats new</button>
                <h4> Version 3.40 </h4>
                <h4><span className='hide'>With 20 new Components! </span></h4>

            </div>
            <div className="chip-not">
                <button>veersion 3.40</button>
                <h4> <span className='hide'>With 20 new Components!</span> </h4>
                <h3>Check what's new</h3>

            </div>
            <div className="chip-not">
                <button>veersion 3.40</button>
                <h4> <span className='hide'>With 20 new Components!</span> </h4>
                <h3>Check what's new</h3>

            </div>
        </div>

    </div>
  )
}
