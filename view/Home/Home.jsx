import { Button, Switch } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Home.less";
import EnterAmount from "../../component/EnterAmount/EnterAmount";
import { Link } from "react-router-dom";
import { orders } from "../../Mock";

const Home = () => {
  // 获取商铺信息
  const storeInfo = useSelector((state) => state.storeInfo);

  /**
   * @description: 格式化电话号码
   * @param {*} phoneNumber
   * @return {*}
   */
  const changePhoneNumber = (phoneNumber) => {
    return `(${phoneNumber.slice(0, 3)})${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
  };

  // 控制弹窗
  const [isModalOpen, setIsModalOpen] = useState(false);

  /**
   * @description: 开启弹窗
   * @return {*}
   */
  const showModal = () => {
    setIsModalOpen(true);
  };

  /**
   * @description: 点击弹窗中的ok
   * @return {*}
   */
  const handleOk = () => {
    setIsModalOpen(false);
  };

  /**
   * @description: 点击弹窗中的canel
   * @return {*}
   */
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // 弹窗的标题
  const [modalTitle, setModalTitle] = useState("");

  /**
   * @description: 设置弹窗标题
   * @param {*} title 标题名称
   * @return {*}
   */
  const changeModalTitle = (title) => {
    setModalTitle(title);
  };

  // 选中的列表
  const [orderList, setOrderList] = useState({});

  return (
    <>
      <EnterAmount isModalOpen={isModalOpen} showModal={showModal} modalTitle={modalTitle} handleOk={handleOk} handleCancel={handleCancel} />
      <div style={{ padding: 24, height: "100vh", display: "flex", flexDirection: "column" }}>
        <div className='header'>
          {/* 店标、店名、店铺id */}
          <div className='header-info'>
            <div className='header-info-content'>
              <img src={storeInfo.restaurantInfos[0].logoUrl} className='header-info-img' />
              <div style={{ marginLeft: 8 }}>
                <div className='header-info-title'>{storeInfo.restaurantInfos[0].name}</div>
                <div className='header-info-essay'>StoreId:#{storeInfo.restaurantInfos[0].id}</div>
              </div>
            </div>
            <div className='header-info-time'>10 - 30 min</div>
          </div>

          <div className='header-btnGroup'>
            <div>
              <Button type='primary' className='header-btnGroup-btn'>
                Viod
              </Button>
              <Button
                type='primary'
                className='header-btnGroup-btn'
                onClick={() => {
                  showModal();
                  changeModalTitle("Extra Charge");
                }}>
                Extra Charge
              </Button>
              <Button
                type='primary'
                className='header-btnGroup-btn'
                onClick={() => {
                  showModal();
                  changeModalTitle("Refund");
                }}>
                Refund
              </Button>
            </div>
            <div style={{ marginTop: 10 }}>
              <Button
                type='primary'
                className='header-btnGroup-btn'
                onClick={() => {
                  showModal();
                  changeModalTitle("Add Tip");
                }}>
                Add Tip
              </Button>
              <Button type='primary' className='header-btnGroup-btn'>
                Print
              </Button>
              <Link to='/pos-mode'>
                <Button type='primary' className='header-btnGroup-btn'>
                  POS Mode
                </Button>
              </Link>
            </div>
          </div>

          <div className='header-setup'>
            <div className='header-setup-swtich'>
              <div>
                Active
                <Switch size='small' className='header-setup-swtich-margin' />
              </div>
              <div style={{ marginLeft: 10 }}>
                TapThru Drvie
                <Switch size='small' className='header-setup-swtich-margin' />
              </div>
            </div>

            <div className='header-setup-contact'>Contact us at {changePhoneNumber(storeInfo.phoneNumber)}</div>

            <div>
              <Button className='header-setup-btn'>Refresh</Button>
              <Button className='header-setup-btn' style={{ marginLeft: 8 }}>
                Online Report
              </Button>
            </div>
          </div>
        </div>

        <div className='order'>
          <div className='order-title'>
            Found {orders.length} Order(s)
            <div className='order-list'>
              {orders.map((item, index) => (
                <Button
                  type={orderList === item && "primary"}
                  key={index.toString()}
                  className='order-list-item'
                  onClick={() => {
                    setOrderList(JSON.parse(JSON.stringify(item)));
                  }}>
                  <div className='order-list-item-title'>{item.customer.name}</div>
                  <div className='order-list-item-type'>
                    <div>{item.orderType}</div>
                    <div>#{item.orderId}</div>
                  </div>
                  <div className='order-list-item-type'>
                    <div>{item.customer.phoneNumber}</div>
                    <div>{item.total.toFixed(2)}</div>
                  </div>
                </Button>
              ))}
            </div>
          </div>
          {JSON.stringify(orderList) === "{}" ? (
            <div className='order-details'>No order selected</div>
          ) : (
            <div className='order-details-item'>
              <div className='order-details-item-box'>
                <div className='order-details-item-titleBox'>
                  <div>{orderList.customer.name}</div>
                  <div className='order-details-item-box-option'>{orderList.orderType}</div>
                  <div className='order-details-item-box-option'>{orderList.orderId}</div>
                </div>
                <div style={{ fontSize: 20 }}>{`${orderList.orderDateTime.split("T")[0]} ${
                  orderList.orderDateTime.split("T")[1].split("Z")[0]
                }`}</div>
              </div>
              <div className='order-details-item-box' style={{ marginTop: 10 }}>
                <div style={{ fontSize: 16 }}>{`(${orderList.customer.phoneNumber.slice(0, 3)})${orderList.customer.phoneNumber.slice(
                  3,
                  6
                )}-${orderList.customer.phoneNumber.slice(6, 10)}`}</div>
                <div style={{ fontSize: 16 }}>
                  Payment:<span style={{ fontWeight: "bold" }}>Pre-Paid</span>
                </div>
              </div>
              <div className='order-details-item-comment'>{orderList.specialInstructions}</div>
              <div className='order-details-item-content'>
                {orderList.orderItems.map((item, index) => (
                  <div key={index.toString()} className='order-details-item-content-box'>
                    <div style={{ width: "20%" }}>{item.quantity}</div>
                    <div style={{ width: "60%" }}>{item.name}</div>
                    <div style={{ width: "20%", textAlign: "right" }}>${item.price.toFixed(2)}</div>
                  </div>
                ))}
              </div>
              <div className='order-details-item-box'>
                <div>
                  <div>Subtotal:0.00</div>
                  <div>Tax:0.00</div>
                  <div>Tips:0.00</div>
                </div>
                <div>
                  <div>Total</div>
                  <div>0.00</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
