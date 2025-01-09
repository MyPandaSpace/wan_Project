import Btn_goTop from "./component/Btn_goTop";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import "./css/Membership_myCollection.css";
import { Link } from "react-router-dom";

export default function Membership_myCollection() {

  return (
    <>
      <Navbar />
      <Btn_goTop />
      <img id="navbar-Bg" src="./src/images/index/navbar_Bg.png" alt="" />

      <div className="home-container">
        {/* 區塊 1：導覽列 */}
        <main className="member-main">
          <figure id="title">
            <img id="title-img" src='./src/images/Membership/membership_Title.png' alt="title-img" />
          </figure>
          <div id="tabs">
            <img src="./src/images/Membership/btn-items.png" alt="" />
            <Link to="/Membership_myPage"><img src="./src/images/Membership_myCollection/btn1-tabs.png" alt="" /></Link>
            <Link to="/Membership_myCollection"><img src="./src/images/Membership_myCollection/btn2-tabs.png" alt="" /></Link>
            <Link to="/Membership_myOrder"><img src="./src/images/Membership_myCollection/btn3-tabs.png" alt="" /></Link>
            <img src="./src/images/Membership/btn-2items.png" alt="" />
          </div>
        </main>
        <hr />

        {/* 區塊 2：收藏活動 */}
        <div id="title-Collection">
          <h2>收藏活動</h2>
        </div>
        <div id='row-event_Card_Collection'>
          <div id='column-event_Card_Collection'>
          <Link to="/Event_Detail">
              <div className="collect-img-container"><img src="./src/images/Event/event_Image8.jpg" alt="" /></div>
                <small>2025.02.16（六）14:00～18:00</small>
                <h2>&nbsp;&nbsp;情緒花園—插花療癒工作坊</h2>
                <p>NT$ 2,200 元/人</p>
                <hr />
                <ul id='event-Tags'>
                  <li>#台北市</li>
                  <li className='natural_healing'>#自然療癒</li>
                </ul>
              </Link>
          </div>
          <div id='column-event_Card_Collection'>
          <Link to="/Event_Detail">
              <div className="collect-img-container"><img src="./src/images/Event/event_Image10.jpg" alt="" /></div>
                <small>2025.03.02（日）09:00～12:00</small>
                <h2>&nbsp;&nbsp;心靈獨角室—探索智慧與心靈的閱讀之旅</h2>
                <p>NT$ 500 元/人</p>
                <hr />
                <ul id='event-Tags'>
                  <li>#台北市</li>
                  <li className='spiritual_journey'>#心靈之旅</li>
                </ul>
              </Link>
          </div>
          <div id='column-event_Card_Collection'>
          <Link to="/Event_Detail">
              <div className="collect-img-container"><img src="./src/images/Event/event_Image12.jpg" alt="" /></div>
                <small>2025.02.27（四）15:00～17:30</small>
                <h2>&nbsp;&nbsp;香氛製作—自創迷人香氣療癒心靈</h2>
                <p>NT$ 1,000 元/人</p>
                <hr />
                <ul id='event-Tags'>
                  <li>#台北市</li>
                  <li className='spiritual_journey'>#心靈之旅</li>
                </ul>
              </Link>
          </div>
        </div>
        <div id='row-event_Card_Collection'>
          <div id='column-event_Card_Collection'>
          <Link to="/Event_Detail">
              <div className="collect-img-container"><img src="./src/images/Event/event_Image15.png" alt="" /></div>
                <small>2025.02.27（四）15:00～17:30</small>
                <h2>【兒童節限定】童趣牆壁紓壓彩繪</h2>
                <p>NT$ 1,000 元/人</p>
                <hr />
                <ul id='event-Tags'>
                  <li>#台北市</li>
                  <li className='art_creation'>#藝術創作</li>
                </ul>
              </Link>
          </div>
          <div id='column-event_Card_Collection'>
          <Link to="/Event_Detail">
              <div className="collect-img-container"><img src="./src/images/Event/event_Image13.jpg" alt="" /></div>
                <small>2025.01.26（日）09:00～12:00</small>
                <h2>&nbsp;&nbsp;韻律瑜伽一動態與節奏的身心強化</h2>
                <p>NT$ 1,800 元/人</p>
                <hr />
                <ul id='event-Tags'>
                  <li>#台北市</li>
                  <li className='spiritual_journey'>#心靈之旅</li>
                </ul>
              </Link>
          </div>
          <div id='column-event_Card_Collection'>
          <Link to="/Event_Detail">
              <div className="collect-img-container"><img src="./src/images/Event/event_Image14.jpg" alt="" /></div>
                <small>2025.01.25（六）13:00～16:00</small>
                <h2>&nbsp;&nbsp;手沖咖啡體驗一冠軍咖啡的奧秘</h2>
                <p>NT$ 1,200 元/人</p>
                <hr />
                <ul id='event-Tags'>
                  <li>#台北市</li>
                  <li className='spiritual_journey'>#心靈之旅</li>
                </ul>
              </Link>
          </div>
        </div>
        <div id='event_Card_Collection_More'>
          <img src="./src/images/Membership_myCollection/btn_More.png" alt="" />
        </div>

        {/* 區塊 3：收藏文章 */}
        <div id="title-Collection">
          <h2>收藏文章</h2>
        </div>
        <div id='row-event_Card_Collection'>
          <div id='column-event_Card_Collection'>
            <img src="./src/images/Article_Bay/meditation_1.png" alt="" />
            <small>撰文 / 林郁虹醫師</small>
            <h2>實踐正念冥想，改善情緒健康</h2>
            <p className="p-article">透過正念冥想，我們能夠學會觀察當下的經驗，而不是被過去的回憶或未來的焦慮所困擾。這不僅有助於情緒的穩定，還能增進人際關係的理解與同理心。當我們專注於當下，我們的內心變得更加清晰，應對生活挑戰時也能更加冷靜和理智。</p>
          </div>
          <div id='column-event_Card_Collection'>
            <img src="./src/images/Article_Bay/meditation_2.png" alt="" />
            <small>撰文 / 林郁虹醫師</small>
            <h2>實踐正念冥想，改善情緒健康</h2>
            <p className="p-article">透過正念冥想，我們能夠學會觀察當下的經驗，而不是被過去的回憶或未來的焦慮所困擾。這不僅有助於情緒的穩定，還能增進人際關係的理解與同理心。當我們專注於當下，我們的內心變得更加清晰，應對生活挑戰時也能更加冷靜和理智。</p>
          </div>
          <div id='column-event_Card_Collection'>
            <img src="./src/images/Article_Bay/meditation_3.png" alt="" />
            <small>撰文 / 林郁虹醫師</small>
            <h2>實踐正念冥想，改善情緒健康</h2>
            <p className="p-article">透過正念冥想，我們能夠學會觀察當下的經驗，而不是被過去的回憶或未來的焦慮所困擾。這不僅有助於情緒的穩定，還能增進人際關係的理解與同理心。當我們專注於當下，我們的內心變得更加清晰，應對生活挑戰時也能更加冷靜和理智。</p>
          </div>
        </div>

        <div id='row-event_Card_Collection'>
          <div id='column-event_Card_Collection'>
            <img src="./src/images/Article_Bay/meditation_4.png" alt="" />
            <small>撰文 / 林郁虹醫師</small>
            <h2>實踐正念冥想，改善情緒健康</h2>
            <p className="p-article">透過正念冥想，我們能夠學會觀察當下的經驗，而不是被過去的回憶或未來的焦慮所困擾。這不僅有助於情緒的穩定，還能增進人際關係的理解與同理心。當我們專注於當下，我們的內心變得更加清晰，應對生活挑戰時也能更加冷靜和理智。</p>
          </div>
          <div id='column-event_Card_Collection'>
            <img src="./src/images/Article_Bay/selfcare_1.png" alt="" />
            <small>撰文 / 林郁虹醫師</small>
            <h2>實踐正念冥想，改善情緒健康</h2>
            <p className="p-article">透過正念冥想，我們能夠學會觀察當下的經驗，而不是被過去的回憶或未來的焦慮所困擾。這不僅有助於情緒的穩定，還能增進人際關係的理解與同理心。當我們專注於當下，我們的內心變得更加清晰，應對生活挑戰時也能更加冷靜和理智。</p>
          </div>
          <div id='column-event_Card_Collection'>
            <img src="./src/images/Article_Bay/selfcare_2.png" alt="" />
            <small>撰文 / 林郁虹醫師</small>
            <h2>實踐正念冥想，改善情緒健康</h2>
            <p className="p-article">透過正念冥想，我們能夠學會觀察當下的經驗，而不是被過去的回憶或未來的焦慮所困擾。這不僅有助於情緒的穩定，還能增進人際關係的理解與同理心。當我們專注於當下，我們的內心變得更加清晰，應對生活挑戰時也能更加冷靜和理智。</p>
          </div>
        </div>
        <div id='event_Card_Collection_More'>
          <img src="./src/images/Membership_myCollection/btn_More.png" alt="" />
        </div>
        {/* 區塊 3：探索新靈感 */}
        <div id="title-Collection">
          <h2>探索新靈感</h2>
        </div>
        <div id='row-event_Card_Collection'>
          <div id='column-event_Card_Collection'>
            <img src="./src/images/Event/event_Image.png" alt="" />
            <small>2025.01.25（六）14:00～16:00</small>
            <h2>【過年限定】紙韻心意剪紙活動</h2>
            <p id='p1'>NT$ 500 元/人</p>
            <hr />
            <div id='event-Tags'>
              <p>#台北市</p>
              <p>#藝術創作</p>
            </div>
          </div>
          <div id='column-event_Card_Collection'>
            <img src="./src/images/Event/event_Image.png" alt="" />
            <small>2025.01.25（六）14:00～16:00</small>
            <h2>【過年限定】紙韻心意剪紙活動</h2>
            <p id='p1'>NT$ 500 元/人</p>
            <hr />
            <div id='event-Tags'>
              <p>#台北市</p>
              <p>#藝術創作</p>
            </div>
          </div>
          <div id='column-event_Card_Collection'>
            <img src="./src/images/Event/event_Image.png" alt="" />
            <small>2025.01.25（六）14:00～16:00</small>
            <h2>【過年限定】紙韻心意剪紙活動</h2>
            <p id='p1'>NT$ 500 元/人</p>
            <hr />
            <div id='event-Tags'>
              <p>#台北市</p>
              <p>#藝術創作</p>
            </div>
          </div>
        </div>
        <div id='event_Card_Collection_More'>
          <img src="./src/images/Membership_myCollection/btn_More.png" alt="" />
        </div>
        {/* 區塊 4：回顧心動課程 */}
        <div id="title-Collection">
          <h2>回顧心動課程</h2>
        </div>
        <div id='row-event_Card_Collection'>
          <div id='column-event_Card_Collection'>
            <img src="./src/images/Event/event_Image.png" alt="" />
            <small>2025.01.25（六）14:00～16:00</small>
            <h2>【過年限定】紙韻心意剪紙活動</h2>
            <p id='p1'>NT$ 500 元/人</p>
            <hr />
            <div id='event-Tags'>
              <p>#台北市</p>
              <p>#藝術創作</p>
            </div>
          </div>
          <div id='column-event_Card_Collection'>
            <img src="./src/images/Event/event_Image.png" alt="" />
            <small>2025.01.25（六）14:00～16:00</small>
            <h2>【過年限定】紙韻心意剪紙活動</h2>
            <p id='p1'>NT$ 500 元/人</p>
            <hr />
            <div id='event-Tags'>
              <p>#台北市</p>
              <p>#藝術創作</p>
            </div>
          </div>
          <div id='column-event_Card_Collection'>
            <img src="./src/images/Event/event_Image.png" alt="" />
            <small>2025.01.25（六）14:00～16:00</small>
            <h2>【過年限定】紙韻心意剪紙活動</h2>
            <p id='p1'>NT$ 500 元/人</p>
            <hr />
            <div id='event-Tags'>
              <p>#台北市</p>
              <p>#藝術創作</p>
            </div>
          </div>
        </div>
        <div id='event_Card_Collection_More'>
          <img src="./src/images/Membership_myCollection/btn_More.png" alt="" />
        </div>
      </div>
      {/* 底部 */}
      <Footer />
    </>
  );
}