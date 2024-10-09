import React from 'react'
import CodePreview from '../General/CodePreview'

export const Alerts = () => {
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

        <CodePreview/>

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
