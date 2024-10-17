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

const cssCode = `.notifications{
  margin-top: 15%;
  margin-left: 2%;
  color: rgb(110, 101, 101);
}
.notifications h1{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 600;
}
.notifications  h2{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.8rem;
  line-height: 2.25rem;
  font-weight: 400;
}
.notifications h4{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  line-height: 2.25rem;
  font-weight: 600;
}
.note-cont{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border: 1px  solid rgb(220, 219, 219);
  border-radius: 10px;
  padding: 40px;
  margin: 20px;
}

.note-data{
  justify-content: center;
  background-color: #2d3748;
  color: white;
  width: 360px;
  border-radius: 10px;
  border: 1px solid black;
  margin-top: 6%;
  padding: 10px;
}
.note-main{
  padding-top: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: white;
  gap: 20px;
}
.note-main p{
  margin-top: 0px;
  color: rgb(236, 233, 233);
}
.note-btn{
  justify-content: left;
  margin-right: 40%;
  gap: 20;
}
.nbtn{
  background-color: gray;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  margin-bottom: 20px;
  border-radius: 6px;
}
.nbtn2{
  background-color: transparent;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  margin-bottom: 20px;
  border-radius: 10px;
  margin-left: 20px;

}
.nbtn:hover{
  background-color: rgb(119, 114, 114);
}
 .nbtn2:hover{
  background-color: rgb(138, 132, 132);
}

.notify {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50%;
}
.notify p{
  color: white;
}
.notify i{
  margin-top: 20px;
}`;
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
    <CodePre htmlCode={htmlCode} reactCode={reactCode} cssCode={cssCode}/>
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
