import { Button } from "antd";
import React from "react";
import "./ClockIn.less";
import { Clock, Quit, Save } from "../../component/Svg/Svg";
import { useNavigate } from "react-router";

const ClockIn = () => {
  const navigate = useNavigate();
  return (
    <div className='clock'>
      <div className='clock-header'>
        <div className='clock-header-box'>
          <div className='clock-header-title'>First Name:</div>
          <div>Name</div>
        </div>
        <div className='clock-header-box'>
          <div className='clock-header-title'>Last Name:</div>
          <div>Name</div>
        </div>
      </div>
      <div className='clock-header' style={{ marginTop: 16 }}>
        <div className='clock-header-box'>
          <div className='clock-header-title'>Clocked In:</div>
          <div>Name</div>
        </div>
        <div className='clock-header-box'>
          <div className='clock-header-title'>Clocked Out:</div>
          <div>Name</div>
        </div>
      </div>
      <div className='clock-content'>
        <div className='clock-content-left'>
          <div className='clock-content-left-title'>
            <div className='clockType'>First Name</div>
            <div className='clockType'>Last Name</div>
            <div className='clockType'>Start Time</div>
            <div className='clockType'>End Time</div>
            <div className='clockType'>Total Time</div>
          </div>
          <div className='clock-content-left-box'>
            <div className='clock-content-left-title clock-content-left-content'>
              <div className='clockType'>1</div>
              <div className='clockType'>Beer</div>
              <div className='clockType'>$5.00</div>
              <div className='clockType'>$5.00</div>
              <div className='clockType'>$5.00</div>
            </div>
          </div>
        </div>
        <div className='clock-btn'>
          <Button type='primary' className='clock-btn-item'>
            <Clock color={"#FFF"} />
            Punch
          </Button>
          <div className='clock-btn-box'>
            <Button type='primary' className='clock-btn-item'>
              <Save color={"#FFF"} />
              Save
            </Button>
            <Button
              className='clock-btn-item'
              style={{ marginTop: 40, borderColor: "#FE4A1B", color: "#FE4A1B" }}
              onClick={() => {
                navigate(-1);
              }}>
              <Quit />
              Quit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClockIn;
