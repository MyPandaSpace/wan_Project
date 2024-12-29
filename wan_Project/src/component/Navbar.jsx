import { useState } from "react";
import Modal_Login from "./Modal_Login";
import Modal_SignUp from "./Modal_Signup";
import "../css/Navbar.css";

export default function Navbar() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const [isLoginMode, setIsLoginMode] = useState(true); // 控制顯示登入或註冊視窗

	const handleOpenModal = () => setIsModalOpen(true);

	const handleCloseModal = () => setIsModalOpen(false);

	// 切換到註冊頁面
	const switchToSignUp = () => setIsLoginMode(false);

	// 切換到登入頁面
	const switchToLogin = () => setIsLoginMode(true);

	return (
		<>
			<header id='navbar'>
				<a href="/"><img id="logo" src="./src/images/index/logo.svg" alt="logo" /></a>
				<div id='icon'>
					<button onClick={handleOpenModal} style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}><img id="icon-Member" src="./src/images/index/icon-Member.svg" alt="Member" /></button>
					<a href="#"><img id="icon-Hamburger" src="./src/images/index/icon-Hamburger.svg" alt="Hamburger" /></a>
				</div>

				{/* 根據 isLoginMode 顯示不同的彈窗 */}
				{isModalOpen && (
					isLoginMode ? (
						<Modal_Login show={isModalOpen} onClose={handleCloseModal} onSwitchToSignUp={switchToSignUp} />
					) : (
						<Modal_SignUp show={isModalOpen} onClose={handleCloseModal} onSwitchToLogin={switchToLogin} />
					)
				)}
			</header>
		</>
	)
}