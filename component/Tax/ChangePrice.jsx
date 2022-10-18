import { Button, Input } from "antd";
import React from "react";
import "./ChangePrice.less";
import { Quit, RefuseBin, Save } from "../Svg/Svg";
const { Search } = Input;

const ChangePrice = () => {
  const onSearch = (value) => console.log(value);

  const keyboard = [
    ["7", "8", "9"],
    ["4", "5", "6"],
    ["1", "2", "3"],
  ];

  return (
    <div className='price'>
      <div>
        <Search
          onSearch={onSearch}
          enterButton={
            <div style={{ display: "flex" }}>
              <RefuseBin size={"16"} />
            </div>
          }
        />
        <div className='price-keyboard'>
          {keyboard[0].map((item, index) => (
            <div key={index.toString()} className='price-keyboard-item'>
              {item}
            </div>
          ))}
        </div>
        <div className='price-keyboard'>
          {keyboard[1].map((item, index) => (
            <div key={index.toString()} className='price-keyboard-item'>
              {item}
            </div>
          ))}
        </div>
        <div className='price-keyboard'>
          {keyboard[2].map((item, index) => (
            <div key={index.toString()} className='price-keyboard-item'>
              {item}
            </div>
          ))}
        </div>
        <div className='price-keyboard'>
          <div className='price-keyboard-item' style={{ width: 148 }}>
            0
          </div>
          <div className='price-keyboard-item'>.</div>
        </div>
      </div>
      <div className='price-right'>
        <div>
          <div>Tax rate</div>
          <div className='price-right-title'>8.000%</div>
        </div>
        <div>
          <Button className='price-right-btn'>
            <Save />
            <div>Save</div>
          </Button>
          <Button className='price-right-btn' style={{ marginTop: 20, border: "1px solid #FE4A1B", color: "#FE4A1B" }}>
            <Quit />
            <div>Quit</div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChangePrice;
