import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "../../view/Home/Home";
import Login from "../../view/Login/Login";
import POSMode from "../../view/POS-Mode/POSMode";
import OrderPage from "../../view/Order/OrderPage";
import Information from "../../view/Information/Information";
import OrderList from "../../view/OrderList/OrderList";
import Payment from "../../view/Payment/Payment";
import Configure from "../../view/Configure/Configure";
import StoreInfomation from "../../view/StoreInfomation/StoreInfomation";
import OrderType from "../../view/OrderType/OrderType";
import SetupPW from "../../view/SetupPW/SetupPW";
import UserInfo from "../../view/UserInfo/UserInfo";
import Report from "../../view/Report/Report";
import ReportItem from "../../view/ReportItem/ReportItem";
import Tip from "../../view/Tip/Tip";
import ClockIn from "../../view/ClockIn/ClockIn";
import Buffet from "../../view/Buffet/Buffet";
import Table from "../../view/Table/Table";

const Routers = () => {
  const store = useSelector((state) => state.storeInfo);
  const location = useLocation();
  const { pathname } = location;

  /**
   * @description: 所有路由地址
   * @return {*}
   */
  const routes = [
    {
      path: "/",
      auth: true,
      component: <Home />,
    },
    {
      path: "/Login",
      auth: false,
      component: <Login />,
    },
    {
      path: "/pos-mode",
      auth: true,
      component: <POSMode />,
    },
    {
      path: "/order-page",
      auth: true,
      component: <OrderPage />,
    },
    {
      path: "/infomation",
      auth: true,
      component: <Information />,
    },
    {
      path: "/order-list",
      auth: true,
      component: <OrderList />,
    },
    {
      path: "/payment",
      auth: true,
      component: <Payment />,
    },
    {
      path: "/configure",
      auth: true,
      component: <Configure />,
    },
    {
      path: "/store-infomation",
      auth: true,
      component: <StoreInfomation />,
    },
    {
      path: "/order-type",
      auth: true,
      component: <OrderType />,
    },
    {
      path: "/setup-pw",
      auth: true,
      component: <SetupPW />,
    },
    {
      path: "/user-info",
      auth: true,
      component: <UserInfo />,
    },
    {
      path: "/report",
      auth: true,
      component: <Report />,
    },
    {
      path: "/report-item/:id",
      auth: true,
      component: <ReportItem />,
    },
    {
      path: "/tip",
      auth: true,
      component: <Tip />,
    },
    {
      path: "/clock-in",
      auth: true,
      component: <ClockIn />,
    },
    {
      path: "/buffet",
      auth: true,
      component: <Buffet />,
    },
    {
      path: "/table/:name",
      auth: true,
      component: <Table />,
    },
    {
      path: "*",
      auth: true,
      component: <div>404</div>,
    },
  ];

  //请求页面路径需要验证 && 没有登录 -> 跳转登录页 ， 后续考虑登录后是否自动跳转被拦截路径
  const RouteNav = (param) => {
    return param.map((item) => {
      return (
        <Route
          path={item.path}
          element={
            item.path === pathname && item.auth && JSON.stringify(store) === "{}" ? <Navigate to='/login' replace={true}></Navigate> : item.component
          }
          key={item.path}>
          {item?.child && RouteNav(item.child)}
        </Route>
      );
    });
  };
  return <Routes>{RouteNav(routes)}</Routes>;
};

export default Routers;
