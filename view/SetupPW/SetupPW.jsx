/*
 * @Author: tapthruyeyuyan 102268434+tapthruyeyuyan@users.noreply.github.com
 * @Date: 2022-10-31 08:48:34
 * @LastEditors: tapthruyeyuyan 102268434+tapthruyeyuyan@users.noreply.github.com
 * @LastEditTime: 2022-11-01 11:29:33
 * @FilePath: \TapThruWeb-POS\view\SetupPW\SetupPW.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Button } from "antd";
import React from "react";
import { Add, Quit } from "../../component/Svg/Svg";
import "./SetupPW.less";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { changeUserInfo } from "../../src/store/storeInfoSlice";

const SetupPW = () => {
  const mock = [
    {
      id: "c0f7813b-e043-44e0-b190-735b9056c986",
      firstName: null,
      lastName: null,
      userName: "Admin",
    },
    {
      id: "b88ef24f-79ad-4f88-b08b-c3acc6aa48a4",
      firstName: "Kevin",
      lastName: "Zhang",
      userName: "Zhang",
    },
    {
      id: "c36a315c-e2f3-410e-b363-590f72333c5c",
      firstName: "1",
      lastName: "1",
      userName: "1",
    },
    {
      id: "ce54c22f-d9fe-4c19-8b85-77788b63cc4c",
      firstName: "John",
      lastName: "Doe",
      userName: "213233",
    },
  ];

  const userInfo = useSelector((state) => state.setupPW);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);

  const newData = {
    id: userInfo.length,
    userName: "newData",
    address: "",
    telephone: "",
    password: "",
    address2: "",
    grade: "",
    city: "",
    firstName: "",
    state: "",
    lastName: "",
    zip: "",
    position: "",
    hourlyRate: "",
    driver: false,
  };

  const navigate = useNavigate();

  return (
    <div className="setupPW">
      <div className="setupPW-content">
        <div className="setupPW-content-item">
          {JSON.stringify(userInfo) !== "[]" &&
            userInfo.map((item, index) => (
              <Button
                key={item.id}
                className="setupPW-content-btn"
                onClick={() => {
                  navigate(`/user-info/${index}`);
                }}
              >
                {item.userName}
              </Button>
            ))}
        </div>
      </div>
      <div className="setupPW-btn">
        <Button
          className="setupPW-btn-item"
          onClick={() => {
            dispatch(changeUserInfo({ type: "add", data: newData }));
          }}
        >
          <Add />
          <div style={{ marginLeft: 8 }}>Assign Staff</div>
        </Button>
        <Button
          className="setupPW-btn-item"
          style={{ border: "1px solid #FE4A1B", color: "#FE4A1B" }}
          onClick={() => {
            navigate(-1);
          }}
        >
          <Quit />
          <div style={{ marginLeft: 8 }}>Quit</div>
        </Button>
      </div>
    </div>
  );
};

export default SetupPW;
