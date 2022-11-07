/*
 * @Author: tapthruyeyuyan 102268434+tapthruyeyuyan@users.noreply.github.com
 * @Date: 2022-11-01 14:35:01
 * @LastEditors: tapthruyeyuyan 102268434+tapthruyeyuyan@users.noreply.github.com
 * @LastEditTime: 2022-11-07 14:04:13
 * @FilePath: \TapThruWeb-POS\view\Order\commponent\Notepad.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useState } from "react";
import "../OrderPage.less";

const Notepad = ({ orderListData, notepadList, setNotepadList }) => {
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    if (orderListData !== undefined) {
      let temp = 0;
      for (let i = 0; i < orderListData.orderItem.length; i++) {
        temp += orderListData.orderItem[i].price * orderListData.orderItem[i].quantity;

        for (let j = 0; j < orderListData.orderItem[i].orderItemsOptions.length; j++) {
          temp += orderListData.orderItem[i].orderItemsOptions[j].price * orderListData.orderItem[i].orderItemsOptions[j].quantity;
        }
      }
      setSubtotal(temp);
    }
  }, [orderListData]);

  return (
    <>
      <div className='order-box2-header'>
        <div className='order-box2-header-title' style={{ width: "18%" }}>
          Qty
        </div>
        <div className='order-box2-header-title' style={{ width: "50%" }}>
          item
        </div>
        <div className='order-box2-header-title' style={{ width: "30%" }}>
          Subtotal
        </div>
      </div>
      <div className='order-box2-content'>
        {orderListData?.orderItem?.map((item, index) => (
          <div key={index.toString()}>
            <div
              className='order-box2-content-dish'
              onClick={() => {
                setNotepadList(JSON.parse(JSON.stringify([index])));
              }}
              style={notepadList[0] === index && notepadList[1] === undefined ? { background: "#0076fe", color: "#fff" } : { background: "#FFF", color: "#333" }}
            >
              <div style={{ width: "18%" }}>{item.quantity}</div>
              <div style={{ width: "50%" }}>{item.name}</div>
              <div style={{ width: "30%" }}>{Number(item.price).toFixed(2)}</div>
            </div>

            {item.orderItemsOptions.map((item_, index_) => (
              <div
                className='order-box2-content-dish'
                key={index_.toString()}
                style={{
                  borderBottom: "1px solid rgb(118,118,118)",
                  background: notepadList[0] === index && notepadList[1] === index_ ? "#0076fe" : "#fff",
                  color: notepadList[0] === index && notepadList[1] === index_ ? "#fff" : "rgb(118,118,118)",
                }}
                onClick={() => {
                  setNotepadList(JSON.parse(JSON.stringify([index, index_])));
                }}
              >
                <div style={{ width: "18%" }}>{item_.quantity}</div>
                <div style={{ width: "50%" }}>{item_.name}</div>
                <div style={{ width: "30%" }}>{Number(item_.price).toFixed(2)}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className='order-box2-price'>
        <div className='order-box2-price-item'>
          <div>Subtotal:</div>
          <div>${Number(subtotal).toFixed(2)}</div>
        </div>
        <div className='order-box2-price-item'>
          <div>Tax:</div>
          <div>${Number(subtotal * 0.08).toFixed(2)}</div>
        </div>
        <div className='order-box2-price-item'>
          <div>Discount:</div>
          <div>${Number(subtotal * orderListData?.discount - subtotal).toFixed(2)}</div>
        </div>
        <div className='order-box2-price-item'>
          <div>Tips:</div>
          <div>${orderListData?.tips.toFixed(2)}</div>
        </div>
        <div className='order-box2-price-item'>
          <div>Total:</div>
          <div>${Number(subtotal + subtotal * 0.08 + orderListData?.tips + (subtotal * orderListData?.discount - subtotal)).toFixed(2)}</div>
        </div>
      </div>
    </>
  );
};

export default Notepad;
