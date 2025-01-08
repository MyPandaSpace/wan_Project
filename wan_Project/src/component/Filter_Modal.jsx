import React, { useState } from 'react';
import { X } from 'lucide-react';

const Filter_Modal = ({ isOpen, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedLocations, setSelectedLocations] = useState([]);

  const categories = [
    { id: 'art', label: '藝術創作' },
    { id: 'nature', label: '自然農趣' },
    { id: 'spiritual', label: '心靈之旅' }
  ];

  const dates = [
    { id: 'weekday', label: '平日' },
    { id: 'weekend', label: '假日' }
  ];

  const locations = [
    '台北', '新北', '桃園', '新竹', '台中',
    '台南', '高雄'
  ];

  const handleLocationToggle = (location) => {
    setSelectedLocations(prev => 
      prev.includes(location)
        ? prev.filter(loc => loc !== location)
        : [...prev, location]
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">篩選</h2>
          <button onClick={onClose} className="p-2">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="space-y-6">
          {/* 活動分類 */}
          <div>
            <h3 className="text-lg mb-3">活動分類</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full border ${
                    selectedCategory === category.id
                      ? 'bg-blue-500 text-white'
                      : 'border-gray-300'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* 日期 */}
          <div>
            <h3 className="text-lg mb-3">日期</h3>
            <div className="flex gap-2">
              {dates.map(date => (
                <button
                  key={date.id}
                  onClick={() => setSelectedDate(date.id)}
                  className={`px-4 py-2 rounded-full border ${
                    selectedDate === date.id
                      ? 'bg-blue-500 text-white'
                      : 'border-gray-300'
                  }`}
                >
                  {date.label}
                </button>
              ))}
            </div>
          </div>

          {/* 地區 */}
          <div>
            <h3 className="text-lg mb-3">地區</h3>
            <div className="flex flex-wrap gap-2">
              {locations.map(location => (
                <button
                  key={location}
                  onClick={() => handleLocationToggle(location)}
                  className={`px-4 py-2 rounded-full border ${
                    selectedLocations.includes(location)
                      ? 'bg-blue-500 text-white'
                      : 'border-gray-300'
                  }`}
                >
                  {location}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex gap-4">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-full"
          >
            清除
          </button>
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-full"
          >
            篩選結果
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter_Modal;