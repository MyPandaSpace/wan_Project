import React, { useEffect } from 'react';
import './css/style-qa.css';
import $ from 'jquery';

function FaqPage() {
	useEffect(() => {
		// 使用 jQuery 當組件加載後
		$('.faq-q').click(function () {
			const $this = $(this);

			// 收合其他faq
			$('.faq-q').not($this).removeClass('on').next('.faq-a').slideUp(300);
			// 展開收合被點擊的faq
			$this.toggleClass('on').next('.faq-a').slideToggle(300);
		});

		// 清理函數 (如果需要清理 jQuery 事件)
		return () => {
			$('.faq-q').off('click');
		};
	}, []);  // 確保只在組件加載時執行一次

	return (
		<div>
			<header id='navbar'>
				<a href="/"><img id="logo" src="./src/images/index/logo.svg" alt="logo" /></a>
				<div id='icon'>
					<img id="icon-Member" src="./src/images/index/icon-Member.svg" alt="Member" />
					<img id="icon-Hamburger" src="./src/images/index/icon-Hamburger.svg" alt="Hamburger" />
				</div>
				<img id="navbar-Bg" src="../src/images/index/navbar_Bg.png" alt="" />
			</header>
			<main id="faq">
				{/* 主要標題 */}
				<div className="h1">
					<div className="h1-div">
						<figure className="h1-title">
							<img className="h1-flower1" src="../src/images/others/svg/dec15.svg" alt="Flower 1" />
							<img className="h1_titleImg" src="./src/images/title/常見問題.png" alt="FAQ Title" />
							<img className="h1-flower2" src="./src/images/others/svg/dec14.svg" alt="Flower 2" />
						</figure>
					</div>
				</div>

				{/* 分類按鈕 */}
				<div className="faq-category">
					<div>
						<a href="#faq-member">
							<img src="./src/images/btn/btn1-s-normal.svg" alt="Member Related" />
							<p>會員相關</p>
						</a>
					</div>
					<div>
						<a href="#faq-event">
							<img src="./src/images/btn/btn1-s-normal.svg" alt="Event Related" />
							<p>報名相關</p>
						</a>
					</div>
					<div>
						<a href="#faq-other">
							<img src="./src/images/btn/btn1-s-normal.svg" alt="Other" />
							<p>其他</p>
						</a>
					</div>
				</div>

				{/* 會員相關 */}
				<div id="faq-member">
					<div className="faq-title">
						<hr color="#dadada" size="1px" />
						<h2>會員相關</h2>
						<img src="./src/images/others/svg/dec7.svg" alt="Decoration" />
					</div>
					<div className="faq-qa">
						<hr color="#dadada" size="1px" />
						<ul className="faq-qalist">
							<li>
								<div className="faq-q">
									<p className="title">如何註冊為會員？</p>
									<img src="./src/images/others/svg/dec2_arrow_down.svg" alt="Arrow Down" />
								</div>
								<div className="faq-a">
									<p>1+1=2</p>
								</div>
							</li>
							<hr color="#dadada" size="1px" />
							<li>
								<div className="faq-q">
									<p className="title">會員有什麼專屬優惠？</p>
									<img src="./src/images/others/svg/dec2_arrow_down.svg" alt="Arrow Down" />
								</div>
								<div className="faq-a">
									<p>1+1=2</p>
								</div>
							</li>
							<hr color="#dadada" size="1px" />

							<div className="faq-q">
								<p className="title">可以更改會員資料嗎？</p>
								<img src="./src/images/others/svg/dec2_arrow_down.svg" alt="Arrow Down" />
							</div>
							<div className="faq-a">
								<p>1+1=2</p>
							</div>

							<hr color="#dadada" size="1px" />

							<div className="faq-q">
								<p className="title">忘記密碼怎麼辦？</p>
								<img src="./src/images/others/svg/dec2_arrow_down.svg" alt="Arrow Down" />
							</div>
							<div className="faq-a">
								<p>1+1=2</p>
							</div>
						</ul>
					</div>
				</div>

				{/* 報名相關 */}
				<div id="faq-event">
					<div className="faq-title">
						<hr color="#dadada" size="1px" />
						<h2>報名相關</h2>
						<img src="./src/images/others/svg/dec7.svg" alt="Decoration" />
					</div>
					<div className="faq-qa">
						<hr color="#dadada" size="1px" />
						<ul className="faq-qalist">
							<li>
								<div className="faq-q">
									<p className="title">如何報名活動或課程？</p>
									<img src="./src/images/others/svg/dec2_arrow_down.svg" alt="Arrow Down" />
								</div>
								<div className="faq-a">
									<p>1+1=2</p>
								</div>
							</li>
							<hr color="#dadada" size="1px" />
							<li>
								<div className="faq-q">
									<p className="title">報名後可以取消或改期嗎？</p>
									<img src="./src/images/others/svg/dec2_arrow_down.svg" alt="Arrow Down" />
								</div>
								<div className="faq-a">
									<p>1+1=2</p>
								</div>
							</li>
							<hr color="#dadada" size="1px" />

							<div className="faq-q">
								<p className="title">如何確認我的報名成功？</p>
								<img src="./src/images/others/svg/dec2_arrow_down.svg" alt="Arrow Down" />
							</div>
							<div className="faq-a">
								<p>1+1=2</p>
							</div>

							<hr color="#dadada" size="1px" />

							<div className="faq-q">
								<p className="title">活動費用包含哪些內容？</p>
								<img src="./src/images/others/svg/dec2_arrow_down.svg" alt="Arrow Down" />
							</div>
							<div className="faq-a">
								<p>1+1=2</p>
							</div>
						</ul>
					</div>
				</div>

				{/* 其他 */}
				<div id="faq-other">
					<div className="faq-title">
						<hr color="#dadada" size="1px" />
						<h2>其他</h2>
						<img src="./src/images/others/svg/dec7.svg" alt="Decoration" />
					</div>
					<div className="faq-qa">
						<hr color="#dadada" size="1px" />
						<ul className="faq-qalist">
							<li>
								<div className="faq-q">
									<p className="title">如何聯繫客服？</p>
									<img src="./src/images/others/svg/dec2_arrow_down.svg" alt="Arrow Down" />
								</div>
								<div className="faq-a">
									<p>1+1=2</p>
								</div>
							</li>
							<hr color="#dadada" size="1px" />
							<li>
								<div className="faq-q">
									<p className="title">網站內容是否適合兒童？</p>
									<img src="./src/images/others/svg/dec2_arrow_down.svg" alt="Arrow Down" />
								</div>
								<div className="faq-a">
									<p>1+1=2</p>
								</div>
							</li>
							<hr color="#dadada" size="1px" />

							<div className="faq-q">
								<p className="title">是否可以開立發票？</p>
								<img src="./src/images/others/svg/dec2_arrow_down.svg" alt="Arrow Down" />
							</div>
							<div className="faq-a">
								<p>1+1=2</p>
							</div>

							<hr color="#dadada" size="1px" />

							<div className="faq-q">
								<p className="title">活動可以代替朋友參加活動嗎？</p>
								<img src="./src/images/others/svg/dec2_arrow_down.svg" alt="Arrow Down" />
							</div>
							<div className="faq-a">
								<p>1+1=2</p>
							</div>
						</ul>
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

export default FaqPage;