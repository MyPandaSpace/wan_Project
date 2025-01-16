import React from 'react';
import './Modal_Cancel_Confirm.css'; // 引入樣式檔案

const Modal_Cancel_Confirm = ({ closeModal, showSuccessModal }) => {
  const confirmAction = () => {
    console.log("確定執行動作");
    showSuccessModal(); // 顯示已取消訂單的彈窗
    closeModal(); // 關閉當前的彈窗
  };

  return (
    <>
      <div className="overlay">
        <div className="Modal_Confirm_popup">
          <img src="./src/images/Membership_myOrder/Cancel_Confirm.png" alt="Popup Image" />
        </div>
        <div id="Modal_Confirm_button">
          <button id='Confirm_Yes' onClick={confirmAction}>是</button>
          <button id='Confirm_No' onClick={closeModal}>否</button>
        </div>
      </div>
    </>
  );
};

export default Modal_Cancel_Confirm;
