import React from "react";
import "../view/Order/OrderPage.less";
import { Delete } from "./Svg/Svg";

const Keyboard = () => {
  const keyboard = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "7", "8", "9"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L", "-", "4", "5", "6"],
    ["Z", "X", "C", "V", "B", "N", "M", "'", "#", ".", "1", "2", "3"],
  ];

  return (
    <div className='selfInput-keyboard'>
      <div className='selfInput-keyboard-box'>
        {keyboard[0].map((item, index) => (
          <div className='selfInput-keyboard-box-item' key={index.toString()}>
            {item}
          </div>
        ))}
      </div>
      <div className='selfInput-keyboard-box'>
        {keyboard[1].map((item, index) => (
          <div className='selfInput-keyboard-box-item' key={index.toString()}>
            {item}
          </div>
        ))}
      </div>
      <div className='selfInput-keyboard-box'>
        {keyboard[2].map((item, index) => (
          <div className='selfInput-keyboard-box-item' key={index.toString()}>
            {item}
          </div>
        ))}
      </div>

      <div className='selfInput-keyboard-box' style={{ paddingBottom: 10 }}>
        <div className='selfInput-keyboard-box-item' style={{ width: "calc(calc(calc(calc(100% - 130px) / 13) * 6) + 54px)" }}>
          Space
        </div>
        <div className='selfInput-keyboard-box-item' style={{ display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
          <Delete />
        </div>
        <div className='selfInput-keyboard-box-item'>:</div>
        <div className='selfInput-keyboard-box-item'>/</div>
        <div className='selfInput-keyboard-box-item'>"</div>
        <div className='selfInput-keyboard-box-item' style={{ width: "calc(calc(calc(100% - 130px) / 13) * 2 + 10px)" }}>
          0
        </div>
        <div className='selfInput-keyboard-box-item'>Enter</div>
      </div>
    </div>
  );
};

export default Keyboard;
