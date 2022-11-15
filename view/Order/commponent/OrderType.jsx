import React from "react";
import { Button } from "antd";
import { Pedestrian, DineIn, BagFull, ElectricCar, UserSetting } from "../../../component/Svg/Svg";
import "../OrderPage.less";

const OrderType = ({ orderListData }) => {
  return (
    <div style={{ padding: 20 }}>
      <div>
        <Button
          className='orderType-btn'
          onClick={() => {}}
          style={{
            background: orderListData.orderType === "walk-in" ? "#0076fe" : "#FFF",
            color: orderListData.orderType === "walk-in" ? "#fff" : "#0076fe",
          }}>
          <Pedestrian color={orderListData.orderType === "walk-in" ? "#fff" : "#0076fe"} />
          <div>Walk In</div>
        </Button>
        <Button className='orderType-btn' style={{ margin: "0 10px" }} onClick={() => {}}>
          <DineIn color={"#0076fe"} />
          <div>Dine In</div>
        </Button>
        <Button
          className='orderType-btn'
          onClick={() => {}}
          style={{
            background: orderListData.orderType === "Pick Up" ? "#0076fe" : "#FFF",
            color: orderListData.orderType === "Pick Up" ? "#fff" : "#0076fe",
          }}>
          <BagFull color={orderListData.orderType === "Pick Up" ? "#fff" : "#0076fe"} />
          <div>Pick Up</div>
        </Button>
      </div>
      <div style={{ marginTop: 10 }}>
        <Button
          className='orderType-btn'
          style={{
            marginRight: 10,
            background: orderListData.orderType === "Delivery" ? "#0076fe" : "#FFF",
            color: orderListData.orderType === "Delivery" ? "#fff" : "#0076fe",
          }}
          onClick={() => {}}>
          <ElectricCar color={orderListData.orderType === "Delivery" ? "#fff" : "#0076fe"} />
          <div>Delivery</div>
        </Button>
        <Button className='orderType-btn' onClick={() => {}}>
          <UserSetting color={"#0076fe"} />
          <div>Buffet</div>
        </Button>
      </div>
    </div>
  );
};

export default OrderType;
