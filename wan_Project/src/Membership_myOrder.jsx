import "./css/Membership_myOrder.css";
import title from "../src/images/Membership/membership_Title.png";
import footer from "../src/images/index/footer.png";
import { Link } from "react-router-dom";

export default function Membership_myOrder() {
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
            <Link to="/Membership_myPage"><img src="../src/images/Membership_myOrder/btn1-tabs.png" alt="" /></Link>
            <Link to="/Membership_myCollection"><img src="../src/images/Membership_myOrder/btn2-tabs.png" alt="" /></Link>
            <Link to="/Membership_myOrder"><img src="../src/images/Membership_myOrder/btn3-tabs.png" alt="" /></Link>
            <img src="../src/images/Membership/btn-2items.png" alt="" />
          </div>
        </main>

        {/* 區塊 2：訂單紀錄 */}
        <div id="title-Order">
          <h2>活動訂單記錄</h2>
        </div>
        <section id="uncomplete_Order">
          <div id='row-event_Order'>
            <div id='column-event_Order'>
              <img src="../src/images/Event/event_Image.png" alt="" />
              <small>2025.01.25（六）14:00～16:00</small>
              <h2>【過年限定】紙韻心意剪紙活動</h2>
              <p1>NT$ 500 元/人</p1>
              <hr />
              <div id='event-Tags'>
                <p>#台北市</p>
                <p>#藝術創作</p>
              </div>
            </div>
          </div>
        </section>
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
            <a href="/Membership_myPage">會員中心</a>
            <a href="">常見問題</a>
          </div>
          <small id='copyright'>© 2024 灣 Wan. All rights reserved.</small>
        </div>
      </footer>
    </>
  );
}