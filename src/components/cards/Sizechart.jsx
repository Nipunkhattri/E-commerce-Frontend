import React, { useState } from 'react';
import './Sizechart.css'; // You can create a separate CSS file for styling

function TextWithImageModal({ text, imageUrl }) {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="text-with-image-container">
      <p onClick={openModal}>{text}</p>

      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <img src={imageUrl} alt="Modal" />
          </div>
        </div>
      )}
    </div>
  );
}

export default TextWithImageModal;
