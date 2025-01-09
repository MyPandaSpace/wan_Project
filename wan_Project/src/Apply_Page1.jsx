import React from "react";
import "./css/Apply_Page.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import { Link } from "react-router-dom";

const StepList = ({ currentStep = 1 }) => {
	const steps = [
		{ number: 1, text: '填寫資料' },
		{ number: 2, text: '確認資料' },
		{ number: 3, text: '完成報名' }
	];

	return (
		<div className="step-list-container">
			<div className="step-list">
				{steps.map((step, index) => (
					<div key={step.number} className="step-item">
						<div className={`step-circle ${currentStep >= step.number ? 'active' : ''}`}>
							{step.number}
						</div>
						<div className={`step-text ${currentStep >= step.number ? 'active' : ''}`}>
							{step.text}
						</div>
						{index < steps.length - 1 && (
							<div className={`step-line ${currentStep > step.number ? 'active' : ''}`}></div>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

function Apply_Page1() {
	return (
		<div className="apply-wrapper">
			<Navbar />
			<img id="navbar-Bg" src="../src/images/index/navbar_Bg.png" alt="" />
			<StepList currentStep={1} />
			<main id="Apply_Page1">
				<div className="apply-container">
					{/* 左側 */}
					<div className="apply_left">
						{/* 報名活動 */}
						{/* <h2>報名活動</h2> */}
						<div className="apply-event-card">
							<div className="event-info">
								<img src="/src/images/Event/events/newyear_1.jpg" alt="活動圖片" />
							</div>
							<div className="event-info">
								<div className="apply-content-top">
									<h3>【過年限定】彩繪心意燈籠活動</h3>
									<p>用簡單的創作迎接新一年的吉祥氛圍，讓這份手作點亮你的春節裝飾！</p>
								</div>
								<div className="apply-content-bottom">
									<span className="apply-price">NT$ 600</span>
									<div className="quantity-control">
										<button>-</button>
										<span>1</span>
										<button>+</button>
									</div>
								</div>
							</div>
						</div>

						{/* 訂購人資料 */}
						{/* <h2>訂購人資料</h2> */}
						<form className="apply-form">
							<div className="form-group">
								<label>*姓名</label>
								<input type="text" placeholder="請輸入姓名" />
							</div>
							<div className="form-group">
								<label>*手機號碼</label>
								<input type="tel" placeholder="請輸入手機號碼" />
							</div>
							<div className="form-group">
								<label>*電子郵件</label>
								<input type="email" placeholder="請輸入電子郵件" />
							</div>
							<div className="form-check">
								<input type="checkbox" id="privacy" />
								<label htmlFor="privacy">同會員資料（此網站的表單僅供練習展示，不具備任何收集或儲存資料的功能）</label>
							</div>
						</form>

						{/* 報名須知 */}
						{/* <h2>報名須知</h2> */}
						<div className="notice-content">
							<p>請注意：</p>
							<p>
								為確保消費者權益並防止非法囤票，同一使用者同時間僅能完成一筆訂單。
								請先完成目前的報名流程後，再進行下一筆訂單的報名；若同一個帳戶透過多開視窗同時報名或購買多筆訂單，系統將自動保留最後完成的訂單，並取消所有尚未完成報名的訂單。
							</p>
							<p>感謝您的理解與配合，若有任何疑問，歡迎隨時與我們聯繫！</p>
						</div>
					</div>

					{/* 右側 */}
					<div className="apply_right">
						<div className="applyCta">
							<img src="../src/images/others/svg/image-border.svg" alt="訂單明細" />
							<div className="order-summary">
								<h2>訂單明細</h2>
								<div className="coupon-section">
									<span>折價券：</span>
									<small>選擇或輸入折扣碼</small>
									<div className="coupon-input">
										<input type="text" placeholder="請輸入折扣碼" />
										<button>確認</button>
									</div>
									<label className="coupon-option">
										<input
											type="radio"
											name="coupon"
											value="firstevent492083713"
											className="coupon-radio"
										/>
										firstevent492083713
									</label>
								</div>
								<div className="price-summary">
									<div className="price-item">
										<span>活動小計</span>
										<span>NT$ 600</span>
									</div>
									<div className="price-item discount">
										<span>折價券折抵</span>
										<span>-NT$ 50</span>
									</div>
									<div className="total-price">
										<span>NT$ 550</span>
									</div>
								</div>
								{/* 前往付款按鈕 */}
								<div className="pay-btn">
									<Link to={'/Apply_Page2' } className="pay-btn" onClick={() => window.scrollTo(0, 0)}>
										<li
											onClick={() => {

											}}
											style={{
												position: 'relative',
												display: 'inline-block',
												width: '180px',
											}}
										>
											<img
												src="./src/images/btn/new-btn2-normal.png"
												alt="Pay now"
												style={{
													width: '100%',
													height: '100%',
													objectFit: 'contain',
													transition: '0.3s ease',
													cursor: 'pointer'
												}}
												className="pay-btn-img"
												onMouseEnter={() => {
													document.querySelector('.pay-btn-img').src = './src/images/btn/new-btn2-hover.png';  // 切換圖片
													document.querySelector('.pay-btn-text').style.transform = 'top 45%'
												}}
												onMouseLeave={() => {
													document.querySelector('.pay-btn-img').src = './src/images/btn/new-btn2-normal.png';  // 還原
													document.querySelector('.pay-btn-text').style.transform = 'top 45%'
												}}
												onMouseDown={() => {
													document.querySelector('.pay-btn-img').src = './src/images/btn/new-btn2-pressed.png';  // 按下
													document.querySelector('.pay-btn-text').style.transform = 'top 50%';
												}}
												onMouseUp={() => {
													document.querySelector('.pay-btn-img').src = './src/images/btn/new-btn2-normal.png';  // 放開
													document.querySelector('.pay-btn-text').style.transform = 'top 45%'
												}}
											/>
											<span
												style={{
													position: 'absolute',
													top: '45%',
													left: '50%',
													transform: 'translate(-50%, -50%)',
													color: 'white',
													fontSize: '24px',
													textAlign: 'center',
													whiteSpace: 'nowrap',
													cursor: 'pointer'
												}}
												className="pay-btn-text"
												onMouseEnter={() => {
													document.querySelector('.pay-btn-img').src = './src/images/btn/new-btn2-hover.png';  // 切換圖片
													document.querySelector('.pay-btn-text').style.transform = 'top 45%'
												}}
												onMouseLeave={() => {
													document.querySelector('.pay-btn-img').src = './src/images/btn/new-btn2-normal.png';  // 還原
													document.querySelector('.pay-btn-text').style.transform = 'top 45%'
												}}
												onMouseDown={() => {
													document.querySelector('.pay-btn-img').src = './src/images/btn/new-btn2-pressed.png';  // 按下
													document.querySelector('.pay-btn-text').style.transform = 'top 50%';
												}}
												onMouseUp={() => {
													document.querySelector('.pay-btn-img').src = './src/images/btn/new-btn2-normal.png';  // 放開
													document.querySelector('.pay-btn-text').style.transform = 'top 45%'
												}}
											>
												前往付款
											</span>
										</li>
									</Link>
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

export default Apply_Page1;