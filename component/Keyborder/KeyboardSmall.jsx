import { Input } from "antd";
import React from "react";
import "./KeyboardSmall.less";

const KeyboardSmall = ({ showInput }) => {
  const keyboard = [
    ["7", "8", "9"],
    ["4", "5", "6"],
    ["1", "2", "3"],
    ["0", ".", "Enter"],
  ];

  return (
    <div className='keyboardSmall'>
      {!showInput ? <></> : <Input className='keyboardSmall-input' />}

      <div className='keyboardSmall-key'>
        {keyboard[0].map((item, index) => (
          <div key={index.toString()} className='keyboardSmall-key-item'>
            {item}
          </div>
        ))}
      </div>

      <div className='keyboardSmall-key'>
        {keyboard[1].map((item, index) => (
          <div key={index.toString()} className='keyboardSmall-key-item'>
            {item}
          </div>
        ))}
      </div>

      <div className='keyboardSmall-key'>
        {keyboard[2].map((item, index) => (
          <div key={index.toString()} className='keyboardSmall-key-item'>
            {item}
          </div>
        ))}
      </div>

      <div className='keyboardSmall-key'>
        {keyboard[3].map((item, index) => (
          <div
            key={index.toString()}
            className='keyboardSmall-key-item'
            style={{ background: index === 2 && "#0076fe", color: index === 2 && "#FFF" }}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyboardSmall;
