import { Button } from "antd";
import React from "react";
import "./OrderList.less";
import {
  Pedestrian,
  DineIn,
  BagFull,
  ElectricCar,
  UserSetting,
  Printer,
  ReprintCredit,
  Split,
  Close,
  Wallet,
  Refresh,
  Modify,
  Up,
  Down,
  Quit,
} from "../../component/Svg/Svg";
import Notepad from "../../component/Notepad";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const OrderList = () => {
  const navigate = useNavigate();
  return (
    <div className='orderList'>
      <div className='orderList-content'>
        <div className='orderList-content-left'>
          <div>
            <Button type='primary' className='orderList-content-left-btn' style={{ marginLeft: 0 }}>
              <Pedestrian />
              <div>Walk In</div>
            </Button>
            <Button type='primary' className='orderList-content-left-btn'>
              <DineIn />
              <div>Dine In</div>
            </Button>
            <Button type='primary' className='orderList-content-left-btn'>
              <BagFull />
              <div>Pick Up</div>
            </Button>
            <Button type='primary' className='orderList-content-left-btn'>
              <ElectricCar />
              <div>Delivery</div>
            </Button>
            <Button type='primary' className='orderList-content-left-btn'>
              <UserSetting />
              <div>Buffet</div>
            </Button>
          </div>
          <div className='orderList-content-left-select'>
            <Button type='text' style={{ color: "#0076fe", fontWeight: "bold" }}>
              Select all
            </Button>
          </div>
          <div style={{ marginTop: 40 }}>
            <Button type='primary' className='orderList-content-left-btn' style={{ border: "1px solid #333", background: "none", marginLeft: 0 }}>
              <Printer />
              <div style={{ color: "#0076fe" }}>Print</div>
            </Button>
            <Button type='primary' className='orderList-content-left-btn' style={{ border: "1px solid #333", background: "none" }}>
              <ReprintCredit />
              <div style={{ color: "#0076fe" }}>Reprint Credit</div>
            </Button>
            <Button type='primary' className='orderList-content-left-btn' style={{ border: "1px solid #333", background: "none" }}>
              <ReprintCredit />
              <div style={{ color: "#0076fe" }}>Reprint Checks</div>
            </Button>
            <Button type='primary' className='orderList-content-left-btn' style={{ border: "1px solid #333", background: "none" }}>
              <UserSetting color={"#0076fe"} />
              <div style={{ color: "#0076fe" }}>Change Staff</div>
            </Button>
          </div>
          <div style={{ marginTop: 40 }}>
            <Button type='primary' className='orderList-content-left-btn' style={{ border: "1px solid #333", background: "none", marginLeft: 0 }}>
              <Split color={"#0076fe"} />
              <div style={{ color: "#0076fe" }}>Split Order</div>
            </Button>
            <Button type='primary' className='orderList-content-left-btn' style={{ border: "1px solid #333", background: "none" }}>
              <Close />
              <div style={{ color: "#0076fe" }}>Cancel Order</div>
            </Button>
            <Button
              type='primary'
              className='orderList-content-left-btn'
              style={{ border: "1px solid #333", background: "none" }}
              onClick={() => {
                navigate("/payment");
              }}>
              <Wallet size={"24"} />
              <div style={{ color: "#0076fe" }}>Payment</div>
            </Button>
            <Button type='primary' className='orderList-content-left-btn' style={{ border: "1px solid #333", background: "none" }}>
              <Refresh />
              <div style={{ color: "#0076fe" }}>Unpay</div>
            </Button>
            <Button type='primary' className='orderList-content-left-btn' style={{ border: "1px solid #333", background: "none" }}>
              <Modify />
              <div style={{ color: "#0076fe" }}>Revise</div>
            </Button>
          </div>
          <div style={{ marginTop: 40 }}>
            <div className='orderList-content-left-flip'>
              <Button className='orderList-content-left-flip-btn'>
                <Up color={"#0076fe"} /> Last Page
              </Button>
              <Button className='orderList-content-left-flip-btn' style={{ marginLeft: 20 }}>
                <Down /> Next Page
              </Button>
            </div>
          </div>
        </div>

        <div className='orderList-content-middle'>
          <Notepad />
        </div>
        <div className='orderList-content-right'>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Button className='orderList-content-right-btn'>
              <Up color={"#0076fe"} />
              <div>Last page</div>
            </Button>
            <Button className='orderList-content-right-btn' style={{ marginTop: 20 }}>
              <Down />
              <div>Next page</div>
            </Button>
          </div>
          <Button className='orderList-content-right-btn' style={{ border: "1px solid #FE4A1B", color: "#FE4A1B" }}>
            <Quit />
            <div>Quit</div>
          </Button>
        </div>
      </div>
      <div className='orderList-footer'></div>
    </div>
  );
};

export default OrderList;
