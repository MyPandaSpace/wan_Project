import { useState } from "react";
import Btn_goTop from "./component/Btn_goTop";
import Footer from "./component/Footer";
import Modal_Cancel_Confirm from "./component/Modal_Cancel_Confirm";
import Navbar from "./component/Navbar";
import "./css/Membership_myOrder.css";
import { Link } from "react-router-dom";
import Modal_Order_Cancel_Confirm from "./component/Modal_Order_Cancel_Confirm";

export default function Membership_myOrder() {
  // 狀態管理訂單取消的邏輯
  const [hiddenButtons, setHiddenButtons] = useState({}); // 用來追蹤每筆訂單的取消按鈕狀態
  const [popupVisible, setPopupVisible] = useState(false); // 控制彈出視窗顯示
  const [currentOrderId, setCurrentOrderId] = useState(null); // 當前操作的訂單ID

  // 訂單資料 (模擬數據，可以從後端獲取)
  const orders = [
    { orderId: 22345, title: "【過年限定】紙韻心意剪紙活動", date: "2025.01.25（六）14:00～16:00", price: "NT$ 500 元/人" },
    { orderId: 22346, title: "【藝術創作】插花療癒活動", date: "2025.02.05（六）10:00～12:00", price: "NT$ 600 元/人" },
  ];

  // 顯示取消訂單的彈窗
  const showPopup = (orderId) => {
    setCurrentOrderId(orderId);
    setPopupVisible(true);
  };

  // 關閉彈出視窗
  const closePopup = () => {
    setPopupVisible(false);
  };

  // 訂單取消成功
  const handleCancelOrder = () => {
    setHiddenButtons((prev) => ({ ...prev, [currentOrderId]: true })); // 隱藏取消按鈕
    setPopupVisible(false); // 關閉彈窗

    setTimeout(() => {
      setShowSuccessModal(true); // 顯示取消成功的彈窗
    }, 1500);

    setTimeout(() => {
      setCurrentOrderId(null); // 清除當前訂單ID
    }, 1500);
  };

  return (
    <>
      <Navbar />
      <Btn_goTop />
      <img id="navbar-Bg" src="./src/images/index/navbar_Bg.png" alt="" />

      <div className="home-container">
        {/* 區塊 1：導覽列 */}
        <main className="member-main">
          <figure id="title">
            <img id="title-img" src='./src/images/Membership/membership_Title.png' alt="title-img" />
          </figure>
          <div id="tabs">
            <img src="./src/images/Membership/btn-items.png" alt="" />
            <Link to="/Membership_myPage"><img src="./src/images/Membership_myOrder/btn1-tabs.png" alt="" /></Link>
            <Link to="/Membership_myCollection"><img src="./src/images/Membership_myOrder/btn2-tabs.png" alt="" /></Link>
            <Link to="/Membership_myOrder"><img src="./src/images/Membership_myOrder/btn3-tabs.png" alt="" /></Link>
            <img src="./src/images/Membership/btn-2items.png" alt="" />
          </div>
        </main>

        {/* 區塊 2：訂單紀錄 */}
        <div id="title-Order">
          <h2>活動訂單記錄</h2>
        </div>
        <section id="section-uncomplete">
          <div id="uncomplete_Order">
            <figure id="title-house">
              <img src="./src/images/Membership_myOrder/house.png" alt="" />
              <h3>未完成的訂單</h3>
            </figure>
            {orders.map((order) => (
              <div key={order.orderId} id='row-event_Order'>
                <div id='column-event_Order'>
                  <img src="./src/images/Event/event_Image.jpg" alt="" />
                  <small>{order.date}</small>
                  <h2>{order.title}</h2>
                  <p id='p1'>{order.price}</p>
                  <hr />
                  <div id='event-Tags'>
                    <p>#台北市</p>
                    <p>#藝術創作</p>
                  </div>
                </div>
                <div id="content-Order">
                  <h2>訂單詳情</h2>
                  <br />
                  <p>訂單編號：#{order.orderId}</p>
                  <p>訂單日期：2024/11/28</p>
                  <br /><br />
                  <h2>付款詳情</h2>
                  <br />
                  <p>付款方式：Visa (66666)</p>
                  <p>付款狀態：---</p>
                  <br />
                  {!hiddenButtons[order.orderId] && (
                    <button id="button" onClick={() => showPopup(order.orderId)}>取消訂單</button>
                  )}
                </div>
              </div>
            ))}

            {/* 彈出視窗顯示的邏輯 */}
            {popupVisible && currentOrderId && (
              <Modal_Cancel_Confirm
                closeModal={closePopup}
                showSuccessModal={handleCancelOrder} // 點擊"是"後觸發取消訂單
              />
            )}

            {/* 顯示已取消訂單的彈窗 */}
            {hiddenButtons[currentOrderId] && <Modal_Order_Cancel_Confirm />}
          </div>
        </section>

        {/* 其他區塊 */}
        <section id="section-policy">
          <div>
            <h2>參與注意事項</h2>
            <br />
            <ul>
              <li>請在活動前 15 分鐘抵達現場，避免錯過開課時間。</li>
              <li>請攜帶個人所需的繪畫材料，若不確定請聯繫我們的客服。</li>
              <li>若有任何問題，請隨時聯繫我們的客服郵箱：support@wan.com</li>
            </ul>
            <br /><br /><br />
            <h2>取消與退費政策</h2>
            <br />
            <ul>
              <li>活動開始前 3 天內取消，可全額退款。</li>
              <li>活動開始前 2 天內取消，將退還 50% 金額。</li>
              <li>活動當天取消，不提供退款。</li>
            </ul>
          </div>
          <figure>
            <img src="./src/images/Membership_myOrder/boat.png" alt="" />
          </figure>
        </section>

        <hr />
        <section id="section-recommend">
          <div id="title-recommend">
            <h2>推薦更多活動</h2>
            <br />
            <p>因過去紀錄參與過...【過年限定】紙韻心意剪紙活動 </p>
          </div>
          <div id="section-row-recommend">
            <figure id="img-recommend">
              <img src="./src/images/Membership_myOrder/event_recommend.png" alt="" />
              <p>插花療癒心靈重生</p>
            </figure>
            <figure id="img-recommend">
              <img src="./src/images/Membership_myOrder/event_recommend.png" alt="" />
              <p>電影夜心靈放鬆</p>
            </figure>
            <figure id="img-recommend">
              <img src="./src/images/Membership_myOrder/event_recommend.png" alt="" />
              <p>料理時光心靈釋放</p>
            </figure>
          </div>
          <figure id="btn-More">
            <img src="./src/images/Membership_myOrder/btn_More.png" alt="" />
          </figure>
        </section>
      </div>

      {/* 底部 */}
      <Footer />
    </>
  );
}