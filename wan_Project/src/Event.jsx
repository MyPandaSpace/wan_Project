import './css/Event.css';
import footer from "../src/images/index/footer.png";
import { Link } from 'react-router-dom';

function Event() {
  return (
    <>
      <div className="home-container">
        {/* Banner */}
        <main className="main_Event">
          <header id='navbar'>
            <img id="logo" src="../src/images/index/logo.svg" alt="logo" />
            <div id='icon'>
              <img id="icon-Search_Bar" src="../src/images/index/icon-Search_Bar.svg" alt="Search" />
              <img id="icon-Member" src="../src/images/index/icon-Member.svg" alt="Member" />
              <img id="icon-Hamburger" src="../src/images/index/icon-Hamburger.svg" alt="Hamburger" />
            </div>
          </header>
          <img src="" alt="" />
        </main>
        {/* 評論卡片 */}
        <div className="comment-Card">
          <img src="../src/images/Event/comment_Card1.png" alt="card" />
          <img src="../src/images/Event/comment_Card2.png" alt="card" />
          <img src="../src/images/Event/comment_Card3.png" alt="card" />
          <img src="../src/images/Event/comment_Card4.png" alt="card" />
          <img src="../src/images/Event/comment_Card5.png" alt="card" />
        </div>
        {/* 活動 */}
        <div className="event">
          <div id='row-Top'>
            <img src="../src/images/Event/circle_Talk.png" alt="" />
            <img src="../src/images/Event/btn_Select.png" alt="" />
          </div>
          <div id='event-Type'>
            <img src="../src/images/Event/event-Type1.png" alt="" />
            <img src="../src/images/Event/event-Type2.png" alt="" />
            <img src="../src/images/Event/event-Type3.png" alt="" />
          </div>
          <div id='row-event_Card'>
            <img src="../src/images/Event/event_Card.png" alt="card" />
            <img src="../src/images/Event/event_Card.png" alt="card" />
            <img src="../src/images/Event/event_Card.png" alt="card" />
          </div>
          <div id='row-event_Card'>
            <img src="../src/images/Event/event_Card.png" alt="card" />
            <img src="../src/images/Event/event_Card.png" alt="card" />
            <img src="../src/images/Event/event_Card.png" alt="card" />
          </div>
          <div id='row-event_Card'>
            <img src="../src/images/Event/event_Card.png" alt="card" />
            <img src="../src/images/Event/event_Card.png" alt="card" />
            <img src="../src/images/Event/event_Card.png" alt="card" />
          </div>
          <div id='row-event_Card'>
            <img src="../src/images/Event/event_Card.png" alt="card" />
            <img src="../src/images/Event/event_Card.png" alt="card" />
            <img src="../src/images/Event/event_Card.png" alt="card" />
          </div>
        </div>
      </div>
      {/* 底部 */}
      <footer id='footer'>
        <div>
          <img src={footer} alt="Footer" />
          <div id='footer-a'>
            <a href="/">首頁</a>
            <Link to="/Event">探索體驗村</Link>
            <a href="">心途之灣</a>
            <a href="">關於我們</a>
            <Link to="/Membership">會員中心</Link>
            <a href="">常見問題</a>
          </div>
          <small id='copyright'>© 2024 灣 Wan. All rights reserved.</small>
        </div>
      </footer>
    </>
  )
}

export default Event;