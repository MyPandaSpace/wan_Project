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
				<div id="faq-main">
				<div id="faq-member">
					<div className="faq-title">
						<h2>會員相關</h2>
						<img src="./src/images/others/svg/dec7.svg" alt="Decoration" />
					</div>
					<div className="faq-qa">
						<ul className="faq-qalist">
							<li className='faq-content'>
								<div className="faq-q">
									<p className="title">如何註冊為會員？</p>
									<img src="./src/images/others/svg/dec2_arrow_down.svg" alt="Arrow Down" />
								</div>
								<div className="faq-a">
									<p>點擊網站右上角的會員icon按鈕，輸入您的姓名、電子郵件和密碼，即可完成註冊流程。如果您已有帳號，可以直接登入。</p>
								</div>
							</li>
							<li className='faq-content'>
								<div className="faq-q">
									<p className="title">會員有什麼專屬優惠？</p>
									<img src="./src/images/others/svg/dec2_arrow_down.svg" alt="Arrow Down" />
								</div>
								<div className="faq-a">
									<p>會員可享專屬折扣、優先報名資格，以及不定期的活動通知與福利。詳細優惠內容將於會員專區或電子郵件中公告。</p>
								</div>
							</li>
							<li className='faq-content'>
								<div className="faq-q">
									<p className="title">可以更改會員資料嗎？</p>
									<img src="./src/images/others/svg/dec2_arrow_down.svg" alt="Arrow Down" />
								</div>
								<div className="faq-a">
									<p>可以！登入後前往「會員中心」，即可更新您的姓名、聯絡方式或其他個人資料。如遇任何問題，請聯繫客服協助處理。</p>
								</div>
							</li>
							<li className='faq-content'>
								<div className="faq-q">
									<p className="title">忘記密碼怎麼辦？</p>
									<img src="./src/images/others/svg/dec2_arrow_down.svg" alt="Arrow Down" />
								</div>
								<div className="faq-a">
									<p>在登入頁面點擊「忘記密碼」，輸入註冊時使用的電子郵件，我們將寄送重設密碼的連結給您。</p>
								</div>
							</li>
						</ul>
					</div>
				</div>

				{/* 報名相關 */}
				<div id="faq-event">
					<div className="faq-title">
						<h2>報名相關</h2>
						<img src="./src/images/others/svg/dec7.svg" alt="Decoration" />
					</div>
					<div className="faq-qa">
						<ul className="faq-qalist">
							<li className='faq-content'>
								<div className="faq-q">
									<p className="title">如何報名活動或課程？</p>
									<img src="./src/images/others/svg/dec2_arrow_down.svg" alt="Arrow Down" />
								</div>
								<div className="faq-a">
									<p>選擇您感興趣的活動，點擊報名頁面並填寫相關資料後完成付款，確認所有資訊無誤後送出，即可完成報名。</p>
								</div>
							</li>
							<li className='faq-content'>
								<div className="faq-q">
									<p className="title">報名後可以取消或改期嗎？</p>
									<img src="./src/images/others/svg/dec2_arrow_down.svg" alt="Arrow Down" />
								</div>
								<div className="faq-a">
									<p>視活動性質而定，部分活動不接受取消或改期。詳細規定請參閱活動頁面的報名須知，或聯繫客服確認。</p>
								</div>
							</li>
							<li className='faq-content'>
								<div className="faq-q">
									<p className="title">如何確認我的報名成功？</p>
									<img src="./src/images/others/svg/dec2_arrow_down.svg" alt="Arrow Down" />
								</div>
								<div className="faq-a">
									<p>完成付款後，您會收到一封確認電子郵件，內含報名資訊與票券內容。如未收到，請檢查垃圾郵件夾或聯繫客服。</p>
								</div>
							</li>
							<li className='faq-content'>
								<div className="faq-q">
									<p className="title">活動費用包含哪些內容？</p>
									<img src="./src/images/others/svg/dec2_arrow_down.svg" alt="Arrow Down" />
								</div>
								<div className="faq-a">
									<p>活動費用通常包含課程指導、材料工具，以及部分場合的場地費等。每個活動的詳細費用內容將在活動頁面說明。</p>
								</div>
							</li>
						</ul>
					</div>
				</div>

				{/* 其他 */}
				<div id="faq-other">
					<div className="faq-title">
						<h2>其他</h2>
						<img src="./src/images/others/svg/dec7.svg" alt="Decoration" />
					</div>
					<div className="faq-qa">
						<ul className="faq-qalist">
							<li className='faq-content'>
								<div className="faq-q">
									<p className="title">如何聯繫客服？</p>
									<img src="./src/images/others/svg/dec2_arrow_down.svg" alt="Arrow Down" />
								</div>
								<div className="faq-a">
									<p>您可以透過關於我們的「聯繫我們」頁面留言，或撥打客服專線與我們聯絡。我們的客服時間為週一至週五 9:00-18:00。</p>
								</div>
							</li>
							<li className='faq-content'>
								<div className="faq-q">
									<p className="title">網站內容是否適合兒童？</p>
									<img src="./src/images/others/svg/dec2_arrow_down.svg" alt="Arrow Down" />
								</div>
								<div className="faq-a">
									<p>網站內容主要針對成人設計，但部分活動適合親子參與。請留意活動頁面的適用對象標示。</p>
								</div>
							</li>
							<li className='faq-content'>
								<div className="faq-q">
									<p className="title">是否可以開立發票？</p>
									<img src="./src/images/others/svg/dec2_arrow_down.svg" alt="Arrow Down" />
								</div>
								<div className="faq-a">
									<p>可以！報名時請於付款葉面填寫發票資訊，電子發票將於報名完成後寄送至您的電子郵件。</p>
								</div>
							</li>
							<li className='faq-content'>
								<div className="faq-q">
									<p className="title">可以代替朋友參加活動嗎？</p>
									<img src="./src/images/others/svg/dec2_arrow_down.svg" alt="Arrow Down" />
								</div>
								<div className="faq-a">
									<p>可以，但需提前聯繫客服更改參加人資料，以確保活動現場順利報到。部分活動可能限制更改，請參閱活動須知。</p>
								</div>
							</li>
						</ul>
					</div>
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
