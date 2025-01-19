import React, { useEffect, useState } from 'react';
import './Modal_DailyWords.css';

const Modal_DailyWords = ({ isVisible, onClose }) => {
  const [showModal, setShowModal] = useState(isVisible);
  const [randomImage, setRandomImage] = useState('');

  const images = [
    './src/images/daily_Words/words_1.png',
    './src/images/daily_Words/words_2.png',
    './src/images/daily_Words/words_3.png',
    './src/images/daily_Words/words_4.png',
    './src/images/daily_Words/words_5.png',
  ];

  useEffect(() => {
    if (isVisible) {
      // 在每次打開時隨機選擇一張圖片
      const randomIndex = Math.floor(Math.random() * images.length);
      setRandomImage(images[randomIndex]);
      setShowModal(true);
    }
  }, [isVisible, onClose, images]);

  const handleAnimationEnd = () => {
    if (!isVisible) {
      setShowModal(false); // 隱藏模態框
    }
  };

  const handleClickOverlay = () => {
    onClose(); // 用戶點擊時關閉
  };

  return (
    <>
      {showModal && (
        <div
          className={`overlay_Words ${isVisible ? 'fade-in' : 'fade-out'}`}
          onAnimationEnd={handleAnimationEnd}
          onClick={handleClickOverlay} // 點擊觸發關閉
        >
          <div className="Modal_Modal_DailyWords_popup"
            onClick={(e) => e.stopPropagation()} // 阻止冒泡
          >
            <img
              src={randomImage}
              alt="Words_Popup"
            />
          </div>
        </div >
      )}
    </>
  );
};

export default Modal_DailyWords;