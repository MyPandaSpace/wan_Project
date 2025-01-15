import React, { useState } from "react";
import "./css/bubble_ver2.css"; // 泡泡樣式

const BubbleExplode = () => {
    const [isExploded, setExploded] = useState(false);
    const [fragments, setFragments] = useState([]);

    const handleClick = () => {
        if (isExploded) return;

        // 生成 20~30 個隨機碎片
        const fragmentList = Array.from({ length: 30 }, (_, index) => ({
            id: index,
            dirX: Math.random() * 2 - 1,
            dirY: Math.random() * 2 - 1,
            angle: Math.random() * 360, // 隨機角度
            size: Math.random() * 8 + 5, // 隨機大小
            speed: Math.random() * 0.1 + 0.5, // 隨機速度
        }));

        setFragments(fragmentList);
        setExploded(true);
    };

    return (
        <div className="bubble-container" onClick={handleClick}>
            {/* 泡泡 */}
            {!isExploded && <div className="bubble" />}

            {/* 碎片 */}
            {isExploded &&
                fragments.map((fragment) => (
                    <div
                        key={fragment.id}
                        className="fragment"
                        style={{
                            "--dir-x": fragment.dirX,
                            "--dir-y": fragment.dirY,
                            "--angle": `${fragment.angle}deg`,
                            "--size": `${fragment.size}px`,
                            "--speed": fragment.speed,
                        }}
                    />
                ))}
        </div>
    );
};

export default BubbleExplode;
