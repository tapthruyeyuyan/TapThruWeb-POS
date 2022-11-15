import produce from "immer";
import React, { useEffect, useState } from "react";
import "./SplitCheck.less";
import { useParams, useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Button, Input, message, Modal } from "antd";
import { Split, Wallet, ReprintCredit, Modify, Check, Save, Quit } from "../../component/Svg/Svg";
import ChangePrice from "../../component/Tax/ChangePrice";
import { saveSpiltEvent } from "../../src/store/storeInfoSlice";

const SplitCheck = () => {
  // 获取路由id
  const params = useParams();

  //   获取对应商店的信息
  const orderInfo = useSelector((state) => state.orderList);

  // 路由跳转
  const navigate = useNavigate();

  const dispatch = useDispatch();

  // 对应商店信息数据
  const [orderData, setOrderData] = useState({});

  //   进入页面传入useState
  useEffect(() => {
    reset();
    if (orderInfo.filter((item) => item.id === Number(params.id))[0].splitEvent !== undefined) {
      setSelectedList(orderInfo.filter((item) => item.id === Number(params.id))[0].splitEvent);
    }
    if (orderInfo.filter((item) => item.id === Number(params.id))[0].averageState !== undefined) {
      setAverageState(orderInfo.filter((item) => item.id === Number(params.id))[0].averageState);
      setOrderData([]);
    }
  }, []);

  // 弹窗显示隐藏
  const [splitChekNumberShow, setSplitChekNumberShow] = useState(false);

  //   选中列表
  const [checkList, setCheckList] = useState([]);

  // 是否选中分类下标
  const [checkListState, setCheckListState] = useState(false);

  // 分类下标
  const [checkListIndex, setCheckListIndex] = useState();

  // 平均分单
  const [averageState, setAverageState] = useState(false);

  /**
   * @description: 选中判断
   * @param {*} index   选中的下标
   * @return {*}
   */
  const onClickCheckList = (index) => {
    if (checkListState) {
      setSelectedList(
        produce((draft) => {
          let bol = true;
          for (let i = 0; i < draft[checkListIndex].length; i++) {
            if (draft[checkListIndex][i].index === index) {
              draft[checkListIndex].splice(i, 1);
              bol = false;
              break;
            } else {
              bol = true;
            }
          }
          if (bol) {
            draft[checkListIndex].push({ price: orderData.orderItem[index].price, quantity: orderData.orderItem[index].quantity, index: index });
          }
        })
      );
    }
    setCheckList(
      produce((draft) => {
        let bol = false;
        for (let i = 0; i <= draft.length; i++) {
          if (draft[i] === index) {
            draft.splice(i, 1);
            bol = false;
            break;
          } else {
            bol = true;
          }
        }
        if (bol) {
          draft.push(index);
        }
      })
    );
  };

  /**
   * @description: 选择中列表
   * @return {*}
   */
  const [selectedList, setSelectedList] = useState([]);

  /**
   * @description: 提交选择列表
   * @return {*}
   */
  const selected = () => {
    setSelectedList(
      produce((darft) => {
        let temp = [];
        for (let i = 0; i < checkList.length; i++) {
          temp.push({ price: orderData.orderItem[checkList[i]].price, quantity: orderData.orderItem[checkList[i]].quantity, index: checkList[i] });
        }
        darft.push(temp);
      })
    );
    setCheckList([]);
  };

  /**
   * @description: 修改选中列表
   * @param {*} index
   * @return {*}
   */
  const changeCheckList = (index) => {
    setCheckListState(true);
    setCheckListIndex(index);
    for (let i = 0; i < selectedList[index].length; i++) {
      setCheckList((prev) => {
        const next = [...prev];
        next.push(selectedList[index][i].index);
        return next;
      });
    }
  };

  /**
   * @description: 平均分单
   * @param {*} value
   * @return {*}
   */
  const average = (value) => {
    // console.log(value);
    setSelectedList([]);
    let temp = 0;
    for (let i = 0; i < orderData.orderItem.length; i++) {
      for (let j = 0; j < orderData.orderItem[i].orderItemsOptions.length; j++) {
        temp += orderData.orderItem[i].orderItemsOptions[j].price * orderData.orderItem[i].orderItemsOptions[j].quantity;
      }
      temp += orderData.orderItem[i].price * orderData.orderItem[i].quantity;
    }

    for (let o = 0; o < value; o++) {
      setSelectedList((prev) => {
        const next = [...prev];
        next.push({ quantity: 1, price: Number((temp / value).toFixed(2)) });
        return next;
      });
    }

    setOrderData(
      produce((darft) => {
        darft.orderItem = [];
      })
    );

    setAverageState(true);
  };

  /**
   * @description: 重置
   * @return {*}
   */
  const reset = () => {
    setOrderData(
      produce((draft) => {
        return orderInfo.filter((item) => item.id === Number(params.id))[0];
      })
    );
    setCheckList([]);
    setCheckListState(false);
    setCheckListIndex();
    setSelectedList([]);
    setAverageState(false);
  };

  /**
   * @description: 保存到redux中
   * @return {*}
   */
  const save = () => {
    dispatch(saveSpiltEvent({ id: orderData.id, data: selectedList, averageState: averageState }));
    message.success("save success");
  };

  return (
    <div className='splitchek'>
      <div className='splitchek-left'>
        <div className='splitchek-left-box'>
          {selectedList.map((item, index) => {
            let temp = 0;
            if (item.length !== undefined) {
              for (let i = 0; i < item.length; i++) {
                temp += item[i].price * item[i].quantity;
              }
            } else {
              temp += item.price * item.quantity;
            }
            return (
              <Button
                key={index.toString()}
                type='primary'
                className='splitchek-btn'
                onClick={() => {
                  changeCheckList(index);
                }}
                style={{ background: checkListIndex === index && "#FE4A1B", borderColor: checkListIndex === index && "#FE4A1B" }}>
                <div>{`Check${index + 1}`}</div>
                <div>{Number(temp).toFixed(2)}</div>
              </Button>
            );
          })}
        </div>
        <div className='splitchek-left-box' style={{ marginTop: 24 }}>
          {orderData.orderItem?.map((item, index) => {
            let bol = false;
            for (let i = 0; i < checkList.length; i++) {
              if (checkList[i] === index) {
                bol = true;
                break;
              } else {
                bol = false;
              }
            }

            let bols = false;

            for (let i = 0; i < selectedList.length; i++) {
              for (let j = 0; j < selectedList[i].length; j++) {
                if (i === checkListIndex && checkListState && checkListIndex !== undefined) {
                  continue;
                }
                if (selectedList[i][j].index === index) {
                  bols = true;
                  break;
                } else {
                  bols = false;
                }
              }
              if (bols) {
                break;
              }
            }

            return (
              <Button
                type='primary'
                key={index.toString()}
                className='splitchek-btn'
                onClick={() => {
                  onClickCheckList(index);
                }}
                style={{ background: bol && "#FE4A1B", borderColor: bol && "#FE4A1B" }}
                disabled={bols}>
                <div>{item.name}</div>
                <div>{item.price}</div>
              </Button>
            );
          })}
        </div>
      </div>
      <div className='splitchek-right'>
        <Button
          type='primary'
          className='splitchek-right-btn'
          onClick={() => {
            setSplitChekNumberShow(true);
          }}>
          <Split color={"#fff"} />
          <div className='splitchek-right-btn-text'>平均分单</div>
        </Button>

        <SplitCheckNumber splitChekNumberShow={splitChekNumberShow} setSplitChekNumberShow={setSplitChekNumberShow} average={average} />

        <Button
          type='primary'
          className='splitchek-right-btn'
          onClick={() => {
            if (checkListState) {
              if (JSON.stringify(checkList) === "[]") {
                message.error("You must select at least 1 item to perform split!");
              } else {
                setCheckListState(false);
                setCheckList([]);
                setCheckListIndex();
              }
            } else {
              selected();
            }
          }}
          disabled={averageState}>
          <Check />
          <div className='splitchek-right-btn-text'>选择</div>
        </Button>
        <Button type='primary' className='splitchek-right-btn'>
          <Wallet size={"24"} color={"#fff"} />
          <div className='splitchek-right-btn-text'>付款</div>
        </Button>
        <Button
          type='primary'
          className='splitchek-right-btn'
          onClick={() => {
            save();
          }}
          disabled={checkListState}>
          <Save color={"#fff"} />
          <div className='splitchek-right-btn-text'>只保存</div>
        </Button>
        <Button type='primary' className='splitchek-right-btn'>
          <ReprintCredit color={"#fff"} />
          <div className='splitchek-right-btn-text'>打印</div>
        </Button>
        <Button type='primary' className='splitchek-right-btn'>
          <ReprintCredit color={"#fff"} />
          <div className='splitchek-right-btn-text'>打印所有</div>
        </Button>
        <Button
          type='primary'
          className='splitchek-right-btn'
          onClick={() => {
            reset();
          }}>
          <Modify color={"#fff"} />
          <div className='splitchek-right-btn-text'>Reset</div>
        </Button>
        <Button
          style={{ border: "1px solid #FE4A1B" }}
          className='splitchek-right-btn'
          onClick={() => {
            navigate("/pos-mode");
          }}>
          <Quit />
          <div className='splitchek-right-btn-text' style={{ color: "#FE4A1B" }}>
            退出
          </div>
        </Button>
      </div>
    </div>
  );
};

/**
 * @description: 分单数量
 * @param {*} splitChekNumberShow 显示隐藏
 * @param {*} setSplitChekNumberShow    修改显示隐藏
 * @return {*}
 */
const SplitCheckNumber = ({ splitChekNumberShow, setSplitChekNumberShow, average }) => {
  const [splitCheck, setSplitCheck] = useState("");

  return (
    <Modal
      title='How Many Checks?'
      open={splitChekNumberShow}
      onCancel={() => {
        setSplitChekNumberShow(false);
      }}
      onOk={() => {
        average(Number(splitCheck));
        setSplitChekNumberShow(false);
      }}
      centered
      width={270}>
      <ChangePrice type={"splitCheck"} orderNumber={splitCheck} setFun={setSplitCheck} />
    </Modal>
  );
};

export default SplitCheck;
