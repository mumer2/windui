import React from 'react'
import CodePreview from '../General/CodePreview'

export const Notifications = () => {
  return (
    <div>
        <div className="notifications">
            <h1>Notifications</h1>
            <p>The notification component is a user interface element that displays brief, informative messages to users. It is typically used to provide feedback or notifications about the status of an action or to display important information.</p>
        </div>

        <div className="note-cont">
            <div className="note-data">
                <div className="note-main">
                <i class="fa-solid fa-bolt"></i>
                <p>Retrying in 5 sec
                    <br/>
                    An error occurred.Check your disk space <br/>and make sure you have <br/>enough space.
                </p>
                <i class="fa-solid fa-circle-xmark"></i>
                <button className='nbtn'>proceed</button>
                <button className='nbtn2'>undo</button>
                </div>
                

            </div>
        </div>



        <div className="notifications">
            <h2>Variations</h2>
            <h4>Dark Themed Notifications</h4>
        </div>

        <CodePreview/>

        <div className="note-cont">
            <div className="note-data">
                <div className="notify">
                <p>Files Deleted</p>
                <i class="fa-solid fa-circle-xmark"></i>
                </div>
                

            </div>
        </div>
    </div>


  )
}
