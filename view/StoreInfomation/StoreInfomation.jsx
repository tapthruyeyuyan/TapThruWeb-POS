import { Button, Input, Radio } from "antd";
import React from "react";
import "./StoreInfomation.less";
import { useNavigate } from "react-router-dom";
import Keyboard from "../../component/Keyboard";

const StoreInfomation = () => {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const navigate = useNavigate();

  return (
    <div className='storeInfomation'>
      <div className='storeInfomation-list'>
        <div className='storeInfomation-list-item'>
          <div className='storeInfomation-list-text'>Name:</div>
          <Input className='storeInfomation-list-input' />
        </div>
        <div className='storeInfomation-list-item'>
          <div className='storeInfomation-list-text'>URL:</div>
          <Input className='storeInfomation-list-input' />
        </div>
        <div className='storeInfomation-list-item'>
          <div className='storeInfomation-list-text'>Time Zone:</div>
          <Input className='storeInfomation-list-input' />
        </div>
      </div>
      <div className='storeInfomation-list'>
        <div className='storeInfomation-list-item'>
          <div className='storeInfomation-list-text'>Telephone:</div>
          <Input className='storeInfomation-list-input' />
        </div>
        <div className='storeInfomation-list-item'>
          <div className='storeInfomation-list-text'>Tax:</div>
          <Input className='storeInfomation-list-input' />
        </div>
        <div className='storeInfomation-list-item'>
          <div className='storeInfomation-list-text'>Show Delivery:</div>
          <Radio onChange={onChange} />
        </div>
      </div>
      <div className='storeInfomation-list'>
        <div className='storeInfomation-list-item'>
          <div className='storeInfomation-list-text'>Fax:</div>
          <Input className='storeInfomation-list-input' />
        </div>
        <div className='storeInfomation-list-item'>
          <div className='storeInfomation-list-text'>Address:</div>
          <Input className='storeInfomation-list-input' />
        </div>
        <div className='storeInfomation-list-item'></div>
      </div>
      <div className='storeInfomation-list'>
        <div className='storeInfomation-list-item'>
          <div className='storeInfomation-list-text'>City:</div>
          <Input className='storeInfomation-list-input' />
        </div>
        <div className='storeInfomation-list-item'>
          <div className='storeInfomation-list-text'>State:</div>
          <Input className='storeInfomation-list-input' />
        </div>
        <div className='storeInfomation-list-item'>
          <div className='storeInfomation-list-text'>Zip:</div>
          <Input className='storeInfomation-list-input' />
        </div>
      </div>
      <div className='storeInfomation-list'>
        <div className='storeInfomation-list-item' style={{ flex: 2 }}>
          <div className='storeInfomation-list-text'>Key words:</div>
          <Input className='storeInfomation-list-input' />
        </div>

        <div className='storeInfomation-list-item'>
          <div className='storeInfomation-list-item'>
            <Button className='storeInfomation-list-btn'>Sure</Button>
            <Button
              className='storeInfomation-list-btn'
              style={{ marginLeft: 10, border: "1px solid #FE5100", color: "#FE5100" }}
              onClick={() => {
                navigate(-1);
              }}>
              Cancel
            </Button>
          </div>
        </div>
      </div>
      <div style={{ padding: 24 }}>
        <Keyboard />
      </div>
    </div>
  );
};

export default StoreInfomation;
