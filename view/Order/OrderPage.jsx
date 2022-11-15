import { Button, Popover, Modal, Calendar, Col, Radio, Row, Select, message, Input } from "antd";
import { ExclamationCircleOutlined, MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import React, { useEffect, useRef, useState } from "react";
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
  DineIn,
  BagFull,
  ElectricCar,
  UserSetting,
} from "../../component/Svg/Svg";
import "./OrderPage.less";
import ChangePrice from "../../component/Tax/ChangePrice";
import { useNavigate, useParams } from "react-router-dom";
import Keyboard from "../../component/Keyboard";
import Notepad from "./commponent/Notepad";
import { useDispatch, useSelector } from "react-redux";
import OptionsList from "./commponent/OptionsList";
import { changeOrderList } from "../../src/store/storeInfoSlice";
import produce from "immer";
import OrderType from "./commponent/OrderType";
import SetTime from "./commponent/SetTime";
import SetPrice from "./commponent/SetPrice";
import SelfInput from "./commponent/SelfInput";
import DishList from "./commponent/DishList";

const { confirm } = Modal;

const OrderPage = () => {
  // 具体的菜品
  const [dishs, SetDishs] = useState([]);

  const [checkText, setCheckText] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  // 菜单列表
  const [dishList, setDishList] = useState([]);

  // 大类页数
  const [pageNumber, setPageNumber] = useState(0);

  // 菜单页数
  const [dishNumber, setDishNumber] = useState(0);

  // 是否保存了
  const [saveState, setSaveState] = useState(true);

  // 获取当前路径
  const params = useParams();

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

  // 获取菜单原dom属性
  const category = useRef(null);

  // 按照尺寸进行计算
  useEffect(() => {
    let temp = 0;
    temp = Math.floor(category.current.offsetWidth / 100) * 3;
    setPageIndex(temp);
  }, []);

  // 尺寸计算结束执行
  useEffect(() => {
    if (pageIndex !== 0) {
      paging();
    }
  }, [pageIndex]);

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
  let orderInfo = {
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
      price: mock.price,
    },
    taxExempt: false,
  };

  // 列表信息
  const [orderListData, setOrderListData] = useState({
    orderType: params.type,
    discount: 1,
    tips: 0,
    setTime: null,
    id: 1,
    orderItem: [],
    splitEvent: null,
    averageState: null,
  });

  /**
   * @description: 点击ok
   * @return {*}
   */
  const touchOK = () => {
    setOrderListData(
      produce((draft) => {
        draft.orderItem.push({ ...orderInfo, orderItemsOptions: orderListTemp });
      })
    );
    setOrderListTemp(JSON.parse(JSON.stringify([])));
    setDishShow(false);
    setSaveState(false);
  };

  useEffect(() => {
    console.log(orderListData);
  }, [orderListData]);

  /**
   * @description: 修改大类信息
   * @param {*} type
   * @return {*}
   */
  const changeOrderInfo = (type) => {
    produce((draft) => {
      if (type === "add") {
        draft.quantity += 1;
      }
      if (type === "reduce") {
        draft.quantity -= 1;
      }
    });
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

  /**
   * @description: 当前选中
   * @return {*}
   */
  const [notepadList, setNotepadList] = useState([0]);

  /**
   * @description: orderTypeShow 显示隐藏
   * @return {*}
   */
  const [orderTypeShow, setOrderTypeShow] = useState(false);

  /**
   * @description: setTime 显示隐藏
   * @return {*}
   */
  const [setTimeShow, setSetTimeShow] = useState(false);

  /**
   * @description: setPrice 显示隐藏
   * @return {*}
   */
  const [setPriceShow, setSetPriceShow] = useState(false);

  /**
   * @description: selfInput 显示隐藏
   * @return {*}
   */
  const [selfInputShow, setSelfInputShow] = useState(false);

  /**
   * @description: discount 显示隐藏
   * @return {*}
   */
  const [discountShow, setDiscountShow] = useState(false);

  /**
   * @description: tips 显示隐藏
   * @return {*}
   */
  const [tipsShow, setTipsShow] = useState(false);

  /**
   * @description: qty 显示隐藏
   * @return {*}
   */
  const [qty, setQty] = useState(false);

  /**
   * @description: 添加菜品
   * @return {*}
   */
  const addOrder = () => {
    if (JSON.stringify(orderListData.orderItem) !== "[]") {
      setOrderListData(
        produce((draft) => {
          if (notepadList[1] === undefined) {
            draft.orderItem[notepadList[0]].quantity += 1;
          }
          if (notepadList[1] !== undefined) {
            draft.orderItem[notepadList[0]].orderItemsOptions[notepadList[1]].quantity += 1;
          }
        })
      );
    }
    setSaveState(false);
  };

  /**
   * @description: 删除菜品
   * @return {*}
   */
  const deleteOrder = () => {
    if (JSON.stringify(orderListData.orderItem) !== "[]") {
      setOrderListData(
        produce((draft) => {
          if (notepadList[1] === undefined) {
            if (draft.orderItem[notepadList[0]].quantity > 1) {
              draft.orderItem[notepadList[0]].quantity -= 1;
            } else {
              draft.orderItem.splice(notepadList[0], 1);
              setNotepadList([0]);
            }
          }
          if (notepadList[1] !== undefined) {
            if (draft.orderItem[notepadList[0]].orderItemsOptions[notepadList[1]].quantity > 1) {
              draft.orderItem[notepadList[0]].orderItemsOptions[notepadList[1]].quantity -= 1;
            } else {
              draft.orderItem[notepadList[0]].orderItemsOptions.splice(notepadList[1], 1);
              setNotepadList([0]);
            }
          }
        })
      );
    }
    setSaveState(false);
  };

  const [qtyNumbers, setQtyNumbers] = useState("0");

  useEffect(() => {
    qtyNumber();
  }, [notepadList, orderListData]);

  /**
   * @description: qty显示数量
   * @return {*}
   */
  const qtyNumber = () => {
    let temp = 0;
    if (notepadList[1] === undefined && JSON.stringify(orderListData.orderItem) !== "[]") {
      temp = orderListData.orderItem[notepadList[0]].quantity;
    }

    if (notepadList[1] !== undefined && JSON.stringify(orderListData.orderItem) !== "[]") {
      temp = orderListData.orderItem[notepadList[0]].orderItemsOptions[notepadList[1]].quantity;
    }
    setQtyNumbers(temp.toString());
  };

  /**
   * @description: 修改餐品数量
   * @param {*} value 数量
   * @return {*}
   */
  const changeOrderNumber = (value) => {
    if (JSON.stringify(orderListData.orderItem) !== "[]") {
      setOrderListData(
        produce((draft) => {
          if (notepadList[1] === undefined) {
            draft.orderItem[notepadList[0]].quantity = value;
          }
          if (notepadList[1] !== undefined) {
            draft.orderItem[notepadList[0]].orderItemsOptions[notepadList[1]].quantity = value;
          }
        })
      );
    }
  };

  /**
   * @description: 设置时间
   * @param {*} time  时间
   * @return {*}
   */
  const changeOrderTime = (time) => {
    setOrderListData({ ...orderListData, setTime: time });
    setSaveState(false);
  };

  /**
   * @description: 修改折扣
   * @param {*} value 折扣值
   * @return {*}
   */
  const changeDiscount = (value) => {
    setOrderListData({ ...orderListData, discount: value });
    setSaveState(false);
  };

  /**
   * @description: 修改小费
   * @param {*} value 小费值
   * @return {*}
   */
  const changeTip = (value) => {
    setOrderListData({ ...orderListData, tips: value });
    setSaveState(false);
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
        changeOrderInfo={changeOrderInfo}
        orderInfo={orderInfo}
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
              <div className='order-content-category' ref={category}>
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
            <Notepad orderListData={orderListData} notepadList={notepadList} setNotepadList={setNotepadList} />
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
              <Popover
                placement='leftBottom'
                content={<ChangePrice type={"qty"} orderNumber={qtyNumbers} save={changeOrderNumber} quit={setQty} />}
                trigger='click'
                open={qty}
                onOpenChange={() => setQty((prev) => !prev)}>
                <Button className='order-box2-qty-item'>Qty</Button>
              </Popover>
              <Button
                className='order-box2-qty-item'
                style={{ margin: "0 10px" }}
                onClick={() => {
                  deleteOrder();
                }}>
                <Subtract />
              </Button>
              <Button
                className='order-box2-qty-item'
                onClick={() => {
                  addOrder();
                }}>
                <Add />
              </Button>
            </div>
            <div className='order-box2-qty'>
              <Button className='order-box2-qty-item' style={{ height: "auto" }}>
                <Wallet />
                <div>Payment</div>
              </Button>
              <Button
                className='order-box2-qty-item'
                style={{ margin: "0 10px", height: "auto" }}
                onClick={() => {
                  if (JSON.stringify(orderListData.orderItem) !== "[]") {
                    dispatch(changeOrderList({ ...orderListData }));
                    message.success("Save successfully");
                    setSaveState(true);
                  } else {
                    message.error("Please select the dishes before saving");
                  }
                }}>
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
                if (saveState) {
                  navigate(-1);
                } else {
                  confirm({
                    title: "The order has not been saved, whether to continue to exit?",
                    icon: <ExclamationCircleOutlined />,
                    onOk() {
                      navigate("/pos-mode");
                    },
                    onCancel() {
                      console.log("Cancel");
                    },
                  });
                }
              }}>
              <Quit />
              <div style={{ color: "#FE4A1B" }}>Quit</div>
            </Button>
            <Popover
              placement='leftTop'
              content={<OrderType orderListData={orderListData} />}
              trigger='click'
              open={orderTypeShow}
              onOpenChange={() => setOrderTypeShow((prev) => !prev)}>
              <Button
                className='order-box3-btn'
                onClick={() => {
                  setCheckText("Order Type");
                }}
                style={{
                  background: checkText === "Order Type" ? "#0076fe" : "#FFF",
                }}>
                {checkText === "Order Type" ? <Type color={"#fff"} /> : <Type color={"#0076fe"} />}
                <div
                  style={{
                    color: checkText === "Order Type" ? "#FFF" : "#0076fe",
                  }}>
                  Order Type
                </div>
              </Button>
            </Popover>

            <Button
              className='order-box3-btn'
              onClick={() => {
                setCheckText("Set time");
                setSetTimeShow(true);
              }}
              style={{
                background: checkText === "Set time" ? "#0076fe" : "#FFF",
              }}>
              {checkText === "Set time" ? <Clock color={"#fff"} /> : <Clock color={"#0076fe"} />}
              <div
                style={{
                  color: checkText === "Set time" ? "#FFF" : "#0076fe",
                }}>
                Set time
              </div>
            </Button>

            <SetTime setTimeShow={setTimeShow} setSetTimeShow={setSetTimeShow} changeOrderTime={changeOrderTime} />

            <Button
              className='order-box3-btn'
              onClick={() => {
                if (JSON.stringify(orderListData.orderItem) === "[]") {
                  message.error("请先添加菜品或选择目标");
                } else {
                  setCheckText("Set price");
                  setSetPriceShow(true);
                }
              }}
              style={{
                background: checkText === "Set price" ? "#0076fe" : "#FFF",
              }}>
              {checkText === "Set price" ? <Price color={"#fff"} /> : <Price color={"#0076fe"} />}
              <div
                style={{
                  color: checkText === "Set price" ? "#FFF" : "#0076fe",
                }}>
                Set price
              </div>
            </Button>

            <SetPrice
              setPriceShow={setPriceShow}
              setSetPriceShow={setSetPriceShow}
              notepadList={notepadList}
              orderListData={orderListData}
              setOrderListData={setOrderListData}
              setSaveState={setSaveState}
            />

            <Button
              className='order-box3-btn'
              onClick={() => {
                setCheckText("Self Input");
                setSelfInputShow(true);
              }}
              style={{
                background: checkText === "Self Input" ? "#0076fe" : "#FFF",
              }}>
              {checkText === "Self Input" ? <File color={"#fff"} /> : <File color={"#0076fe"} />}
              <div
                style={{
                  color: checkText === "Self Input" ? "#FFF" : "#0076fe",
                }}>
                Self Input
              </div>
            </Button>

            <SelfInput
              selfInputShow={selfInputShow}
              setSelfInputShow={setSelfInputShow}
              setOrderListData={setOrderListData}
              setSaveState={setSaveState}
            />

            <Button
              className='order-box3-btn'
              onClick={() => {
                setCheckText("Split Check");
                if (JSON.stringify(orderListData.orderItem) !== "[]") {
                  confirm({
                    title: "Save your order and split it?",
                    icon: <ExclamationCircleOutlined />,
                    onOk() {
                      dispatch(changeOrderList({ ...orderListData }));
                      navigate(`/split-check/${orderListData.id}`);
                    },
                    onCancel() {
                      console.log("Cancel");
                    },
                  });
                }
              }}
              style={{
                background: checkText === "Split Check" ? "#0076fe" : "#FFF",
              }}>
              {checkText === "Split Check" ? <Split color={"#fff"} /> : <Split color={"#0076fe"} />}
              <div
                style={{
                  color: checkText === "Split Check" ? "#FFF" : "#0076fe",
                }}>
                Split Check
              </div>
            </Button>

            <Popover
              placement='leftBottom'
              content={<ChangePrice type={"discount"} quit={setDiscountShow} save={changeDiscount} />}
              trigger='click'
              open={discountShow}
              onOpenChange={() => setDiscountShow((prev) => !prev)}>
              <Button
                className='order-box3-btn'
                onClick={() => {
                  setCheckText("Discount");
                }}
                style={{
                  background: checkText === "Discount" ? "#0076fe" : "#FFF",
                }}>
                {checkText === "Discount" ? <Discount color={"#fff"} /> : <Discount color={"#0076fe"} />}
                <div
                  style={{
                    color: checkText === "Discount" ? "#FFF" : "#0076fe",
                  }}>
                  Discount
                </div>
              </Button>
            </Popover>
            <Popover
              placement='leftBottom'
              content={<ChangePrice type={"tips"} quit={setTipsShow} save={changeTip} />}
              trigger='click'
              open={tipsShow}
              onOpenChange={() => setTipsShow((prev) => !prev)}>
              <Button
                className='order-box3-btn'
                onClick={() => {
                  setCheckText("Tips");
                }}
                style={{
                  background: checkText === "Tips" ? "#0076fe" : "#FFF",
                }}>
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

export default OrderPage;
