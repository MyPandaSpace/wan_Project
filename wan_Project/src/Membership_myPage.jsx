import { useState } from "react";
import Btn_goTop from "./component/Btn_goTop";
import Footer from "./component/Footer";
import Modal_Message_Confirm from "./component/Modal_Message_Confirm";
import Navbar from "./component/Navbar";
import "./css/Membership_myPage.css";
import { Link } from "react-router-dom";

function Membership_myPage() {
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
    <>
      <Navbar />
      <Btn_goTop />
      <img id="navbar-Bg" src="./src/images/index/navbar_Bg.png" alt="" />

      <div className="home-container">
        {/* 區塊 1分頁 */}
        <main className="member-main">
          <figure id="title">
            <img id="title-img" src='./src/images/Membership/membership_Title.png' alt="title-img" />
          </figure>
          <div id="tabs">
            <img src="./src/images/Membership/btn-items.png" alt="" />
            <Link to="/Membership_myPage"><img src="./src/images/Membership/btn1-tabs.png" alt="" /></Link>
            <Link to="/Membership_myCollection"><img src="./src/images/Membership/btn2-tabs.png" alt="" /></Link>
            <Link to="/Membership_myOrder"><img src="./src/images/Membership/btn3-tabs.png" alt="" /></Link>
            <img src="./src/images/Membership/btn-2items.png" alt="" />
          </div>
        </main>

        {/* 區塊 2會員資訊 */}
        <div className="center-container">
          <section className="info-section">
            <div id="info">
              <img src="./src/images/Membership/info-avatar.png" alt="" />
              <div id="info-icon">
                <img src="./src/images/Membership/info-sliver-medal.png" alt="" />
                <img src="./src/images/Membership/info-bar.png" alt="" />
                <img src="./src/images/Membership/info-gold-medal.png" alt="" />
              </div>
              <p>青銅旅行者- 已完成5個課程</p>
            </div>
          </section>
          <form className="info-form">
            <label htmlFor="name">暱稱</label>
            <input type="text" id="name" name="name" placeholder="" value={"灣灣"} required />

            <label htmlFor="personality">個性</label>
            <input type="text" id="personality" name="personality" placeholder="" value={"愛冒險、愛體驗"} />

            <label htmlFor="quote">名言</label>
            <textarea id="quote" name="quote" rows="4" placeholder="" value={"療癒自己最好的方式是讓心靈安靜，接受一切不完美的美好"} ></textarea>
          </form>
        </div>
        <hr style={{ border: 'none', height: '2px', backgroundColor: '#D9D9D9', width: '80%' }} />

        <div className="info-member">
          <h2>用戶個人資訊</h2>
          <form id="info-form2">
            <div>
              <label htmlFor="name">學員編號</label>
              <input type="text" id="name" name="name" placeholder="" value={"wan007007"} required />
            </div>
            <div>
              <label htmlFor="personality">使用者帳號</label>
              <input type="text" id="personality" name="personality" placeholder="" value={"wan1010"} />
            </div>
            <div>
              <label htmlFor="name">使用者密碼</label>
              <input type="text" id="name" name="name" placeholder="" value={"wan1234567"} required />
            </div>
            <div>
              <label htmlFor="personality">地址</label>
              <input type="text" id="personality" name="personality" placeholder="" value={"100 台北市中正區家家路一段321號6樓54-2"} />
            </div>
            <div>
              <label htmlFor="name">信箱</label>
              <input type="text" id="name" name="name" placeholder="" value={"wanwan@google.com"} required />
            </div>
          </form>
        </div>
        <hr style={{ border: 'none', height: '2px', backgroundColor: '#D9D9D9', width: '80%' }} />

        <div className="info-quest">
          <h2>灣灣留言信箱悄悄話與你的小心願</h2>
          <p>✨ 我們想聽到你的故事，想了解你的成長與挑戰，我們相信每個人都有著獨一無二的經驗值得分享✨ </p>
          <form id="info-form3">
            <div>
              <label htmlFor="name">姓名</label>
              <input type="text" id="name" name="name" placeholder="" value="灣灣" required />
            </div>
            <div>
              <label htmlFor="personality">信箱</label>
              <input type="text" id="personality" name="personality" placeholder="" value="wanwan@gmail.com" required />
            </div>
            <div>
              <label htmlFor="name">留言</label>
              <textarea type="text" id="name" name="name" placeholder="在這裡，你的小心願可能變成一次溫暖的課程體驗；你的分享，可能成為他人生活的燈塔" required />
            </div>
          </form>
        </div>

        <div id="info-form3-btn">
          {/* <img src="./src/images/Membership/btn-submit.png" alt="" /> */}
          <li
            onClick={(e) => { e.preventDefault(); showPopup(); }}
            style={{
              position: 'relative',
              display: 'inline-block',
              width: '160px',
            }}
          >
            <img
              src="./src/images/btn/new-btn1-normal.png"
              alt="submit"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                transition: '0.3s ease',
                cursor: 'pointer'
              }}
              className="apply-btn-img"
              onMouseEnter={() => {
                document.querySelector('.apply-btn-img').src = './src/images/btn/new-btn1-hover.png';  // 切換圖片
                document.querySelector('.apply-btn-text').style.transform = 'top 45%'
              }}
              onMouseLeave={() => {
                document.querySelector('.apply-btn-img').src = './src/images/btn/new-btn1-normal.png';  // 還原
                document.querySelector('.apply-btn-text').style.transform = 'top 45%'
              }}
              onMouseDown={() => {
                document.querySelector('.apply-btn-img').src = './src/images/btn/new-btn1-pressed.png';  // 按下
                document.querySelector('.apply-btn-text').style.transform = 'top 50%';
              }}
              onMouseUp={() => {
                document.querySelector('.apply-btn-img').src = './src/images/btn/new-btn1-normal.png';  // 放開
                document.querySelector('.apply-btn-text').style.transform = 'top 45%'
              }}
            />
            <span
              style={{
                position: 'absolute',
                top: '45%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: '#1684C8',
                fontSize: '20px',
                textAlign: 'center',
                whiteSpace: 'nowrap',
                cursor: 'pointer'
              }}
              className="apply-btn-text"
              onMouseEnter={() => {
                document.querySelector('.apply-btn-img').src = './src/images/btn/new-btn1-hover.png';  // 切換圖片
                document.querySelector('.apply-btn-text').style.transform = 'top 45%'
              }}
              onMouseLeave={() => {
                document.querySelector('.apply-btn-img').src = './src/images/btn/new-btn1-normal.png';  // 還原
                document.querySelector('.apply-btn-text').style.transform = 'top 45%'
              }}
              onMouseDown={() => {
                document.querySelector('.apply-btn-img').src = './src/images/btn/new-btn1-pressed.png';  // 按下
                document.querySelector('.apply-btn-text').style.transform = 'top 50%';
              }}
              onMouseUp={() => {
                document.querySelector('.apply-btn-img').src = './src/images/btn/new-btn1-normal.png';  // 放開
                document.querySelector('.apply-btn-text').style.transform = 'top 45%'
              }}
            >
              送出
            </span>
            {isPopupVisible && <Modal_Message_Confirm />}
          </li>
        </div>

      </div>
      {/* 底部 */}
      <Footer />
    </>
  );
}

export default Membership_myPage;