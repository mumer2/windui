import React from 'react'
import CodePre from '../General/CodePre'
import { Notifi } from './Notifi'

export const Notifications = () => {
    const htmlCode = `  <div className='note-main'>
        <div class="notification-box">
  <div class="notification-header">
    <i class="icon-lightning"></i>
     {/* <!-- You can use a suitable icon or emoji --> */}
     <i class="fa-solid fa-bolt"></i>
    <span className='not-main'>Retrying in 5 sec</span>
    <span class="close-btn">&times;</span>
  </div>
  <div class="notification-body">
    <p>An error occurred. Check your disk space and make sure you have enough space.</p>
  </div>
  <div class="notification-footer">
    <button class="proceed-btn">proceed</button>
    <button class="undo-btn">undo</button>
  </div>
</div>

    </div>
    `;
  
  const reactCode = `import React from 'react'
import './Notif.css';
export const Notifi = () => {
  return (
    <div className='note-main'>
        <div class="notification-box">
  <div class="notification-header">
    <i class="icon-lightning"></i>
     {/* <!-- You can use a suitable icon or emoji --> */}
     <i class="fa-solid fa-bolt"></i>
    <span className='not-main'>Retrying in 5 sec</span>
    <span class="close-btn">&times;</span>
  </div>
  <div class="notification-body">
    <p>An error occurred. Check your disk space and make sure you have enough space.</p>
  </div>
  <div class="notification-footer">
    <button class="proceed-btn">proceed</button>
    <button class="undo-btn">undo</button>
  </div>
</div>

    </div>
  )
}

`;
    return (
        <div>
            <div className="notifications">
                <h1>Notifications</h1>
                <p>The notification component is a user interface element that displays brief, informative messages to users. It is typically used to provide feedback or notifications about the status of an action or to display important information.</p>
            </div>

            <div className="note-cont">
                <Notifi />
            </div>



            <div className="notifications">
                <h2>Variations</h2>
                <h4>Dark Themed Notifications</h4>
            </div>

            <div className="code-cont">
    <CodePre htmlCode={htmlCode} reactCode={reactCode}/>
    </div>

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
