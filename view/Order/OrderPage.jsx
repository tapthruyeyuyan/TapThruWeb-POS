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

/**
 * @description: 订单类型切换
 * @return {*}
 */
const OrderType = ({ orderListData }) => {
  return (
    <div style={{ padding: 20 }}>
      <div>
        <Button
          className='orderType-btn'
          onClick={() => {}}
          style={{
            background: orderListData.orderType === "walk-in" ? "#0076fe" : "#FFF",
            color: orderListData.orderType === "walk-in" ? "#fff" : "#0076fe",
          }}>
          <Pedestrian color={orderListData.orderType === "walk-in" ? "#fff" : "#0076fe"} />
          <div>Walk In</div>
        </Button>
        <Button className='orderType-btn' style={{ margin: "0 10px" }} onClick={() => {}}>
          <DineIn color={"#0076fe"} />
          <div>Dine In</div>
        </Button>
        <Button
          className='orderType-btn'
          onClick={() => {}}
          style={{
            background: orderListData.orderType === "Pick Up" ? "#0076fe" : "#FFF",
            color: orderListData.orderType === "Pick Up" ? "#fff" : "#0076fe",
          }}>
          <BagFull color={orderListData.orderType === "Pick Up" ? "#fff" : "#0076fe"} />
          <div>Pick Up</div>
        </Button>
      </div>
      <div style={{ marginTop: 10 }}>
        <Button
          className='orderType-btn'
          style={{
            marginRight: 10,
            background: orderListData.orderType === "Delivery" ? "#0076fe" : "#FFF",
            color: orderListData.orderType === "Delivery" ? "#fff" : "#0076fe",
          }}
          onClick={() => {}}>
          <ElectricCar color={orderListData.orderType === "Delivery" ? "#fff" : "#0076fe"} />
          <div>Delivery</div>
        </Button>
        <Button className='orderType-btn' onClick={() => {}}>
          <UserSetting color={"#0076fe"} />
          <div>Buffet</div>
        </Button>
      </div>
    </div>
  );
};

/**
 * @description: 日历切换
 * @param {*} setTimeShow 显示隐藏
 * @param {*} setSetTimeShow 切换显示隐藏状态
 * @param {*} changeOrderTime 保存函数
 * @return {*}
 */
const SetTime = ({ setSetTimeShow, setTimeShow, changeOrderTime }) => {
  let newDate = new Date();

  const [date, setDate] = useState(
    `${newDate.getFullYear()}-${newDate.getMonth() + 1 < 10 ? `0${newDate.getMonth() + 1}` : newDate.getMonth() + 1}-${
      newDate.getDate() < 10 ? `0${newDate.getDate()}` : newDate.getDate()
    }`
  );

  const onPanelChange = (value) => {
    setDate(value.format("YYYY-MM-DD"));
  };

  const [hour, setHour] = useState("00");

  const [min, setMin] = useState("00");

  return (
    <Modal
      title='Set Time'
      open={setTimeShow}
      onOk={() => setSetTimeShow(false)}
      onCancel={() => setSetTimeShow(false)}
      centered
      footer={[
        <div style={{ display: "flex", flex: 1, justifyContent: "space-between" }} key={"box"}>
          <div>
            <Button
              type='primary'
              onClick={() => {
                let date = new Date();
                setHour(date.getHours());
                setMin(date.getMinutes());
              }}>
              Now Hour Minute
            </Button>
            <Button
              type='primary'
              onClick={() => {
                setHour("00");
                setMin("00");
              }}>
              Clear
            </Button>
          </div>
          <div>
            <Button
              type='primary'
              onClick={() => {
                changeOrderTime(`${date} ${hour}:${min}`);
                setSetTimeShow(false);
              }}>
              Save
            </Button>
            <Button
              type='primary'
              onClick={() => {
                setSetTimeShow(false);
              }}>
              Quit
            </Button>
          </div>
        </div>,
      ]}>
      <Calendar
        fullscreen={false}
        headerRender={({ value, type, onChange, onTypeChange }) => {
          const start = 0;
          const end = 12;
          const monthOptions = [];
          const current = value.clone();
          const localeData = value.localeData();
          const months = [];
          for (let i = 0; i < 12; i++) {
            current.month(i);
            months.push(localeData.monthsShort(current));
          }
          for (let i = start; i < end; i++) {
            monthOptions.push(
              <Select.Option key={`month-${i}`} value={i} className='month-item'>
                {months[i]}
              </Select.Option>
            );
          }
          const year = value.year();
          const month = value.month();
          const options = [];
          for (let i = year - 10; i < year + 10; i += 1) {
            options.push(
              <Select.Option key={`year-${i}`} value={i} className='year-item'>
                {i}
              </Select.Option>
            );
          }

          const defHour = 23;
          const hourOption = [];
          for (let i = 0; i <= defHour; i += 1) {
            hourOption.push(
              <Select.Option key={`hour-${i}`} value={i} className='year-item'>
                {i < 10 ? `0${i}` : i}
              </Select.Option>
            );
          }

          const changeNewHour = (value) => {
            setHour(value);
          };

          const defMin = 59;
          const minOption = [];
          for (let i = 0; i <= defMin; i++) {
            minOption.push(
              <Select.Option key={`min-${i}`} value={i} className='year-item'>
                {i < 10 ? `0${i}` : i}
              </Select.Option>
            );
          }

          const changeMin = (value) => {
            setMin(value);
          };

          return (
            <div
              style={{
                paddingBottom: 8,
              }}>
              <Row gutter={8} justify='space-around' align='middle'>
                <Col>
                  <Radio.Group size='small' onChange={(e) => onTypeChange(e.target.value)} value={type}>
                    <Radio.Button value='month'>Month</Radio.Button>
                    <Radio.Button value='year'>Year</Radio.Button>
                  </Radio.Group>
                </Col>
                <Col>
                  <Select
                    size='small'
                    dropdownMatchSelectWidth={false}
                    className='my-year-select'
                    value={year}
                    onChange={(newYear) => {
                      const now = value.clone().year(newYear);
                      onChange(now);
                    }}>
                    {options}
                  </Select>
                </Col>
                <Col>
                  <Select
                    size='small'
                    dropdownMatchSelectWidth={false}
                    value={month}
                    onChange={(newMonth) => {
                      const now = value.clone().month(newMonth);
                      onChange(now);
                    }}>
                    {monthOptions}
                  </Select>
                </Col>
                <Col>设置日期</Col>
                <Col>
                  <Select
                    size='small'
                    dropdownMatchSelectWidth={false}
                    value={hour}
                    onChange={(newHour) => {
                      changeNewHour(newHour);
                    }}>
                    {hourOption}
                  </Select>
                </Col>
                <Col>
                  <Select
                    size='small'
                    dropdownMatchSelectWidth={false}
                    value={min}
                    onChange={(newMin) => {
                      changeMin(newMin);
                    }}>
                    {minOption}
                  </Select>
                </Col>
              </Row>
            </div>
          );
        }}
        // onPanelChange={(value, mode) => onPanelChange(value, mode)}
        onChange={(value) => {
          onPanelChange(value);
        }}
      />
    </Modal>
  );
};

/**
 * @description: 价格切换
 * @param {*} setPriceShow 显示隐藏
 * @param {*} setSetPriceShow 切换显示隐藏状态
 * @return {*}
 */
const SetPrice = ({ setPriceShow, setSetPriceShow, notepadList, orderListData, setOrderListData, setSaveState }) => {
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (JSON.stringify(orderListData.orderItem) !== "[]") {
      if (notepadList[1] === undefined) {
        setPrice(orderListData.orderItem[notepadList[0]].price);
      } else {
        setPrice(orderListData.orderItem[notepadList[0]].orderItemsOptions[notepadList[1]].price);
      }
    }
  }, [notepadList, orderListData]);

  /**
   * @description: 修改价格
   * @param {*} value 价格
   * @return {*}
   */
  const changePrice = (value) => {
    setOrderListData(
      produce((draft) => {
        if (notepadList[1] === undefined) {
          draft.orderItem[notepadList[0]].price = value;
        } else {
          draft.orderItem[notepadList[0]].orderItemsOptions[notepadList[1]].price = value;
        }
      })
    );
    setSaveState(false);
  };

  return (
    <Modal title='Set Price' open={setPriceShow} onOk={() => setSetPriceShow(false)} onCancel={() => setSetPriceShow(false)} centered>
      <ChangePrice type={"setPrice"} quit={setSetPriceShow} orderNumber={price} save={changePrice} />
    </Modal>
  );
};

/**
 * @description: SelfInput
 * @return {*}
 */
const SelfInput = ({ setSelfInputShow, selfInputShow, setOrderListData, setSaveState }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantitly, setQuantitly] = useState("");

  const [distinguish, setDistinguish] = useState("name");

  let newDish = {
    restaurantInfoId: 2,
    quantity: Number(quantitly),
    name: name,
    cnName: name,
    price: Number(price),
    itemId: null,
    orderItemsOptions: [],
    categoryId: null,
    categoryName: null,
    categoryCnName: null,
    specialInstructions: null,
    printerName: "[]",
    printable: true,
    mOrderItem: {},
    taxExempt: false,
  };

  const save = () => {
    setOrderListData(
      produce((draft) => {
        draft.orderItem.push(newDish);
      })
    );
    setSaveState(false);
  };

  return (
    <Modal
      title='Self Input'
      open={selfInputShow}
      onOk={() => setSelfInputShow(false)}
      onCancel={() => setSelfInputShow(false)}
      width={800}
      footer={null}
      centered>
      <div className='selfInput'>
        <div className='selfInput-content'>
          <div className='selfInput-content-left'>
            <div className='selfInput-content-left-item'>
              <div style={{ minWidth: 70 }}>Name:</div>
              <Input
                className='selfInput-content-left-item-input'
                value={name}
                onClick={() => {
                  setDistinguish("name");
                }}
                style={{
                  borderColor: distinguish === "name" ? "#0076fe" : "#333",
                }}
              />
            </div>
            <div className='selfInput-content-left-item'>
              <div style={{ minWidth: 70 }}>Price:</div>
              <Input
                className='selfInput-content-left-item-input'
                value={price}
                onClick={() => {
                  setDistinguish("price");
                }}
                style={{
                  borderColor: distinguish === "price" ? "#0076fe" : "#333",
                }}
              />
              <Button
                type='primary'
                className='selfInput-content-left-item-btn'
                onClick={() => {
                  setPrice((prev) => (prev = 1));
                  setDistinguish("price");
                }}>
                1.00
              </Button>
              <Button
                type='primary'
                className='selfInput-content-left-item-btn'
                onClick={() => {
                  setPrice((prev) => (prev = 2));
                  setDistinguish("price");
                }}>
                2.00
              </Button>
            </div>
            <div className='selfInput-content-left-item'>
              <div style={{ minWidth: 70 }}>Quantitly:</div>
              <Input
                className='selfInput-content-left-item-input'
                value={quantitly}
                onClick={() => {
                  setDistinguish("quantitly");
                }}
                style={{
                  borderColor: distinguish === "quantitly" ? "#0076fe" : "#333",
                }}
              />
              <Button
                type='primary'
                className='selfInput-content-left-item-btn'
                onClick={() => {
                  setPrice((prev) => (prev = 3));
                  setDistinguish("price");
                }}>
                3.00
              </Button>
              <Button
                type='primary'
                className='selfInput-content-left-item-btn'
                onClick={() => {
                  setPrice((prev) => (prev = 4));
                  setDistinguish("price");
                }}>
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
        <Keyboard changeText={distinguish === "name" ? setName : distinguish === "price" ? setPrice : setQuantitly} />
        <div className='selfInput-btn'>
          <Button
            className='selfInput-btn-item'
            onClick={() => {
              if (name !== "" && price !== "" && quantitly !== "") {
                save();
                setSelfInputShow(false);
                setName("");
                setPrice("");
                setQuantitly("");
              } else {
                message.error("请先输入信息再进行保存");
              }
            }}>
            <Save />
            Save
          </Button>
          <Button
            className='selfInput-btn-item'
            style={{
              border: "1px solid #FE4A1B",
              color: "#FE4A1B",
              marginLeft: 10,
            }}
            onClick={() => {
              setSelfInputShow((prev) => !prev);
              setName("");
              setPrice("");
              setQuantitly("");
            }}>
            <Quit />
            Quit
          </Button>
        </div>
      </div>
    </Modal>
  );
};

const DishList = ({ dishShow, touchOK, touchCancel, mock, orderListTemp, setOrderListTemp, changeOrderInfo, orderInfo }) => {
  const [price, setPrice] = useState(0);

  // useEffect(() => {
  //   console.log(orderListTemp);
  // }, [orderListTemp]);

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
        if (temp[i].name === dish.name && temp[i].quantity <= 1) {
          temp.splice(i, 1);
          break;
        } else if (temp[i].name === dish.name && temp[i].quantity > 1) {
          temp[i].quantity--;
          break;
        }
      }
    }

    setOrderListTemp(JSON.parse(JSON.stringify(temp)));
  };

  /**
   * @description: 计算价格
   * @return {*}
   */
  useEffect(() => {
    let temp = mock.price;
    for (let i = 0; i < orderListTemp.length; i++) {
      temp += orderListTemp[i].price * orderListTemp[i].quantity;
    }
    setPrice(temp);
  }, [orderListTemp]);

  /**
   * @description: 未选取列表
   * @return {*}
   */
  const [uncheckedList, setUncheckedList] = useState([]);

  const [unchecked, setUnchecked] = useState(false);

  /**
   * @description: 点击提交
   * @return {*}
   */
  const submit = () => {
    if (JSON.stringify(uncheckedList) === "[]") {
      setUnchecked(false);
      touchOK();
    }
    // style={{ padding: "4px 8px", borderRadius: 4, background: "yellow" }}

    if (JSON.stringify(uncheckedList) !== "[]") {
      //   uncheckedList.map((item) => {
      //     window.location.href = `#${item}`;
      //     let temp = document.getElementsByClassName(`${item}`)[0];
      //     temp.style.background = "yellow";
      //   });
      setUnchecked(true);
      let temp = uncheckedList[0];
      for (let i = 0; i < uncheckedList.length; i++) {
        if (temp > uncheckedList[i]) {
          temp = uncheckedList[i];
        }
      }
      window.location.hash = `#${temp}`;
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
          <MinusCircleOutlined
            style={{ fontSize: 20 }}
            onClick={() => {
              if (orderInfo.quantity > 1) {
                changeOrderInfo("reduce");
              }
            }}
          />
          <div className='dishList-number'>{orderInfo.quantity}</div>
          <PlusCircleOutlined
            style={{ fontSize: 20 }}
            onClick={() => {
              changeOrderInfo("add");
            }}
          />
        </div>,
        // <Button key='OK' type='primary' onClick={touchOK} style={{ fontWeight: "bold" }}>
        <Button key='OK' type='primary' onClick={submit} style={{ fontWeight: "bold" }}>
          ${price.toFixed(2)} - Add to cart
        </Button>,
      ]}>
      <div style={{ maxHeight: 400, overflow: "auto" }}>
        {mock.optionsList.map((item, index) => (
          <OptionsList
            key={index.toString()}
            item={item}
            index={index}
            AddOrder={AddOrder}
            orderListTemp={orderListTemp}
            setUncheckedList={setUncheckedList}
            uncheckedList={uncheckedList}
            unchecked={unchecked}
          />
        ))}
      </div>
    </Modal>
  );
};

export default OrderPage;
