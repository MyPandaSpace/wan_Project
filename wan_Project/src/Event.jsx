import './css/Event.css';
import { Link } from 'react-router-dom';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import { useEffect, useState } from 'react';
import Btn_goTop from './component/Btn_goTop';

function Event() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "./src/images/Event/events/newyear_1.jpg",
    "./src/images/Event/events/newyear_2.jpg",
    "./src/images/Event/events/newyear_3.jpg",
  ];
  const [timer, setTimer] = useState(null); // 用來保存定時器的 ID

  // 自動切換輪播
  useEffect(() => {
    // 定義一個函數來啟動計時器
    const startTimer = () => {
      return setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
      }, 3000); // 每3秒自動切換
    };

    // 啟動計時器
    const interval = startTimer();
    setTimer(interval); // 保存定時器 ID 以便後續清除

    // 清除計時器
    return () => clearInterval(interval);
  }, [images.length]);

  // 點擊指示器後重設計時器
  const handleIndicatorClick = (index) => {
    setCurrentSlide(index); // 點擊指示器切換到對應圖片

    // 每次點擊指示器時重設計時器
    if (timer) {
      clearInterval(timer); // 清除當前的計時器
    }

    const newTimer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 4000); // 重新啟動計時器

    setTimer(newTimer); // 更新定時器
  };

  return (
    <>
      <div className="home-container">
        <Btn_goTop />
        {/* Banner */}
        <div className="main_Event">
          <Navbar />
          <img id='season_Event' src="./src/images/Event/season_event.png" alt="" />
          {/* 輪播圖片 */}
          <div className="season-event-carousel">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Slide ${index}`}
                className={`detail-carousel-img ${index === currentSlide ? "active" : ""
                  }`}
              />
            ))}
            {/* 輪播指示器 */}
            <div className="season-event-carousel-indicators">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`detail-indicator ${index === currentSlide ? "active" : ""
                    }`}
                  onClick={() => handleIndicatorClick(index)} // 點擊切換
                />
              ))}
            </div>
          </div>
        </div>
        {/* 評論卡片 */}
        <div className="comment-Card-row1">
          <div className='comment-Card' id='comment-Card1'>
            <img className='user-medal' src="./src/images/Event/silver_medal.png" alt="" />
            <p className='comment-title'>彩繪童心</p>
            <img src="./src/images/Event/comment_stars(5).png" alt="" />
            <p className='comment-content'>畫畫時我忘了煩惱，遇見了快樂的自己</p>
          </div>
          <div className='comment-Card' id='comment-Card2'>
            <img className='user-medal' src="./src/images/Event/gold_medal.png" alt="" />
            <p className='comment-title'>韻律瑜伽</p>
            <img src="./src/images/Event/comment_stars(5).png" alt="" />
            <p className='comment-content'>參加這裡的心靈瑜珈課程，讓我有機會真正放慢腳步，重新找回與自己內心的聯繫。這不僅是一次學習，更是一次心靈的重生</p>
          </div>
          <div className='comment-Card' id='comment-Card3'>
            <img className='user-medal' src="./src/images/Event/bronze_medal.png" alt="" />
            <p className='comment-title'>光影心旅</p>
            <img src="./src/images/Event/comment_stars(5).png" alt="" />
            <p className='comment-content'>從燈光與色彩創造出屬於自己的療癒畫面，那種專屬的藝術美感讓我很有成就感。</p>
          </div>
          <div className='comment-Card' id='comment-Card1'>
            <img className='user-medal' src="./src/images/Event/silver_medal.png" alt="" />
            <p className='comment-title'>光影心旅</p>
            <img src="./src/images/Event/comment_stars(5).png" alt="" />
            <p className='comment-content'>第一次看到光可以這樣說故事，感動！</p>
          </div>
          <div className='comment-Card' id='comment-Card2'>
            <img className='user-medal' src="./src/images/Event/gold_medal.png" alt="" />
            <p className='comment-title'>日出攀登</p>
            <img src="./src/images/Event/comment_stars(5).png" alt="" />
            <p className='comment-content'>在這裡認識了志同道合的朋友們，迎接日出光輝，感受心靈的寧靜與自然的力量</p>
          </div>
          <div className='comment-Card' id='comment-Card3'>
            <img className='user-medal' src="./src/images/Event/bronze_medal.png" alt="" />
            <p className='comment-title'>韻律瑜珈</p>
            <img src="./src/images/Event/comment_stars(5).png" alt="" />
            <p className='comment-content'>在深呼吸中，我找回了與身體的連結。每一次伸展，都像是在清理內心的壓力。專注於當下，讓我從忙碌中找到片刻寧靜。這次瑜珈體驗，不只是運動，更是一次心靈的療癒旅程。</p>
          </div>
        </div>
        <div className="comment-Card-row2">
          <div className='comment-Card' id='comment-Card1'>
            <img className='user-medal' src="./src/images/Event/silver_medal.png" alt="" />
            <p className='comment-title'>品茶</p>
            <img src="./src/images/Event/comment_stars(5).png" alt="" />
            <p className='comment-content'>「一杯茶，洗滌浮躁的心靈。」參加品茶活動前，我一直以為茶只是飲品。但這次體驗讓我發現，茶道是一種藝術，更是一種生活哲學。</p>
          </div>
          <div className='comment-Card' id='comment-Card2'>
            <img className='user-medal' src="./src/images/Event/gold_medal.png" alt="" />
            <p className='comment-title'>光影心旅</p>
            <img src="./src/images/Event/comment_stars(5).png" alt="" />
            <p className='comment-content'>這段時間的課程讓我學會了如何與內心對話，每次冥想後，我都能感受到心靈的釋放，情緒變得更加穩定，壓力也大大減少了。這是我以前未曾體驗過的平靜</p>
          </div>
          <div className='comment-Card' id='comment-Card3'>
            <img className='user-medal' src="./src/images/Event/bronze_medal.png" alt="" />
            <p className='comment-title'>音樂創作</p>
            <img src="./src/images/Event/comment_stars(5).png" alt="" />
            <p className='comment-content'>從樂禮到編曲製作，認識音符沈靜在旋律裡，這感覺太棒了！</p>
          </div>
          <div className='comment-Card' id='comment-Card1'>
            <img className='user-medal' src="./src/images/Event/silver_medal.png" alt="" />
            <p className='comment-title'>情緒花園</p>
            <img src="./src/images/Event/comment_stars(5).png" alt="" />
            <p className='comment-content'>透過花藝，我感受到情緒如花般有不同形態，都能找到美的角度。修剪過程讓我放下對完美的執念，學會接納生命的缺口。作品完成時，那份寧靜和喜悅讓我明白專注的力量。這次體驗，彷彿在忙碌中為心靈開了一扇窗</p>
          </div>
          <div className='comment-Card' id='comment-Card2'>
            <img className='user-medal' src="./src/images/Event/gold_medal.png" alt="" />
            <p className='comment-title'>光影心旅</p>
            <img src="./src/images/Event/comment_stars(5).png" alt="" />
            <p className='comment-content'>第一次看到光可以這樣說故事，感動！</p>
          </div>
          <div className='comment-Card' id='comment-Card3'>
            <img className='user-medal' src="./src/images/Event/bronze_medal.png" alt="" />
            <p className='comment-title'>心靈獨角室</p>
            <img src="./src/images/Event/comment_stars(5).png" alt="" />
            <p className='comment-content'>在交流中，我感受到每個人心中獨一無二的故事力量。真誠的分享彷彿打開了彼此的心門，帶來深刻的共鳴。這次體驗讓我明白，傾聽與被理解是治癒的開始。離開時，我帶著滿滿的啟發，對生命有了更多的感恩</p>
          </div>
        </div>
        {/* 活動 */}
        <div className="event">
          <div id='event-Type'>
            <img src="./src/images/Event/circle_Talk.png" alt="" />
            <Link to="/Event"><img src="./src/images/Event/event-Type1_hover.png" alt="" /></Link>
            <Link to="/Event_Type2"><img id="event-Type2" src="./src/images/Event/event-Type2.png" alt="" /></Link>
            <Link to="/Event_Type3"><img id='event-Type3' src="./src/images/Event/event-Type3.png" alt="" /></Link>
            <img style={{ marginLeft: '268px' }} src="./src/images/Event/btn_Select.png" alt="" />
          </div>
          <div id='row-event_Card'>
            <div id='column-event_Card'>
              <Link to="/Event_Detail"><img src="./src/images/Event/event_Image.png" alt="" />
                <small>2025.01.25（六）14:00～16:00</small>
                <h2>【過年限定】紙韻心意剪紙活動</h2>
                <p>NT$ 500 元/人</p>
                <hr />
                <ul id='event-Tags'>
                  <li>#台北市</li>
                  <li>#藝術創作</li>
                </ul>
              </Link>
            </div>
            <div id='column-event_Card'>
              <Link to="/Event_Detail"><img src="./src/images/Event/event_Image.png" alt="" />
                <small>2025.01.25（六）14:00～16:00</small>
                <h2>【過年限定】紙韻心意剪紙活動</h2>
                <p>NT$ 500 元/人</p>
                <hr />
                <ul id='event-Tags'>
                  <li>#台北市</li>
                  <li>#藝術創作</li>
                </ul>
              </Link>
            </div>
            <div id='column-event_Card'>
              <Link to="/Event_Detail"><img src="./src/images/Event/event_Image.png" alt="" />
                <small>2025.01.25（六）14:00～16:00</small>
                <h2>【過年限定】紙韻心意剪紙活動</h2>
                <p>NT$ 500 元/人</p>
                <hr />
                <ul id='event-Tags'>
                  <li>#台北市</li>
                  <li>#藝術創作</li>
                </ul>
              </Link>
            </div>
          </div>
          <div id='row-event_Card'>
            <div id='column-event_Card'>
              <Link to="/Event_Detail"><img src="./src/images/Event/event_Image.png" alt="" />
                <small>2025.01.25（六）14:00～16:00</small>
                <h2>【過年限定】紙韻心意剪紙活動</h2>
                <p>NT$ 500 元/人</p>
                <hr />
                <ul id='event-Tags'>
                  <li>#台北市</li>
                  <li>#藝術創作</li>
                </ul>
              </Link>
            </div>
            <div id='column-event_Card'>
              <Link to="/Event_Detail"><img src="./src/images/Event/event_Image.png" alt="" />
                <small>2025.01.25（六）14:00～16:00</small>
                <h2>【過年限定】紙韻心意剪紙活動</h2>
                <p>NT$ 500 元/人</p>
                <hr />
                <ul id='event-Tags'>
                  <li>#台北市</li>
                  <li>#藝術創作</li>
                </ul>
              </Link>
            </div>
            <div id='column-event_Card'>
              <Link to="/Event_Detail"><img src="./src/images/Event/event_Image.png" alt="" />
                <small>2025.01.25（六）14:00～16:00</small>
                <h2>【過年限定】紙韻心意剪紙活動</h2>
                <p>NT$ 500 元/人</p>
                <hr />
                <ul id='event-Tags'>
                  <li>#台北市</li>
                  <li>#藝術創作</li>
                </ul>
              </Link>
            </div>
          </div>
          <div id='row-event_Card'>
            <div id='column-event_Card'>
              <Link to="/Event_Detail"><img src="./src/images/Event/event_Image.png" alt="" />
                <small>2025.01.25（六）14:00～16:00</small>
                <h2>【過年限定】紙韻心意剪紙活動</h2>
                <p>NT$ 500 元/人</p>
                <hr />
                <ul id='event-Tags'>
                  <li>#台北市</li>
                  <li>#藝術創作</li>
                </ul>
              </Link>
            </div>
            <div id='column-event_Card'>
              <Link to="/Event_Detail"><img src="./src/images/Event/event_Image.png" alt="" />
                <small>2025.01.25（六）14:00～16:00</small>
                <h2>【過年限定】紙韻心意剪紙活動</h2>
                <p>NT$ 500 元/人</p>
                <hr />
                <ul id='event-Tags'>
                  <li>#台北市</li>
                  <li>#藝術創作</li>
                </ul>
              </Link>
            </div>
            <div id='column-event_Card'>
              <Link to="/Event_Detail"><img src="./src/images/Event/event_Image.png" alt="" />
                <small>2025.01.25（六）14:00～16:00</small>
                <h2>【過年限定】紙韻心意剪紙活動</h2>
                <p>NT$ 500 元/人</p>
                <hr />
                <ul id='event-Tags'>
                  <li>#台北市</li>
                  <li>#藝術創作</li>
                </ul>
              </Link>
            </div>
          </div>
          <div id='row-event_Card'>
            <div id='column-event_Card'>
              <Link to="/Event_Detail"><img src="./src/images/Event/event_Image.png" alt="" />
                <small>2025.01.25（六）14:00～16:00</small>
                <h2>【過年限定】紙韻心意剪紙活動</h2>
                <p>NT$ 500 元/人</p>
                <hr />
                <ul id='event-Tags'>
                  <li>#台北市</li>
                  <li>#藝術創作</li>
                </ul>
              </Link>
            </div>
            <div id='column-event_Card'>
              <Link to="/Event_Detail"><img src="./src/images/Event/event_Image.png" alt="" />
                <small>2025.01.25（六）14:00～16:00</small>
                <h2>【過年限定】紙韻心意剪紙活動</h2>
                <p>NT$ 500 元/人</p>
                <hr />
                <ul id='event-Tags'>
                  <li>#台北市</li>
                  <li>#藝術創作</li>
                </ul>
              </Link>
            </div>
            <div id='column-event_Card'>
              <Link to="/Event_Detail"><img src="./src/images/Event/event_Image.png" alt="" />
                <small>2025.01.25（六）14:00～16:00</small>
                <h2>【過年限定】紙韻心意剪紙活動</h2>
                <p>NT$ 500 元/人</p>
                <hr />
                <ul id='event-Tags'>
                  <li>#台北市</li>
                  <li>#藝術創作</li>
                </ul>
              </Link>
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