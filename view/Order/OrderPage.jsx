import { Button, Popover, Dropdown, Menu, Input, Modal, Calendar } from "antd";
import { ExclamationCircleOutlined, MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
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
import { useDispatch, useSelector } from "react-redux";
import ItemOptions from "./commponent/ItemOptions";
import { addOrderItems } from "../../src/store/storeInfoSlice";

const { confirm } = Modal;

const OrderPage = () => {
  const [dishs, SetDishs] = useState({});

  const [checkText, setCheckText] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const orderList = useSelector((state) => state.orderList);

  const windowWidth = document.body.clientWidth;

  const [dishList, setDishList] = useState([]);

  /**
   * @description: 分页
   * @param {*} dishListNumber 最多多少个
   * @param {*} optionsListNumber 最多多少个减少一个
   * @return {*}
   */
  const paging = (dishListNumber, optionsListNumber) => {
    let temp = [];

    if (dish.length > dishListNumber) {
      for (let i = 0; i < dish.length; ) {
        temp.push(dish.slice(i, (i += optionsListNumber)));
      }

      for (let i = 0; i < temp.length; i++) {
        for (let j = 0; j < temp[i].length; j++) {
          if (temp[i][j].items.length > dishListNumber) {
            let temp_ = [];
            for (let o = 0; o < temp[i][j].items.length; ) {
              temp_.push(temp[i][j].items.slice(o, (o += optionsListNumber)));
            }
            // console.log("temp_", temp_);
            temp[i][j].items = temp_;
          }
        }
      }
    }
    setDishList(JSON.parse(JSON.stringify(temp)));
  };

  useEffect(() => {
    if (windowWidth < 1745 && windowWidth >= 1607) {
      paging(30, 29);
    } else if (windowWidth < 1606 && windowWidth >= 1468) {
      paging(27, 26);
    } else if (windowWidth <= 1467 && windowWidth >= 1329) {
      paging(24, 23);
    } else if (windowWidth <= 1328 && windowWidth >= 1191) {
      paging(21, 20);
    } else if (windowWidth <= 1190 && windowWidth >= 1069) {
      paging(18, 17);
    } else if (windowWidth <= 1068 && windowWidth >= 965) {
      paging(15, 14);
    } else if (windowWidth <= 964 && windowWidth >= 861) {
      paging(12, 11);
    } else if (windowWidth <= 860 && windowWidth >= 750) {
      paging(9, 8);
    }
  }, []);

  useEffect(() => {
    console.log(dishList);
  }, [dishList]);

  /**
   * @description: 弹窗显示
   * @return {*}
   */
  const [dishShow, setDishShow] = useState(false);

  // 餐厅模拟数据
  const mock = {
    restaurantInfoId: 3,
    active: true,
    id: 1116206,
    itemId: "0",
    name: "Create Your Own Combination ",
    cnName: "Create Your Own Combination ",
    description: "Choose any two items.",
    price: 22.95,
    mPrice: null,
    selectItems: null,
    spicy: false,
    raw: false,
    taxExempt: false,
    displayOrder: 0,
    itemImage: "https://etapthru.com/img/itemImage.png",
    encodedItemImage: null,
    printerName: "[]",
    printable: true,
    categoryOptionAvailable: true,
    itemOptionGroups: [
      {
        restaurantInfoId: 3,
        id: 65176,
        name: "Choose 2 Items",
        value: "New Modifier",
        numOfChoice: 2,
        required: true,
        multiQtyAllowed: true,
        itemOptions: [
          {
            restaurantInfoId: 3,
            active: true,
            id: 252945,
            name: "Vegetable",
            cnName: "Vegetable",
            price: 0,
            optionType: null,
            deleted: false,
            employee: null,
            default: false,
          },
          {
            restaurantInfoId: 3,
            active: true,
            id: 252946,
            name: " Chicken",
            cnName: " Chicken",
            price: 0,
            optionType: null,
            deleted: false,
            employee: null,
            default: false,
          },
          {
            restaurantInfoId: 3,
            active: true,
            id: 252947,
            name: "Shrimp",
            cnName: "Shrimp",
            price: 0,
            optionType: null,
            deleted: false,
            employee: null,
            default: false,
          },
          {
            restaurantInfoId: 3,
            active: true,
            id: 252948,
            name: "Red Snapper",
            cnName: "Red Snapper",
            price: 1.5,
            optionType: null,
            deleted: false,
            employee: null,
            default: false,
          },
          {
            restaurantInfoId: 3,
            active: true,
            id: 252949,
            name: "Calamari",
            cnName: "Calamari",
            price: 0,
            optionType: null,
            deleted: false,
            employee: null,
            default: false,
          },
          {
            restaurantInfoId: 3,
            active: true,
            id: 252950,
            name: " Salmon",
            cnName: " Salmon",
            price: 0,
            optionType: null,
            deleted: false,
            employee: null,
            default: false,
          },
          {
            restaurantInfoId: 3,
            active: true,
            id: 252951,
            name: "Scallop",
            cnName: "Scallop",
            price: 2,
            optionType: null,
            deleted: false,
            employee: null,
            default: false,
          },
          {
            restaurantInfoId: 3,
            active: true,
            id: 252952,
            name: "Lobster (6 oz) ",
            cnName: "Lobster (6 oz) ",
            price: 5,
            optionType: null,
            deleted: false,
            employee: null,
            default: false,
          },
          {
            restaurantInfoId: 3,
            active: true,
            id: 252953,
            name: "New York Steak (Rare)",
            cnName: "New York Steak (Rare)",
            price: 2.5,
            optionType: null,
            deleted: false,
            employee: null,
            default: false,
          },
          {
            restaurantInfoId: 3,
            active: true,
            id: 252954,
            name: "New York Steak (Medium Rare)",
            cnName: "New York Steak (Medium Rare)",
            price: 2.5,
            optionType: null,
            deleted: false,
            employee: null,
            default: false,
          },
          {
            restaurantInfoId: 3,
            active: true,
            id: 252955,
            name: "New York Steak (Medium)",
            cnName: "New York Steak (Medium)",
            price: 2.5,
            optionType: null,
            deleted: false,
            employee: null,
            default: false,
          },
          {
            restaurantInfoId: 3,
            active: true,
            id: 252956,
            name: "New York Steak (Medium Well)",
            cnName: "New York Steak (Medium Well)",
            price: 2.5,
            optionType: null,
            deleted: false,
            employee: null,
            default: false,
          },
          {
            restaurantInfoId: 3,
            active: true,
            id: 252957,
            name: "New York Steak (Well Done)",
            cnName: "New York Steak (Well Done)",
            price: 2.5,
            optionType: null,
            deleted: false,
            employee: null,
            default: false,
          },
          {
            restaurantInfoId: 3,
            active: true,
            id: 252958,
            name: "Filet Mignon (Rare)",
            cnName: "Filet Mignon (Rare)",
            price: 4,
            optionType: null,
            deleted: false,
            employee: null,
            default: false,
          },
          {
            restaurantInfoId: 3,
            active: true,
            id: 252959,
            name: "Filet Mignon (Medium Rare)",
            cnName: "Filet Mignon (Medium Rare)",
            price: 4,
            optionType: null,
            deleted: false,
            employee: null,
            default: false,
          },
          {
            restaurantInfoId: 3,
            active: true,
            id: 252960,
            name: "Filet Mignon (Medium)",
            cnName: "Filet Mignon (Medium)",
            price: 4,
            optionType: null,
            deleted: false,
            employee: null,
            default: false,
          },
          {
            restaurantInfoId: 3,
            active: true,
            id: 252961,
            name: "Filet Mignon (Medium Well)",
            cnName: "Filet Mignon (Medium Well)",
            price: 4,
            optionType: null,
            deleted: false,
            employee: null,
            default: false,
          },
          {
            restaurantInfoId: 3,
            active: true,
            id: 252962,
            name: "Filet Mignon (Well Done)",
            cnName: "Filet Mignon (Well Done)",
            price: 4,
            optionType: null,
            deleted: false,
            employee: null,
            default: false,
          },
        ],
        active: true,
      },
    ],
    optionsList: [
      {
        restaurantInfoId: 3,
        id: null,
        name: "Choose 2 Items",
        value: "New Modifier",
        numOfChoice: 2,
        required: true,
        multiQtyAllowed: true,
        groupId: "ItemOptionGroup_65176",
        optionLocation: "ITEM",
        options: [
          {
            id: "ItemOptionGroup_252945",
            name: "Vegetable",
            cnName: "Vegetable",
            price: 0,
            active: true,
          },
          {
            id: "ItemOptionGroup_252946",
            name: " Chicken",
            cnName: " Chicken",
            price: 0,
            active: true,
          },
          {
            id: "ItemOptionGroup_252947",
            name: "Shrimp",
            cnName: "Shrimp",
            price: 0,
            active: true,
          },
          {
            id: "ItemOptionGroup_252948",
            name: "Red Snapper",
            cnName: "Red Snapper",
            price: 1.5,
            active: true,
          },
          {
            id: "ItemOptionGroup_252949",
            name: "Calamari",
            cnName: "Calamari",
            price: 0,
            active: true,
          },
          {
            id: "ItemOptionGroup_252950",
            name: " Salmon",
            cnName: " Salmon",
            price: 0,
            active: true,
          },
          {
            id: "ItemOptionGroup_252951",
            name: "Scallop",
            cnName: "Scallop",
            price: 2,
            active: true,
          },
          {
            id: "ItemOptionGroup_252952",
            name: "Lobster (6 oz) ",
            cnName: "Lobster (6 oz) ",
            price: 5,
            active: true,
          },
          {
            id: "ItemOptionGroup_252953",
            name: "New York Steak (Rare)",
            cnName: "New York Steak (Rare)",
            price: 2.5,
            active: true,
          },
          {
            id: "ItemOptionGroup_252954",
            name: "New York Steak (Medium Rare)",
            cnName: "New York Steak (Medium Rare)",
            price: 2.5,
            active: true,
          },
          {
            id: "ItemOptionGroup_252955",
            name: "New York Steak (Medium)",
            cnName: "New York Steak (Medium)",
            price: 2.5,
            active: true,
          },
          {
            id: "ItemOptionGroup_252956",
            name: "New York Steak (Medium Well)",
            cnName: "New York Steak (Medium Well)",
            price: 2.5,
            active: true,
          },
          {
            id: "ItemOptionGroup_252957",
            name: "New York Steak (Well Done)",
            cnName: "New York Steak (Well Done)",
            price: 2.5,
            active: true,
          },
          {
            id: "ItemOptionGroup_252958",
            name: "Filet Mignon (Rare)",
            cnName: "Filet Mignon (Rare)",
            price: 4,
            active: true,
          },
          {
            id: "ItemOptionGroup_252959",
            name: "Filet Mignon (Medium Rare)",
            cnName: "Filet Mignon (Medium Rare)",
            price: 4,
            active: true,
          },
          {
            id: "ItemOptionGroup_252960",
            name: "Filet Mignon (Medium)",
            cnName: "Filet Mignon (Medium)",
            price: 4,
            active: true,
          },
          {
            id: "ItemOptionGroup_252961",
            name: "Filet Mignon (Medium Well)",
            cnName: "Filet Mignon (Medium Well)",
            price: 4,
            active: true,
          },
          {
            id: "ItemOptionGroup_252962",
            name: "Filet Mignon (Well Done)",
            cnName: "Filet Mignon (Well Done)",
            price: 4,
            active: true,
          },
        ],
        active: true,
      },
    ],
    startTime: null,
    endTime: null,
    availability: "ALL",
    deleted: false,
    categoryCnName: "自选套餐",
    employee: null,
    categoryId: 125060,
    categoryName: "Create Your Own Dinner Combination",
  };

  // 添加菜品列表
  const [orderListTemp, setOrderListTemp] = useState([]);

  // useEffect(() => {
  //   console.log(orderListTemp);
  // }, [orderListTemp]);

  /**
   * @description: 提交信息
   * @return {*}
   */
  const [orderInfo, setOrderInfo] = useState({
    restaurantInfoId: mock.restaurantInfoId,
    quantity: 1,
    name: mock.name,
    cnName: mock.cnName,
    price: mock.price,
    itemId: mock.id,
    orderItemsOptions: [],
    categoryId: mock.categoryId,
    categoryName: mock.categoryName,
    categoryCnName: mock.categoryCnName,
    specialInstructions: null,
    printerName: "[]",
    printable: true,
    mOrderItem: {
      price: 0,
    },
    taxExempt: false,
  });

  /**
   * @description: 点击ok
   * @return {*}
   */
  const touchOK = () => {
    dispatch(addOrderItems({ ...orderInfo, orderItemsOptions: orderListTemp }));
    setDishShow(false);
  };

  /**
   * @description: 点击关闭
   * @return {*}
   */
  const touchCancel = () => {
    setOrderListTemp([]);
    setDishShow(false);
  };

  return (
    <>
      <DishList
        mock={mock}
        dishShow={dishShow}
        touchOK={touchOK}
        touchCancel={touchCancel}
        orderListTemp={orderListTemp}
        setOrderListTemp={setOrderListTemp}
      />
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
                    <Button
                      type='text'
                      className='order-content-category-btn'
                      key={index.toString()}
                      onClick={() => {
                        setDishShow(true);
                      }}>
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

const DishList = ({ dishShow, touchOK, touchCancel, mock, orderListTemp, setOrderListTemp }) => {
  // 选择次数
  const [selectNumber, setSelectNumber] = useState(0);

  return (
    <Modal
      title={
        <div>
          <h2>{mock.name}</h2>
          <div style={{ color: "rgb(118, 118, 118)" }}>{mock.description}</div>
        </div>
      }
      open={dishShow}
      onCancel={touchCancel}
      onOk={touchOK}
      centered
      footer={[
        <div key='dish' style={{ display: "flex", alignItems: "center", marginRight: 10 }}>
          <MinusCircleOutlined style={{ fontSize: 20 }} />
          <div className='dishList-number'>1</div>
          <PlusCircleOutlined style={{ fontSize: 20 }} />
        </div>,
        <Button key='OK' type='primary' onClick={touchOK}>
          OK
        </Button>,
      ]}>
      <div className='dishList-header'>
        <div>
          <p style={{ fontSize: 16, fontWeight: "bold" }}>Choose {mock.itemOptionGroups[0].numOfChoice} Items</p>
          <p style={{ fontSize: 14 }}>Select {selectNumber}</p>
        </div>
        <div>Required</div>
      </div>
      <div>
        {mock.itemOptionGroups.map((item, index) => (
          <div key={index.toString()}>
            {item.itemOptions.map((item_, index_) => (
              <div key={index_.toString()} className='dishList-list'>
                <ItemOptions
                  item={item_}
                  index={index_}
                  mock={mock}
                  orderListTemp={orderListTemp}
                  setOrderListTemp={setOrderListTemp}
                  selectNumber={selectNumber}
                  setSelectNumber={setSelectNumber}
                  numOfChoice={item.numOfChoice}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default OrderPage;
