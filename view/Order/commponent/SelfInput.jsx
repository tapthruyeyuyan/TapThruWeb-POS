import { Button, Popover, Modal, Calendar, Col, Radio, Row, Select, message, Input } from "antd";
import React, { useEffect, useRef, useState } from "react";
import {
  Up,
  Down,
  Add,
  Subtract,
  Earth,
  Wallet,
  Printer,
  Quit,
  Type,
  Clock,
  Price,
  File,
  Split,
  Discount,
  Tips,
  Pedestrian,
  CalendarSvg,
  RefuseBin,
  Save,
  DineIn,
  BagFull,
  ElectricCar,
  UserSetting,
} from "../../../component/Svg/Svg";
import "../OrderPage.less";
import produce from "immer";
import Keyboard from "../../../component/Keyboard";

const SelfInput = ({ setSelfInputShow, selfInputShow, setOrderListData, setSaveState }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantitly, setQuantitly] = useState("");

  const [distinguish, setDistinguish] = useState("name");

  let newDish = {
    restaurantInfoId: 2,
    quantity: Number(quantitly),
    name: name,
    cnName: name,
    price: Number(price),
    itemId: null,
    orderItemsOptions: [],
    categoryId: null,
    categoryName: null,
    categoryCnName: null,
    specialInstructions: null,
    printerName: "[]",
    printable: true,
    mOrderItem: {},
    taxExempt: false,
  };

  const save = () => {
    setOrderListData(
      produce((draft) => {
        draft.orderItem.push(newDish);
      })
    );
    setSaveState(false);
  };

  return (
    <Modal
      title='Self Input'
      open={selfInputShow}
      onOk={() => setSelfInputShow(false)}
      onCancel={() => setSelfInputShow(false)}
      width={800}
      footer={null}
      centered>
      <div className='selfInput'>
        <div className='selfInput-content'>
          <div className='selfInput-content-left'>
            <div className='selfInput-content-left-item'>
              <div style={{ minWidth: 70 }}>Name:</div>
              <Input
                className='selfInput-content-left-item-input'
                value={name}
                onClick={() => {
                  setDistinguish("name");
                }}
                style={{
                  borderColor: distinguish === "name" ? "#0076fe" : "#333",
                }}
              />
            </div>
            <div className='selfInput-content-left-item'>
              <div style={{ minWidth: 70 }}>Price:</div>
              <Input
                className='selfInput-content-left-item-input'
                value={price}
                onClick={() => {
                  setDistinguish("price");
                }}
                style={{
                  borderColor: distinguish === "price" ? "#0076fe" : "#333",
                }}
              />
              <Button
                type='primary'
                className='selfInput-content-left-item-btn'
                onClick={() => {
                  setPrice((prev) => (prev = 1));
                  setDistinguish("price");
                }}>
                1.00
              </Button>
              <Button
                type='primary'
                className='selfInput-content-left-item-btn'
                onClick={() => {
                  setPrice((prev) => (prev = 2));
                  setDistinguish("price");
                }}>
                2.00
              </Button>
            </div>
            <div className='selfInput-content-left-item'>
              <div style={{ minWidth: 70 }}>Quantitly:</div>
              <Input
                className='selfInput-content-left-item-input'
                value={quantitly}
                onClick={() => {
                  setDistinguish("quantitly");
                }}
                style={{
                  borderColor: distinguish === "quantitly" ? "#0076fe" : "#333",
                }}
              />
              <Button
                type='primary'
                className='selfInput-content-left-item-btn'
                onClick={() => {
                  setPrice((prev) => (prev = 3));
                  setDistinguish("price");
                }}>
                3.00
              </Button>
              <Button
                type='primary'
                className='selfInput-content-left-item-btn'
                onClick={() => {
                  setPrice((prev) => (prev = 4));
                  setDistinguish("price");
                }}>
                4.00
              </Button>
            </div>
          </div>
          <div className='selfInput-content-right'>
            <div style={{ minWidth: 70 }}>Print to:</div>
            <div className='selfInput-content-right-box'>
              <div className='selfInput-content-right-printer'>
                <div className='selfInput-content-right-printer-item'>
                  <Printer color={"#333"} />
                  <div style={{ marginLeft: 8 }}>Printer No.1</div>
                </div>
                <div className='selfInput-content-right-printer-item'>
                  <Printer color={"#333"} />
                  <div style={{ marginLeft: 8 }}>Printer No.1</div>
                </div>
              </div>
              <div style={{ marginTop: 10 }}>
                <Button className='selfInput-content-right-btn'>Up</Button>
                <Button className='selfInput-content-right-btn' style={{ marginLeft: 8 }}>
                  Down
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Keyboard changeText={distinguish === "name" ? setName : distinguish === "price" ? setPrice : setQuantitly} />
        <div className='selfInput-btn'>
          <Button
            className='selfInput-btn-item'
            onClick={() => {
              if (name !== "" && price !== "" && quantitly !== "") {
                save();
                setSelfInputShow(false);
                setName("");
                setPrice("");
                setQuantitly("");
              } else {
                message.error("请先输入信息再进行保存");
              }
            }}>
            <Save />
            Save
          </Button>
          <Button
            className='selfInput-btn-item'
            style={{
              border: "1px solid #FE4A1B",
              color: "#FE4A1B",
              marginLeft: 10,
            }}
            onClick={() => {
              setSelfInputShow((prev) => !prev);
              setName("");
              setPrice("");
              setQuantitly("");
            }}>
            <Quit />
            Quit
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default SelfInput;
