import React from 'react'
import CodePre from '../General/CodePre'
import OpenModal from './OpenModal'

export const Modals = () => {
    const htmlCode = `  <div className="App">
      <button onClick={openModal} className="openModalBtn">
        Open Modal
      </button>

      {isModalOpen && (
        <div className="modal">
          <div className="modalContent">
            <span className="closeBtn" onClick={closeModal}>
              &times;
            </span>
            <h3>Terms and Conditions</h3>
                <p>A Terms and Conditions agreement is where you let the public know the terms, rules and guidelines for using your website or mobile app. They include topics such as acceptable use, restricted behavior and limitations of liability</p>
          </div>
        </div>
      )}
    </div>
    `;
  
  const reactCode = `import React, { useState } from "react";

function OpenModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <button onClick={openModal} className="openModalBtn">
        Open Modal
      </button>

      {isModalOpen && (
        <div className="modal">
          <div className="modalContent">
            <span className="closeBtn" onClick={closeModal}>
              &times;
            </span>
            <h3>Terms and Conditions</h3>
                <p>A Terms and Conditions agreement is where you let the public know the terms, rules and guidelines for using your website or mobile app. They include topics such as acceptable use, restricted behavior and limitations of liability</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default OpenModal;

`;
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

            <div className="code-cont">
    <CodePre htmlCode={htmlCode} reactCode={reactCode}/>
    </div>
            <div className="open-cont">
                <OpenModal />
            </div>
        </div>
    )
}
