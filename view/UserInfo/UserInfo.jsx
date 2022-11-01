import { Button, Input, Radio } from "antd";
import React from "react";
import "./UserInfo.less";
import { useNavigate, useParams } from "react-router";
import Keyboard from "../../component/Keyboard";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeUserInfo } from "../../src/store/storeInfoSlice";

const UserInfo = () => {
  const navigate = useNavigate();

  const params = useParams();

  const dispatch = useDispatch();

  const { index } = params;

  const userInfo = useSelector((state) => state.setupPW);

  const [userName, setUserName] = useState(userInfo[index].userName);
  const [address, setAddress] = useState(userInfo[index].address);
  const [telephone, setTelephone] = useState(userInfo[index].telephone);
  const [password, setPassword] = useState(userInfo[index].password);
  const [address2, setAddress2] = useState(userInfo[index].address2);
  const [grade, setGrade] = useState(userInfo[index].grade);
  const [city, setCity] = useState(userInfo[index].city);
  const [firstName, setFirstName] = useState(userInfo[index].firstName);
  const [state, setState] = useState(userInfo[index].state);
  const [lastName, setLastName] = useState(userInfo[index].lastName);
  const [zip, setZip] = useState(userInfo[index].zip);
  const [position, setPosition] = useState(userInfo[index].position);
  const [hourlyRate, setHourlyRate] = useState(userInfo[index].hourlyRate);
  const [driver, setDriver] = useState(userInfo[index].driver);

  const [checkInput, setCheckInput] = useState("");

  const changeText = () => {
    if (checkInput === "userName") {
      return setUserName;
    }
    if (checkInput === "address") {
      return setAddress;
    }
    if (checkInput === "telephone") {
      return setTelephone;
    }
    if (checkInput === "password") {
      return setPassword;
    }
    if (checkInput === "address2") {
      return setAddress2;
    }
    if (checkInput === "grade") {
      return setGrade;
    }
    if (checkInput === "city") {
      return setCity;
    }
    if (checkInput === "firstName") {
      return setFirstName;
    }
    if (checkInput === "state") {
      return setState;
    }
    if (checkInput === "lastName") {
      return setLastName;
    }
    if (checkInput === "zip") {
      return setZip;
    }
    if (checkInput === "position") {
      return setPosition;
    }
    if (checkInput === "hourlyRate") {
      return setHourlyRate;
    }
  };

  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);

  const submit = () => {
    dispatch(
      changeUserInfo({
        type: "change",
        data: {
          userName,
          address,
          telephone,
          password,
          address2,
          grade,
          city,
          firstName,
          state,
          lastName,
          zip,
          position,
          hourlyRate,
          driver,
        },
        index,
      })
    );
  };

  return (
    <div className="userInfo">
      <div className="userInfo-list">
        <div className="userInfo-list-item">
          <div className="userInfo-list-text">Username:</div>
          <Input
            className="userInfo-list-input"
            value={userName}
            onClick={() => {
              setCheckInput("userName");
            }}
          />
        </div>
        <div className="userInfo-list-item">
          <div className="userInfo-list-text">Address:</div>
          <Input
            className="userInfo-list-input"
            value={address}
            onClick={() => {
              setCheckInput("address");
            }}
          />
        </div>
        <div className="userInfo-list-item">
          <div className="userInfo-list-text">Telephone:</div>
          <Input
            className="userInfo-list-input"
            value={telephone}
            onClick={() => {
              setCheckInput("telephone");
            }}
          />
        </div>
      </div>
      <div className="userInfo-list">
        <div className="userInfo-list-item">
          <div className="userInfo-list-text">Password:</div>
          <Input
            className="userInfo-list-input"
            value={password}
            onClick={() => {
              setCheckInput("password");
            }}
          />
        </div>
        <div className="userInfo-list-item">
          <div className="userInfo-list-text">Address2:</div>
          <Input
            className="userInfo-list-input"
            value={address2}
            onClick={() => {
              setCheckInput("address2");
            }}
          />
        </div>
        <div className="userInfo-list-item">
          <div className="userInfo-list-text">Driver:</div>
          <Radio
            onClick={() => {
              setDriver(!driver);
            }}
            checked={driver}
          />
        </div>
      </div>
      <div className="userInfo-list">
        <div className="userInfo-list-item">
          <div className="userInfo-list-text">Grade:</div>
          <Input
            className="userInfo-list-input"
            value={grade}
            onClick={() => {
              setCheckInput("grade");
            }}
          />
        </div>
        <div className="userInfo-list-item">
          <div className="userInfo-list-text">City:</div>
          <Input
            className="userInfo-list-input"
            value={city}
            onClick={() => {
              setCheckInput("city");
            }}
          />
        </div>
        <div className="userInfo-list-item"></div>
      </div>
      <div className="userInfo-list">
        <div className="userInfo-list-item">
          <div className="userInfo-list-text">First Name:</div>
          <Input
            className="userInfo-list-input"
            value={firstName}
            onClick={() => {
              setCheckInput("firstName");
            }}
          />
        </div>
        <div className="userInfo-list-item">
          <div className="userInfo-list-text">State:</div>
          <Input
            className="userInfo-list-input"
            value={state}
            onClick={() => {
              setCheckInput("state");
            }}
          />
        </div>
        <div className="userInfo-list-item"></div>
      </div>
      <div className="userInfo-list">
        <div className="userInfo-list-item">
          <div className="userInfo-list-text">Last Name:</div>
          <Input
            className="userInfo-list-input"
            value={lastName}
            onClick={() => {
              setCheckInput("lastName");
            }}
          />
        </div>
        <div className="userInfo-list-item">
          <div className="userInfo-list-text">Zip:</div>
          <Input
            className="userInfo-list-input"
            value={zip}
            onClick={() => {
              setCheckInput("zip");
            }}
          />
        </div>
        <div className="userInfo-list-item"></div>
      </div>
      <div className="userInfo-list">
        <div className="userInfo-list-item">
          <div className="userInfo-list-text">Position:</div>
          <Input
            className="userInfo-list-input"
            value={position}
            onClick={() => {
              setCheckInput("position");
            }}
          />
        </div>
        <div className="userInfo-list-item">
          <div className="userInfo-list-text">Hourly rate:</div>
          <Input
            className="userInfo-list-input"
            value={hourlyRate}
            onClick={() => {
              setCheckInput("hourlyRate");
            }}
          />
        </div>
        <div className="userInfo-list-item">
          <Button
            className="userInfo-list-btn"
            onClick={() => {
              submit();
            }}
          >
            Sure
          </Button>
          <Button
            className="userInfo-list-btn"
            style={{
              border: "1px solid #FE5100",
              color: "#FE5100",
              marginLeft: 16,
            }}
            onClick={() => {
              navigate(-1);
            }}
          >
            Cancel
          </Button>
        </div>
      </div>
      <div style={{ padding: 24 }}>
        <Keyboard changeText={changeText()} />
      </div>
    </div>
  );
};

export default UserInfo;
