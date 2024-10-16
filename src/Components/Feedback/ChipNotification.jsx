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
    <CodePre htmlCode={htmlCode} reactCode={reactCode}/>
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
