import React, { useState } from "react";
import "./Payment.less";
import KeyboardSmall from "../../component/Keyborder/KeyboardSmall";
import { Button, Modal } from "antd";
import { Close, Discount, Quit, RefuseBin, Tips } from "../../component/Svg/Svg";

const Payment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  return (
    <>
      <Modals isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} modalTitle={modalTitle} />
      <div className='payment'>
        <div className='payment-header'>
          <div className='payment-header-left'>
            <div className='payment-header-left-title'>
              <div className='payment-header-left-title-item'>Ticket #:</div>
              <div className='payment-header-left-title-item'>Balance</div>
              <div className='payment-header-left-title-item'>Types of</div>
              <div className='payment-header-left-title-item'>Discount</div>
              <div className='payment-header-left-title-item'>Tips</div>
            </div>
            <div className='payment-header-left-title payment-header-left-content'>
              <div className='payment-header-left-content-box'>
                <div className='payment-header-left-title-item' style={{ color: "#333" }}>
                  1
                </div>
                <div className='payment-header-left-title-item' style={{ color: "#333" }}></div>
                <div className='payment-header-left-title-item' style={{ color: "#333" }}></div>
                <div className='payment-header-left-title-item' style={{ color: "#333" }}>
                  0.00
                </div>
                <div className='payment-header-left-title-item' style={{ color: "#333" }}>
                  0.00
                </div>
              </div>
            </div>
          </div>
          <div className='payment-header-right'>
            <KeyboardSmall />
          </div>
        </div>

        <div className='payment-content'>
          <Button className='payment-content-btn'>$10.00</Button>
          <Button className='payment-content-btn'>$20.00</Button>
          <Button className='payment-content-btn'>$30.00</Button>
          <Button className='payment-content-btn'>$40.00</Button>
          <Button className='payment-content-btn'>$50.00</Button>
          <Button className='payment-content-btn'>$100.00</Button>
          <Button className='payment-content-btn' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Close />
            Cancle
          </Button>
          <Button className='payment-content-btn' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <RefuseBin color={"#0076fe"} />
            Delete
          </Button>
        </div>

        <div className='payment-content'>
          <Button className='payment-content-btn' style={{ color: "#0076fe" }}>
            Credit
          </Button>
          <Button className='payment-content-btn' style={{ color: "#0076fe" }}>
            Gift Certificate
          </Button>
          <Button className='payment-content-btn' style={{ color: "#0076fe" }}>
            Cash
          </Button>
          <Button className='payment-content-btn' style={{ color: "#0076fe" }}>
            Viod
          </Button>
          <Button className='payment-content-btn' style={{ color: "#0076fe" }}>
            Unvoid
          </Button>
          <Button className='payment-content-btn' style={{ color: "#0076fe" }}>
            Check
          </Button>
          <div className='payment-content-btn' style={{ border: "none" }} />
          <div className='payment-content-btn' style={{ border: "none" }} />
        </div>

        <div className='payment-footer'>
          <div style={{ display: "flex" }}>
            <Button
              className='payment-footer-btn'
              onClick={() => {
                setModalTitle("Discount");
                setIsModalOpen(true);
              }}>
              <Discount color={"#0076fe"} />
              <div>Discount</div>
            </Button>
            <Button
              className='payment-footer-btn'
              style={{ marginLeft: 10 }}
              onClick={() => {
                setModalTitle("Tips");
                setIsModalOpen(true);
              }}>
              <Tips color={"#0076fe"} />
              <div>Tips</div>
            </Button>
          </div>
          <Button className='payment-footer-btn' style={{ color: "#FE4A1B", borderColor: "#FE4A1B" }}>
            <Quit />
            <div>Quit</div>
          </Button>
        </div>
      </div>
    </>
  );
};

const Modals = ({ isModalOpen, setIsModalOpen, modalTitle }) => {
  return (
    <Modal title={modalTitle} open={isModalOpen} onOk={() => setIsModalOpen(false)} onCancel={() => setIsModalOpen(false)}>
      <KeyboardSmall />
    </Modal>
  );
};

export default Payment;
