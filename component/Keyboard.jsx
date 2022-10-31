import { Button } from "antd";
import React, { useEffect } from "react";
import "../view/Order/OrderPage.less";
import { Delete } from "./Svg/Svg";

const Keyboard = ({ changeText }) => {
  const keyboard = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "7", "8", "9"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L", "-", "4", "5", "6"],
    ["Z", "X", "C", "V", "B", "N", "M", "'", "#", ".", "1", "2", "3"],
  ];

  // 定时器
  let time;

  let bol = true;

  /**
   * @description: 按下手式
   * @return {*}
   */
  const mouseDown = () => {
    time = setTimeout(() => {
      changeText("");
      console.log(1);
      bol = false;
    }, 1000);
  };

  /**
   * @description: 抬起手式
   * @return {*}
   */
  const mouseUp = () => {
    clearTimeout(time);
    setTimeout(() => {
      bol = true;
    });
  };

  return (
    <div className="selfInput-keyboard">
      <div className="selfInput-keyboard-box">
        {keyboard[0].map((item, index) => (
          <Button
            className="selfInput-keyboard-box-item"
            key={index.toString()}
            onClick={() => {
              changeText((prev) => (prev += item));
            }}
          >
            {item}
          </Button>
        ))}
      </div>
      <div className="selfInput-keyboard-box">
        {keyboard[1].map((item, index) => (
          <Button
            className="selfInput-keyboard-box-item"
            key={index.toString()}
            onClick={() => {
              changeText((prev) => (prev += item));
            }}
          >
            {item}
          </Button>
        ))}
      </div>
      <div className="selfInput-keyboard-box">
        {keyboard[2].map((item, index) => (
          <Button
            className="selfInput-keyboard-box-item"
            key={index.toString()}
            onClick={() => {
              changeText((prev) => (prev += item));
            }}
          >
            {item}
          </Button>
        ))}
      </div>

      <div className="selfInput-keyboard-box" style={{ paddingBottom: 10 }}>
        <Button
          className="selfInput-keyboard-box-item"
          style={{
            width: "calc(calc(calc(calc(100% - 130px) / 13) * 6) + 54px)",
          }}
          onClick={() => {
            changeText((prev) => (prev += " "));
          }}
        >
          Space
        </Button>
        <Button
          className="selfInput-keyboard-box-item"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onMouseDown={() => {
            mouseDown();
          }}
          onMouseUp={() => {
            mouseUp();
          }}
          onClick={() => {
            if (bol) {
              changeText((prev) => {
                if (prev.length !== 0) {
                  return prev.slice(0, -1);
                } else {
                  return prev;
                }
              });
            }
          }}
        >
          <Delete />
        </Button>
        <Button
          className="selfInput-keyboard-box-item"
          onClick={() => {
            changeText((prev) => (prev += ":"));
          }}
        >
          :
        </Button>
        <Button
          className="selfInput-keyboard-box-item"
          onClick={() => {
            changeText((prev) => (prev += "/"));
          }}
        >
          /
        </Button>
        <Button
          className="selfInput-keyboard-box-item"
          onClick={() => {
            changeText((prev) => (prev += '"'));
          }}
        >
          "
        </Button>
        <Button
          className="selfInput-keyboard-box-item"
          style={{ width: "calc(calc(calc(100% - 130px) / 13) * 2 + 10px)" }}
          onClick={() => {
            changeText((prev) => (prev += "0"));
          }}
        >
          0
        </Button>
        <Button className="selfInput-keyboard-box-item">Enter</Button>
      </div>
    </div>
  );
};

export default Keyboard;
