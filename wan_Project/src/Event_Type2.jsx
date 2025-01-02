import './css/Event.css';
import { Link } from 'react-router-dom';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

function Event_Type2() {


  return (
    <>
      <div className="home-container">
        {/* Banner */}
        <main className="main_Event">
          <Navbar />
          <img src="" alt="" />
        </main>
        {/* 評論卡片 */}
        <div className="comment-Card-row1">
          <div className='comment-Card' id='comment-Card1'>
            <img className='user-medal' src="./src/images/Event/silver_medal.png" alt="" />
            <p className='comment-title'>北極圈夢幻體驗</p>
            <img src="./src/images/Event/comment_stars(5).png" alt="" />
            <p className='comment-content'>Experiencing the Aurora Sledding helped me reconnect with nature. The healing here is not just about the activities, but a way of life. — Ana, from Eastern America — John, UK</p>
          </div>
          <div className='comment-Card' id='comment-Card2'>
            <img className='user-medal' src="./src/images/Event/gold_medal.png" alt="" />
            <p className='comment-title'>北極圈夢幻體驗</p>
            <img src="./src/images/Event/comment_stars(5).png" alt="" />
            <p className='comment-content'>Experiencing the Aurora Sledding helped me reconnect with nature. The healing here is not just about the activities, but a way of life. — Ana, from Eastern America — John, UK</p>
          </div>
          <div className='comment-Card' id='comment-Card3'>
            <img className='user-medal' src="./src/images/Event/bronze_medal.png" alt="" />
            <p className='comment-title'>北極圈夢幻體驗</p>
            <img src="./src/images/Event/comment_stars(5).png" alt="" />
            <p className='comment-content'>Experiencing the Aurora Sledding helped me reconnect with nature. The healing here is not just about the activities, but a way of life. — Ana, from Eastern America — John, UK</p>
          </div>
          <div className='comment-Card' id='comment-Card1'>
            <img className='user-medal' src="./src/images/Event/silver_medal.png" alt="" />
            <p className='comment-title'>北極圈夢幻體驗</p>
            <img src="./src/images/Event/comment_stars(5).png" alt="" />
            <p className='comment-content'>Experiencing the Aurora Sledding helped me reconnect with nature. The healing here is not just about the activities, but a way of life. — Ana, from Eastern America — John, UK</p>
          </div>
          <div className='comment-Card' id='comment-Card2'>
            <img className='user-medal' src="./src/images/Event/gold_medal.png" alt="" />
            <p className='comment-title'>北極圈夢幻體驗</p>
            <img src="./src/images/Event/comment_stars(5).png" alt="" />
            <p className='comment-content'>Experiencing the Aurora Sledding helped me reconnect with nature. The healing here is not just about the activities, but a way of life. — Ana, from Eastern America — John, UK</p>
          </div>
          <div className='comment-Card' id='comment-Card3'>
            <img className='user-medal' src="./src/images/Event/bronze_medal.png" alt="" />
            <p className='comment-title'>北極圈夢幻體驗</p>
            <img src="./src/images/Event/comment_stars(5).png" alt="" />
            <p className='comment-content'>Experiencing the Aurora Sledding helped me reconnect with nature. The healing here is not just about the activities, but a way of life. — Ana, from Eastern America — John, UK</p>
          </div>
        </div>
        <div className="comment-Card-row2">
          <div className='comment-Card' id='comment-Card1'>
            <img className='user-medal' src="./src/images/Event/silver_medal.png" alt="" />
            <p className='comment-title'>北極圈夢幻體驗</p>
            <img src="./src/images/Event/comment_stars(5).png" alt="" />
            <p className='comment-content'>Experiencing the Aurora Sledding helped me reconnect with nature. The healing here is not just about the activities, but a way of life. — Ana, from Eastern America — John, UK</p>
          </div>
          <div className='comment-Card' id='comment-Card2'>
            <img className='user-medal' src="./src/images/Event/gold_medal.png" alt="" />
            <p className='comment-title'>北極圈夢幻體驗</p>
            <img src="./src/images/Event/comment_stars(5).png" alt="" />
            <p className='comment-content'>Experiencing the Aurora Sledding helped me reconnect with nature. The healing here is not just about the activities, but a way of life. — Ana, from Eastern America — John, UK</p>
          </div>
          <div className='comment-Card' id='comment-Card3'>
            <img className='user-medal' src="./src/images/Event/bronze_medal.png" alt="" />
            <p className='comment-title'>北極圈夢幻體驗</p>
            <img src="./src/images/Event/comment_stars(5).png" alt="" />
            <p className='comment-content'>Experiencing the Aurora Sledding helped me reconnect with nature. The healing here is not just about the activities, but a way of life. — Ana, from Eastern America — John, UK</p>
          </div>
          <div className='comment-Card' id='comment-Card1'>
            <img className='user-medal' src="./src/images/Event/silver_medal.png" alt="" />
            <p className='comment-title'>北極圈夢幻體驗</p>
            <img src="./src/images/Event/comment_stars(5).png" alt="" />
            <p className='comment-content'>Experiencing the Aurora Sledding helped me reconnect with nature. The healing here is not just about the activities, but a way of life. — Ana, from Eastern America — John, UK</p>
          </div>
          <div className='comment-Card' id='comment-Card2'>
            <img className='user-medal' src="./src/images/Event/gold_medal.png" alt="" />
            <p className='comment-title'>北極圈夢幻體驗</p>
            <img src="./src/images/Event/comment_stars(5).png" alt="" />
            <p className='comment-content'>Experiencing the Aurora Sledding helped me reconnect with nature. The healing here is not just about the activities, but a way of life. — Ana, from Eastern America — John, UK</p>
          </div>
          <div className='comment-Card' id='comment-Card3'>
            <img className='user-medal' src="./src/images/Event/bronze_medal.png" alt="" />
            <p className='comment-title'>北極圈夢幻體驗</p>
            <img src="./src/images/Event/comment_stars(5).png" alt="" />
            <p className='comment-content'>Experiencing the Aurora Sledding helped me reconnect with nature. The healing here is not just about the activities, but a way of life. — Ana, from Eastern America — John, UK</p>
          </div>
        </div>
        {/* 活動 */}
        <div className="event">
          <div id='event-Type'>
            <img src="./src/images/Event/circle_Talk.png" alt="" />
            <Link to="/Event"><img src="./src/images/Event/event-Type1.png" alt="" /></Link>
            <Link to="/Event_Type2"><img id="event-Type2" src="./src/images/Event/event-Type2_hover.png" alt="" /></Link>
            <Link to="/Event_Type3"><img id='event-Type3' src="./src/images/Event/event-Type3.png" alt="" /></Link>
            <img style={{ marginLeft: '268px' }} src="./src/images/Event/btn_Select.png" alt="" />
          </div>
          <div id='row-event_Card'>
            <div id='column-event_Card'>
              <a href="/Event_Detail"><img src="./src/images/Event/event_Image.png" alt="" />
                <small>2025.01.25（六）14:00～16:00</small>
                <h2>【過年限定】紙韻心意剪紙活動</h2>
                <p>NT$ 500 元/人</p>
                <hr />
                <ul id='event-Tags'>
                  <li>#台北市</li>
                  <li>#藝術創作</li>
                </ul>
              </a>
            </div>
            <div id='column-event_Card'>
              <a href="/Event_Detail"><img src="./src/images/Event/event_Image.png" alt="" />
                <small>2025.01.25（六）14:00～16:00</small>
                <h2>【過年限定】紙韻心意剪紙活動</h2>
                <p>NT$ 500 元/人</p>
                <hr />
                <ul id='event-Tags'>
                  <li>#台北市</li>
                  <li>#藝術創作</li>
                </ul>
              </a>
            </div>
            <div id='column-event_Card'>
              <a href="/Event_Detail"><img src="./src/images/Event/event_Image.png" alt="" />
                <small>2025.01.25（六）14:00～16:00</small>
                <h2>【過年限定】紙韻心意剪紙活動</h2>
                <p>NT$ 500 元/人</p>
                <hr />
                <ul id='event-Tags'>
                  <li>#台北市</li>
                  <li>#藝術創作</li>
                </ul>
              </a>
            </div>
          </div>
          <div id='row-event_Card'>
            <div id='column-event_Card'>
              <a href="/Event_Detail"><img src="./src/images/Event/event_Image.png" alt="" />
                <small>2025.01.25（六）14:00～16:00</small>
                <h2>【過年限定】紙韻心意剪紙活動</h2>
                <p>NT$ 500 元/人</p>
                <hr />
                <ul id='event-Tags'>
                  <li>#台北市</li>
                  <li>#藝術創作</li>
                </ul>
              </a>
            </div>
            <div id='column-event_Card'>
              <a href="/Event_Detail"><img src="./src/images/Event/event_Image.png" alt="" />
                <small>2025.01.25（六）14:00～16:00</small>
                <h2>【過年限定】紙韻心意剪紙活動</h2>
                <p>NT$ 500 元/人</p>
                <hr />
                <ul id='event-Tags'>
                  <li>#台北市</li>
                  <li>#藝術創作</li>
                </ul>
              </a>
            </div>
            <div id='column-event_Card'>
              <a href="/Event_Detail"><img src="./src/images/Event/event_Image.png" alt="" />
                <small>2025.01.25（六）14:00～16:00</small>
                <h2>【過年限定】紙韻心意剪紙活動</h2>
                <p>NT$ 500 元/人</p>
                <hr />
                <ul id='event-Tags'>
                  <li>#台北市</li>
                  <li>#藝術創作</li>
                </ul>
              </a>
            </div>
          </div>
          <div id='row-event_Card'>
            <div id='column-event_Card'>
              <a href="/Event_Detail"><img src="./src/images/Event/event_Image.png" alt="" />
                <small>2025.01.25（六）14:00～16:00</small>
                <h2>【過年限定】紙韻心意剪紙活動</h2>
                <p>NT$ 500 元/人</p>
                <hr />
                <ul id='event-Tags'>
                  <li>#台北市</li>
                  <li>#藝術創作</li>
                </ul>
              </a>
            </div>
            <div id='column-event_Card'>
              <a href="/Event_Detail"><img src="./src/images/Event/event_Image.png" alt="" />
                <small>2025.01.25（六）14:00～16:00</small>
                <h2>【過年限定】紙韻心意剪紙活動</h2>
                <p>NT$ 500 元/人</p>
                <hr />
                <ul id='event-Tags'>
                  <li>#台北市</li>
                  <li>#藝術創作</li>
                </ul>
              </a>
            </div>
            <div id='column-event_Card'>
              <a href="/Event_Detail"><img src="./src/images/Event/event_Image.png" alt="" />
                <small>2025.01.25（六）14:00～16:00</small>
                <h2>【過年限定】紙韻心意剪紙活動</h2>
                <p>NT$ 500 元/人</p>
                <hr />
                <ul id='event-Tags'>
                  <li>#台北市</li>
                  <li>#藝術創作</li>
                </ul>
              </a>
            </div>
          </div>
          <div id='row-event_Card'>
            <div id='column-event_Card'>
              <a href="/Event_Detail"><img src="./src/images/Event/event_Image.png" alt="" />
                <small>2025.01.25（六）14:00～16:00</small>
                <h2>【過年限定】紙韻心意剪紙活動</h2>
                <p>NT$ 500 元/人</p>
                <hr />
                <ul id='event-Tags'>
                  <li>#台北市</li>
                  <li>#藝術創作</li>
                </ul>
              </a>
            </div>
            <div id='column-event_Card'>
              <a href="/Event_Detail"><img src="./src/images/Event/event_Image.png" alt="" />
                <small>2025.01.25（六）14:00～16:00</small>
                <h2>【過年限定】紙韻心意剪紙活動</h2>
                <p>NT$ 500 元/人</p>
                <hr />
                <ul id='event-Tags'>
                  <li>#台北市</li>
                  <li>#藝術創作</li>
                </ul>
              </a>
            </div>
            <div id='column-event_Card'>
              <a href="/Event_Detail"><img src="./src/images/Event/event_Image.png" alt="" />
                <small>2025.01.25（六）14:00～16:00</small>
                <h2>【過年限定】紙韻心意剪紙活動</h2>
                <p>NT$ 500 元/人</p>
                <hr />
                <ul id='event-Tags'>
                  <li>#台北市</li>
                  <li>#藝術創作</li>
                </ul>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* 底部 */}
      <Footer />
    </>
  )
}

export default Event_Type2;