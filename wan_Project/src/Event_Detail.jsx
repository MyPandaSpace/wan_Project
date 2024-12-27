import React, { useEffect } from 'react';
import './css/Event_Detail.css';
import $ from 'jquery';
import Navbar from './component/Navbar';

function Event_Detail() {

	return (
		<div>
			<Navbar />
			<img id="navbar-Bg" src="../src/images/index/navbar_Bg.png" alt="" />
			<main id="eventDetail">
				<div className="evevtBanner">
					{/* <img src='./src/images/Event/events/newyear_1.jpg' alt="event_banner" /> */}
				</div>
				<div className='eventContents'>
					<div id="eventIntro">
						<h2>活動簡介</h2>
						<p>
							以剪紙這項傳統藝術來迎接新年！透過一刀一剪，將你的心意轉化為美麗的圖案，無論是喜慶的紅色剪紙或精緻的對聯裝飾，都充滿溫暖的祝福。

							這個活動適合所有想要沉澱心情、用心創作的人，一同透過簡單的創作步驟，為新的一年剪出滿滿的美好與希望！

							活動日期：
							2025.01.25（六）14:00～16:00
							活動地點：創作空間5號教室（台北市中山區中山路2段3樓）
							老師：Jenny
							對象：18歲以上
							人數：13人
							費用：500元/人

							※為維護課程品質及人流控管，請勿攜伴。（包含孩童、嬰幼兒）
						</p>
					</div>
					<div id="eventMaterial">
						<h2>活動材料</h2>
						<p>
							燈籠本體：高品質紙燈籠，適合各種創作風格設計。
							專業指導： 無需經驗，老師會從基礎開始教學，確保每位學員都能順利完成創作。
							暖心禮物： 繪製完成的燈籠可用於春節裝飾或當作特別的小禮物送給親朋好友。
							療癒互動： 在輕鬆愉快的氛圍中，與其他學員一起創作與交流，感受滿滿的春節暖意。
							創意範本：提供新年吉祥圖案範例，幫助初學者輕鬆上手
						</p>
					</div>
					<div id="eventContent">
						<h2>活動內容</h2>
						<p>
							Part 1：手作燈籠基本教學
							燈籠結構與創作技巧介紹
							如何讓燈籠兼具實用與美觀
							Part 2：基礎構圖與設計
							從簡單的圖案開始練習
							學習毛筆掌握技巧
							Part 3：燈籠彩繪創作
							提供各種新年元素範例
							修飾細節，完成獨一無二的作品
						</p>
					</div>
					<div id="eventTA">
						<h2>適合對象</h2>
						<p>
							想親手製作新年裝飾的手作愛好者
							希望用心意點亮家的溫暖之光的朋友
							想要體驗新年傳統與現代結合藝術創作的參與者
						</p>
					</div>
					<div id="eventPre">
						<h2>上課前準備</h2>
						<p>
							只需帶著對新年的期待與愉快心情，現場將提供所有材料與工具！（包括紅色專用燈籠、毛筆、墨汁、打樣模具等）。
						</p>
					</div>
					<div id="eventNotice">
						<h2>注意事項</h2>
						<p>
							請注意服裝，避免使用易被顏料沾染的材質。
							課程中將提供專業講義與材料，亦可攜帶個人工具參加。
							為維持上課品質，課程不接受旁聽及陪同。
						</p>
					</div>
				</div>
			</main>
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
		</div>
	);
};

export default Event_Detail;
