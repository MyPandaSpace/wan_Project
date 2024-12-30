import React, { useState, useEffect } from "react";
import "./css/Event_Detail.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import { Link } from "react-router-dom";

function Event_Detail() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const images = [
		"./src/images/Event/events/newyear_1.jpg",
		"./src/images/Event/events/newyear_2.jpg",
		"./src/images/Event/events/newyear_3.jpg",
	];

	// 自動切換輪播
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
		}, 3000); // 每3秒自動切換
		return () => clearInterval(interval);
	}, [images.length]);

	const handleIndicatorClick = (index) => {
		setCurrentSlide(index); // 點擊指示器切換到對應圖片
	};

	return (
		<div>
			<Navbar />
			<img id="navbar-Bg" src="../src/images/index/navbar_Bg.png" alt="" />
			<main id="eventDetail">
				{/* 左側 */}
				<div className="left">
					<div className="eventBanner">
						{/* 輪播圖片 */}
						<div className="detail-carousel">
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
							<div className="detail-carousel-indicators">
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
					<div className="eventContents">
						<div id="eventIntro" className="eventDiv">
							<h2>活動簡介</h2>
							<p>
								點亮新年的幸福之光！用自己的雙手為燈籠添上專屬色彩，創造獨一無二的年節裝飾。在溫馨的氛圍中，透過手作彩繪燈籠，不僅展現你的創意，還能為家中增添喜氣與祝福！
								<br />
								<br />
								這個活動適合所有想要沉澱心情、用心創作的人，一同透過簡單的創作步驟，為新的一年剪出滿滿的美好與希望！
								<br />
								<br />
								活動日期：
								2025.01.25（六）14:00～16:00
								<br />
								活動地點：創作空間5號教室（台北市中山區中山路2段3樓）
								<br />
								老師：Jenny
								<br />
								對象：13歲以上
								<br />
								人數：15人
								<br />
								費用：600元/人
								<br />
								<br />
								※為維護課程品質及人流控管，請勿攜伴。（包含孩童、嬰幼兒）
							</p>
						</div>
						<div id="eventMaterial" className='eventDiv'>
							<h2>活動材料</h2>
							<p>
								燈籠本體：高品質紙燈籠，適合各種創作風格設計。
								<br />
								專業指導： 無需經驗，老師會從基礎開始教學，確保每位學員都能順利完成創作。
								<br />
								暖心禮物： 繪製完成的燈籠可用於春節裝飾或當作特別的小禮物送給親朋好友。
								<br />
								療癒互動： 在輕鬆愉快的氛圍中，與其他學員一起創作與交流，感受滿滿的春節暖意。
								<br />
								創意範本：提供新年吉祥圖案範例，幫助初學者輕鬆上手
							</p>
						</div>
						<div id="eventContent" className='eventDiv'>
							<h2>活動內容</h2>
							<p>
								Part 1：手作燈籠基本教學
								燈籠結構與創作技巧介紹
								如何讓燈籠兼具實用與美觀
								<br />
								Part 2：基礎構圖與設計
								從簡單的圖案開始練習
								學習毛筆掌握技巧
								<br />
								Part 3：燈籠彩繪創作
								提供各種新年元素範例
								修飾細節，完成獨一無二的作品
							</p>
						</div>
						<div id="eventTA" className='eventDiv'>
							<h2>適合對象</h2>
							<p>
								· 想親手製作新年裝飾的手作愛好者
								<br />
								· 希望用心意點亮家的溫暖之光的朋友
								<br />
								· 想要體驗新年傳統與現代結合藝術創作的參與者
							</p>
						</div>
						<div id="eventPre" className='eventDiv'>
							<h2>上課前準備</h2>
							<p>
								只需帶著對新年的期待與愉快心情，現場將提供所有材料與工具！（包括紅色專用燈籠、毛筆、墨汁、打樣模具等）。
							</p>
						</div>
						<div id="eventNotice" className='eventDiv'>
							<h2>注意事項</h2>
							<p>
								1. 請注意服裝，避免使用易被顏料沾染的材質。
								<br />
								2. 課程中將提供專業講義與材料，亦可攜帶個人工具參加。
								<br />
								3. 為維持上課品質，課程不接受旁聽及陪同。
								<br />
								<br />
								※若有其他問題可先至
								<Link to="/Faq" className="linkFaq">常見問題</Link>
								找找，若沒有解決您的疑惑歡迎來信至 email@gmail.com！
								<br />
								<br />
								快來和我們一起體驗彩繪燈籠的樂趣吧！
							</p>
						</div>
					</div>
				</div>
				{/* 右側 */}
				<div className="right">
					<div className="detailCtaSticky">
						<div className="detailCta">
							<img src="../src/images/others/svg/image-border.svg" alt="立即報名" />
							<div className="detailCtaContent">
								<h3>【過年限定】彩繪心意燈籠活動</h3>
								<div className="CtaContent">
									<p className="CtaContent1">
										用簡單的創作迎接新一年的吉祥氛圍，讓這份手作點亮你的春節裝飾！
										<br />
									</p>
									<p className="CtaContent2">
										日期：2025.01.25（六）
										<br />
										時間：14:00～16:00
										<br />
										地點：創作空間5號教室
									</p>
								</div>
								<hr className="ctaHr" />
								<div id="detailIcon">
									<div className="detailApply">
										<p>立即報名</p>
										<img src="../src/images/btn/new-btn2-normal.png" alt="" />
									</div>
									<div className="detailCollect">
										<img src="../src/images/btn/collect-normal.png" alt="" />
									</div>
									<div className="detailShare">
										<img src="../src/images/btn/share-normal.png" alt="" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}

export default Event_Detail;
