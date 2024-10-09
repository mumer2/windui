import React from 'react'
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
