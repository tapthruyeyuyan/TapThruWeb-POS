import { Button } from "antd";
import React from "react";
import { Close, Printer, Quit, RefuseBin } from "../../component/Svg/Svg";
import "./Tip.less";
import Keyboard from "../../component/Keyborder/KeyboardSmall";
import { useNavigate } from "react-router";

const Tip = () => {
  const navigate = useNavigate();
  return (
    <div className='tip'>
      <div className='tip-left'>
        <div className='tip-left-title'>
          <div>Account Type</div>
          <div>Trading hours</div>
          <div>Types of</div>
          <div>ORder number</div>
          <div>Trans ID</div>
          <div>Amount</div>
          <div>Tip</div>
        </div>
        <div className='tip-left-content'></div>
      </div>
      <div className='tip-right'>
        <div>
          <div className='tip-right-btn-box'>
            <Button type='primary' className='tip-right-btn'>
              <Close color={"#FFF"} />
              Cancel
            </Button>
            <Button type='primary' className='tip-right-btn' style={{ marginLeft: 16 }}>
              <RefuseBin />
              Delete
            </Button>
          </div>
          <Keyboard showInput={false} />
        </div>
        <div className='tip-right-bottom'>
          <Button className='tip-right-bottom-btn'>
            <Printer />
            <div>Printe</div>
          </Button>
          <Button
            className='tip-right-bottom-btn'
            style={{ borderColor: "#FE4A1B", color: "#FE4A1B" }}
            onClick={() => {
              navigate(-1);
            }}>
            <Quit />
            <div>Quit</div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Tip;
