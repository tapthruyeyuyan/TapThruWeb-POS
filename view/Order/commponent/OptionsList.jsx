import { Radio } from "antd";
import React, { useEffect, useState } from "react";
import "../OrderPage.less";
import OptionsListItem from "./OptionsListItem";

const OptionsList = ({ item, index, AddOrder, orderListTemp, setUncheckedList, unchecked, uncheckedList }) => {
  const [numOfChoice, setNumOfChoice] = useState(item.numOfChoice);
  const [steps, setSteps] = useState(item.numOfChoice);

  /**
   * @description: 判断是否必选都选完了
   * @return {*}
   */
  useEffect(() => {
    if (numOfChoice !== 0 && item.required) {
      setUncheckedList((prev) => {
        let temp = prev;
        temp.push(item.groupId);
        return JSON.parse(JSON.stringify([...new Set(temp)]));
      });
    }

    if (numOfChoice === 0 && item.required) {
      setUncheckedList((prev) => {
        let temp = prev;
        for (let i = 0; i < temp.length; i++) {
          if (temp[i] === item.groupId) {
            temp.splice(i, 1);
            break;
          }
        }
        return JSON.parse(JSON.stringify([...new Set(temp)]));
      });
    }
  }, [numOfChoice]);

  /**
   * @description: 目前点的radio名字
   * @return {*}
   */
  const [value, setValue] = useState("");

  /**
   * @description: 提交之后初始化
   * @return {*}
   */
  useEffect(() => {
    if (JSON.stringify(orderListTemp) === "[]") setValue("");
  }, [orderListTemp]);

  /**
   * @description: 点击radio改变值
   * @param {*} e radio值
   * @return {*}
   */
  const onChange = (e) => {
    setValue(e.target.value);
  };

  /**
   * @description: 旧值
   * @return {*}
   */
  const [orderList, setOrderList] = useState();

  /**
   * @description: 修改列表
   * @param {*} item  值
   * @return {*}
   */
  const changeList = (item) => {
    setValue("");

    let temp = orderListTemp;
    if (JSON.stringify(temp) === "[]") {
      AddOrder("add", item);
      setNumOfChoice((prev) => (prev -= 1));
    } else {
      let bol = temp.findIndex((item_) => item_.name === item.name);
      if (bol !== -1) {
        AddOrder("delete", item);
        setNumOfChoice((prev) => (prev += 1));
      } else {
        AddOrder("delete", orderList);
        AddOrder("add", item);
      }
    }
  };

  const [background, setBackGround] = useState(false);

  useEffect(() => {
    if (unchecked) {
      for (let i = 0; i < uncheckedList.length; i++) {
        if (uncheckedList[i] === item.groupId) {
          setBackGround(true);
          break;
        }
      }
    }
  }, [unchecked]);

  return (
    <div style={{ marginBottom: 16 }} id={item.groupId}>
      <div className='dishList-header'>
        <div>
          <p style={{ fontSize: 16, fontWeight: "bold" }}>{item.name}</p>
          <p style={{ fontSize: 14 }}>{item.numOfChoice === 0 ? `Multiple Choices` : `Select ${item.numOfChoice}`}</p>
        </div>
        <div className={item.groupId} style={{ padding: "4px 8px", borderRadius: 4, background: background ? "yellow" : "white" }}>
          {item.required ? "Required" : "Optional"}
        </div>
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
                setOrderList(item_);
              }}>
              <div>{item_.name}</div>
              <div style={{ marginRight: 10 }}>{item_.price !== 0 && `+$${item_.price.toFixed(2)}`}</div>
            </Radio>
          ))}
        </Radio.Group>
      ) : (
        item.options.map((item_, index_) => (
          <div key={index_.toString()} className='dishList-list'>
            <OptionsListItem
              item={item_}
              index={index_}
              AddOrder={AddOrder}
              numOfChoice={numOfChoice}
              setNumOfChoice={setNumOfChoice}
              steps={steps}
              orderListTemp={orderListTemp}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default OptionsList;
