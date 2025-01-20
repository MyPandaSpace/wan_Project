import React, { useState, useEffect } from 'react';

const MobileWarning = () => {
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    // 檢查視窗寬度的函數
    const checkWidth = () => {
      setShowWarning(window.innerWidth < 768); // 768px 是平板的斷點，可以依需求調整
    };

    // 初始檢查
    checkWidth();

    // 監聽視窗大小變化
    window.addEventListener('resize', checkWidth);

    // 清理監聽器
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  if (!showWarning) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        padding: '20px'
      }}
    >
      <div 
        style={{
          backgroundColor: 'white',
          padding: '30px',
          borderRadius: '10px',
          maxWidth: '90%',
          textAlign: 'center'
        }}
      >
        <h2 style={{ marginBottom: '15px', color: '#1684C8' }}>
          不支援行動裝置
        </h2>
        <p style={{ color: '#666', lineHeight: '1.5' }}>
          很抱歉，目前網站尚未支援行動裝置版本。<br/>
          請使用電腦版瀏覽器開啟，以獲得最佳體驗。
        </p>
      </div>
    </div>
  );
};

export default MobileWarning;