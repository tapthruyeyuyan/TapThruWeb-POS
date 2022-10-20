import React, { useEffect, useRef, useState } from "react";
import "./Table.less";
import { Button, Input, Modal } from "antd";
import { Quit, Save } from "../../component/Svg/Svg";
import TableItem from "./component/TableItem";
import { useNavigate, useParams } from "react-router";
import Keyborder from "../../component/Keyboard";

const Table = () => {
  const box = useRef(null);
  const navigate = useNavigate();
  const parmas = useParams();
  const [modalTitle, setModalTitle] = useState("");
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Modals modalTitle={modalTitle} modalShow={modalShow} setModalShow={setModalShow} />
      <div className='table'>
        <div className='table-flex'>
          <div className='table-left'>
            <div className='table-left-top'>
              <Button className='table-left-top-btn' style={{ marginLeft: 0 }}>
                Group A
              </Button>
              <Button className='table-left-top-btn'>Group B</Button>
              <Button className='table-left-top-btn'>Group C</Button>
            </div>
            <div className='table-left-content' ref={box}>
              <TableItem box={box} parmas={parmas.name} />
            </div>
            <div className='table-left-bottom'>
              <Button
                className='table-left-bottom-btn'
                onClick={() => {
                  setModalTitle("Edit Group name");
                  setModalShow(true);
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
                style={{ borderColor: parmas.name === "buffet" && "#FE4A1B", color: parmas.name === "buffet" && "#FE4A1B" }}
                onClick={() => {
                  if (parmas.name === "buffet") {
                    navigate(-1);
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
                <Button className='table-right-btn' style={{ marginTop: 32 }}>
                  Add a dining table
                </Button>
                <Button className='table-right-btn'>Delete dining table</Button>
                <Button className='table-right-btn'>Add area</Button>
                <Button className='table-right-btn'>Delete area</Button>
              </div>
              <div className='table-right-box'>
                <Button className='table-right-btn table-right-btn-save' type='primary'>
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

const Modals = ({ modalTitle, modalShow, setModalShow }) => {
  return (
    <Modal
      title={modalTitle}
      open={modalShow}
      onOk={() => {
        setModalShow(false);
      }}
      onCancel={() => {
        setModalShow(false);
      }}
      style={{ minWidth: 700 }}>
      <div>
        <Input />
        <Keyborder />
      </div>
    </Modal>
  );
};

export default Table;
