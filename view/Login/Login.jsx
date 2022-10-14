import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Input, Checkbox, Button } from "antd";
import React, { useEffect, useState } from "react";
import "./Login.less";
import { useDispatch, useSelector } from "react-redux";
import { getStoreInfo } from "../../src/store/storeInfoSlice";
import { owner } from "../../Mock";

const Login = () => {
  // 用户名
  const [userName, setUserName] = useState("");
  // 密码
  const [password, setPassword] = useState("");
  // 单选框
  const [check, setCheck] = useState(false);
  // 登录保存
  const dispatch = useDispatch();
  /**
   * @description: 修改用户名或者密码框
   * @param {*} e 元素对象
   * @param {*} type  属于是什么框
   * @return {*}
   */
  const changeText = (e, type) => {
    switch (type) {
      case "userName":
        setUserName(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
      default:
        break;
    }
  };

  /**
   * @description: 修改是否选中
   * @param {*} e 元素对象
   * @return {*}
   */
  const changeChecked = (e) => {
    setCheck(e.target.checked);
  };

  /**
   * @description: 提交
   * @return {*}
   */
  const submit = () => {
    dispatch(getStoreInfo(owner));
  };

  return (
    <div style={{ height: "100vh", display: "flex" }}>
      <div className='content'>
        <div className='logo'>
          <img src='src/assets/logo.png' className='logo-img' />
          <div className='logo-title'>TAPTHRU</div>
          <div className='logo-essay' style={{ marginTop: 3 }}>
            Ordering System
          </div>
          <div className='logo-essay'>Username</div>
        </div>

        <div className='content-input-box'>
          <span>账号:</span>
          <Input placeholder='请输入您的账号' className='content-input' onChange={(e) => changeText(e, "userName")} value={userName} />
        </div>
        <div className='content-input-box' style={{ marginTop: 10 }}>
          <span>密码:</span>
          <Input.Password
            placeholder='请输入您的密码'
            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            className='content-input'
            onChange={(e) => changeText(e, "password")}
            value={password}
          />
        </div>
        <div className='content-check'>
          <Checkbox defaultChecked={check} onChange={(e) => changeChecked(e)}>
            Remember password
          </Checkbox>
          <Button type='text' className='content-forget'>
            Forget Password
          </Button>
        </div>
        <Button type='primary' className='content-login' onClick={() => submit()}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
