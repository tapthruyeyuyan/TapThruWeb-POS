import React, { useState } from "react";
import { Button, Input, Modal } from "antd";
import "./EnterAmount.less";
import { Eliminate } from "../Svg/Svg";

const EnterAmount = ({ isModalOpen, handleOk, handleCancel, modalTitle }) => {
  return (
    <Modal title={modalTitle} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <p>Enter Amount:</p>
      <div className='enterAmountBox'>
        <Input />
        <Button type='primary' className='enterAmountBox-delete'>
          <Eliminate />
        </Button>
      </div>
      <div>
        <div className='enterAmountBox-keyboard'>
          <Button type='primary' className='enterAmountBox-keyboard-btn'>
            1
          </Button>
          <Button type='primary' className='enterAmountBox-keyboard-btn enterAmountBox-keyboard-btn-center'>
            2
          </Button>
          <Button type='primary' className='enterAmountBox-keyboard-btn'>
            3
          </Button>
        </div>
        <div className='enterAmountBox-keyboard'>
          <Button type='primary' className='enterAmountBox-keyboard-btn'>
            4
          </Button>
          <Button type='primary' className='enterAmountBox-keyboard-btn enterAmountBox-keyboard-btn-center'>
            5
          </Button>
          <Button type='primary' className='enterAmountBox-keyboard-btn'>
            6
          </Button>
        </div>
        <div className='enterAmountBox-keyboard'>
          <Button type='primary' className='enterAmountBox-keyboard-btn'>
            7
          </Button>
          <Button type='primary' className='enterAmountBox-keyboard-btn enterAmountBox-keyboard-btn-center'>
            8
          </Button>
          <Button type='primary' className='enterAmountBox-keyboard-btn'>
            9
          </Button>
        </div>
        <div className='enterAmountBox-keyboard'>
          <Button type='primary' className='enterAmountBox-keyboard-btn'>
            0
          </Button>
          <Button type='primary' className='enterAmountBox-keyboard-btn enterAmountBox-keyboard-btn-center'>
            .
          </Button>
          <Button type='primary' className='enterAmountBox-keyboard-btn'>
            Save
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default EnterAmount;
