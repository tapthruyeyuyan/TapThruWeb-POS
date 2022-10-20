import { Button } from "antd";
import React from "react";
import "./OrderType.less";
import { Pedestrian, DineIn, UserSetting, ElectricCar, BagFull, Save, Quit } from "../../component/Svg/Svg";
import { useNavigate } from "react-router-dom";

const OrderType = () => {
  const navigate = useNavigate();

  return (
    <div className='orderType'>
      <div>
        <div className='orderType-left'>
          <Button className='orderType-left-btn'>
            <Pedestrian color={"#0076fe"} />
            <div>Wali In</div>
          </Button>
          <Button className='orderType-left-btn'>
            <DineIn color={"#0076fe"} />
            <div>Dine In</div>
          </Button>
          <Button className='orderType-left-btn'>
            <UserSetting color={"#0076fe"} />
            <div>Buffet</div>
          </Button>
        </div>
        <div className='orderType-left' style={{ marginTop: 16 }}>
          <Button className='orderType-left-btn' style={{ flex: 2 }}>
            <ElectricCar color={"#0076fe"} />
            <div>Delivery</div>
          </Button>
          <Button className='orderType-left-btn'>
            <BagFull color={"#0076fe"} />
            <div>Pick Up</div>
          </Button>
        </div>
      </div>
      <div className='orderType-right'>
        <Button className='orderType-left-btn '>
          <Save color={"#0076fe"} />
          <div>Save</div>
        </Button>
        <Button
          className='orderType-left-btn orderType-right-btn'
          onClick={() => {
            navigate(-1);
          }}>
          <Quit />
          <div>Quite</div>
        </Button>
      </div>
    </div>
  );
};

export default OrderType;
