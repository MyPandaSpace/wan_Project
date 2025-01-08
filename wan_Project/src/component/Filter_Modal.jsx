import React from 'react';
import './css/Filter_Modal.css';

// FilterModal.jsx
// FilterModal.jsx
import { useState } from 'react';

const Filter_Modal = ({ isOpen, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [closeButtonImage, setCloseButtonImage] = useState("./src/images/modal_Login/close.png");

  if (!isOpen) return null;

  // 處理活動分類和日期選擇（單選）
  const handleSingleSelect = (value, setter) => {
    setter(current => current === value ? '' : value);
  };

  // 處理地區選擇（多選）
  const handleLocationSelect = (location) => {
    setSelectedLocations(current => {
      if (current.includes(location)) {
        return current.filter(item => item !== location);
      } else {
        return [...current, location];
      }
    });
  };

  // 清除所有選擇
  const handleClear = () => {
    setSelectedCategory('');
    setSelectedDate('');
    setSelectedLocations([]);
  };

  return (
    <div className="filter-modal-overlay">
      <div className="filter-modal">
        <div className="filter-modal-header">
          <h2>篩選</h2>
 <button
            className="filter-modal-close"
            onClick={onClose}
            onMouseEnter={() => setCloseButtonImage("./src/images/modal_Login/close_Hover.png")}
            onMouseLeave={() => setCloseButtonImage("./src/images/modal_Login/close.png")}
            onMouseDown={() => setCloseButtonImage("./src/images/modal_Login/close_Pressed.png")}
            onMouseUp={() => setCloseButtonImage("./src/images/modal_Login/close_Hover.png")}
          >
            <img src={closeButtonImage} alt="Close" />
          </button>
        </div>
       
        <div className="filter-section">
          <h3>活動分類</h3>
          <div className="filter-buttons">
            <button 
              className={`filter-btn ${selectedCategory === 'art' ? 'active' : ''}`}
              onClick={() => handleSingleSelect('art', setSelectedCategory)}
            >
              藝術創作
            </button>
            <button 
              className={`filter-btn ${selectedCategory === 'nature' ? 'active' : ''}`}
              onClick={() => handleSingleSelect('nature', setSelectedCategory)}
            >
              自然療癒
            </button>
            <button 
              className={`filter-btn ${selectedCategory === 'spiritual' ? 'active' : ''}`}
              onClick={() => handleSingleSelect('spiritual', setSelectedCategory)}
            >
              心靈之旅
            </button>
          </div>
        </div>

        <div className="filter-section">
          <h3>日期</h3>
          <div className="filter-buttons">
            <button 
              className={`filter-btn ${selectedDate === 'weekday' ? 'active' : ''}`}
              onClick={() => handleSingleSelect('weekday', setSelectedDate)}
            >
              平日
            </button>
            <button 
              className={`filter-btn ${selectedDate === 'weekend' ? 'active' : ''}`}
              onClick={() => handleSingleSelect('weekend', setSelectedDate)}
            >
              假日
            </button>
          </div>
        </div>

        <div className="filter-section">
          <h3>地區</h3>
          <div className="filter-buttons">
            {['台北', '新北', '桃園', '新竹', '台中', '台南', '高雄'].map(location => (
              <button 
                key={location}
                className={`filter-btn ${selectedLocations.includes(location) ? 'active' : ''}`}
                onClick={() => handleLocationSelect(location)}
              >
                {location}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-actions">
          <button onClick={handleClear} className="filter-action-btn clear">清除</button>
          <button 
            onClick={() => {
              // 這裡可以處理篩選結果
              console.log({
                category: selectedCategory,
                date: selectedDate,
                locations: selectedLocations
              });
              onClose();
            }} 
            className="filter-action-btn submit"
          >
            篩選結果
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter_Modal;