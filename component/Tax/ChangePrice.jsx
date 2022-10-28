import { Button, Input } from "antd";
import React, { useEffect, useState } from "react";
import "./ChangePrice.less";
import { Quit, RefuseBin, Save } from "../Svg/Svg";
import { useDispatch } from "react-redux";
import { changeDiscount, changeOrderItems, changeTips } from "../../src/store/storeInfoSlice";

const { Search } = Input;

const ChangePrice = ({ type, notepadList, quit }) => {
  const dispatch = useDispatch();

  /**
   * @description: 点击删除
   * @return {*}
   */
  const onSearch = () => {
    setInputValue((prev) => prev.slice(0, -1));
  };

  /**
   * @description: 设置输入框文字
   * @return {*}
   */
  const [inputValue, setInputValue] = useState("");

  /**
   * @description: 设置当前状态
   * @return {*}
   */
  const [symbol, setSymbol] = useState("add");

  /**
   * @description: 键盘
   * @return {*}
   */
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
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          value={inputValue}
        />
        <div className='price-keyboard'>
          {keyboard[0].map((item, index) => (
            <div
              key={index.toString()}
              className='price-keyboard-item'
              onClick={() => {
                setInputValue((prev) => (prev += item));
              }}>
              {item}
            </div>
          ))}
        </div>
        <div className='price-keyboard'>
          {keyboard[1].map((item, index) => (
            <div
              key={index.toString()}
              className='price-keyboard-item'
              onClick={() => {
                setInputValue((prev) => (prev += item));
              }}>
              {item}
            </div>
          ))}
        </div>
        <div className='price-keyboard'>
          {keyboard[2].map((item, index) => (
            <div
              key={index.toString()}
              className='price-keyboard-item'
              onClick={() => {
                setInputValue((prev) => (prev += item));
              }}>
              {item}
            </div>
          ))}
        </div>
        <div className='price-keyboard'>
          <div
            className='price-keyboard-item'
            style={{ width: type === "qty" ? 226 : 148 }}
            onClick={() => {
              setInputValue((prev) => (prev += 0));
            }}>
            0
          </div>
          {type !== "qty" && (
            <div
              className='price-keyboard-item'
              onClick={() => {
                setInputValue((prev) => (prev += "."));
              }}>
              .
            </div>
          )}
        </div>
      </div>
      <div className='price-right'>
        {type !== "qty" ? (
          <div>
            <div>Tax rate</div>
            <div className='price-right-title'>8.000%</div>
          </div>
        ) : (
          <div>
            <Button
              className='price-right-btn'
              style={{
                display: "flex",
                justifyContent: "center",
                background: symbol === "add" ? "#0076fe" : "#FFF",
                color: symbol === "add" ? "#FFF" : "#0076fe",
              }}
              onClick={() => {
                setSymbol("add");
              }}>
              <div>Add</div>
            </Button>
            <Button
              className='price-right-btn'
              style={{
                marginTop: 10,
                display: "flex",
                justifyContent: "center",
                background: symbol === "reduce" ? "#0076fe" : "#FFF",
                color: symbol === "reduce" ? "#FFF" : "#0076fe",
              }}
              onClick={() => {
                setSymbol("reduce");
              }}>
              <div>Reduce</div>
            </Button>
          </div>
        )}
        <div>
          <Button
            className='price-right-btn'
            onClick={() => {
              if (type === "qty") {
                dispatch(changeOrderItems({ type: symbol, data: notepadList, quantity: Number(inputValue) }));
                quit((prev) => (prev = false));
              }

              if (type === "tips") {
                dispatch(changeTips(Number(inputValue)));
                quit((prev) => (prev = false));
              }

              if (type === "discount") {
                dispatch(changeDiscount(Number(inputValue)));
                quit((prev) => (prev = false));
              }

              setInputValue("");
            }}>
            <Save />
            <div>Save</div>
          </Button>
          <Button
            className='price-right-btn'
            style={{ marginTop: 20, border: "1px solid #FE4A1B", color: "#FE4A1B" }}
            onClick={() => {
              quit((prev) => (prev = false));
            }}>
            <Quit />
            <div>Quit</div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChangePrice;
