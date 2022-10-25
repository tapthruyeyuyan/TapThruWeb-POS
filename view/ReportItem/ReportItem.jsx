import { Button, Input } from "antd";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import "./ReportItem.less";
import { DailyReport, WeeklyReport, MonthlyReport, Up, Down, Coffee, Beer, DineIn, Printer, Quit, Split, List, Total } from "../../component/Svg/Svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ReportItem = () => {
  const parmas = useParams();
  const navigate = useNavigate();

  const [startDate, setStartDate] = useState(new Date());

  const [show, setShow] = useState(false);

  return (
    <div className='peportItem'>
      <div className='peportItem-left'>
        <div className='peportItem-left-btn-group'>
          <Button className='peportItem-left-btn' style={{ marginLeft: 0 }}>
            <DailyReport /> <div style={{ marginLeft: 8 }}> Daily report </div>
          </Button>
          <Button className='peportItem-left-btn'>
            <WeeklyReport /> <div style={{ marginLeft: 8 }}> Weekly report </div>
          </Button>
          <Button className='peportItem-left-btn'>
            <MonthlyReport /> <div style={{ marginLeft: 8 }}> Monthly report </div>
          </Button>
        </div>
        <div className='peportItem-left-input-group'>
          <div className='peportItem-left-input-box'>
            Start time:
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className='peportItem-left-input-datePicker' />
          </div>
          <div className='peportItem-left-input-box'>
            End time:
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className='peportItem-left-input-datePicker' />
          </div>
          {parmas.id !== "Commodity" && (
            <div className='peportItem-left-input-box'>
              By Employee:
              <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className='peportItem-left-input-datePicker' />
            </div>
          )}
        </div>
        <div className='peportItem-left-from'>
          {parmas.id !== "punch" ? (
            <div className='peportItem-left-from-box'>
              <div>Name</div>
              {parmas.id !== "Commodity" ? <div>Subtotal</div> : <div>Quantity</div>}
              {parmas.id !== "Commodity" ? <div>Tax</div> : <div>Price</div>}
              <div>Total</div>
              {parmas.id !== "Commodity" && <div>Count</div>}
            </div>
          ) : (
            <div className='peportItem-left-from-box'>
              <div>First Name</div>
              <div>Last Name</div>
              <div>Start Time</div>
              <div>End Time</div>
              <div>Total Time</div>
              <div>Wages/Hour</div>
              <div>Count</div>
            </div>
          )}
        </div>
        <div className='peportItem-left-list'></div>
      </div>

      <div className='peportItem-right'>
        <div>
          <Button className='peportItem-right-btn'>
            <Up color={"#0076fe"} />
            Last page
          </Button>
          <Button className='peportItem-right-btn'>
            <Down color={"#0076fe"} />
            Next page
          </Button>
        </div>
        {parmas.id !== "punch" && (
          <div>
            <Button className='peportItem-right-btn'>
              {parmas.id !== "Commodity" ? (
                <div className='peportItem-right-btn-box'>
                  <Coffee />
                  Lunch
                </div>
              ) : (
                <div className='peportItem-right-btn-box'>
                  <Split color={"#0076fe"} />
                  By Qty
                </div>
              )}
            </Button>
            <Button className='peportItem-right-btn'>
              {parmas.id !== "Commodity" ? (
                <div className='peportItem-right-btn-box'>
                  <Total />
                  By Total
                </div>
              ) : (
                <div className='peportItem-right-btn-box'>
                  <Beer />
                  By Total
                </div>
              )}
            </Button>
            <Button className='peportItem-right-btn'>
              {parmas.id !== "Commodity" ? (
                <div className='peportItem-right-btn-box'>
                  <DineIn color={"#0076fe"} />
                  All day
                </div>
              ) : (
                <div className='peportItem-right-btn-box'>
                  <List color={"#0076fe"} />
                  By Name
                </div>
              )}
            </Button>
          </div>
        )}

        <div>
          <Button className='peportItem-right-btn'>
            <Printer color={"#0076fe"} />
            Printer
          </Button>
          {parmas.id !== "Commodity" && parmas.id !== "punch" && (
            <Button className='peportItem-right-btn'>
              <Printer color={"#0076fe"} />
              Printer
            </Button>
          )}
        </div>

        <Button
          className='peportItem-right-btn'
          style={{ borderColor: "#FE4A1B", color: "#FE4A1B" }}
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

export default ReportItem;
