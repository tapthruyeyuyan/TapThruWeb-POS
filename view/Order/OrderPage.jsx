import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Earth } from "../../component/Svg/Svg";
import "./OrderPage.less";

const OrderPage = () => {
  const storeInfo = useSelector((state) => state.storeInfo);

  useEffect(() => {
    console.log(storeInfo);
  }, [storeInfo]);

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
