import React, { useEffect, useRef, useState } from "react";
import { Button, Popover, Modal, Calendar, Col, Radio, Row, Select, message, Input } from "antd";
import "../OrderPage.less";

const SetTime = ({ setSetTimeShow, setTimeShow, changeOrderTime }) => {
  let newDate = new Date();

  const [date, setDate] = useState(
    `${newDate.getFullYear()}-${newDate.getMonth() + 1 < 10 ? `0${newDate.getMonth() + 1}` : newDate.getMonth() + 1}-${
      newDate.getDate() < 10 ? `0${newDate.getDate()}` : newDate.getDate()
    }`
  );

  const onPanelChange = (value) => {
    setDate(value.format("YYYY-MM-DD"));
  };

  const [hour, setHour] = useState("00");

  const [min, setMin] = useState("00");

  return (
    <Modal
      title='Set Time'
      open={setTimeShow}
      onOk={() => setSetTimeShow(false)}
      onCancel={() => setSetTimeShow(false)}
      centered
      footer={[
        <div style={{ display: "flex", flex: 1, justifyContent: "space-between" }} key={"box"}>
          <div>
            <Button
              type='primary'
              onClick={() => {
                let date = new Date();
                setHour(date.getHours());
                setMin(date.getMinutes());
              }}>
              Now Hour Minute
            </Button>
            <Button
              type='primary'
              onClick={() => {
                setHour("00");
                setMin("00");
              }}>
              Clear
            </Button>
          </div>
          <div>
            <Button
              type='primary'
              onClick={() => {
                changeOrderTime(`${date} ${hour}:${min}`);
                setSetTimeShow(false);
              }}>
              Save
            </Button>
            <Button
              type='primary'
              onClick={() => {
                setSetTimeShow(false);
              }}>
              Quit
            </Button>
          </div>
        </div>,
      ]}>
      <Calendar
        fullscreen={false}
        headerRender={({ value, type, onChange, onTypeChange }) => {
          const start = 0;
          const end = 12;
          const monthOptions = [];
          const current = value.clone();
          const localeData = value.localeData();
          const months = [];
          for (let i = 0; i < 12; i++) {
            current.month(i);
            months.push(localeData.monthsShort(current));
          }
          for (let i = start; i < end; i++) {
            monthOptions.push(
              <Select.Option key={`month-${i}`} value={i} className='month-item'>
                {months[i]}
              </Select.Option>
            );
          }
          const year = value.year();
          const month = value.month();
          const options = [];
          for (let i = year - 10; i < year + 10; i += 1) {
            options.push(
              <Select.Option key={`year-${i}`} value={i} className='year-item'>
                {i}
              </Select.Option>
            );
          }

          const defHour = 23;
          const hourOption = [];
          for (let i = 0; i <= defHour; i += 1) {
            hourOption.push(
              <Select.Option key={`hour-${i}`} value={i} className='year-item'>
                {i < 10 ? `0${i}` : i}
              </Select.Option>
            );
          }

          const changeNewHour = (value) => {
            setHour(value);
          };

          const defMin = 59;
          const minOption = [];
          for (let i = 0; i <= defMin; i++) {
            minOption.push(
              <Select.Option key={`min-${i}`} value={i} className='year-item'>
                {i < 10 ? `0${i}` : i}
              </Select.Option>
            );
          }

          const changeMin = (value) => {
            setMin(value);
          };

          return (
            <div
              style={{
                paddingBottom: 8,
              }}>
              <Row gutter={8} justify='space-around' align='middle'>
                <Col>
                  <Radio.Group size='small' onChange={(e) => onTypeChange(e.target.value)} value={type}>
                    <Radio.Button value='month'>Month</Radio.Button>
                    <Radio.Button value='year'>Year</Radio.Button>
                  </Radio.Group>
                </Col>
                <Col>
                  <Select
                    size='small'
                    dropdownMatchSelectWidth={false}
                    className='my-year-select'
                    value={year}
                    onChange={(newYear) => {
                      const now = value.clone().year(newYear);
                      onChange(now);
                    }}>
                    {options}
                  </Select>
                </Col>
                <Col>
                  <Select
                    size='small'
                    dropdownMatchSelectWidth={false}
                    value={month}
                    onChange={(newMonth) => {
                      const now = value.clone().month(newMonth);
                      onChange(now);
                    }}>
                    {monthOptions}
                  </Select>
                </Col>
                <Col>设置日期</Col>
                <Col>
                  <Select
                    size='small'
                    dropdownMatchSelectWidth={false}
                    value={hour}
                    onChange={(newHour) => {
                      changeNewHour(newHour);
                    }}>
                    {hourOption}
                  </Select>
                </Col>
                <Col>
                  <Select
                    size='small'
                    dropdownMatchSelectWidth={false}
                    value={min}
                    onChange={(newMin) => {
                      changeMin(newMin);
                    }}>
                    {minOption}
                  </Select>
                </Col>
              </Row>
            </div>
          );
        }}
        // onPanelChange={(value, mode) => onPanelChange(value, mode)}
        onChange={(value) => {
          onPanelChange(value);
        }}
      />
    </Modal>
  );
};

export default SetTime;
