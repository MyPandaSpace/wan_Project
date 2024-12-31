import './css/Event.css';
import { Link } from 'react-router-dom';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

function Event() {


  return (
    <>
      <div className="home-container">
        {/* Banner */}
        <main className="main_Event">
          <Navbar />
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
            <Link to="/Event_Type2"><img id="event-Type2" src="./src/images/Event/event-Type2.png" alt="" /></Link>
            <Link to="/Event_Type3"><img id='event-Type3' src="./src/images/Event/event-Type3.png" alt="" /></Link>
          </div>
          <div id='row-event_Card'>
            <div id='column-event_Card'>
              <a href="/Event_Detail"><img src="./src/images/Event/event_Image.png" alt="" />
                <small>2025.01.25（六）14:00～16:00</small>
                <h2>【過年限定】紙韻心意剪紙活動</h2>
                <p1>NT$ 500 元/人</p1>
                <hr />
                <div id='event-Tags'>
                  <p>#台北市</p>
                  <p>#藝術創作</p>
                </div>
              </a>
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
      <Footer />
    </>
  )
}

export default Event;