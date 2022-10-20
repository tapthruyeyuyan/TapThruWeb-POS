import { Button, Input, Radio } from "antd";
import React from "react";
import "./UserInfo.less";
import { useNavigate } from "react-router";
import Keyboard from "../../component/Keyboard";

const UserInfo = () => {
  const navigate = useNavigate();
  return (
    <div className='userInfo'>
      <div className='userInfo-list'>
        <div className='userInfo-list-item'>
          <div className='userInfo-list-text'>Username:</div>
          <Input className='userInfo-list-input' />
        </div>
        <div className='userInfo-list-item'>
          <div className='userInfo-list-text'>Address:</div>
          <Input className='userInfo-list-input' />
        </div>
        <div className='userInfo-list-item'>
          <div className='userInfo-list-text'>Telephone:</div>
          <Input className='userInfo-list-input' />
        </div>
      </div>
      <div className='userInfo-list'>
        <div className='userInfo-list-item'>
          <div className='userInfo-list-text'>Password:</div>
          <Input className='userInfo-list-input' />
        </div>
        <div className='userInfo-list-item'>
          <div className='userInfo-list-text'>Address2:</div>
          <Input className='userInfo-list-input' />
        </div>
        <div className='userInfo-list-item'>
          <div className='userInfo-list-text'>Driver:</div>
          <Radio />
        </div>
      </div>
      <div className='userInfo-list'>
        <div className='userInfo-list-item'>
          <div className='userInfo-list-text'>Grade:</div>
          <Input className='userInfo-list-input' />
        </div>
        <div className='userInfo-list-item'>
          <div className='userInfo-list-text'>City:</div>
          <Input className='userInfo-list-input' />
        </div>
        <div className='userInfo-list-item'></div>
      </div>
      <div className='userInfo-list'>
        <div className='userInfo-list-item'>
          <div className='userInfo-list-text'>First Name:</div>
          <Input className='userInfo-list-input' />
        </div>
        <div className='userInfo-list-item'>
          <div className='userInfo-list-text'>State:</div>
          <Input className='userInfo-list-input' />
        </div>
        <div className='userInfo-list-item'></div>
      </div>
      <div className='userInfo-list'>
        <div className='userInfo-list-item'>
          <div className='userInfo-list-text'>Last Name:</div>
          <Input className='userInfo-list-input' />
        </div>
        <div className='userInfo-list-item'>
          <div className='userInfo-list-text'>Zip:</div>
          <Input className='userInfo-list-input' />
        </div>
        <div className='userInfo-list-item'></div>
      </div>
      <div className='userInfo-list'>
        <div className='userInfo-list-item'>
          <div className='userInfo-list-text'>Position:</div>
          <Input className='userInfo-list-input' />
        </div>
        <div className='userInfo-list-item'>
          <div className='userInfo-list-text'>Hourly rate:</div>
          <Input className='userInfo-list-input' />
        </div>
        <div className='userInfo-list-item'>
          <Button className='userInfo-list-btn'>Sure</Button>
          <Button
            className='userInfo-list-btn'
            style={{ border: "1px solid #FE5100", color: "#FE5100", marginLeft: 16 }}
            onClick={() => {
              navigate(-1);
            }}>
            Cancel
          </Button>
        </div>
      </div>
      <div style={{ padding: 24 }}>
        <Keyboard />
      </div>
    </div>
  );
};

export default UserInfo;
