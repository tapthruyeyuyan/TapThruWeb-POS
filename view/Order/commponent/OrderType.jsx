import React from "react";
import { Button } from "antd";
import { Pedestrian, DineIn, BagFull, ElectricCar, UserSetting } from "../../../component/Svg/Svg";
import "../OrderPage.less";

const OrderType = ({ orderListData, setOrderListData, navigate }) => {
  return (
    <div style={{ padding: 20 }}>
      <div>
        <Button
          className='orderType-btn'
          onClick={() => {
            setOrderListData({ ...orderListData, orderType: "walk-in" });
          }}
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
          onClick={() => {
            navigate("/infomation/pick-up");
          }}
          style={{
            background: orderListData.orderType === "pick-up" ? "#0076fe" : "#FFF",
            color: orderListData.orderType === "pick-up" ? "#fff" : "#0076fe",
          }}
          disabled={orderListData.orderType === "pick-up"}>
          <BagFull color={orderListData.orderType === "pick-up" ? "#fff" : "#0076fe"} />
          <div>Pick Up</div>
        </Button>
      </div>
      <div style={{ marginTop: 10 }}>
        <Button
          className='orderType-btn'
          style={{
            marginRight: 10,
            background: orderListData.orderType === "delivery" ? "#0076fe" : "#FFF",
            color: orderListData.orderType === "delivery" ? "#fff" : "#0076fe",
          }}
          onClick={() => {
            navigate("/infomation/delivery");
          }}
          disabled={orderListData.orderType === "delivery"}>
          <ElectricCar color={orderListData.orderType === "delivery" ? "#fff" : "#0076fe"} />
          <div>Delivery</div>
        </Button>
        <Button
          className='orderType-btn'
          style={{
            background: orderListData.orderType === "buffet" ? "#0076fe" : "#FFF",
            color: orderListData.orderType === "buffet" ? "#fff" : "#0076fe",
          }}
          onClick={() => {
            navigate("/table/buffet");
          }}>
          <UserSetting color={orderListData.orderType === "buffet" ? "#FFF" : "#0076fe"} />
          <div>Buffet</div>
        </Button>
      </div>
    </div>
  );
};

export default OrderType;
