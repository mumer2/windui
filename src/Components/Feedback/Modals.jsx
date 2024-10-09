import React from 'react'
import CodePreview from '../General/CodePreview'
import OpenModal from './OpenModal'

export const Modals = () => {
    return (
        <div>
            <div className="modals">
                <h1>Modals</h1>
                <p>Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.</p>
            </div>

            <div className="modal-cont">
                <div className="modal-menu">
                    <h3>Terms and Conditions</h3>
                    <p>A Terms and Conditions agreement is where you let the public know the terms, rules and guidelines for using your website or mobile app. They include topics such as acceptable use, restricted behavior and limitations of liability</p>
                    <button className='m-b1'>I Accept</button>
                    <button className='m-b2'>I Decline</button>

                </div>
            </div>


            <div className="modals">
                <h2>Variations</h2>
                <h4>Basic Modal </h4>
            </div>

            <CodePreview />

            <div className="open-cont">
                <OpenModal />
            </div>
        </div>
    )
}
