import React, { useEffect, useState } from "react";
import { ExclamationCircleOutlined, MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import "../OrderPage.less";

const OptionsListItem = ({ item, index, numOfChoice, setNumOfChoice, AddOrder, steps, orderListTemp }) => {
  const [dishNumber, setDishNumber] = useState(0);

  useEffect(() => {
    if (JSON.stringify(orderListTemp) === "[]") {
      setDishNumber(0);
    }
  }, [orderListTemp]);

  return (
    <>
      <div>{item.name}</div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ marginRight: 10 }}>{item.price !== 0 && `+$${item.price.toFixed(2)}`}</div>
        <MinusCircleOutlined
          style={{ fontSize: 20 }}
          onClick={() => {
            if (steps !== 0) {
              if (dishNumber > 0) {
                setDishNumber((prve) => (prve -= 1));
                setNumOfChoice((prve) => (prve += 1));
                AddOrder("delete", item);
              }
            }

            if (steps === 0) {
              if (dishNumber > 0) {
                setDishNumber((prve) => (prve -= 1));
                AddOrder("delete", item);
              }
            }
          }}
        />
        <div className='dishList-number'>{dishNumber}</div>
        <PlusCircleOutlined
          style={{ fontSize: 20 }}
          onClick={() => {
            if (steps !== 0) {
              if (numOfChoice > 0) {
                setDishNumber((prve) => (prve += 1));
                setNumOfChoice((prve) => (prve -= 1));
                AddOrder("add", item);
              }
            }

            if (steps === 0) {
              setDishNumber((prve) => (prve += 1));
              AddOrder("add", item);
            }
          }}
        />
      </div>
    </>
  );
};

export default OptionsListItem;
