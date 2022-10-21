import { Button, Popover, Dropdown, Menu, Input, Modal, Calendar } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { dish } from "../../Mock";
import {
  Up,
  Down,
  Add,
  Subtract,
  Earth,
  Wallet,
  Printer,
  Quit,
  Type,
  Clock,
  Price,
  File,
  Split,
  Discount,
  Tips,
  Pedestrian,
  CalendarSvg,
  RefuseBin,
  Save,
} from "../../component/Svg/Svg";
import "./OrderPage.less";
import ChangePrice from "../../component/Tax/ChangePrice";
import { useNavigate } from "react-router-dom";
import Keyboard from "../../component/Keyboard";
import Notepad from "../../component/Notepad";

const { confirm } = Modal;

const OrderPage = () => {
  useEffect(() => {
    console.log(dish);
  }, [dish]);

  const [dishs, SetDishs] = useState({});

  const [checkText, setCheckText] = useState("");

  useEffect(() => {
    console.log(checkText);
  }, [checkText]);

  const navigate = useNavigate();

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <div className='order-header'>
          <div className='order-header-title'>Language</div>
          <Earth color='#fff' />
        </div>
        <div className='order-content'>
          <div className='order-box1'>
            <div className='order-box1-content'>
              <div className='order-content-title'>Category</div>
              <div className='order-content-category'>
                {/* {dish.map((item, index) => (
                  <Button
                    type='text'
                    className='order-content-category-btn'
                    key={index.toString()}
                    onClick={() => SetDishs(JSON.parse(JSON.stringify(item)))}>
                    {item.name}
                  </Button>
                ))} */}
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
            <div className='order-box1-bottom'>
              <Button className='order-box1-bottom-btn'>Meat</Button>
              <Button className='order-box1-bottom-btn'>Vegetable</Button>
              <Button className='order-box1-bottom-btn'>Taste</Button>
              <Button className='order-box1-bottom-btn'>Others</Button>
            </div>
          </div>

          <div className='order-box2'>
            <Notepad />
            <div className='order-box2-sort'>
              <Button type='primary' className='order-box2-sort-btn'>
                <Up />
                <div>Up</div>
              </Button>
              <Button type='primary' className='order-box2-sort-btn' style={{ background: "#FFF", color: "#0076fe" }}>
                <Down />
                <div>Down</div>
              </Button>
            </div>
            <div className='order-box2-qty'>
              <Button className='order-box2-qty-item'>Qty</Button>
              <Button className='order-box2-qty-item' style={{ margin: "0 10px" }}>
                <Subtract />
              </Button>
              <Button className='order-box2-qty-item'>
                <Add />
              </Button>
            </div>
            <div className='order-box2-qty'>
              <Button className='order-box2-qty-item' style={{ height: "auto" }}>
                <Wallet />
                <div>Payment</div>
              </Button>
              <Button className='order-box2-qty-item' style={{ margin: "0 10px", height: "auto" }}>
                <Printer />
                <div>Save</div>
              </Button>
              <Button className='order-box2-qty-item' style={{ height: "auto" }}>
                <Printer />
                <div>Print</div>
              </Button>
            </div>
          </div>
          <div className='order-box3'>
            <Button
              className='order-box3-btn'
              style={{ border: "1px solid #FE4A1B" }}
              onClick={() => {
                navigate(-1);
              }}>
              <Quit />
              <div style={{ color: "#FE4A1B" }}>Quit</div>
            </Button>
            <Popover placement='leftTop' content={<OrderType />} trigger='click'>
              <Button
                className='order-box3-btn'
                onClick={() => {
                  setCheckText("Order Type");
                }}
                style={{ background: checkText === "Order Type" ? "#0076fe" : "#FFF" }}>
                {checkText === "Order Type" ? <Type color={"#fff"} /> : <Type color={"#0076fe"} />}
                <div style={{ color: checkText === "Order Type" ? "#FFF" : "#0076fe" }}>Order Type</div>
              </Button>
            </Popover>
            <Popover placement='leftTop' content={<SetTime />} trigger='click'>
              <Button
                className='order-box3-btn'
                onClick={() => {
                  setCheckText("Set time");
                }}
                style={{ background: checkText === "Set time" ? "#0076fe" : "#FFF" }}>
                {checkText === "Set time" ? <Clock color={"#fff"} /> : <Clock color={"#0076fe"} />}
                <div style={{ color: checkText === "Set time" ? "#FFF" : "#0076fe" }}>Set time</div>
              </Button>
            </Popover>
            <Button
              className='order-box3-btn'
              onClick={() => {
                setCheckText("Set price");
              }}
              style={{ background: checkText === "Set price" ? "#0076fe" : "#FFF" }}>
              {checkText === "Set price" ? <Price color={"#fff"} /> : <Price color={"#0076fe"} />}
              <div style={{ color: checkText === "Set price" ? "#FFF" : "#0076fe" }}>Set price</div>
            </Button>
            <Popover placement='left' content={<SelfInput />} trigger='click'>
              <Button
                className='order-box3-btn'
                onClick={() => {
                  setCheckText("Self Input");
                }}
                style={{ background: checkText === "Self Input" ? "#0076fe" : "#FFF" }}>
                {checkText === "Self Input" ? <File color={"#fff"} /> : <File color={"#0076fe"} />}
                <div style={{ color: checkText === "Self Input" ? "#FFF" : "#0076fe" }}>Self Input</div>
              </Button>
            </Popover>
            <Button
              className='order-box3-btn'
              onClick={() => {
                setCheckText("Split Check");
                SplitCheck();
              }}
              style={{ background: checkText === "Split Check" ? "#0076fe" : "#FFF" }}>
              {checkText === "Split Check" ? <Split color={"#fff"} /> : <Split color={"#0076fe"} />}
              <div style={{ color: checkText === "Split Check" ? "#FFF" : "#0076fe" }}>Split Check</div>
            </Button>
            <Popover placement='leftBottom' content={<ChangePrice />} trigger='click'>
              <Button
                className='order-box3-btn'
                onClick={() => {
                  setCheckText("Discount");
                }}
                style={{ background: checkText === "Discount" ? "#0076fe" : "#FFF" }}>
                {checkText === "Discount" ? <Discount color={"#fff"} /> : <Discount color={"#0076fe"} />}
                <div style={{ color: checkText === "Discount" ? "#FFF" : "#0076fe" }}>Discount</div>
              </Button>
            </Popover>
            <Popover placement='leftBottom' content={<ChangePrice />} trigger='click'>
              <Button
                className='order-box3-btn'
                onClick={() => {
                  setCheckText("Tips");
                }}
                style={{ background: checkText === "Tips" ? "#0076fe" : "#FFF" }}>
                {checkText === "Tips" ? <Tips color={"#fff"} /> : <Tips color={"#0076fe"} />}
                <div style={{ color: checkText === "Tips" ? "#FFF" : "#0076fe" }}>Tips</div>
              </Button>
            </Popover>
          </div>
        </div>
      </div>
    </>
  );
};

/**
 * @description: 订单类型切换
 * @return {*}
 */
const OrderType = () => {
  return (
    <div style={{ padding: 20 }}>
      <div>
        <Button className='orderType-btn' onClick={() => {}}>
          <Pedestrian color={"#0076fe"} />
          <div>Walk In</div>
        </Button>
        <Button className='orderType-btn' style={{ margin: "0 10px" }} onClick={() => {}}>
          <Pedestrian color={"#0076fe"} />
          <div>Walk In</div>
        </Button>
        <Button className='orderType-btn' onClick={() => {}}>
          <Pedestrian color={"#0076fe"} />
          <div>Walk In</div>
        </Button>
      </div>
      <div style={{ marginTop: 10 }}>
        <Button className='orderType-btn' style={{ marginRight: 10 }} onClick={() => {}}>
          <Pedestrian color={"#0076fe"} />
          <div>Walk In</div>
        </Button>
        <Button className='orderType-btn' onClick={() => {}}>
          <Pedestrian color={"#0076fe"} />
          <div>Walk In</div>
        </Button>
      </div>
    </div>
  );
};

const week = [
  "",
  "",
  "",
  "",
  "",
  "",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
  "",
  "",
  "",
  "",
  "",
];

/**
 * @description: 日历切换
 * @return {*}
 */
const SetTime = () => {
  const onPanelChange = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };
  return (
    <div className='setTime'>
      <div className='setTime-title'>
        <div className='setTime-title-time'>
          2022年10月
          <div className='setTime-Dropdown'>
            <Dropdown overlay={<SetTimeHour />} placement='bottom' arrow>
              <Button>23</Button>
            </Dropdown>
            :
            <Dropdown overlay={<SetTimeHour />} placement='bottom' arrow>
              <Button>23</Button>
            </Dropdown>
          </div>
        </div>
        <div>
          <Button>上个月</Button>
          <Button>下个月</Button>
        </div>
      </div>
      <div className='setTime-calendar'>
        {/* <div className='setTime-calendar-week'>
          <div className='setTime-calendar-week-item'>Sun</div>
          <div className='setTime-calendar-week-item'>Mon</div>
          <div className='setTime-calendar-week-item'>Tue</div>
          <div className='setTime-calendar-week-item'>Wed</div>
          <div className='setTime-calendar-week-item'>Thur</div>
          <div className='setTime-calendar-week-item'>Fri</div>
          <div className='setTime-calendar-week-item'>Sat</div>
        </div>
        <div className='setTime-calendar-day'>
          {week.map((item, index) => (
            <div key={index.toString()} className='setTime-calendar-day-item'>
              {item}
            </div>
          ))}
        </div> */}
        <Calendar fullscreen={false} onPanelChange={onPanelChange} style={{ width: 700 }} />
        <div className='setTime-calendar-btn'>
          <div className='setTime-calendar-btn'>
            <Button className='setTime-calendar-btn-item'>
              <CalendarSvg />
              <div style={{ marginLeft: 8 }}>Now</div>
            </Button>
            <Button className='setTime-calendar-btn-item' style={{ marginLeft: 10 }}>
              <RefuseBin color={"#0076fe"} />
              <div style={{ marginLeft: 8 }}>Clear</div>
            </Button>
          </div>
          <div className='setTime-calendar-btn'>
            <Button className='setTime-calendar-btn-item'>
              <Save />
              <div style={{ marginLeft: 8 }}>Save</div>
            </Button>
            <Button className='setTime-calendar-btn-item' style={{ marginLeft: 10, border: "1px solid #FE4A1B", color: "#FE4A1B" }}>
              <Quit />
              <div style={{ marginLeft: 8 }}>退出</div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * @description:设置时间
 * @return {*}
 */
const SetTimeHour = () => {
  return (
    <Menu
      items={[
        {
          key: "1",
          label: <Button>23</Button>,
        },
        {
          key: "2",
          label: <Button>10</Button>,
        },
      ]}
    />
  );
};

/**
 * @description: SelfInput
 * @return {*}
 */
const SelfInput = () => {
  return (
    <div className='selfInput'>
      <div className='selfInput-content'>
        <div className='selfInput-content-left'>
          <div className='selfInput-content-left-item'>
            <div style={{ minWidth: 70 }}>Name:</div>
            <Input className='selfInput-content-left-item-input' />
          </div>
          <div className='selfInput-content-left-item'>
            <div style={{ minWidth: 70 }}>Price:</div>
            <Input className='selfInput-content-left-item-input' />
            <Button type='primary' className='selfInput-content-left-item-btn'>
              3.00
            </Button>
            <Button type='primary' className='selfInput-content-left-item-btn'>
              4.00
            </Button>
          </div>
          <div className='selfInput-content-left-item'>
            <div style={{ minWidth: 70 }}>Quantitly:</div>
            <Input className='selfInput-content-left-item-input' />
            <Button type='primary' className='selfInput-content-left-item-btn'>
              3.00
            </Button>
            <Button type='primary' className='selfInput-content-left-item-btn'>
              4.00
            </Button>
          </div>
        </div>
        <div className='selfInput-content-right'>
          <div style={{ minWidth: 70 }}>Print to:</div>
          <div className='selfInput-content-right-box'>
            <div className='selfInput-content-right-printer'>
              <div className='selfInput-content-right-printer-item'>
                <Printer color={"#333"} />
                <div style={{ marginLeft: 8 }}>Printer No.1</div>
              </div>
              <div className='selfInput-content-right-printer-item'>
                <Printer color={"#333"} />
                <div style={{ marginLeft: 8 }}>Printer No.1</div>
              </div>
            </div>
            <div style={{ marginTop: 10 }}>
              <Button className='selfInput-content-right-btn'>Up</Button>
              <Button className='selfInput-content-right-btn' style={{ marginLeft: 8 }}>
                Down
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Keyboard />
      <div className='selfInput-btn'>
        <Button className='selfInput-btn-item'>
          <Save />
          Save
        </Button>
        <Button className='selfInput-btn-item' style={{ border: "1px solid #FE4A1B", color: "#FE4A1B", marginLeft: 10 }}>
          <Quit />
          Quit
        </Button>
      </div>
    </div>
  );
};

/**
 * @description: 弹窗
 * @return {*}
 */
const SplitCheck = () => {
  confirm({
    title: "Save your order and split it?",
    icon: <ExclamationCircleOutlined />,
    onOk() {
      console.log("OK");
    },
    onCancel() {
      console.log("Cancel");
    },
  });
};

export default OrderPage;
