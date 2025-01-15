import React from "react";
import "./css/Apply_Page.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import { Link } from "react-router-dom";

const StepList = ({ currentStep = 2 }) => {
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

function Apply_Page2() {
	return (
		<div className="apply-wrapper">
			<Navbar />
			<img id="navbar-Bg" src="./src/images/index/navbar_Bg.png" alt="" />
			<StepList currentStep={2} />
			<main id="Apply_Page2">
				<div className="apply-container">
					{/* 左側 */}
					<div className="apply_left">
						{/* 付款方式 */}
						<div className="payment-method-card">
							<div className="payment-options">
								<div className="payment-box">
									<div className="payment-option">
										<input type="radio" id="credit-card" name="payment" value="credit-card" defaultChecked />
										<label htmlFor="credit-card">信用金融卡/簽帳卡</label>
										<div className="card-logos">
											<img src="./src/images/Apply_Page/payment.png" alt="Visa Mastercard JCB AE" />
										</div>
									</div>
									<div className="form-group form-group-s">
										<label>*信用卡卡號</label>
										<input type="text" placeholder="**** **** **** ****" />
									</div>
									<div className="form-group-row">
										<div className="form-group form-group-s">
											<label>*信用卡有效期限</label>
											<input type="text" placeholder="MM / YY" />
										</div>
										<div className="form-group form-group-s">
											<label>*安全識別碼</label>
											<input type="text" placeholder="CVV" />
										</div>
									</div>
								</div>
								<div className="payment-box">
									<div className="payment-option">
										<input type="radio" id="atm" name="payment" value="atm" />
										<label htmlFor="atm">ATM轉帳</label>
									</div>
								</div>
							</div>
						</div>

						{/* 注意事項 */}
						<div className="pay-notice-content">
							<ul>
								<li>1. 付款前請仔細核對您的訂單內容，包括票種、數量、日期和時間等資訊，確保無誤。</li>
								<li>2. 請妥善保存確認信件、支付憑證和交易記錄，以便日後查詢或辦理退換票。</li>
								<li>3. 付款有時間限制，請務必在期限內完成付款，以免訂單失效。</li>
								<li>4. 部分活動票券可能會有轉讓或退票限制，請提前了解相關規定，以免造成損失。</li>
							</ul>
						</div>

						{/* 發票/統一編號 */}
						<div className="invoice-card">
							<div className="invoice-options">
								<div className="invoice-box">
									<div className="invoice-option">
										<input type="radio" id="personal" name="invoice" value="personal" defaultChecked />
										<label htmlFor="personal">個人雲端載具</label>
									</div>
									<div className="form-group form-group-s">
										<label>*手機條碼</label>
										<input type="text" placeholder="請輸入8字元載具條碼" />
									</div>
								</div>
								<div className="invoice-box">
									<div className="invoice-option">
										<input type="radio" id="company" name="invoice" value="company" />
										<label htmlFor="company">公司統編</label>
									</div>
									<div className="form-group-row">
										<div className="form-group form-group-left form-group-s">
											<label>*統一編號</label>
											<input type="tex" placeholder="請輸入統一編號" />
										</div>
										<div className="form-group form-group-right form-group-s">
											<label>*公司抬頭</label>
											<input type="text" placeholder="請輸入公司抬頭" />
										</div>
									</div>
								</div>
								<div className="invoice-box">
									<div className="invoice-option">
										<input type="radio" id="personal" name="invoice" value="personal" defaultChecked />
										<label htmlFor="personal">發票捐贈</label>
									</div>
									<div className="form-group form-group-s">
										<label>*捐贈碼</label>
										<input type="text" placeholder="請輸入半形數字捐贈碼" />
									</div>
								</div>
							</div>

						</div>
					</div>

					{/* 右側 */}
					<div className="apply_right2">
						<img src="./src/images/others/svg/image-border.svg" alt="訂單明細" />
						<div className="order-summary-2">
							<h2>訂單明細</h2>
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
							<div className="order-notes">
								<div className="order-note">
									<input type="checkbox" id="privacy" className="order-note-check" />
									<label htmlFor="privacy">訂閱電子報，接收第一手活動消息</label>
								</div>
								<div className="order-note">
									<input type="checkbox" id="privacy" className="order-note-check" />
									<label htmlFor="privacy">我已詳閱並同意買賣契約書</label>
								</div>
								<div className="order-note">
									<input type="checkbox" id="privacy" className="order-note-check" />
									<label htmlFor="privacy">此網站的表單僅供練習展示，不具備收集或儲存資料的功能，詳情請見使用條款。</label>
								</div>
							</div>
							{/* 確認送出按鈕 */}
							<div className="confirm-btn">
								<a href="/"><li
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
										className="confirm-btn-img"
										onMouseEnter={() => {
											document.querySelector('.confirm-btn-img').src = './src/images/btn/new-btn2-hover.png';  // 切換圖片
											document.querySelector('.confirm-btn-text').style.transform = 'top 45%'
										}}
										onMouseLeave={() => {
											document.querySelector('.confirm-btn-img').src = './src/images/btn/new-btn2-normal.png';  // 還原
											document.querySelector('.confirm-btn-text').style.transform = 'top 45%'
										}}
										onMouseDown={() => {
											document.querySelector('.confirm-btn-img').src = './src/images/btn/new-btn2-pressed.png';  // 按下
											document.querySelector('.confirm-btn-text').style.transform = 'top 50%';
										}}
										onMouseUp={() => {
											document.querySelector('.confirm-btn-img').src = './src/images/btn/new-btn2-normal.png';  // 放開
											document.querySelector('.confirm-btn-text').style.transform = 'top 45%'
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
										className="confirm-btn-text"
										onMouseEnter={() => {
											document.querySelector('.confirm-btn-img').src = './src/images/btn/new-btn2-hover.png';  // 切換圖片
											document.querySelector('.confirm-btn-text').style.transform = 'top 45%'
										}}
										onMouseLeave={() => {
											document.querySelector('.confirm-btn-img').src = './src/images/btn/new-btn2-normal.png';  // 還原
											document.querySelector('.confirm-btn-text').style.transform = 'top 45%'
										}}
										onMouseDown={() => {
											document.querySelector('.confirm-btn-img').src = './src/images/btn/new-btn2-pressed.png';  // 按下
											document.querySelector('.confirm-btn-text').style.transform = 'top 50%';
										}}
										onMouseUp={() => {
											document.querySelector('.confirm-btn-img').src = './src/images/btn/new-btn2-normal.png';  // 放開
											document.querySelector('.confirm-btn-text').style.transform = 'top 45%'
										}}
									>
										確認送出
									</span>
								</li></a>
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}

export default Apply_Page2;