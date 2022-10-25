import React, { useEffect, useState } from "react";
import { ExclamationCircleOutlined, MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import "../OrderPage.less";

const OptionsListItem = ({ item, index }) => {
  const [dishNumber, setDishNumber] = useState(0);

  // let test = {
  //   name: item.name,
  //   cnName: item.cnName,
  //   price: item.price,
  //   groupId: "ItemOptionGroup_65176",
  //   categoryCnName: mock.categoryCnName,
  //   categoryId: mock.categoryId,
  //   categoryName: mock.categoryName,
  //   quantity: 1,
  // };

  return (
    <>
      <div>{item.name}</div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ marginRight: 10 }}>{item.price !== 0 && `+$${item.price.toFixed(2)}`}</div>
        <MinusCircleOutlined
          style={{ fontSize: 20 }}
          onClick={() => {
            // if (selectNumber > 0 && dishNumber > 0) {
            //   setDishNumber(dishNumber - 1);
            //   setSelectNumber(selectNumber - 1);
            //   let temp = orderListTemp;
            //   for (let i = 0; i < temp.length; i++) {
            //     if (temp[i].name === item.name) {
            //       if (temp[i].quantity > 1) {
            //         temp[i].quantity -= 1;
            //       } else {
            //         temp.splice(i, 1);
            //       }
            //     }
            //   }
            //   changePirce("delete", item.price);
            //   setOrderListTemp(JSON.parse(JSON.stringify(temp)));
            // }
          }}
        />
        <div className='dishList-number'>{dishNumber}</div>
        <PlusCircleOutlined
          style={{ fontSize: 20 }}
          onClick={() => {
            // if (selectNumber < numOfChoice) {
            //   setSelectNumber(selectNumber + 1);
            //   setDishNumber(dishNumber + 1);
            //   let temp = orderListTemp;
            //   for (let i = 0; i <= temp.length; i++) {
            //     if (JSON.stringify(temp) === "[]" || temp[i].name !== item.name) {
            //       temp.push(test);
            //       break;
            //     } else {
            //       if (temp[i].name === item.name) {
            //         temp[i].quantity += 1;
            //         break;
            //       }
            //     }
            //   }
            //   changePirce("add", item.price);
            //   setOrderListTemp(JSON.parse(JSON.stringify(temp)));
            // }
          }}
        />
      </div>
    </>
  );
};

export default OptionsListItem;
