import React, { useEffect, useState } from 'react';
import './Modal_Confirm.css'; // 引入樣式檔案

const Modal_Confirm = () => {
  const [isVisible, setIsVisible] = useState(true); // 控制彈出視窗顯示與否

  // 3秒後隱藏彈出視窗
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false); // 設定為隱藏
    }, 2000); // 設定3秒後關閉彈出視窗

    // 清除定時器
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isVisible && (
        <div className="overlay">
          <div className="Modal_Confirm_popup">
            <img src="./src/images/Apply_Page/Message_Confirm.png" alt="Popup Image" />
          </div>
        </div>
      )}
    </>
  );
};

export default Modal_Confirm;
