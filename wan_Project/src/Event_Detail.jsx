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

				<div id="evevt_banner">
					<img src='./src/images/Event_Detail/event_banner.png' alt="event_banner" />
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
