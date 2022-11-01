import { Button, Input, Radio } from "antd";
import React from "react";
import "./StoreInfomation.less";
import { useNavigate } from "react-router-dom";
import Keyboard from "../../component/Keyboard";
import { useState } from "react";
import { useEffect } from "react";

const StoreInfomation = () => {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [timeZone, setTimeZone] = useState("");
  const [telephone, setTelephone] = useState("");
  const [tax, setTax] = useState("");
  const [fax, setFax] = useState("");
  const [address, setAddresss] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [keyWords, setKeyWords] = useState("");

  const [checkInput, setCheckInput] = useState("");

  /**
   * @description: 修改input的值
   * @return {*}
   */
  const changeText = () => {
    if (checkInput === "name") {
      return setName;
    }
    if (checkInput === "url") {
      return setUrl;
    }
    if (checkInput === "timeZone") {
      return setTimeZone;
    }
    if (checkInput === "telephone") {
      return setTelephone;
    }
    if (checkInput === "tax") {
      return setTax;
    }
    if (checkInput === "fax") {
      return setFax;
    }
    if (checkInput === "address") {
      return setAddresss;
    }
    if (checkInput === "city") {
      return setCity;
    }
    if (checkInput === "state") {
      return setState;
    }
    if (checkInput === "zip") {
      return setZip;
    }
    if (checkInput === "keyWords") {
      return setKeyWords;
    }
  };

  return (
    <div className="storeInfomation">
      <div className="storeInfomation-list">
        <div className="storeInfomation-list-item">
          <div className="storeInfomation-list-text">Name:</div>
          <Input
            value={name}
            onClick={() => {
              setCheckInput("name");
            }}
            className="storeInfomation-list-input"
          />
        </div>
        <div className="storeInfomation-list-item">
          <div className="storeInfomation-list-text">URL:</div>
          <Input
            value={url}
            onClick={() => {
              setCheckInput("url");
            }}
            className="storeInfomation-list-input"
          />
        </div>
        <div className="storeInfomation-list-item">
          <div className="storeInfomation-list-text">Time Zone:</div>
          <Input
            value={timeZone}
            onClick={() => {
              setCheckInput("timeZone");
            }}
            className="storeInfomation-list-input"
          />
        </div>
      </div>
      <div className="storeInfomation-list">
        <div className="storeInfomation-list-item">
          <div className="storeInfomation-list-text">Telephone:</div>
          <Input
            value={telephone}
            onClick={() => {
              setCheckInput("telephone");
            }}
            className="storeInfomation-list-input"
          />
        </div>
        <div className="storeInfomation-list-item">
          <div className="storeInfomation-list-text">Tax:</div>
          <Input
            value={tax}
            onClick={() => {
              setCheckInput("tax");
            }}
            className="storeInfomation-list-input"
          />
        </div>
        <div className="storeInfomation-list-item">
          <div className="storeInfomation-list-text">Show Delivery:</div>
          <Radio onChange={onChange} />
        </div>
      </div>
      <div className="storeInfomation-list">
        <div className="storeInfomation-list-item">
          <div className="storeInfomation-list-text">Fax:</div>
          <Input
            value={fax}
            onClick={() => {
              setCheckInput("fax");
            }}
            className="storeInfomation-list-input"
          />
        </div>
        <div className="storeInfomation-list-item">
          <div className="storeInfomation-list-text">Address:</div>
          <Input
            value={address}
            onClick={() => {
              setCheckInput("address");
            }}
            className="storeInfomation-list-input"
          />
        </div>
        <div className="storeInfomation-list-item"></div>
      </div>
      <div className="storeInfomation-list">
        <div className="storeInfomation-list-item">
          <div className="storeInfomation-list-text">City:</div>
          <Input
            value={city}
            onClick={() => {
              setCheckInput("city");
            }}
            className="storeInfomation-list-input"
          />
        </div>
        <div className="storeInfomation-list-item">
          <div className="storeInfomation-list-text">State:</div>
          <Input
            value={state}
            onClick={() => {
              setCheckInput("state");
            }}
            className="storeInfomation-list-input"
          />
        </div>
        <div className="storeInfomation-list-item">
          <div className="storeInfomation-list-text">Zip:</div>
          <Input
            value={zip}
            onClick={() => {
              setCheckInput("zip");
            }}
            className="storeInfomation-list-input"
          />
        </div>
      </div>
      <div className="storeInfomation-list">
        <div className="storeInfomation-list-item" style={{ flex: 2 }}>
          <div className="storeInfomation-list-text">Key words:</div>
          <Input
            value={keyWords}
            onClick={() => {
              setCheckInput("keyWords");
            }}
            className="storeInfomation-list-input"
          />
        </div>

        <div className="storeInfomation-list-item">
          <div className="storeInfomation-list-item">
            <Button className="storeInfomation-list-btn">Sure</Button>
            <Button
              className="storeInfomation-list-btn"
              style={{
                marginLeft: 10,
                border: "1px solid #FE5100",
                color: "#FE5100",
              }}
              onClick={() => {
                navigate(-1);
              }}
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
      <div style={{ padding: 24 }}>
        <Keyboard changeText={changeText()} />
      </div>
    </div>
  );
};

export default StoreInfomation;
