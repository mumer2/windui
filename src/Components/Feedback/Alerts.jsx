import React from 'react'
import CodePre from '../General/CodePre'

export const Alerts = () => {
    const htmlCode = `  <div className="alert-box2">
            <div className="alert-content">
            <b> Success! You have installed Tailwind CSS</b>
            </div>
            <div className="alert-content warn">
            <b>Warning! Tailwind CSS requires latest version of PostCSS</b>
            </div>
            <div className="alert-content tps">
            <b>Tip! Install Tailwind CSS IntelliSense</b>
            </div>
            <div className="alert-content danger">
            <b>Danger! Look behind you</b>
            </div><div className="alert-content welcm">
            <b>Welcome! Wind UI greets you</b>
            </div>
        </div>
    `;
  
  const reactCode = `  import React from 'react'
import CodePre from '../General/CodePre'

export const Alerts = () => {
    return(
  <div className="alert-box2">
            <div className="alert-content">
            <b> Success! You have installed Tailwind CSS</b>
            </div>
            <div className="alert-content warn">
            <b>Warning! Tailwind CSS requires latest version of PostCSS</b>
            </div>
            <div className="alert-content tps">
            <b>Tip! Install Tailwind CSS IntelliSense</b>
            </div>
            <div className="alert-content danger">
            <b>Danger! Look behind you</b>
            </div><div className="alert-content welcm">
            <b>Welcome! Wind UI greets you</b>
            </div>
        </div>
`;

const cssCode = `.alerts{
  margin-top: 15%;
  margin-left: 2%;
  color: rgb(123, 112, 112);
  font-size: 18px;
}
.alerts h1{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 600;
}
.alerts h2{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.8rem;
  line-height: 2.25rem;
  font-weight: 400;
}
.alerts h4{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  line-height: 2.25rem;
  font-weight: 600;
}
.alert-box{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 10%;
  margin-left: 10px;
  margin-right: 10px;
  padding: 30px;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: white;
  border: 1px solid rgb(218, 215, 215);
  border-radius: 10px;
}
.alert-box  .alert-content{
  color: #02b583;
  background-color: #e5f2ee;
  padding: 20px;
  border-radius: 10px;
  margin: 30px;
}
.alert-content p{
  color: #02b583;
  font-size: 16px;
  margin-left: 20px;
}
.alert-content b{
  font-size: 14px;
}
.alert-box2{
  text-align: center;
  justify-content: center;
  margin-top: 10%;
  border: 1px solid rgb(227, 225, 225);
  margin: 30px;
  border-radius: 10px;
}
.alert-box2  .alert-content{
  line-height: 50px;
  color: #02b583;
  margin-top: 5%;
  background-color: #ebf8f4;
  border: 1px solid #daf8ef;
  margin-left: 12%;
  margin-right: 12%;
  text-align: left;
  justify-content: left;
  padding-left: 20px;
  border-radius: 5px;
}
.alert-box2 .warn{
  color: rgb(230, 109, 10);
  border: 1px solid rgb(245, 229, 216);
  background-color: rgb(239, 236, 232);
  border-radius: 5px;
}
.alert-box2 .tps{
  color: rgb(66, 153, 219);
  border-radius: 5px;
}
.alert-box2.danger{
  color: palevioletred;
  border-radius: 5px;
}
.alert-box2 .welcm{
  color: white;
  background-color: rgba(0, 0, 0, 0.628);
  border-radius: 5px;
  margin-bottom: 20px;
}`;
  return (
    <div>
        <div className="alerts">
            <h1>Alerts</h1>
            <p>An alert is an element that displays a brief, important message in a way that attracts the user's attention without interrupting the user's task.</p>
        </div>


        <div className="alert-box">
            <div className="alert-content">
            <i class="fa-regular fa-circle-check"></i> <b> All components are now published.</b>
                <p>You successfully read this important alert message. Green often indicates something successful or positive.</p>
            </div>
        </div>


        <div className="alerts">
            <h2>Variations</h2>
            <h4>Simple alerts</h4>
        </div>

        <div className="code-cont">
    <CodePre htmlCode={htmlCode} reactCode={reactCode} cssCode={cssCode}/>
    </div>

        <div className="alert-box2">
            <div className="alert-content">
            <b> Success! You have installed Tailwind CSS</b>
            </div>
            <div className="alert-content warn">
            <b>Warning! Tailwind CSS requires latest version of PostCSS</b>
            </div>
            <div className="alert-content tps">
            <b>Tip! Install Tailwind CSS IntelliSense</b>
            </div>
            <div className="alert-content danger">
            <b>Danger! Look behind you</b>
            </div><div className="alert-content welcm">
            <b>Welcome! Wind UI greets you</b>
            </div>
        </div>
    </div>
  )
}
