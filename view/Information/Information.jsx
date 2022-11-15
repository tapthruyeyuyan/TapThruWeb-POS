import { Button, Input, message } from "antd";
import React, { useState, useEffect } from "react";
import "./Information.less";
import { RecordTime, List } from "../../component/Svg/Svg";
import Keyboard from "../../component/Keyboard";
import { useNavigate, createSearchParams, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeInfomation } from "../../src/store/storeInfoSlice";

const Information = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const param = useParams();

  const information = useSelector((state) => state.infomation);

  const [phone, setPhone] = useState("");
  const [ext, setExt] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [location, setLocation] = useState("");
  const [remark, setRemark] = useState("");
  const [note, setNote] = useState("");

  // 选中的名字
  const [check, setCheck] = useState("phone");

  /**
   * @description: 判断是哪个
   * @return {*}
   */
  const checkInput = () => {
    if (check === "phone") {
      return setPhone;
    } else if (check === "ext") {
      return setExt;
    } else if (check === "address") {
      return setAddress;
    } else if (check === "city") {
      return setCity;
    } else if (check === "state") {
      return setState;
    } else if (check === "zip") {
      return setZip;
    } else if (check === "firstName") {
      return setFirstName;
    } else if (check === "lastName") {
      return setLastName;
    } else if (check === "location") {
      return setLocation;
    } else if (check === "remark") {
      return setRemark;
    } else if (check === "note") {
      return setNote;
    }
  };

  /**
   * @description: 提交
   * @return {*}
   */
  const submit = () => {
    if (phone !== "" && address !== "" && firstName !== "" && lastName !== "") {
      const params = { phone, ext, address, city, state, zip, firstName, lastName, location, remark, note };
      dispatch(
        changeInfomation({
          phone,
          ext,
          address,
          city,
          state,
          zip,
          firstName,
          lastName,
          location,
          remark,
          note,
        })
      );
      clearAll();
      navigate({ pathname: `/order-page/${param.type}`, search: `?${createSearchParams(params)}` });
    } else {
      message.error("电话号码,地址,姓名为必填项!");
    }
  };

  /**
   * @description: 清除表单内容
   * @return {*}
   */
  const clearAll = () => {
    setPhone("");
    setExt("");
    setAddress("");
    setCity("");
    setState("");
    setZip("");
    setFirstName("");
    setLastName("");
    setLocation("");
    setRemark("");
    setNote("");
  };

  /**
   * @description: 点击修改input
   * @param {*} item
   * @return {*}
   */
  const changeInput = (item) => {
    setPhone(item.phone);
    setExt(item.ext);
    setAddress(item.address);
    setCity(item.city);
    setState(item.state);
    setZip(item.zip);
    setFirstName(item.firstName);
    setLastName(item.lastName);
    setLocation(item.location);
    setRemark(item.remark);
    setNote(item.note);
  };

  return (
    <div className='information'>
      <div className='information-header'>
        <div className='information-header-left'>
          <div>
            <Button className='information-header-left-btn'>
              <RecordTime />
              <div style={{ marginLeft: 8 }}>Record</div>
            </Button>
            <Button className='information-header-left-btn' style={{ marginLeft: 10 }}>
              <List />
              <div style={{ marginLeft: 8 }}>Customer history</div>
            </Button>
          </div>
          <div className='information-header-inputBox'>
            <div className='information-header-inputBox-item'>
              <div className='information-header-inputBox-title'>Phone:</div>
              <Input
                className='information-header-inputBox-input'
                value={phone}
                onClick={() => {
                  setCheck("phone");
                }}
              />
            </div>
            <div className='information-header-inputBox-item' style={{ marginLeft: 30 }}>
              <div className='information-header-inputBox-title'>Ext:</div>
              <Input
                className='information-header-inputBox-input'
                value={ext}
                onClick={() => {
                  setCheck("ext");
                }}
              />
            </div>
          </div>

          <div className='information-header-inputBox'>
            <div className='information-header-inputBox-item'>
              <div className='information-header-inputBox-title'>Address:</div>
              <Input
                className='information-header-inputBox-input'
                value={address}
                onClick={() => {
                  setCheck("address");
                }}
              />
            </div>
          </div>

          <div className='information-header-inputBox'>
            <div className='information-header-inputBox-item'>
              <div className='information-header-inputBox-title'>City:</div>
              <Input
                className='information-header-inputBox-input'
                value={city}
                onClick={() => {
                  setCheck("city");
                }}
              />
            </div>
            <div className='information-header-inputBox-item' style={{ marginLeft: 30 }}>
              <div className='information-header-inputBox-title-two'>State:</div>
              <Input
                className='information-header-inputBox-input'
                value={state}
                onClick={() => {
                  setCheck("state");
                }}
              />
              <div className='information-header-inputBox-title-two' style={{ marginLeft: 10 }}>
                Zip:
              </div>
              <Input
                className='information-header-inputBox-input'
                value={zip}
                onClick={() => {
                  setCheck("zip");
                }}
              />
            </div>
          </div>

          <div className='information-header-inputBox'>
            <div className='information-header-inputBox-item'>
              <div className='information-header-inputBox-title'>First Name:</div>
              <Input
                className='information-header-inputBox-input'
                value={firstName}
                onClick={() => {
                  setCheck("firstName");
                }}
              />
            </div>
            <div className='information-header-inputBox-item' style={{ marginLeft: 30 }}>
              <div className='information-header-inputBox-title'>Last Name:</div>
              <Input
                className='information-header-inputBox-input'
                value={lastName}
                onClick={() => {
                  setCheck("lastName");
                }}
              />
            </div>
          </div>

          <div className='information-header-inputBox'>
            <div className='information-header-inputBox-item'>
              <div className='information-header-inputBox-title'>Location:</div>
              <Input
                className='information-header-inputBox-input'
                value={location}
                onClick={() => {
                  setCheck("location");
                }}
              />
            </div>
            <div className='information-header-inputBox-item' style={{ marginLeft: 30 }}>
              <div className='information-header-inputBox-title'>Remark:</div>
              <Input
                className='information-header-inputBox-input'
                value={remark}
                onClick={() => {
                  setCheck("remark");
                }}
              />
            </div>
          </div>

          <div className='information-header-inputBox'>
            <div className='information-header-inputBox-item'>
              <div className='information-header-inputBox-title'>Note:</div>
              <Input
                className='information-header-inputBox-input'
                value={note}
                onClick={() => {
                  setCheck("note");
                }}
              />
            </div>
          </div>
          <div className='information-header-left-bottom'>
            <Button
              className='information-header-left-btn'
              onClick={() => {
                clearAll();
              }}>
              Clear All
            </Button>
            <div>
              <Button
                type='primary'
                className='information-header-left-btn'
                style={{ color: "#fff" }}
                onClick={() => {
                  submit();
                }}>
                Sure
              </Button>
              <Button
                className='information-header-left-btn'
                style={{ marginLeft: 10 }}
                onClick={() => {
                  navigate(-1);
                }}>
                Cancle
              </Button>
            </div>
          </div>
        </div>
        <div className='information-header-right'>
          <div className='information-header-right-box'>
            {information?.map((item, index) => (
              <div
                className='information-header-right-box-item'
                key={index.toString()}
                onClick={() => {
                  changeInput(item);
                }}>
                <div className='information-header-right-box-item-text'>
                  <div>Name:</div>
                  <div>{item.firstName + item.lastName}</div>
                </div>
                <div className='information-header-right-box-item-text'>
                  <div>Telephone:</div>
                  <div>{item.phone}</div>
                </div>
                <div className='information-header-right-box-item-text'>
                  <div>Address:</div>
                  <div>{item.address}</div>
                </div>
              </div>
            ))}
          </div>
          <div className='information-header-left-bottom'>
            <Button type='primary' className='information-header-right-btn' style={{ color: "#fff" }}>
              Up
            </Button>
            <Button className='information-header-right-btn' style={{ marginLeft: 20 }}>
              Down
            </Button>
          </div>
        </div>
      </div>
      <Keyboard changeText={checkInput()} />
    </div>
  );
};

export default Information;
