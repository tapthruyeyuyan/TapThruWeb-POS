import { Radio } from "antd";
import React, { useEffect, useState } from "react";
import "../OrderPage.less";
import OptionsListItem from "./OptionsListItem";
import OptionsListItemRadio from "./OptionsListItemRadio";

const OptionsList = ({ item, index, AddOrder, orderListTemp, setOrderListTemp }) => {
  const [numOfChoice, setNumOfChoice] = useState(item.numOfChoice);

  /**
   * @description: 目前点的radio名字
   * @return {*}
   */
  const [value, setValue] = useState("");

  /**
   * @description: 点击radio改变值
   * @param {*} e radio值
   * @return {*}
   */
  const onChange = (e) => {
    setValue(e.target.value);
  };

  /**
   * @description: 选中的列表
   * @return {*}
   */
  const [radioList, setRadioList] = useState({});

  /**
   * @description: 修改选中列表
   * @param {*} item  当前选中项目
   * @return {*}
   */
  const changeList = (item) => {
    console.log(item);
    setValue("");
  };

  return (
    <div style={{ marginBottom: 16 }}>
      <div className='dishList-header'>
        <div>
          <p style={{ fontSize: 16, fontWeight: "bold" }}>{item.name}</p>
          <p style={{ fontSize: 14 }}>{item.numOfChoice === 0 ? `Multiple Choices` : `Select ${item.numOfChoice}`}</p>
        </div>
        <div>{item.required ? "Required" : "Optional"}</div>
      </div>

      {item.numOfChoice === 1 ? (
        <Radio.Group onChange={onChange} value={value} style={{ display: "flex", flexDirection: "column" }}>
          {item.options.map((item_, index_) => (
            <Radio
              value={item_.name}
              key={index_.toString()}
              className='dishList-list dishList-radio'
              onClick={() => {
                changeList(item_);
              }}>
              <div>{item_.name}</div>
              <div style={{ marginRight: 10 }}>{item_.price !== 0 && `+$${item_.price.toFixed(2)}`}</div>
            </Radio>
          ))}
        </Radio.Group>
      ) : (
        item.options.map((item_, index_) => (
          <div key={index_.toString()} className='dishList-list'>
            <OptionsListItem item={item_} index={index_} AddOrder={AddOrder} />
          </div>
        ))
      )}
    </div>
  );
};

export default OptionsList;
