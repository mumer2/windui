import React from 'react'
import CodePreview from '../General/CodePreview'

export const ChipNotification = () => {
  return (
    <div>
        <div className="chipnotifications">
            <h1>Chip Notifications</h1>
            <p>Compact elements that allow to highlight meaningful information, or direct users to important content.</p>
        </div>

        <div className="chip-cont">
            <div className="chip-not">
                <button>veersion 3.40</button>
                <h4> With 20 new Components! </h4>
                <h3>Check what's new</h3>

            </div>
        </div>

        <div className="chipnotifications">
            <h2>Variations</h2>
            <h4>Chip notifications with leading button</h4>
        </div>

        <CodePreview/>


        <div className="chip-cont">
            <div className="chip-not">
                <button>See whats new</button>
                <h4> Version 3.40 </h4>
                <h4>With 20 new Components! </h4>

            </div>
        </div>
        <div className="chip-cont">
            <div className="chip-not">
                <button>See whats new</button>
                <h4> Version 3.40 </h4>
                <h4>With 20 new Components! </h4>

            </div>
        </div>
        <div className="chip-cont">
            <div className="chip-not">
                <button>veersion 3.40</button>
                <h4> With 20 new Components! </h4>
                <h3>Check what's new</h3>

            </div>
        </div>
        <div className="chip-cont">
            <div className="chip-not">
                <button>veersion 3.40</button>
                <h4> With 20 new Components! </h4>
                <h3>Check what's new</h3>

            </div>
        </div>

    </div>
  )
}
