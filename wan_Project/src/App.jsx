import './App.css';
import bg_mountain from "./images/index/bg_mountain.svg";
import bg_1_Filter from './images/index/bg_1_filter.svg';
import navbar from './images/index/navbar_wan.svg';
import footer from './images/index/footer_wan.svg';
import bg_sea from './images/index/bg_sea.svg';

function App() {
  return (
    <>
      {/* 首頁容器 */}
      <div className="home-container">
        <header>
          <img src={navbar} alt="Navbar" />
        </header>

        {/* 橫幅 */}
        <main className="banner">
          <img src={bg_mountain} alt="Banner" />
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
      </div>

      {/* 底部 */}
      <footer>
        <img src={footer} alt="Footer" />
      </footer>
    </>
  );
}

export default App;