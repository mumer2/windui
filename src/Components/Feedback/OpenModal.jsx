import React, { useState } from "react";

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
