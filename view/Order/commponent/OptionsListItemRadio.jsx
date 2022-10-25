import React, { useEffect, useState } from "react";
import { Radio } from "antd";

const OptionsListItemRadio = ({ item, index, AddOrder }) => {
  //   const [radioValue, setRadioValue] = useState(false);
  //   //   第一次进入
  //   const [first, setFirst] = useState(false);

  //   useEffect(() => {
  //     // 第一次进入不执行
  //     setFirst(true);

  //     if (first) {
  //       if (radioValue) {
  //         AddOrder("add", item);
  //       } else {
  //         AddOrder("delete", item);
  //       }
  //     }
  //   }, [radioValue]);

  return (
    // <div
    //   onClick={() => {
    //     setRadioValue((prve) => !prve);
    //   }}
    //   //   style={{ flex: 1, display: "flex", justifyContent: "space-between" }}
    // >
    <>
      <Radio value={1}>
        <div>{item.name}</div>
      </Radio>
      <div style={{ marginRight: 10 }}>{item.price !== 0 && `+$${item.price.toFixed(2)}`}</div>
    </>
    // </div>
  );
};

export default OptionsListItemRadio;
