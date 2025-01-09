import Btn_goTop from './component/Btn_goTop';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import './css/Article.css';
import { Link } from "react-router-dom";

export default function Article() {

	return (
		<>
			<Navbar />
			<img id="navbar-Bg" src="../src/images/index/navbar_Bg.png" alt="" />
			<main id="main-article-container">
				<nav>
					<ul className="breadcrumb">
						<li><Link to="/Article_Bay" style={{ color: '#666' }} onClick={() => window.scrollTo(0, 0)}>心途之灣 </Link></li>
						<li> / </li>
						<li style={{ color: '#1684C8' }}> 正念冥想：活在當下，找到內心的平靜</li>
					</ul>
				</nav>
				{/* <!-- 文章內容 --> */}
				<section className="article-Content-Container">
					<header className="article-Header">
						<h1>正念冥想：活在當下，找到內心的平靜</h1>
						<small className="author">撰文 / 林郁虹醫生</small>
						<div>
							<img src="./src/images/article/meditation_01.png" alt="冥想活動照片" className="article-image" />
							<small>
								<figcaption className="article_photo-caption">圖 / 第7期自我成長 / 活動學員照</figcaption>
							</small>
						</div>
					</header>
					<div className="article-main-content">
						{/* <!-- 文字區 --> */}
						<div className="article-content">
							<h2>當生活的壓力讓你感到喘不過氣來時</h2>
							<p>正念冥想是一個溫柔的方式，讓你能夠在短短的幾分鐘內找回內心的平靜</p>
							<br />
							<h2>什麼是正念冥想？</h2>
							<p>正念冥想是一種讓我們專注於當下的練習，讓我們學會感知每一個當下的感受，不急於斷而是溫柔地接納它們。這是一個讓內心安靜下來，重新獲得力量的過程</p>
							<br />
							<h2>五分鐘冥想練習</h2>
							<p>選擇一個舒適安靜的地方，讓自己可以完全放鬆，與這個瞬間連結坐直或躺下：無論是坐著還是躺著，都要保持一個放鬆的姿勢，讓身體得到舒展專注於呼吸：將注意力集中在每一次的呼吸上，感受吸氣時空氣的流動，吐氣時的鬆每一個呼吸，都是一次重新找回平靜的旅程接受任何進入的念頭：在冥想過程中，思緒自然會來去。當你發現自己分心時，溫柔地將注意力帶回到呼吸上，並且不對自己有任何評價感恩結束：在五分鐘結束時，感謝自己為自己的心靈花時間。慢慢睜開眼睛，感受內心的寧靜，帶著平和的心情繼續一天的生活
							</p>
							<br />
							<h2>正念冥想的益處：減壓與情緒管理</h2>
							<p>長期練習正念冥想的人，往往會發現自己在面對困難和壓力時更加冷靜，能夠以更清晰的視角看待問題。這種技巧不僅對情緒健康有益，也能增進人際關係，因為它幫助我們學會更有同理心地聆聽他人。無論是日常生活中還是工作壓力中，正念冥想都是一個簡單卻強大的工具，讓我們能夠真正地活在當下，保持內心的平靜與清晰。每當你感到壓力和焦慮時，花幾分鐘與自己對話，放鬆心情。這是一種愛自己的方式，讓你擁有更多的力量來面對生活中的一切挑戰!
							</p>
						</div>
					</div>
					<div className='article-share-container'>
						<div className="article-share">
							<img src="./src/images/Article/favorite.png" alt="" />
							<img src="./src/images/Article/share.png" alt="" />
						</div>
					</div>
				</section>
				<Btn_goTop />
			</main>
			<Footer />
		</>
	)
}