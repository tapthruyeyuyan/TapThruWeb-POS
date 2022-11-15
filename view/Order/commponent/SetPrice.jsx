import { Button, Popover, Modal, Calendar, Col, Radio, Row, Select, message, Input } from "antd";
import React, { useEffect, useRef, useState } from "react";
import "../OrderPage.less";
import produce from "immer";
import ChangePrice from "../../../component/Tax/ChangePrice";

/**
 * @description: 价格切换
 * @param {*} setPriceShow 显示隐藏
 * @param {*} setSetPriceShow 切换显示隐藏状态
 * @return {*}
 */
const SetPrice = ({ setPriceShow, setSetPriceShow, notepadList, orderListData, setOrderListData, setSaveState }) => {
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (JSON.stringify(orderListData.orderItem) !== "[]") {
      if (notepadList[1] === undefined) {
        setPrice(orderListData.orderItem[notepadList[0]].price);
      } else {
        setPrice(orderListData.orderItem[notepadList[0]].orderItemsOptions[notepadList[1]].price);
      }
    }
  }, [notepadList, orderListData]);

  /**
   * @description: 修改价格
   * @param {*} value 价格
   * @return {*}
   */
  const changePrice = (value) => {
    setOrderListData(
      produce((draft) => {
        if (notepadList[1] === undefined) {
          draft.orderItem[notepadList[0]].price = value;
        } else {
          draft.orderItem[notepadList[0]].orderItemsOptions[notepadList[1]].price = value;
        }
      })
    );
    setSaveState(false);
  };

  return (
    <Modal title='Set Price' open={setPriceShow} onOk={() => setSetPriceShow(false)} onCancel={() => setSetPriceShow(false)} centered>
      <ChangePrice type={"setPrice"} quit={setSetPriceShow} orderNumber={price} save={changePrice} />
    </Modal>
  );
};

export default SetPrice;
