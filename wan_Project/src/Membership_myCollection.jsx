import "./css/Membership_myCollection.css";
import title from "../src/images/Membership/membership_Title.png";
import footer from "../src/images/index/footer.png";
import { Link } from "react-router-dom";

export default function Membership_myCollection() {
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
            <Link to="/Membership_myPage"><img src="../src/images/Membership_myCollection/btn1-tabs.png" alt="" /></Link>
            <Link to="/Membership_myCollection"><img src="../src/images/Membership_myCollection/btn2-tabs.png" alt="" /></Link>
            <Link to="/Membership_myOrder"><img src="../src/images/Membership_myCollection/btn3-tabs.png" alt="" /></Link>
            <img src="../src/images/Membership/btn-2items.png" alt="" />
          </div>
        </main>
        <hr />

        {/* 區塊 2：收藏活動 */}
        <div id="title-Collection">
          <h2>收藏活動</h2>
        </div>
        <div id='row-event_Card_Collection'>
          <div id='column-event_Card_Collection'>
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
          <div id='column-event_Card_Collection'>
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
          <div id='column-event_Card_Collection'>
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
        <div id='row-event_Card_Collection'>
          <div id='column-event_Card_Collection'>
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
          <div id='column-event_Card_Collection'>
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
          <div id='column-event_Card_Collection'>
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
        <div id='event_Card_Collection_More'>
          <img src="../src/images/Membership_myCollection/btn_More.png" alt="" />
        </div>

        {/* 區塊 3：收藏文章 */}
        <div id="title-Collection">
          <h2>收藏文章</h2>
        </div>
        <div id='row-event_Card_Collection'>
          <div id='column-event_Card_Collection'>
            <img src="../src/images/Article/article_Image.png" alt="" />
            <small>撰文 / 林郁虹醫師</small>
            <h2>實踐正念冥想，改善情緒健康</h2>
            <p className="p-article">透過正念冥想，我們能夠學會觀察當下的經驗，而不是被過去的回憶或未來的焦慮所困擾。這不僅有助於情緒的穩定，還能增進人際關係的理解與同理心。當我們專注於當下，我們的內心變得更加清晰，應對生活挑戰時也能更加冷靜和理智。</p>
          </div>
          <div id='column-event_Card_Collection'>
            <img src="../src/images/Article/article_Image.png" alt="" />
            <small>撰文 / 林郁虹醫師</small>
            <h2>實踐正念冥想，改善情緒健康</h2>
            <p className="p-article">透過正念冥想，我們能夠學會觀察當下的經驗，而不是被過去的回憶或未來的焦慮所困擾。這不僅有助於情緒的穩定，還能增進人際關係的理解與同理心。當我們專注於當下，我們的內心變得更加清晰，應對生活挑戰時也能更加冷靜和理智。</p>
          </div>
          <div id='column-event_Card_Collection'>
            <img src="../src/images/Article/article_Image.png" alt="" />
            <small>撰文 / 林郁虹醫師</small>
            <h2>實踐正念冥想，改善情緒健康</h2>
            <p className="p-article">透過正念冥想，我們能夠學會觀察當下的經驗，而不是被過去的回憶或未來的焦慮所困擾。這不僅有助於情緒的穩定，還能增進人際關係的理解與同理心。當我們專注於當下，我們的內心變得更加清晰，應對生活挑戰時也能更加冷靜和理智。</p>
          </div>
        </div>

        <div id='row-event_Card_Collection'>
          <div id='column-event_Card_Collection'>
            <img src="../src/images/Article/article_Image.png" alt="" />
            <small>撰文 / 林郁虹醫師</small>
            <h2>實踐正念冥想，改善情緒健康</h2>
            <p className="p-article">透過正念冥想，我們能夠學會觀察當下的經驗，而不是被過去的回憶或未來的焦慮所困擾。這不僅有助於情緒的穩定，還能增進人際關係的理解與同理心。當我們專注於當下，我們的內心變得更加清晰，應對生活挑戰時也能更加冷靜和理智。</p>
          </div>
          <div id='column-event_Card_Collection'>
            <img src="../src/images/Article/article_Image.png" alt="" />
            <small>撰文 / 林郁虹醫師</small>
            <h2>實踐正念冥想，改善情緒健康</h2>
            <p className="p-article">透過正念冥想，我們能夠學會觀察當下的經驗，而不是被過去的回憶或未來的焦慮所困擾。這不僅有助於情緒的穩定，還能增進人際關係的理解與同理心。當我們專注於當下，我們的內心變得更加清晰，應對生活挑戰時也能更加冷靜和理智。</p>
          </div>
          <div id='column-event_Card_Collection'>
            <img src="../src/images/Article/article_Image.png" alt="" />
            <small>撰文 / 林郁虹醫師</small>
            <h2>實踐正念冥想，改善情緒健康</h2>
            <p className="p-article">透過正念冥想，我們能夠學會觀察當下的經驗，而不是被過去的回憶或未來的焦慮所困擾。這不僅有助於情緒的穩定，還能增進人際關係的理解與同理心。當我們專注於當下，我們的內心變得更加清晰，應對生活挑戰時也能更加冷靜和理智。</p>
          </div>
        </div>
        <div id='event_Card_Collection_More'>
          <img src="../src/images/Membership_myCollection/btn_More.png" alt="" />
        </div>
        {/* 區塊 3：探索新靈感 */}
        <div id="title-Collection">
          <h2>探索新靈感</h2>
        </div>
        <div id='row-event_Card_Collection'>
          <div id='column-event_Card_Collection'>
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
          <div id='column-event_Card_Collection'>
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
          <div id='column-event_Card_Collection'>
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
        <div id='event_Card_Collection_More'>
          <img src="../src/images/Membership_myCollection/btn_More.png" alt="" />
        </div>
        {/* 區塊 4：回顧心動課程 */}
        <div id="title-Collection">
          <h2>回顧心動課程</h2>
        </div>
        <div id='row-event_Card_Collection'>
          <div id='column-event_Card_Collection'>
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
          <div id='column-event_Card_Collection'>
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
          <div id='column-event_Card_Collection'>
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
        <div id='event_Card_Collection_More'>
          <img src="../src/images/Membership_myCollection/btn_More.png" alt="" />
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
            <a href="/Membership_myPage">會員中心</a>
            <a href="">常見問題</a>
          </div>
          <small id='copyright'>© 2024 灣 Wan. All rights reserved.</small>
        </div>
      </footer>
    </>
  );
}