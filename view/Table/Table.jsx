/*
 * @Author: tapthruyeyuyan 102268434+tapthruyeyuyan@users.noreply.github.com
 * @Date: 2022-10-31 08:48:34
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-11-15 15:41:31
 * @FilePath: \TapThruWeb-POS\view\Table\Table.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useRef, useState } from "react";
import "./Table.less";
import { Button, Input, Modal } from "antd";
import { Quit, Save } from "../../component/Svg/Svg";
import TableItem from "./component/TableItem";
import { useNavigate, createSearchParams, useParams } from "react-router-dom";
import Keyborder from "../../component/Keyboard";
import { useDispatch, useSelector } from "react-redux";
import { changeTable } from "../../src/store/storeInfoSlice";

const Table = () => {
  const box = useRef(null);
  const navigate = useNavigate();
  const parmas = useParams();
  const [modalTitle, setModalTitle] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const dispatch = useDispatch();

  const table = useSelector((state) => state.table);

  /**
   * @description: 不保存暂时数据
   * @return {*}
   */
  const [tableData, setTableData] = useState([]);

  /**
   * @description: 进入页面拿到默认值
   * @return {*}
   */
  useEffect(() => {
    setTableData(JSON.parse(JSON.stringify(table)));
  }, []);

  // 大类下标
  const [groupIndex, setGroupIndex] = useState(table.length >= 1 && 0);

  // 桌子下标
  const [tableIndex, setTableIndex] = useState();

  // 桌子id
  const [tableId, setTableId] = useState();

  /**
   * @description: 删除全部桌子
   * @return {*}
   */
  const deleteAllTable = () => {
    let temp = tableData;
    temp[groupIndex].groupItem = [];
    setTableData(JSON.parse(JSON.stringify(temp)));
  };

  /**
   * @description: 添加新桌子
   * @return {*}
   */
  const addTable = () => {
    let temp = tableData;
    temp[groupIndex].groupItem.push({
      id: `${temp[groupIndex].id}-${temp[groupIndex].groupItem.length}`,
      name: "new",
      x: 0,
      y: 0,
    });
    setTableData(JSON.parse(JSON.stringify(temp)));
  };

  /**
   * @description: 删除单张桌子
   * @return {*}
   */
  const deleteTable = () => {
    let temp = tableData;
    if (tableIndex !== undefined) {
      temp[groupIndex].groupItem.splice(tableIndex, 1);
      setTableData(JSON.parse(JSON.stringify(temp)));
    }
  };

  /**
   * @description: 添加大类
   * @return {*}
   */
  const addArea = () => {
    let temp = tableData;
    temp.push({
      id: temp.length,
      groupName: "new Group",
      groupItem: [],
    });
    setTableData(JSON.parse(JSON.stringify(temp)));
  };

  /**
   * @description: 删除大类
   * @return {*}
   */
  const deleteArea = () => {
    let temp = tableData;
    temp.splice(groupIndex, 1);
    console.log(temp);
    setTableData(JSON.parse(JSON.stringify(temp)));
    if (groupIndex !== 0) {
      setGroupIndex((prev) => (prev -= 1));
    }
  };

  /**
   * @description: 改变桌子的位置
   * @param {*} item 桌子本体
   * @param {*} x 桌子的x轴
   * @param {*} y 桌子的y轴
   * @return {*}
   */
  const changeTablePosition = (index, x, y) => {
    let temp = tableData;
    temp[groupIndex].groupItem[index].x = x;
    temp[groupIndex].groupItem[index].y = y;
    setTableData(JSON.parse(JSON.stringify(temp)));
  };

  return (
    <>
      <Modals
        modalTitle={modalTitle}
        modalShow={modalShow}
        setModalShow={setModalShow}
        dispatch={dispatch}
        groupIndex={groupIndex}
        setTableData={setTableData}
        tableData={tableData}
        tableId={tableId}
        tableIndex={tableIndex}
      />
      <div className='table'>
        <div className='table-flex'>
          <div className='table-left'>
            <div className='table-left-top'>
              {tableData.map((item, index) => (
                <Button
                  className='table-left-top-btn'
                  style={{
                    marginLeft: index === 0 && 0,
                    background: groupIndex === index && "#0076fe",
                    color: groupIndex === index && "#FFF",
                  }}
                  key={item.id}
                  onClick={() => {
                    setGroupIndex(index);
                  }}>
                  {item.groupName}
                </Button>
              ))}
            </div>
            <div className='table-left-content' ref={box}>
              {groupIndex !== undefined &&
                tableData[groupIndex]?.groupItem.map((item, index) => (
                  <TableItem
                    box={box}
                    parmas={parmas.name}
                    key={item.id}
                    item={item}
                    index={index}
                    setTableId={setTableId}
                    tableId={tableId}
                    setTableIndex={setTableIndex}
                    changeTablePosition={changeTablePosition}
                  />
                ))}
            </div>
            <div className='table-left-bottom'>
              <Button
                className='table-left-bottom-btn'
                onClick={() => {
                  if (parmas.name === "setup") {
                    setModalTitle("Edit Group name");
                    setModalShow(true);
                  }
                  if (parmas.name === "buffet" || parmas.name === "dine-in") {
                    // console.log(tableId, tableIndex);
                    // let temp = { ...tableData[groupIndex], groupItem: tableData[groupIndex].groupItem[tableIndex] };
                    const param = {
                      groupId: tableData[groupIndex].id,
                      groupName: tableData[groupIndex].groupName,
                      groupItem: JSON.stringify(tableData[groupIndex].groupItem[tableIndex]),
                    };
                    navigate({ pathname: `/order-page/${parmas.name}`, search: `?${createSearchParams(param)}` });
                  }
                }}>
                {parmas.name === "setup" ? <div>Edit Group name</div> : <div>Assing Table</div>}
              </Button>
              <Button
                className='table-left-bottom-btn'
                onClick={() => {
                  setModalTitle("Edit table name");
                  setModalShow(true);
                }}>
                {parmas.name === "setup" ? <div>Edit table name</div> : <div>Releasce Table</div>}
              </Button>
              <Button
                className='table-left-bottom-btn'
                style={{
                  borderColor: (parmas.name === "buffet" || parmas.name === "dine-in") && "#FE4A1B",
                  color: (parmas.name === "buffet" || parmas.name === "dine-in") && "#FE4A1B",
                }}
                onClick={() => {
                  if (parmas.name === "buffet" || parmas.name === "dine-in") {
                    navigate(-1);
                  }
                  if (parmas.name === "setup") {
                    deleteAllTable();
                  }
                }}>
                {parmas.name === "setup" ? (
                  <div>Delete all tables</div>
                ) : (
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Quit /> Quit
                  </div>
                )}
              </Button>
            </div>
          </div>
          {parmas.name === "setup" && (
            <div className='table-right'>
              <div className='table-right-box'>
                Manage
                <Button
                  className='table-right-btn'
                  style={{ marginTop: 32 }}
                  onClick={() => {
                    addTable();
                  }}>
                  Add a dining table
                </Button>
                <Button
                  className='table-right-btn'
                  onClick={() => {
                    deleteTable();
                  }}>
                  Delete dining table
                </Button>
                <Button
                  className='table-right-btn'
                  onClick={() => {
                    addArea();
                  }}>
                  Add area
                </Button>
                <Button
                  className='table-right-btn'
                  onClick={() => {
                    deleteArea();
                  }}>
                  Delete area
                </Button>
              </div>
              <div className='table-right-box'>
                <Button
                  className='table-right-btn table-right-btn-save'
                  type='primary'
                  onClick={() => {
                    dispatch(changeTable(tableData));
                  }}>
                  <Save color={"#FFF"} />
                  <div style={{ marginLeft: 8 }}>Save</div>
                </Button>
                <Button
                  className='table-right-btn table-right-btn-quit'
                  onClick={() => {
                    navigate(-1);
                  }}>
                  <Quit />
                  <div style={{ marginLeft: 8 }}>Quit</div>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

const Modals = ({ modalTitle, modalShow, setModalShow, groupIndex, setTableData, tableData, tableId, tableIndex }) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (groupIndex !== undefined) {
      if (modalTitle === "Edit Group name") {
        setInputValue(tableData[groupIndex].groupName);
      }
      if (modalTitle === "Edit table name") {
        if (tableIndex !== undefined) {
          setInputValue(tableData[groupIndex].groupItem[tableIndex].name);
        }
      }
    }
  }, [groupIndex, modalTitle, tableIndex]);

  /**
   * @description: 修改组名
   * @return {*}
   */
  const editGroupName = () => {
    if (groupIndex !== undefined) {
      let temp = tableData;
      temp[groupIndex].groupName = inputValue;
      setTableData(JSON.parse(JSON.stringify(temp)));
    }
  };

  /**
   * @description: 修改子项名称
   * @return {*}
   */
  const editGroupItemName = () => {
    if (groupIndex !== undefined && groupIndex !== undefined) {
      let temp = tableData;
      temp[groupIndex].groupItem[tableIndex].name = inputValue;
      setTableData(JSON.parse(JSON.stringify(temp)));
    }
  };

  return (
    <Modal
      title={modalTitle}
      open={modalShow}
      onOk={() => {
        if (modalTitle === "Edit Group name") editGroupName();
        if (modalTitle === "Edit table name") editGroupItemName();

        setModalShow(false);
      }}
      onCancel={() => {
        setModalShow(false);
      }}
      style={{ minWidth: 700 }}>
      <div>
        <Input value={inputValue} />
        <Keyborder changeText={setInputValue} />
      </div>
    </Modal>
  );
};

export default Table;
