import { Button, Input } from "antd";
import React from "react";
import "./Information.less";
import { RecordTime, List } from "../../component/Svg/Svg";
import Keyboard from "../../component/Keyboard";
import { useNavigate } from "react-router-dom";

const Information = () => {
  const navigate = useNavigate();

  return (
    <div className='information'>
      <div className='information-header'>
        <div className='information-header-left'>
          <div>
            <Button className='information-header-left-btn'>
              <RecordTime />
              <div style={{ marginLeft: 8 }}>Record</div>
            </Button>
            <Button className='information-header-left-btn' style={{ marginLeft: 10 }}>
              <List />
              <div style={{ marginLeft: 8 }}>Customer history</div>
            </Button>
          </div>
          <div className='information-header-inputBox'>
            <div className='information-header-inputBox-item'>
              <div className='information-header-inputBox-title'>Phone:</div>
              <Input className='information-header-inputBox-input' />
            </div>
            <div className='information-header-inputBox-item' style={{ marginLeft: 30 }}>
              <div className='information-header-inputBox-title'>Ext:</div>
              <Input className='information-header-inputBox-input' />
            </div>
          </div>

          <div className='information-header-inputBox'>
            <div className='information-header-inputBox-item'>
              <div className='information-header-inputBox-title'>Address:</div>
              <Input className='information-header-inputBox-input' />
            </div>
          </div>

          <div className='information-header-inputBox'>
            <div className='information-header-inputBox-item'>
              <div className='information-header-inputBox-title'>City:</div>
              <Input className='information-header-inputBox-input' />
            </div>
            <div className='information-header-inputBox-item' style={{ marginLeft: 30 }}>
              <div className='information-header-inputBox-title'>State:</div>
              <Input className='information-header-inputBox-input' />
            </div>
            <div className='information-header-inputBox-item' style={{ marginLeft: 30 }}>
              <div className='information-header-inputBox-title'>Zip:</div>
              <Input className='information-header-inputBox-input' />
            </div>
          </div>

          <div className='information-header-inputBox'>
            <div className='information-header-inputBox-item'>
              <div className='information-header-inputBox-title'>First Name:</div>
              <Input className='information-header-inputBox-input' />
            </div>
            <div className='information-header-inputBox-item' style={{ marginLeft: 30 }}>
              <div className='information-header-inputBox-title'>Last Name:</div>
              <Input className='information-header-inputBox-input' />
            </div>
          </div>

          <div className='information-header-inputBox'>
            <div className='information-header-inputBox-item'>
              <div className='information-header-inputBox-title'>Location:</div>
              <Input className='information-header-inputBox-input' />
            </div>
            <div className='information-header-inputBox-item' style={{ marginLeft: 30 }}>
              <div className='information-header-inputBox-title'>Remark:</div>
              <Input className='information-header-inputBox-input' />
            </div>
          </div>

          <div className='information-header-inputBox'>
            <div className='information-header-inputBox-item'>
              <div className='information-header-inputBox-title'>Note:</div>
              <Input className='information-header-inputBox-input' />
            </div>
          </div>
          <div className='information-header-left-bottom'>
            <Button className='information-header-left-btn'>Clear All</Button>
            <div>
              <Button type='primary' className='information-header-left-btn' style={{ color: "#fff" }}>
                Sure
              </Button>
              <Button
                className='information-header-left-btn'
                style={{ marginLeft: 10 }}
                onClick={() => {
                  navigate(-1);
                }}>
                Cancle
              </Button>
            </div>
          </div>
        </div>
        <div className='information-header-right'>
          <div className='information-header-right-box'>
            <div className='information-header-right-box-item'>
              <div className='information-header-right-box-item-text'>
                <div>Name:</div>
                <div>Name</div>
              </div>
              <div className='information-header-right-box-item-text'>
                <div>Telephone:</div>
                <div>1006811</div>
              </div>
              <div className='information-header-right-box-item-text'>
                <div>Address:</div>
                <div>Address</div>
              </div>
            </div>
          </div>
          <div className='information-header-left-bottom'>
            <Button type='primary' className='information-header-right-btn' style={{ color: "#fff" }}>
              Up
            </Button>
            <Button className='information-header-right-btn' style={{ marginLeft: 20 }}>
              Down
            </Button>
          </div>
        </div>
      </div>
      <Keyboard />
    </div>
  );
};

export default Information;
