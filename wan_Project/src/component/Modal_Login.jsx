import React from "react";
import "../css/Modal_Login.css"; // 將您的 CSS 匯入

const Modal_Login = ({ show, onClose }) => {
  if (!show) return null; // 如果彈窗不顯示，返回 null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>開啟視窗區域</h2>
          <button className="modal-close" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="modal-content">
          <p style={{ textAlign: "center" }}>
            <img src="./images/01.jpg" alt="" style={{ width: "50%" }} />
          </p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, debitis.</p>
        </div>
      </div>
    </div>
  );
};

export default Modal_Login;
