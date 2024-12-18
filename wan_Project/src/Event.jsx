import './css/Event.css';
import { Link } from 'react-router-dom';

function Event() {
  return (
    <>
      <div className="home-container">
        {/* Banner */}
        <main className="main_Event">
          <header id='navbar'>
            <a href="/"><img id="logo" src="./src/images/index/logo.svg" alt="logo" /></a>
            <div id='icon'>
              <img id="icon-Search_Bar" src="./src/images/index/icon-Search_Bar.svg" alt="Search" />
              <img id="icon-Member" src="./src/images/index/icon-Member.svg" alt="Member" />
              <img id="icon-Hamburger" src="./src/images/index/icon-Hamburger.svg" alt="Hamburger" />
            </div>
          </header>
          <img src="" alt="" />
        </main>
        {/* 評論卡片 */}
        <div className="comment-Card">
          <img src="./src/images/Event/comment_Card1.png" alt="card" />
          <img src="./src/images/Event/comment_Card2.png" alt="card" />
          <img src="./src/images/Event/comment_Card3.png" alt="card" />
          <img src="./src/images/Event/comment_Card4.png" alt="card" />
          <img src="./src/images/Event/comment_Card5.png" alt="card" />
        </div>
        {/* 活動 */}
        <div className="event">
          <div id='row-Top'>
            <img src="./src/images/Event/circle_Talk.png" alt="" />
            <img src="./src/images/Event/btn_Select.png" alt="" />
          </div>
          <div id='event-Type'>
            <Link to=""><img src="./src/images/Event/event-Type1_hover.png" alt="" /></Link>
            <Link to="/Event_Type2"><img src="./src/images/Event/event-Type2.png" alt="" /></Link>
            <Link to="/Event_Type3"><img src="./src/images/Event/event-Type3.png" alt="" /></Link>
          </div>
          <div id='row-event_Card'>
            <div id='column-event_Card'>
              <img src="./src/images/Event/event_Image.png" alt="" />
              <small>2025.01.25（六）14:00～16:00</small>
              <h2>【過年限定】紙韻心意剪紙活動</h2>
              <p1>NT$ 500 元/人</p1>
              <hr />
              <div id='event-Tags'>
                <p>#台北市</p>
                <p>#藝術創作</p>
              </div>
            </div>
            <div id='column-event_Card'>
              <img src="./src/images/Event/event_Image.png" alt="" />
              <small>2025.01.25（六）14:00～16:00</small>
              <h2>【過年限定】紙韻心意剪紙活動</h2>
              <p1>NT$ 500 元/人</p1>
              <hr />
              <div id='event-Tags'>
                <p>#台北市</p>
                <p>#藝術創作</p>
              </div>
            </div>
            <div id='column-event_Card'>
              <img src="./src/images/Event/event_Image.png" alt="" />
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
          <div id='row-event_Card'>
            <div id='column-event_Card'>
              <img src="./src/images/Event/event_Image.png" alt="" />
              <small>2025.01.25（六）14:00～16:00</small>
              <h2>【過年限定】紙韻心意剪紙活動</h2>
              <p1>NT$ 500 元/人</p1>
              <hr />
              <div id='event-Tags'>
                <p>#台北市</p>
                <p>#藝術創作</p>
              </div>
            </div>
            <div id='column-event_Card'>
              <img src="./src/images/Event/event_Image.png" alt="" />
              <small>2025.01.25（六）14:00～16:00</small>
              <h2>【過年限定】紙韻心意剪紙活動</h2>
              <p1>NT$ 500 元/人</p1>
              <hr />
              <div id='event-Tags'>
                <p>#台北市</p>
                <p>#藝術創作</p>
              </div>
            </div>
            <div id='column-event_Card'>
              <img src="./src/images/Event/event_Image.png" alt="" />
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
          <div id='row-event_Card'>
            <div id='column-event_Card'>
              <img src="./src/images/Event/event_Image.png" alt="" />
              <small>2025.01.25（六）14:00～16:00</small>
              <h2>【過年限定】紙韻心意剪紙活動</h2>
              <p1>NT$ 500 元/人</p1>
              <hr />
              <div id='event-Tags'>
                <p>#台北市</p>
                <p>#藝術創作</p>
              </div>
            </div>
            <div id='column-event_Card'>
              <img src="./src/images/Event/event_Image.png" alt="" />
              <small>2025.01.25（六）14:00～16:00</small>
              <h2>【過年限定】紙韻心意剪紙活動</h2>
              <p1>NT$ 500 元/人</p1>
              <hr />
              <div id='event-Tags'>
                <p>#台北市</p>
                <p>#藝術創作</p>
              </div>
            </div>
            <div id='column-event_Card'>
              <img src="./src/images/Event/event_Image.png" alt="" />
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
          <div id='row-event_Card'>
            <div id='column-event_Card'>
              <img src="./src/images/Event/event_Image.png" alt="" />
              <small>2025.01.25（六）14:00～16:00</small>
              <h2>【過年限定】紙韻心意剪紙活動</h2>
              <p1>NT$ 500 元/人</p1>
              <hr />
              <div id='event-Tags'>
                <p>#台北市</p>
                <p>#藝術創作</p>
              </div>
            </div>
            <div id='column-event_Card'>
              <img src="./src/images/Event/event_Image.png" alt="" />
              <small>2025.01.25（六）14:00～16:00</small>
              <h2>【過年限定】紙韻心意剪紙活動</h2>
              <p1>NT$ 500 元/人</p1>
              <hr />
              <div id='event-Tags'>
                <p>#台北市</p>
                <p>#藝術創作</p>
              </div>
            </div>
            <div id='column-event_Card'>
              <img src="./src/images/Event/event_Image.png" alt="" />
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
        </div>
      </div>
      {/* 底部 */}
      <footer id='footer'>
        <div>
          <img src='./src/images/index/footer.png' alt="Footer" />
          <div id='footer-a'>
            <a href="/">首頁</a>
            <a href="/Event">探索體驗村</a>
            <a href="">心途之灣</a>
            <a href="/Membership_myPage">會員中心</a>
            <a href="">關於我們</a>
            <a href="/Faq">常見問題</a>
          </div>
          <small id='copyright'>© 2024 灣 Wan. All rights reserved.</small>
        </div>
      </footer>
    </>
  )
}

export default Event;