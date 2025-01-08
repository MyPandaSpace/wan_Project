import React, { useState } from "react";
import "./css/HamburgerMenu.css"; // 請將樣式文件包含進來
import { Link } from "react-router-dom";

const HamburgerMenu = ({ show, onClose }) => {
	const [closeButtonImage, setCloseButtonImage] = useState("./src/images/modal_Login/close.png");
	const [aboutImage, setAboutImage] = useState("./src/component/images/HamburgerMenu/About.png");
	const [eventImage, setEventImage] = useState("./src/component/images/HamburgerMenu/Event.png");
	const [articleImage, setArticleImage] = useState("./src/component/images/HamburgerMenu/Article_Bay.png");
	const [faqImage, setFaqImage] = useState("./src/component/images/HamburgerMenu/FaqPage.png");

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
					<li>
              <Link to="/About">
                <img
                  src={aboutImage}
                  alt="About"
                  onMouseEnter={() => setAboutImage("./src/component/images/HamburgerMenu/About_Hover.png")}
                  onMouseLeave={() => setAboutImage("./src/component/images/HamburgerMenu/About.png")}
                  onMouseDown={() => setAboutImage("./src/component/images/HamburgerMenu/About.png")}
                  onMouseUp={() => setAboutImage("./src/component/images/HamburgerMenu/About_Hover.png")}
                />
              </Link>
            </li>
            <li>
              <Link to="/Event">
                <img
                  src={eventImage}
                  alt="Event"
                  onMouseEnter={() => setEventImage("./src/component/images/HamburgerMenu/Event_Hover.png")}
                  onMouseLeave={() => setEventImage("./src/component/images/HamburgerMenu/Event.png")}
                  onMouseDown={() => setEventImage("./src/component/images/HamburgerMenu/Event.png")}
                  onMouseUp={() => setEventImage("./src/component/images/HamburgerMenu/Event_Hover.png")}
                />
              </Link>
            </li>
            <li>
              <Link to="/Article_Bay">
                <img
                  src={articleImage}
                  alt="Article Bay"
                  onMouseEnter={() => setArticleImage("./src/component/images/HamburgerMenu/Article_Bay_Hover.png")}
                  onMouseLeave={() => setArticleImage("./src/component/images/HamburgerMenu/Article_Bay.png")}
                  onMouseDown={() => setArticleImage("./src/component/images/HamburgerMenu/Article_Bay.png")}
                  onMouseUp={() => setArticleImage("./src/component/images/HamburgerMenu/Article_Bay_Hover.png")}
                />
              </Link>
            </li>
            <li>
              <Link to="/FaqPage">
                <img
                  src={faqImage}
                  alt="FAQ Page"
                  onMouseEnter={() => setFaqImage("./src/component/images/HamburgerMenu/FaqPage_Hover.png")}
                  onMouseLeave={() => setFaqImage("./src/component/images/HamburgerMenu/FaqPage.png")}
                  onMouseDown={() => setFaqImage("./src/component/images/HamburgerMenu/FaqPage.png")}
                  onMouseUp={() => setFaqImage("./src/component/images/HamburgerMenu/FaqPage_Hover.png")}
                />
              </Link>
            </li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default HamburgerMenu;
