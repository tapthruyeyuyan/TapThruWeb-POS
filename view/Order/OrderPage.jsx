import React from "react";
import { Earth } from "../../component/Svg/Svg";
import "./OrderPage.less";

const OrderPage = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className='order-header'>
        <div className='order-header-title'>Language</div>
        <Earth color='#fff' />
      </div>

      <div className='order-content'>
        <div>Category</div>
      </div>
    </div>
  );
};

export default OrderPage;
