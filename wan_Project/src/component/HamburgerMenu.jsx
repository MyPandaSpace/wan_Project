import React, { useState } from "react";
import "./css/HamburgerMenu.css"; // 請將樣式文件包含進來
import { Link } from "react-router-dom";

const HamburgerMenu = ({ show, onClose }) => {
	const [closeButtonImage, setCloseButtonImage] = useState("./src/images/modal_Login/close.png");
	if (!show) return null; // 如果不顯示，返回 null

	return (
		<div className="HamburgerMenu-modal" onClick={onClose}>
			<div onClick={(e) => e.stopPropagation()}>

				<button
					className="HamburgerMenu-header"
					onClick={onClose}
					onMouseEnter={() => setCloseButtonImage("./src/images/modal_Login/close_Hover.png")}
					onMouseLeave={() => setCloseButtonImage("./src/images/modal_Login/close.png")}
					onMouseDown={() => setCloseButtonImage("./src/images/modal_Login/close_Pressed.png")}
					onMouseUp={() => setCloseButtonImage("./src/images/modal_Login/close_Hover.png")}
				>
					<img src={closeButtonImage} alt="Close" />
				</button>

				<div className="HamburgerMenu-content">
					<ul>
						<li><Link to="/About"><img src="./src/component/images/HamburgerMenu/About.png" alt="" /></Link></li>
						<li><Link to="/Event"><img src="./src/component/images/HamburgerMenu/Event.png" alt="" /></Link></li>
						<li><Link to="/Article_Bay"><img src="./src/component/images/HamburgerMenu/Article_Bay.png" alt="" /></Link></li>
						<li><Link to="/FaqPage"><img src="./src/component/images/HamburgerMenu/FaqPage.png" alt="" /></Link></li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default HamburgerMenu;
