import { CloseSquareOutlined } from "@ant-design/icons";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./PSOMode.less";
import {
  Rollback,
  Earth,
  Pedestrian,
  DineIn,
  BagFull,
  RefuseBin,
  Map,
  Car,
  QRcode,
  Timer,
  Landline,
  ElectricCar,
  UserSetting,
  List,
  Dollar,
  Wallet,
} from "../../component/Svg/Svg";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input } from "antd";

const POSMode = () => {
  const storeInfo = useSelector((state) => state.storeInfo);

  const { TextArea } = Input;

  const navigate = useNavigate();

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <div className='header-info home-header'>
        <div className='header-info-content'>
          <img src={storeInfo.restaurantInfos[0].logoUrl} className='header-info-img' />
          <div style={{ marginLeft: 8 }}>
            <div className='header-info-title'>{storeInfo.restaurantInfos[0].name}</div>
            <div className='header-info-essay'>StoreId:#{storeInfo.restaurantInfos[0].id}</div>
          </div>
        </div>
        <div className='header-info-logo'>
          <img src='src/assets/tapthrulogo.png' className='header-info-logo-img' />
          TAPTHRU
        </div>
        <Link to='/'>
          <Rollback />
        </Link>
      </div>

      <div className='home-language'>
        <div style={{ marginRight: 4, color: "#0076fe" }}>English</div> <Earth />
      </div>

      <div className='home'>
        <div className='home-box1'>
          <div className='home-content' style={{ marginTop: 0 }}>
            <Link to={"/order-page"}>
              <Button type='primary' className='home-content-btn'>
                <div>
                  <Pedestrian />
                </div>
                <div>Walk In</div>
              </Button>
            </Link>
            <Button type='primary' className='home-content-btn' style={{ margin: "0 20px" }}>
              <div>
                <DineIn />
              </div>
              <div>Dine In</div>
            </Button>
            <Link to={"/infomation"}>
              <Button type='primary' className='home-content-btn'>
                <div>
                  <BagFull />
                </div>
                <div>Pick Up</div>
              </Button>
            </Link>
          </div>

          <div className='home-content'>
            <Link to={"/infomation"}>
              <Button type='primary' className='home-content-btn'>
                <div>
                  <ElectricCar />
                </div>
                <div>Delivery</div>
              </Button>
            </Link>
            <Button
              type='primary'
              className='home-content-btn'
              style={{ margin: "0 20px" }}
              onClick={() => {
                navigate("/table/buffet");
              }}>
              <div>
                <UserSetting />
              </div>
              <div>Buffet</div>
            </Button>
            <Link to={"/order-list"}>
              <Button type='primary' className='home-content-btn'>
                <div>
                  <List color={"#fff"} />
                </div>
                <div>Order List</div>
              </Button>
            </Link>
          </div>

          <div className='home-content'>
            <Button type='primary' className='home-content-btn' style={{ width: "calc((((100% - 40px) / 3) * 2) + 20px)" }}>
              <div>
                <Dollar />
              </div>
              <div>Open Drawer</div>
            </Button>

            <Link to={"/order-list"}>
              <Button type='primary' className='home-content-btn' style={{ marginLeft: 20 }}>
                <div>
                  <Wallet color={"#FFF"} />
                </div>
                <div>Wallet</div>
              </Button>
            </Link>
          </div>

          <div className='home-box1-btnGroup'>
            <Button type='text' className='home-box1-btn'>
              <Map />
              <div style={{ marginLeft: 10 }}>Map</div>
            </Button>
            <Button type='text' className='home-box1-btn' style={{ marginLeft: 10 }}>
              <Car />
              <div style={{ marginLeft: 10 }}>Set driver</div>
            </Button>
          </div>
          <div className='home-box1-btnGroup'>
            <Button type='text' className='home-box1-btn'>
              <QRcode />
              <div style={{ marginLeft: 10 }}>QR code</div>
            </Button>
            <Button
              type='text'
              className='home-box1-btn'
              style={{ marginLeft: 10 }}
              onClick={() => {
                navigate("/clock-in");
              }}>
              <Timer />
              <div style={{ marginLeft: 10 }}>Clock In</div>
            </Button>
          </div>
        </div>

        <div className='home-box2'>
          Enter your pin #
          <div style={{ position: "relative", marginTop: 10 }}>
            <Input type='text' placeholder='Enter your pin#' className='home-box2-input' />
            <Button type='primary' className='home-box2-btn'>
              <RefuseBin />
            </Button>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div className='home-box2-keyboardGrop'>
              <Button type='primary' className='home-box2-keyboard'>
                1
              </Button>
              <Button type='primary' className='home-box2-keyboard'>
                2
              </Button>
              <Button type='primary' className='home-box2-keyboard'>
                3
              </Button>
            </div>
            <div className='home-box2-keyboardGrop home-box2-keyboardGrop-left'>
              <Button type='primary' className='home-box2-keyboard'>
                4
              </Button>
              <Button type='primary' className='home-box2-keyboard'>
                5
              </Button>
              <Button type='primary' className='home-box2-keyboard'>
                6
              </Button>
            </div>
            <div className='home-box2-keyboardGrop home-box2-keyboardGrop-left'>
              <Button type='primary' className='home-box2-keyboard'>
                7
              </Button>
              <Button type='primary' className='home-box2-keyboard'>
                8
              </Button>
              <Button type='primary' className='home-box2-keyboard'>
                9
              </Button>
            </div>

            <div className='home-box2-keyboardGrop home-box2-keyboardGrop-left'>
              <Button type='primary' className='home-box2-keyboard' style={{ flex: 1 }}>
                0
              </Button>
              <Button type='primary' className='home-box2-keyboard' style={{ flex: 3 }}>
                Save
              </Button>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", marginTop: 20 }}>
            <Landline />
            <div style={{ marginLeft: 10 }}>Call Log</div>
          </div>
          <TextArea
            // value={"123123"}
            // onChange={(e) => setValue(e.target.value)}
            placeholder='Controlled autosize'
            className='home-box2-textarea'
          />
        </div>

        <div className='home-box3'>
          <Button type='primary'>
            <div>Put away</div>
          </Button>
          <Button
            type='primary'
            className='home-box3-btn'
            onClick={() => {
              navigate("/table/setup");
            }}>
            <div>Setup Table</div>
          </Button>
          <Button
            type='primary'
            className='home-box3-btn'
            onClick={() => {
              navigate("/configure");
            }}>
            <div>Configure</div>
          </Button>
          <Button
            type='primary'
            className='home-box3-btn'
            onClick={() => {
              navigate("/setup-pw");
            }}>
            <div>Setup PW</div>
          </Button>
          <Button
            type='primary'
            className='home-box3-btn'
            onClick={() => {
              navigate("/report");
            }}>
            <div>Report</div>
          </Button>
        </div>
      </div>

      <div className='home-footer'>
        <div className='home-footer-left'>
          <div>Contact Us at (913)808-352</div>
          <div className='home-footer-version'>Free & Best POS(v1.0.0)</div>
        </div>
        <div className='home-footer-right'>
          <div>12:00PM</div>
          <div>2022-01-01</div>
        </div>
      </div>
    </div>
  );
};

export default POSMode;
