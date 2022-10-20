import { Button } from "antd";
import React from "react";
import { ReportSvg, Split, UserId, Price, Quit } from "../../component/Svg/Svg";
import "./Report.less";
import { useNavigate } from "react-router";

const Report = () => {
  const navigate = useNavigate();
  return (
    <div className='report'>
      <div className='report-btn'>
        <Button
          className='report-big-btn'
          onClick={() => {
            navigate("/report-item/Report");
          }}>
          <ReportSvg />
          Report
        </Button>
        <Button
          className='report-small-btn'
          onClick={() => {
            navigate("/report-item/Commodity");
          }}>
          <Split color={"#0076fe"} />
          Commodity
        </Button>
      </div>
      <div className='report-btn' style={{ marginTop: 16 }}>
        <Button
          className='report-small-btn'
          style={{ marginLeft: 0 }}
          onClick={() => {
            navigate("/report-item/punch");
          }}>
          <UserId />
          Staff punch
        </Button>
        <Button
          className='report-small-btn'
          onClick={() => {
            navigate("/tip");
          }}>
          <Price color={"#0076fe"} />
          Tip
        </Button>
        <Button
          className='report-small-btn'
          style={{ border: "1px solid #FE4A1B", color: "#FE4A1B" }}
          onClick={() => {
            navigate(-1);
          }}>
          <Quit />
          Quit
        </Button>
      </div>
    </div>
  );
};

export default Report;
