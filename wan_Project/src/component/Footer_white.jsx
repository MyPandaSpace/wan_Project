import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
    return (
        <>
            <footer id='footer'>
                <img src="./src/images/index/footer_wan_white.png" alt="Footer" />
                <div className="footer-text">
                    <div id='footer-a'>
                        <Link to="/" onClick={() => window.scrollTo(0, 0)}>首頁</Link>
                        <Link to="/Event" onClick={() => window.scrollTo(0, 0)}>探索體驗村</Link>
                        <Link to="/Article_Bay" onClick={() => window.scrollTo(0, 0)}>心途之灣</Link>
                        <Link to="/Membership_myPage" onClick={() => window.scrollTo(0, 0)}>會員中心</Link>
                        <Link to="/About" onClick={() => window.scrollTo(0, 0)}>關於我們</Link>
                        <Link to="/FaqPage" onClick={() => window.scrollTo(0, 0)}>常見問題</Link>
                    </div>
                    <small id='copyright'>© 2024 灣 Wan. All rights reserved.</small>
                </div>
            </footer>
        </>
    );
}