import { Radio } from "antd";
import React, { useEffect, useState } from "react";
import "../OrderPage.less";
import OptionsListItem from "./OptionsListItem";
import OptionsListItemRadio from "./OptionsListItemRadio";

const OptionsList = ({ item, index, AddOrder, orderListTemp, setOrderListTemp }) => {
  //   console.log(item);

  const [numOfChoice, setNumOfChoice] = useState(item.numOfChoice);

  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const [radioList, setRadioList] = useState({});

  const [oldRadioList, setOldRadioList] = useState();

  useEffect(() => {
    if (oldRadioList !== undefined) {
      if (radioList.name !== oldRadioList.name) {
        if (oldRadioList !== undefined && JSON.stringify(oldRadioList) !== "{}") {
          AddOrder("delete", oldRadioList);
        }

        AddOrder("add", radioList);
      } else if (radioList.name === oldRadioList.name) {
        // let bol = false;
        // for (let i = 0; i < orderListTemp.length; i++) {
        //   if (orderListTemp[i].name === radioList.name) {
        //     setOrderListTemp((prve) => prve.splice(i, 1));
        //     bol = false;
        //     break;
        //   } else {
        //     bol = true;
        //   }
        // }
        // if (bol) {
        //   AddOrder("add", radioList);
        // }
      }
      //   console.log(oldRadioList);
    }
  }, [oldRadioList]);

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
                setValue("");
                // console.log(1);
                setRadioList((prve) => {
                  setOldRadioList(JSON.parse(JSON.stringify(prve)));
                  return JSON.parse(JSON.stringify(item_));
                });
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
