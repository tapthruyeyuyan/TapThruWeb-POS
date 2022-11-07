import React, { useEffect, useState } from "react";
import "./SplitCheck.less";
import { useParams, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { Button, Input, Modal } from "antd";
import { Split, Wallet, ReprintCredit, Modify, Check, Save, Quit } from "../../component/Svg/Svg";
import produce from "immer";
import ChangePrice from "../../component/Tax/ChangePrice";

const SplitCheck = () => {
  // 获取路由id
  const params = useParams();

  //   获取对应商店的信息
  const orderInfo = useSelector((state) => state.orderList);
  // 路由跳转
  const navigate = useNavigate();

  // 对应商店信息数据
  const [orderData, setOrderData] = useState({});

  //   进入页面传入useState
  useEffect(() => {
    setOrderData(
      produce((draft) => {
        return orderInfo.filter((item) => item.id === Number(params.id))[0];
      })
    );
  }, []);

  // 弹窗显示隐藏
  const [splitChekNumberShow, setSplitChekNumberShow] = useState(false);

  //   选中列表
  const [checkList, setCheckList] = useState([]);

  /**
   * @description: 选中判断
   * @param {*} index   选中的下标
   * @return {*}
   */
  const onClickCheckList = (index) => {
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

  useEffect(() => {
    console.log(orderData);
  }, [orderData]);

  useEffect(() => {
    console.log(selectedList);
  }, [selectedList]);

  return (
    <div className='splitchek'>
      <div className='splitchek-left'>
        <div className='splitchek-left-box'>
          {selectedList.map((item, index) => {
            let temp = 0;
            for (let i = 0; i < item.length; i++) {
              temp += item[i].price * item[i].quantity;
            }
            return (
              <Button
                key={index.toString()}
                type='primary'
                className='splitchek-btn'
                onClick={() => {}}
                // style={{ background: bol && "#FE4A1B", borderColor: bol && "#FE4A1B" }}
                // disabled={bols}
              >
                <div>{`Check${index + 1}`}</div>
                <div>{temp.toFixed(2)}</div>
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
                disabled={bols}
              >
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
          }}
        >
          <Split color={"#fff"} />
          <div className='splitchek-right-btn-text'>平均分单</div>
        </Button>

        <SplitCheckNumber splitChekNumberShow={splitChekNumberShow} setSplitChekNumberShow={setSplitChekNumberShow} />

        <Button
          type='primary'
          className='splitchek-right-btn'
          onClick={() => {
            selected();
          }}
        >
          <Check />
          <div className='splitchek-right-btn-text'>选择</div>
        </Button>
        <Button type='primary' className='splitchek-right-btn'>
          <Wallet size={"24"} color={"#fff"} />
          <div className='splitchek-right-btn-text'>付款</div>
        </Button>
        <Button type='primary' className='splitchek-right-btn'>
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
        <Button type='primary' className='splitchek-right-btn'>
          <Modify color={"#fff"} />
          <div className='splitchek-right-btn-text'>Reset</div>
        </Button>
        <Button
          style={{ border: "1px solid #FE4A1B" }}
          className='splitchek-right-btn'
          onClick={() => {
            navigate("/pos-mode");
          }}
        >
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
const SplitCheckNumber = ({ splitChekNumberShow, setSplitChekNumberShow }) => {
  const [splitCheck, setSplitCheck] = useState("");

  return (
    <Modal
      title='How Many Checks?'
      open={splitChekNumberShow}
      onCancel={() => {
        setSplitChekNumberShow(false);
      }}
      onOk={() => {
        setSplitChekNumberShow(false);
      }}
      centered
      width={270}
    >
      <ChangePrice type={"splitCheck"} orderNumber={splitCheck} setFun={setSplitCheck} />
    </Modal>
  );
};

export default SplitCheck;
