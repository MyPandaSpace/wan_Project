import './App.css';
import bg_mountain from "./images/index/bg_mountain.svg";
import bg_1_Filter from './images/index/bg_1_filter.svg';
import footer from './images/index/footer_wan.svg';
import bg_sea from './images/index/bg_sea.svg';

function App() {
  return (
    <>
      {/* 首頁容器 */}
      <div className="home-container">
        <header id='navbar'>
          <img id="logo" src="../src/images/index/logo.svg" alt="logo" />
          <div id='icon'>
            <img id="icon-Member" src="../src/images/index/icon-Member.svg" alt="Member" />
            <img id="icon-Hamburger" src="../src/images/index/icon-Hamburger.svg" alt="Hamburger" />
          </div>
        </header>

        {/* 橫幅 */}
        <main className="banner">
          <img id="bg_sea" src={bg_sea} alt="bg_sea" />
          <img id="bg_mountain" src={bg_mountain} alt="bg_mountain" />
          <img id='circle_ip' src="../src/images/index/circle_ip.svg" alt="circle_ip" />
          <img id='heart_ip' src="../src/images/index/heart_ip.svg" alt="heart_ip" />
          {/* 將背景圖層提升到更靠近頂部 */}
          <div className="background-overlay">
            <img src={bg_1_Filter} alt="Background" />
          </div>
        </main>

        {/* 區塊 2：服務 */}
        <section className="services-section">
          <div className="service1">
            <img src="../src/images/index/service1.svg" alt="" />
            <img src="../src/images/index/service1_detail.svg" alt="Service 1" />
          </div>
          <div className="service2">
            <img src="../src/images/index/service2_detail.svg" alt="Service 2" />
            <img src="../src/images/index/service2.svg" alt="" />
          </div>
        </section>
        {/* 區塊 3：主打活動 */}
        <section className="section-mainEvent">
          <div className="main-Event">
            <img src="" alt="" />
          </div>
        </section>
      </div>

      {/* 底部 */}
      <footer id='footer'>
        <div>
          <img src={footer} alt="Footer" />
          <div id='footer-a'>
            <a href="">首頁</a>
            <a href="">探索體驗村</a>
            <a href="">心途之灣</a>
            <a href="">關於我們</a>
            <a href="">會員中心</a>
            <a href="">常見問題</a>
          </div>
          <small id='copyright'>© 2024 灣 Wan. All rights reserved.</small>
        </div>
      </footer>
    </>
  );
}

export default App;