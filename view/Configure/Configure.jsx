import { Button } from "antd";
import React from "react";
import "./Configure.less";
import { Task, Store, Setting, Quit } from "../../component/Svg/Svg";
import { useNavigate } from "react-router-dom";

const Configure = () => {
  const navigate = useNavigate();
  return (
    <div className='configure'>
      <div>
        <div className='configure-box'>
          <Button
            className='configure-big-btn'
            onClick={() => {
              navigate("/store-infomation");
            }}>
            <Store />
            <div>Store Infomation</div>
          </Button>
          <Button className='configure-small-btn'>
            <Setting />
            <div style={{ marginTop: 6 }}>Set up</div>
          </Button>
        </div>
        <div className='configure-box' style={{ marginTop: 20 }}>
          <Button
            className='configure-big-btn'
            onClick={() => {
              navigate("/order-type");
            }}>
            <Task /> Order Type
          </Button>
          <Button
            className='configure-small-btn'
            style={{ border: "1px solid #FE4A1B", color: "#FE4A1B" }}
            onClick={() => {
              navigate(-1);
            }}>
            <Quit />
            <div style={{ marginTop: 6 }}>Quit</div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Configure;
