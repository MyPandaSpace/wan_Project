import React, { useState } from "react";
import "./css/Modal_Login.css"; // 將您的 CSS 匯入
import { auth, provide } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { Link } from "react-router-dom"
import Modal_Login_Confirm from "./Modal_Login_Confirm";

const Modal_Login = ({ show, onClose, onSwitchToSignUp }) => {
  const [closeButtonImage, setCloseButtonImage] = useState("./src/images/modal_Login/close.png");
  if (!show) return null; // 如果彈窗不顯示，返回 null

  const login = async () => {
    const result = await signInWithPopup(auth, provide)
    console.log(result)
  }

  // State 用來控制彈出視窗是否顯示
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // 顯示彈出視窗
  const showPopup = () => {
    // 顯示彈出視窗
    setIsPopupVisible(true);

    // 設定延遲 3 秒後跳轉
    setTimeout(() => {
      window.location.href = '#/Membership_myPage';
    }, 1500);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>歡迎回來！</h2>
          <button
            className="modal-close"
            onClick={onClose}
            onMouseEnter={() => setCloseButtonImage("./src/images/modal_Login/close_Hover.png")}
            onMouseLeave={() => setCloseButtonImage("./src/images/modal_Login/close.png")}
            onMouseDown={() => setCloseButtonImage("./src/images/modal_Login/close_Pressed.png")}
            onMouseUp={() => setCloseButtonImage("./src/images/modal_Login/close_Hover.png")}
          >
            <img src={closeButtonImage} alt="Close" />
          </button>
        </div>
        <div className="modal-content">
          <h1 style={{ color: "#1684C8", fontWeight: "bold" }}>登入</h1>
          <p>
            <img src="./images/01.jpg" alt="" style={{ width: "50%" }} />
          </p>
          <form id="modal-Form">
            <input type="text" id="name" name="name" placeholder="請輸入Email帳號" value="wanwan@gmail.com" required />
            <input type="password" id="password" name="password" placeholder="請輸入密碼" value="12345678" required />
            <Link to="" style={{ textAlign: "right", fontSize: "12px", color: "grey" }}>忘記密碼?</Link>
            <Link to="/Membership_myPage" className="pay-btn">
              <li
                onClick={(e) => { e.preventDefault(); showPopup(); }}
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  width: '180px',
                }}
              >
                <img
                  src="./src/images/btn/new-btn2-normal.png"
                  alt="Pay now"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    transition: '0.3s ease',
                    cursor: 'pointer'
                  }}
                  className="pay-btn-img"
                  onMouseEnter={() => {
                    document.querySelector('.pay-btn-img').src = './src/images/btn/new-btn2-hover.png';  // 切換圖片
                    document.querySelector('.pay-btn-text').style.transform = 'top 45%'
                  }}
                  onMouseLeave={() => {
                    document.querySelector('.pay-btn-img').src = './src/images/btn/new-btn2-normal.png';  // 還原
                    document.querySelector('.pay-btn-text').style.transform = 'top 45%'
                  }}
                  onMouseDown={() => {
                    document.querySelector('.pay-btn-img').src = './src/images/btn/new-btn2-pressed.png';  // 按下
                    document.querySelector('.pay-btn-text').style.transform = 'top 50%';
                  }}
                  onMouseUp={() => {
                    document.querySelector('.pay-btn-img').src = './src/images/btn/new-btn2-normal.png';  // 放開
                    document.querySelector('.pay-btn-text').style.transform = 'top 45%'
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    top: '45%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: 'white',
                    fontSize: '18px',
                    textAlign: 'center',
                    whiteSpace: 'nowrap',
                    cursor: 'pointer'
                  }}
                  className="pay-btn-text"
                  onMouseEnter={() => {
                    document.querySelector('.pay-btn-img').src = './src/images/btn/new-btn2-hover.png';  // 切換圖片
                    document.querySelector('.pay-btn-text').style.transform = 'top 45%'
                  }}
                  onMouseLeave={() => {
                    document.querySelector('.pay-btn-img').src = './src/images/btn/new-btn2-normal.png';  // 還原
                    document.querySelector('.pay-btn-text').style.transform = 'top 45%'
                  }}
                  onMouseDown={() => {
                    document.querySelector('.pay-btn-img').src = './src/images/btn/new-btn2-pressed.png';  // 按下
                    document.querySelector('.pay-btn-text').style.transform = 'top 50%';
                  }}
                  onMouseUp={() => {
                    document.querySelector('.pay-btn-img').src = './src/images/btn/new-btn2-normal.png';  // 放開
                    document.querySelector('.pay-btn-text').style.transform = 'top 45%'
                  }}
                >
                  登入
                </span>
              </li>
            </Link>
            {isPopupVisible && <Modal_Login_Confirm />}
          </form>
        </div>
        <div id="modal-Footer">
          <p>還沒有加入我們嗎？</p><button onClick={onSwitchToSignUp} style={{ background: "none", border: "none", color: "#1684C8", cursor: "pointer" }}>點我註冊</button>
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
          <button onClick={login} style={{ background: "none", border: "none", cursor: "pointer" }}><img style={{ width: "80px" }} src="./src/images/modal_Login/Google_Icon.png" alt="" /></button>
        </div>
      </div>
    </div>
  );
};

export default Modal_Login;
