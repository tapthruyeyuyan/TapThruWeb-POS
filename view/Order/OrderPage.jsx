import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Earth } from "../../component/Svg/Svg";
import { dish } from "../../Mock";
import "./OrderPage.less";

const OrderPage = () => {
  useEffect(() => {
    console.log(dish);
  }, [dish]);

  const [dishs, SetDishs] = useState({});

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className='order-header'>
        <div className='order-header-title'>Language</div>
        <Earth color='#fff' />
      </div>
      <div className='order-content'>
        <div className='order-box1'>
          <div className='order-box1-content'>
            <div className='order-content-title'>Category</div>
            <div className='order-content-category'>
              {dish.map((item, index) => (
                <Button
                  type='text'
                  className='order-content-category-btn'
                  key={index.toString()}
                  onClick={() => SetDishs(JSON.parse(JSON.stringify(item)))}>
                  {item.name}
                </Button>
              ))}
            </div>
          </div>
          <div className='order-box1-content'>
            <div className='order-content-title'>Dishes</div>
            <div className='order-content-category'>
              {JSON.stringify(dishs) !== "{}" &&
                dishs.items.map((item, index) => (
                  <Button type='text' className='order-content-category-btn' key={index.toString()}>
                    {item.name}
                  </Button>
                ))}
            </div>
          </div>
        </div>

        <div className='order-box2'>
          <div className='order-box2-header'>
            <div>Qty</div>
            <div>item</div>
            <div>Subtotal</div>
          </div>
        </div>
        <div className='order-box3'>123</div>
      </div>
    </div>
  );
};

export default OrderPage;
