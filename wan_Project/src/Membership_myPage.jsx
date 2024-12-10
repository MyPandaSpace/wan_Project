import "./css/Membership.css";
import title from "../src/images/Membership/membership_Title.png";
import footer from "../src/images/index/footer.png";
import { Link } from "react-router-dom";

function Membership_myPage() {
  return (
    <>
      <header id='navbar'>
        <img id="logo" src="../src/images/index/logo.svg" alt="logo" />
        <div id='icon'>
          <img id="icon-Member" src="../src/images/index/icon-Member.svg" alt="Member" />
          <img id="icon-Hamburger" src="../src/images/index/icon-Hamburger.svg" alt="Hamburger" />
        </div>
      </header>
      <img id="navbar-Bg" src="../src/images/index/navbar_Bg.png" alt="" />
      <div className="home-container">
        {/* 區塊 1：導覽列 */}
        <main className="main">
          <figure id="title">
            <img id="title-img" src={title} alt="title-img" />
          </figure>
          <div id="tabs">
            <img src="../src/images/Membership/btn-items.png" alt="" />
            <img src="../src/images/Membership/btn-tabs.png" alt="" />
            <img src="../src/images/Membership/btn2-tabs.png" alt=""/>
            <img src="../src/images/Membership/btn3-tabs.png" alt="" />
            <img src="../src/images/Membership/btn-2items.png" alt="" />
          </div>
        </main>

        {/* 區塊 2：會員資訊 */}
        <div className="center-container">
          <section className="info-section">
            <div id="info">
              <img src="../src/images/Membership/info-avatar.png" alt="" />
              <div id="info-icon">
                <img src="../src/images/Membership/info-sliver-medal.png" alt="" />
                <img src="../src/images/Membership/info-bar.png" alt="" />
                <img src="../src/images/Membership/info-gold-medal.png" alt="" />
              </div>
              <p>青銅旅行者- 已完成5個課程</p>
            </div>
          </section>
          <form className="info-form">
            <label for="name">暱稱:</label>
            <input type="text" id="name" name="name" placeholder="" value={"灣灣"} required />

            <label for="personality">個性:</label>
            <input type="text" id="personality" name="personality" placeholder="" value={"愛冒險、愛體驗"} />

            <label for="quote">名言:</label>
            <textarea id="quote" name="quote" rows="4" placeholder="" value={"療癒自己最好的方式是讓心靈安靜，接受一切不完美的美好"} ></textarea>
          </form>
        </div>
        <hr />

        <div className="info-member">
          <h2>用戶個人資訊</h2>
          <form id="info-form2">
            <div>
              <label for="name">學員編號:</label>
              <input type="text" id="name" name="name" placeholder="" value={"wan007007"} required />
            </div>
            <div>
              <label for="personality">使用者帳號:</label>
              <input type="text" id="personality" name="personality" placeholder="" value={"wan1010"} />
            </div>
            <div>
              <label for="name">使用者密碼:</label>
              <input type="text" id="name" name="name" placeholder="" value={"wan1234567"} required />
            </div>
            <div>
              <label for="personality">地址:</label>
              <input type="text" id="personality" name="personality" placeholder="" value={"100台北市中正區濟南路一段321號 6樓603"} />
            </div>
            <div>
              <label for="name">信箱:</label>
              <input type="text" id="name" name="name" placeholder="" value={"wanwan@google.com"} required />
            </div>
          </form>
        </div>
        <hr />

        <div className="info-quest">
          <h2>灣灣留言信箱：悄悄話與你的小心願</h2>
          <p>✨ 我們想聽到你的故事，想了解你的成長與挑戰，我們相信每個人都有著獨一無二的經驗值得分享✨ </p>
          <form id="info-form3">
            <div>
              <label for="name">姓名:</label>
              <input type="text" id="name" name="name" placeholder="" required />
            </div>
            <div>
              <label for="personality">信箱:</label>
              <input type="text" id="personality" name="personality" placeholder="" required />
            </div>
            <div>
              <label for="name">留言:</label>
              <textarea type="text" id="name" name="name" placeholder="在這裡，你的小心願可能變成一次溫暖的課程體驗；你的分享，可能成為他人生活的燈塔" required />
            </div>
          </form>
        </div>

        <div id="info-form3-btn">
          <img src="../src/images/Membership/btn-submit.png" alt="" />
        </div>

      </div>
      {/* 底部 */}
      <footer id='footer'>
        <div>
          <img src={footer} alt="Footer" />
          <div id='footer-a'>
            <a href="/">首頁</a>
            <a href="/Event">探索體驗村</a>
            <a href="">心途之灣</a>
            <a href="">關於我們</a>
            <a href="/Membership">會員中心</a>
            <a href="">常見問題</a>
          </div>
          <small id='copyright'>© 2024 灣 Wan. All rights reserved.</small>
        </div>
      </footer>
    </>
  );
}

export default Membership_myPage;