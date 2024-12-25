import { useState } from "react";
import Modal_Login from "./Modal_Login";

export default function Navbar() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleOpenModal = () => setIsModalOpen(true);

	const handleCloseModal = () => setIsModalOpen(false);
	return (
		<>
			<header id='navbar'>
				<a href="/"><img id="logo" src="./src/images/index/logo.svg" alt="logo" /></a>
				<div id='icon'>
					<button onClick={handleOpenModal} style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}><img id="icon-Member" src="./src/images/index/icon-Member.svg" alt="Member" /></button>
					<a href="#"><img id="icon-Hamburger" src="./src/images/index/icon-Hamburger.svg" alt="Hamburger" /></a>
				</div>
				{/* 彈窗組件 */}
				<Modal_Login show={isModalOpen} onClose={handleCloseModal} />
			</header>
		</>
	)
}