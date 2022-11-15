import { Button, Popover, Modal, Calendar, Col, Radio, Row, Select, message, Input } from "antd";
import { ExclamationCircleOutlined, MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import React, { useEffect, useRef, useState } from "react";

import "../OrderPage.less";
import OptionsList from "./OptionsList";

const DishList = ({ dishShow, touchOK, touchCancel, mock, orderListTemp, setOrderListTemp, changeOrderInfo, orderInfo }) => {
  const [price, setPrice] = useState(0);

  // useEffect(() => {
  //   console.log(orderListTemp);
  // }, [orderListTemp]);

  /**
   * @description: 修改总菜单
   * @param {*} type  添加或减少
   * @param {*} dish  菜品信息
   * @return {*}
   */
  const AddOrder = (type, dish) => {
    let temp = orderListTemp;
    let bol = false;

    let dishObj = {
      name: dish.name,
      cnName: dish.cnName,
      price: dish.price,
      groupId: "CategoryOptionGroup_16",
      categoryCnName: mock.categoryCnName,
      categoryId: mock.categoryId,
      categoryName: mock.categoryName,
      quantity: 1,
    };

    if (type === "add") {
      if (JSON.stringify(temp) === "[]") {
        temp.push(dishObj);
      } else {
        for (let i = 0; i < temp.length; i++) {
          if (temp[i].name === dish.name) {
            temp[i].quantity++;
            bol = false;
            break;
          } else {
            bol = true;
          }
        }

        if (bol === true) {
          temp.push(dishObj);
        }
      }
    }

    if (type === "delete") {
      for (let i = 0; i < temp.length; i++) {
        if (temp[i].name === dish.name && temp[i].quantity <= 1) {
          temp.splice(i, 1);
          break;
        } else if (temp[i].name === dish.name && temp[i].quantity > 1) {
          temp[i].quantity--;
          break;
        }
      }
    }

    setOrderListTemp(JSON.parse(JSON.stringify(temp)));
  };

  /**
   * @description: 计算价格
   * @return {*}
   */
  useEffect(() => {
    let temp = mock.price;
    for (let i = 0; i < orderListTemp.length; i++) {
      temp += orderListTemp[i].price * orderListTemp[i].quantity;
    }
    setPrice(temp);
  }, [orderListTemp]);

  /**
   * @description: 未选取列表
   * @return {*}
   */
  const [uncheckedList, setUncheckedList] = useState([]);

  const [unchecked, setUnchecked] = useState(false);

  /**
   * @description: 点击提交
   * @return {*}
   */
  const submit = () => {
    if (JSON.stringify(uncheckedList) === "[]") {
      setUnchecked(false);
      touchOK();
    }
    // style={{ padding: "4px 8px", borderRadius: 4, background: "yellow" }}

    if (JSON.stringify(uncheckedList) !== "[]") {
      //   uncheckedList.map((item) => {
      //     window.location.href = `#${item}`;
      //     let temp = document.getElementsByClassName(`${item}`)[0];
      //     temp.style.background = "yellow";
      //   });
      setUnchecked(true);
      let temp = uncheckedList[0];
      for (let i = 0; i < uncheckedList.length; i++) {
        if (temp > uncheckedList[i]) {
          temp = uncheckedList[i];
        }
      }
      window.location.hash = `#${temp}`;
    }
  };

  return (
    <Modal
      title={
        <div>
          <h2>{mock.name}</h2>
          <div style={{ color: "rgb(118, 118, 118)" }}>{mock.description}</div>
        </div>
      }
      open={dishShow}
      onCancel={touchCancel}
      onOk={touchOK}
      centered
      footer={[
        <div key='dish' style={{ display: "flex", alignItems: "center", marginRight: 10 }}>
          <MinusCircleOutlined
            style={{ fontSize: 20 }}
            onClick={() => {
              if (orderInfo.quantity > 1) {
                changeOrderInfo("reduce");
              }
            }}
          />
          <div className='dishList-number'>{orderInfo.quantity}</div>
          <PlusCircleOutlined
            style={{ fontSize: 20 }}
            onClick={() => {
              changeOrderInfo("add");
            }}
          />
        </div>,
        // <Button key='OK' type='primary' onClick={touchOK} style={{ fontWeight: "bold" }}>
        <Button key='OK' type='primary' onClick={submit} style={{ fontWeight: "bold" }}>
          ${price.toFixed(2)} - Add to cart
        </Button>,
      ]}>
      <div style={{ maxHeight: 400, overflow: "auto" }}>
        {mock.optionsList.map((item, index) => (
          <OptionsList
            key={index.toString()}
            item={item}
            index={index}
            AddOrder={AddOrder}
            orderListTemp={orderListTemp}
            setUncheckedList={setUncheckedList}
            uncheckedList={uncheckedList}
            unchecked={unchecked}
          />
        ))}
      </div>
    </Modal>
  );
};

export default DishList;
