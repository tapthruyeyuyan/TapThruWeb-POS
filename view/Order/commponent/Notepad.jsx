import React, { useEffect, useState } from "react";
import "../OrderPage.less";

const Notepad = ({ orderList, notepadList, setNotepadList }) => {
  // useEffect(() => {
  //   console.log(orderList.orderItems);
  // }, [orderList]);

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
        {orderList.orderItems.map((item, index) => (
          <div key={index.toString()}>
            <div
              className='order-box2-content-dish'
              onClick={() => {
                setNotepadList(JSON.parse(JSON.stringify([index])));
              }}
              style={
                notepadList[0] === index && notepadList[1] === undefined
                  ? { background: "#0076fe", color: "#fff" }
                  : { background: "#FFF", color: "#333" }
              }>
              <div style={{ width: "18%" }}>{item.quantity}</div>
              <div style={{ width: "50%" }}>{item.name}</div>
              <div style={{ width: "30%" }}>{item.price.toFixed(2)}</div>
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
                }}>
                <div style={{ width: "18%" }}>{item_.quantity}</div>
                <div style={{ width: "50%" }}>{item_.name}</div>
                <div style={{ width: "30%" }}>{item_.price.toFixed(2)}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className='order-box2-price'>
        <div className='order-box2-price-item'>
          <div>Subtotal:</div>
          <div>$0</div>
        </div>
        <div className='order-box2-price-item'>
          <div>Tax:</div>
          <div>$0.00</div>
        </div>
        <div className='order-box2-price-item'>
          <div>Discount:</div>
          <div>$0.00</div>
        </div>
        <div className='order-box2-price-item'>
          <div>Tips:</div>
          <div>$0.00</div>
        </div>
        <div className='order-box2-price-item'>
          <div>Total:</div>
          <div>$0.00</div>
        </div>
      </div>
    </>
  );
};

export default Notepad;
