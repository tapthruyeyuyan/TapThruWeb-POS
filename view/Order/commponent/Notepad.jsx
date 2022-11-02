import React, { useEffect, useState } from "react";
import "../OrderPage.less";

const Notepad = ({ orderListData, notepadList, setNotepadList }) => {
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    let temp = 0;
    for (let i = 0; i < orderListData.orderItem.length; i++) {
      temp +=
        orderListData.orderItem[i].price * orderListData.orderItem[i].quantity;

      for (
        let j = 0;
        j < orderListData.orderItem[i].orderItemsOptions.length;
        j++
      ) {
        temp +=
          orderListData.orderItem[i].orderItemsOptions[j].price *
          orderListData.orderItem[i].orderItemsOptions[j].quantity;
      }
    }

    setSubtotal(temp);
  }, [orderListData]);

  return (
    <>
      <div className="order-box2-header">
        <div className="order-box2-header-title" style={{ width: "18%" }}>
          Qty
        </div>
        <div className="order-box2-header-title" style={{ width: "50%" }}>
          item
        </div>
        <div className="order-box2-header-title" style={{ width: "30%" }}>
          Subtotal
        </div>
      </div>
      <div className="order-box2-content">
        {orderListData.orderItem.map((item, index) => (
          <div key={index.toString()}>
            <div
              className="order-box2-content-dish"
              onClick={() => {
                setNotepadList(JSON.parse(JSON.stringify([index])));
              }}
              style={
                notepadList[0] === index && notepadList[1] === undefined
                  ? { background: "#0076fe", color: "#fff" }
                  : { background: "#FFF", color: "#333" }
              }
            >
              <div style={{ width: "18%" }}>{item.quantity}</div>
              <div style={{ width: "50%" }}>{item.name}</div>
              <div style={{ width: "30%" }}>{item.price.toFixed(2)}</div>
            </div>

            {item.orderItemsOptions.map((item_, index_) => (
              <div
                className="order-box2-content-dish"
                key={index_.toString()}
                style={{
                  borderBottom: "1px solid rgb(118,118,118)",
                  background:
                    notepadList[0] === index && notepadList[1] === index_
                      ? "#0076fe"
                      : "#fff",
                  color:
                    notepadList[0] === index && notepadList[1] === index_
                      ? "#fff"
                      : "rgb(118,118,118)",
                }}
                onClick={() => {
                  setNotepadList(JSON.parse(JSON.stringify([index, index_])));
                }}
              >
                <div style={{ width: "18%" }}>{item_.quantity}</div>
                <div style={{ width: "50%" }}>{item_.name}</div>
                <div style={{ width: "30%" }}>{item_.price.toFixed(2)}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="order-box2-price">
        <div className="order-box2-price-item">
          <div>Subtotal:</div>
          <div>${subtotal.toFixed(2)}</div>
        </div>
        <div className="order-box2-price-item">
          <div>Tax:</div>
          <div>${(subtotal * 0.08).toFixed(2)}</div>
        </div>
        <div className="order-box2-price-item">
          <div>Discount:</div>
          <div>
            ${(subtotal * orderListData.discount - subtotal).toFixed(2)}
          </div>
        </div>
        <div className="order-box2-price-item">
          <div>Tips:</div>
          <div>${orderListData.tips.toFixed(2)}</div>
        </div>
        <div className="order-box2-price-item">
          <div>Total:</div>
          <div>
            $
            {(
              subtotal +
              subtotal * 0.08 +
              orderListData.tips +
              (subtotal * orderListData.discount - subtotal)
            ).toFixed(2)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Notepad;
