import "./css/aos.css";
import './css/index.css';
import bg_mountain from "./images/index/bg_mountain.png";
import footer from './images/index/footer_wan.png';
import bg_sea from './images/index/bg_sea.png';
import bg_2_Filter from './images/index/bg_2_filter.png';
import { useEffect, useState } from 'react';
import Aos from "aos";


function Index() {
  useEffect(() => {
    Aos.init({
      delay: 2500,
      once: true
    });
  }, []);



  const [showOverlay, setShowOverlay] = useState(true);

  // 動畫結束時將overlay移除
  const handleAnimationEnd = () => {
    setShowOverlay(false);
  };

  return (
    <>
      {/* 首頁容器 */}
      <div className="home-container">
        {/* 橫幅 */}
        <main className="banner" >
          <navbar id='navbar'>
            <a href="/"><img id="logo" src="./src/images/index/logo.svg" alt="logo" /></a>
            <div id='icon'>
              <a href=""><img id="icon-Member" src="./src/images/index/icon-Member.svg" alt="Member" /></a>
              <a href="#"><img id="icon-Hamburger" src="./src/images/index/icon-Hamburger.svg" alt="Hamburger" /></a>
            </div>
          </navbar>
          <div className='title' data-aos="fade-down" data-aos-duration="2000" >
            <img id="title-wan" src="./src/images/index/Title_wan.svg" alt="title" />
          </div>
          <img id="bg_sea" src={bg_sea} alt="bg_sea" />
          <div id='banner2'>
            <img id="bg_mountain" src={bg_mountain} alt="bg_mountain" />
            <img id='circle_ip' src="./src/images/index/circle_ip.svg" alt="circle_ip" data-aos="fade-right" data-aos-duration="3000" />
            <img id='heart_ip' src="./src/images/index/heart_ip.svg" alt="heart_ip" data-aos="fade-left" data-aos-duration="3000" />
          </div>
          {/* 將背景圖層提升到更靠近頂部 */}
          <div className='background-overlay2' onAnimationEnd={handleAnimationEnd}>
            <img src={bg_2_Filter} alt="" />
          </div>
        </main>

        {/* 區塊 2：服務 */}
        <section className="services-section" >
          <div className="service1">
            <img src="./src/images/index/service1.svg" alt="" />
            <img src="./src/images/index/service1_detail.svg" alt="Service 1" />
          </div>
          <div className="service2">
            <img src="./src/images/index/service2_detail.svg" alt="Service 2" />
            <img src="./src/images/index/service2.svg" alt="" />
          </div>
        </section>
        {/* 區塊 3：主打活動 */}
        <section className="section-mainEvent">
          <figure id="section_mainEvent_Top">
            <img src="./src/images/index/section_mainEvent_Top.png" alt="" />
          </figure>
          <div id="section_mainEvent">
            <div id="mainEvent-Left">
              <img id="mainEvent-Title" src="./src/images/index/mainEvent-Title.svg" alt="title" />
              <article id='mainEvent-Content'>
                <p>2025.01.25 (六)</p>
                <h2>【過年限定】紙韻心意剪紙活動</h2>
                <p>以剪紙這項傳統藝術來迎接新年！透過一刀一剪，將你的心意轉化為美麗的圖案，無論是喜慶的紅色剪紙或精緻的對聯裝飾，都充滿溫暖的祝福。
                  <br /><br />
                  這個活動適合所有想要沉澱心情、用心創作的人，一同透過簡單的創作步驟，為新的一年剪出滿滿的美好與希望！</p>
              </article>
              <img src="./src/images/index/btn_Entry.svg" alt="btn_Entry" />
            </div>
            <div id="mainEvent-Right">
              <img id="mainEvent-Image" src="./src/images/index/mainEvent_Image.png" alt="image" />
              <div id="mainEvent-btnArrow">
                <img src="./src/images/index/btn_ArrowLeft.svg" alt="btn_Left" />
                <img src="./src/images/index/btn_ArrowRight.svg" alt="btn_Right" />
              </div>
            </div>
          </div>
        </section>
      </div >

      {/* 底部 */}
      <footer id='footer' >
        <div>
          <img src={footer} alt="Footer" />
          <div id='footer-a'>
            <a href="/">首頁</a>
            <a href="/Event">探索體驗村</a>
            <a href="">心途之灣</a>
            <a href="/Membership_myPage">會員中心</a>
            <a href="">關於我們</a>
            <a href="/faq">常見問題</a>
          </div>
          <small id='copyright'>© 2024 灣 Wan. All rights reserved.</small>
        </div>
      </footer>
    </>
  );
}

export default Index;