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

const cssCode = `.modals{
  margin-top: 15%;
  margin-left: 2%;
  color: rgb(120, 107, 107);
}
.modals h1{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 600;
}
.modals h2{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.8rem;
  line-height: 2.25rem;
  font-weight: 400;
}
.modals h4{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  line-height: 2.25rem;
  font-weight: 600;
}
.modal-cont{
  justify-content: center;
  display: flex;
  margin-top: 10%;
  border: 1px solid rgb(224, 223, 223);
  border-radius: 10px;
  margin: 20px;
  padding: 50px;
}
.modal-menu{
  display: flex;
  flex-wrap: wrap;
  max-width: 700px;
  border: 1px solid rgb(235, 235, 235);
  padding: 10px;
  color: rgb(100 ,116, 139);
  border-radius: 10px;
}

.modal-menu .m-b1{
  background-color: #02b583;
  border: none; 
  color: white;
  padding: 10px;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
}
.modal-menu .m-b1:hover{
  background-color: #018156;
}
.modal-menu .m-b2{
  color: #02b583;
  border: none; 
  background-color: white;
  margin-left: 2%;
  padding: 10px;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
}
.modal-menu .m-b2:hover{
  background-color: #98e0dd;
}




/* Open Modal */

.openModalBtn {
  padding: 10px 20px;
  background-color:#03a670;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 8px;
}

.openModalBtn:hover {
  background-color:#018156;
}

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modalContent {
  position: relative;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  width: 80%;
  max-width: 500px;
  color: rgb(122, 110, 110);
}

.closeBtn {
  position: absolute;
  top: 10px;
  right: 15px;
  color: #aaa;
  font-size: 24px;
  cursor: pointer;
  padding: 8px;
  border-radius: 50px;
}

.closeBtn:hover {
  color: #000;
  background-color: #94e9cd;
}

.open-cont{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border: 1px solid rgb(217, 216, 216);
  border-radius: 10px;
  padding: 40px;
}`;
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
    <CodePre htmlCode={htmlCode} reactCode={reactCode} cssCode={cssCode}/>
    </div>
            <div className="open-cont">
                <OpenModal />
            </div>
        </div>
    )
}
