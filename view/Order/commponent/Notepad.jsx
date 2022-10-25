import React from "react";
import "../OrderPage.less";

const Notepad = () => {
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
      <div className='order-box2-content'></div>
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
