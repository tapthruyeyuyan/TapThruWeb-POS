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
import Notepad from "./commponent/Notepad";
import { useDispatch, useSelector } from "react-redux";
import OptionsList from "./commponent/OptionsList";
import { addOrderItems } from "../../src/store/storeInfoSlice";

const { confirm } = Modal;

const OrderPage = () => {
  // 具体的菜品
  const [dishs, SetDishs] = useState([]);

  const [checkText, setCheckText] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const orderList = useSelector((state) => state.orderList);

  // 获取屏幕宽度
  const windowWidth = document.body.clientWidth;

  // 菜单列表
  const [dishList, setDishList] = useState([]);

  // 大类页数
  const [pageNumber, setPageNumber] = useState(0);

  // 菜单页数
  const [dishNumber, setDishNumber] = useState(0);

  /**
   * @description: 分页
   * @return {*}
   */
  const paging = () => {
    let temp = [];

    // if (dish.length > pageIndex) {
    for (let i = 0; i < dish.length; ) {
      if (i === 0) {
        temp.push(dish.slice(i, (i += pageIndex - 1)));
      } else {
        temp.push(dish.slice(i, (i += pageIndex - 2)));
      }
    }

    if (temp[temp.length - 1].length === 1 && temp.length > 1) {
      temp[temp.length - 2].push(temp[temp.length - 1][0]);
      temp.splice(-1, 1);
    }

    for (let i = 0; i < temp.length; i++) {
      for (let j = 0; j < temp[i].length; j++) {
        let temp_ = [];
        for (let o = 0; o < temp[i][j].items.length; ) {
          if (o === 0) {
            temp_.push(temp[i][j].items.slice(o, (o += pageIndex - 1)));
          } else {
            temp_.push(temp[i][j].items.slice(o, (o += pageIndex - 2)));
          }
        }
        temp[i][j].items = temp_;
      }
    }
    // }
    setDishList(JSON.parse(JSON.stringify(temp)));
  };

  // 分页数量
  const [pageIndex, setPageIndex] = useState(0);

  // 按照尺寸进行计算
  useEffect(() => {
    if (windowWidth < 1745 && windowWidth >= 1607) {
      setPageIndex(30);
    } else if (windowWidth < 1606 && windowWidth >= 1468) {
      setPageIndex(27);
    } else if (windowWidth <= 1467 && windowWidth >= 1329) {
      setPageIndex(24);
    } else if (windowWidth <= 1328 && windowWidth >= 1191) {
      setPageIndex(21);
    } else if (windowWidth <= 1190 && windowWidth >= 1069) {
      setPageIndex(18);
    } else if (windowWidth <= 1068 && windowWidth >= 965) {
      setPageIndex(15);
    } else if (windowWidth <= 964 && windowWidth >= 861) {
      setPageIndex(12);
    } else if (windowWidth <= 860 && windowWidth >= 750) {
      setPageIndex(9);
    }
  }, []);

  // 尺寸计算结束执行
  useEffect(() => {
    if (pageIndex !== 0) {
      paging();
    }
  }, [pageIndex]);

  // useEffect(() => {
  //   console.log(dishs);
  // }, [dishs]);

  /**
   * @description: 弹窗显示
   * @return {*}
   */
  const [dishShow, setDishShow] = useState(false);

  // 餐厅模拟数据
  const mock = {
    restaurantInfoId: 2,
    active: true,
    id: 1687,
    itemId: "R25",
    name: " Almond Chicken",
    cnName: "杏仁鸡",
    description: null,
    price: 10.45,
    mPrice: null,
    selectItems: null,
    spicy: false,
    raw: false,
    taxExempt: false,
    displayOrder: 25,
    itemImage: "https://etapthru.com/img/itemImage.png",
    encodedItemImage: null,
    printerName: "[]",
    printable: true,
    categoryOptionAvailable: true,
    itemOptionGroups: [],
    optionsList: [
      {
        restaurantInfoId: 2,
        id: null,
        name: "Rice Choice",
        value: "Choose 1",
        numOfChoice: 1,
        required: true,
        multiQtyAllowed: true,
        groupId: "CategoryOptionGroup_16",
        optionLocation: "CATEGORY",
        options: [
          {
            id: "Option_148",
            name: "w. White Rice",
            cnName: "跟白饭",
            price: 0,
            active: true,
          },
          {
            id: "Option_149",
            name: "w. Fried Rice",
            cnName: "跟炒饭",
            price: 0,
            active: true,
          },
          {
            id: "Option_150",
            name: "w. Lo Mein",
            cnName: "跟捞面",
            price: 1,
            active: true,
          },
        ],
        active: true,
      },
      {
        restaurantInfoId: 2,
        id: null,
        name: "Side Choice",
        value: "OPTION_2",
        numOfChoice: 2,
        required: true,
        multiQtyAllowed: true,
        groupId: "CategoryOptionGroup_17",
        optionLocation: "CATEGORY",
        options: [
          {
            id: "Option_151",
            name: "w. Crab Rangoon",
            cnName: "跟蟹角",
            price: 0,
            active: true,
          },
          {
            id: "Option_153",
            name: "w. Spring Roll ",
            cnName: "跟上海春卷",
            price: 0,
            active: true,
          },
          {
            id: "Option_72413",
            name: "w. Egg Roll",
            cnName: "跟春卷",
            price: 0.25,
            active: true,
          },
        ],
        active: true,
      },
      {
        restaurantInfoId: 2,
        id: null,
        name: "Extras",
        value: "New Modifier",
        numOfChoice: 0,
        required: false,
        multiQtyAllowed: true,
        groupId: "CategoryOptionGroup_32819",
        optionLocation: "CATEGORY",
        options: [
          {
            id: "Option_69468",
            name: "Add Egg",
            cnName: "加蛋",
            price: 1,
            active: true,
          },
          {
            id: "Option_69469",
            name: "Add Vegetable",
            cnName: "加菜",
            price: 1,
            active: true,
          },
          {
            id: "Option_69470",
            name: "Add Chicken",
            cnName: "加鸡肉",
            price: 2,
            active: true,
          },
          {
            id: "Option_69471",
            name: "Add Pork",
            cnName: "加猪肉",
            price: 2,
            active: true,
          },
          {
            id: "Option_69472",
            name: "Add Beef",
            cnName: "加牛肉",
            price: 2.5,
            active: true,
          },
          {
            id: "Option_69473",
            name: "Add Shrimp",
            cnName: "加虾",
            price: 2.5,
            active: true,
          },
        ],
        active: true,
      },
    ],
    startTime: null,
    endTime: null,
    availability: "NON_RESTAURANT",
    deleted: false,
    categoryCnName: "全天优惠",
    employee: null,
    categoryId: 38,
    categoryName: "All Day Combo Special Plates",
  };

  // 添加菜品列表
  const [orderListTemp, setOrderListTemp] = useState([]);

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

  /**
   * @description: 修改菜单信息
   * @param {*} item
   * @return {*}
   */
  const changeDishs = (item) => {
    let temp = item.items;
    if (JSON.stringify(temp) !== "[]" && temp[temp.length - 1].length === 1 && temp.length > 1) {
      temp[temp.length - 2].push(temp[temp.length - 1][0]);
      temp.splice(-1, 1);
    }
    SetDishs(JSON.parse(JSON.stringify(temp)));
    setDishNumber(0);
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
                {pageNumber > 0 && (
                  <Button
                    type='primary'
                    className='order-content-category-btn'
                    onClick={() => {
                      setPageNumber((prve) => (prve -= 1));
                    }}>
                    Last Page
                  </Button>
                )}

                {dishList[pageNumber]?.map((item, index) => (
                  <Button
                    type='text'
                    className='order-content-category-btn'
                    key={index.toString()}
                    onClick={() => {
                      changeDishs(item);
                    }}>
                    {item.name}
                  </Button>
                ))}
                {dishList.length > pageNumber + 1 && (
                  <Button
                    type='primary'
                    className='order-content-category-btn'
                    onClick={() => {
                      setPageNumber((prve) => (prve += 1));
                    }}>
                    Next Page
                  </Button>
                )}
              </div>
            </div>
            <div className='order-box1-content'>
              <div className='order-content-title'>Dishes</div>
              <div className='order-content-category'>
                {dishNumber > 0 && (
                  <Button
                    type='primary'
                    className='order-content-category-btn'
                    onClick={() => {
                      setDishNumber((prve) => (prve -= 1));
                    }}>
                    Next Page
                  </Button>
                )}

                {JSON.stringify(dishs) !== "[]" &&
                  dishs[dishNumber].map((item, index) => (
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

                {dishs.length > dishNumber + 1 && (
                  <Button
                    type='primary'
                    className='order-content-category-btn'
                    onClick={() => {
                      setDishNumber((prve) => (prve += 1));
                    }}>
                    Next Page
                  </Button>
                )}
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
  const [price, setPrice] = useState(mock.price);

  useEffect(() => {
    console.log(orderListTemp);
  }, [orderListTemp]);

  /**
   * @description: 修改总菜单
   * @param {*} type  添加或减少
   * @param {*} dish  菜品信息
   * @return {*}
   */
  const AddOrder = (type, dish) => {
    let temp = orderListTemp;
    let bol = false;

    let dishObj = {
      name: dish.name,
      cnName: dish.cnName,
      price: dish.price,
      groupId: "CategoryOptionGroup_16",
      categoryCnName: mock.categoryCnName,
      categoryId: mock.categoryId,
      categoryName: mock.categoryName,
      quantity: 1,
    };

    if (type === "add") {
      if (JSON.stringify(temp) === "[]") {
        temp.push(dishObj);
      } else {
        for (let i = 0; i < temp.length; i++) {
          if (temp[i].name === dish.name) {
            temp[i].quantity++;
            bol = false;
            break;
          } else {
            bol = true;
          }
        }

        if (bol === true) {
          temp.push(dishObj);
        }
      }
    }

    if (type === "delete") {
      for (let i = 0; i < temp.length; i++) {
        if (temp[i].name === dish.name) {
          temp.splice(i, 1);
        }
      }
    }

    setOrderListTemp(JSON.parse(JSON.stringify(temp)));
  };

  /**
   * @description: 修改价格
   * @param {*} type  增加或者减少
   * @param {*} price 价格
   * @return {*}
   */
  const changePirce = (type, price) => {
    if (type === "add") {
      setPrice((prve) => (prve += price));
    }
    if (type === "delete") {
      setPrice((prve) => (prve -= price));
    }
  };

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
        <Button key='OK' type='primary' onClick={touchOK} style={{ fontWeight: "bold" }}>
          ${price.toFixed(2)} - Add to cart
        </Button>,
      ]}>
      {mock.optionsList.map((item, index) => (
        <OptionsList
          key={index.toString()}
          item={item}
          index={index}
          AddOrder={AddOrder}
          orderListTemp={orderListTemp}
          setOrderListTemp={setOrderListTemp}
        />
      ))}
    </Modal>
  );
};

export default OrderPage;
