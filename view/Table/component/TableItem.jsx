/*
 * @Author: tapthruyeyuyan 102268434+tapthruyeyuyan@users.noreply.github.com
 * @Date: 2022-10-31 08:48:34
 * @LastEditors: tapthruyeyuyan 102268434+tapthruyeyuyan@users.noreply.github.com
 * @LastEditTime: 2022-11-01 09:34:21
 * @FilePath: \TapThruWeb-POS\view\Table\component\TableItem.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useRef, useState } from "react";
import "./TableItem.less";

const TableItem = ({
  box,
  parmas,
  item,
  index,
  setTableId,
  tableId,
  setTableIndex,
  changeTablePosition,
}) => {
  const move = useRef(null);

  /**
   * @description: 移动事件
   * @param {*} e
   * @return {*}
   */
  const changeMove = (e) => {
    let startX = e.clientX - move.current.offsetLeft;
    let statrY = e.clientY - move.current.offsetTop;
    setTableId(item.id);
    setTableIndex(index);

    window.onmousemove = function (e) {
      let tarnslateX = e.clientX - startX;
      let tarnslateY = e.clientY - statrY;

      if (tarnslateX <= 0) {
        tarnslateX = 0;
      }
      if (tarnslateY <= 0) {
        tarnslateY = 0;
      }

      if (box.current.scrollWidth - 44 <= tarnslateX) {
        tarnslateX = box.current.scrollWidth - 44;
      }

      if (box.current.scrollHeight - 44 <= tarnslateY) {
        tarnslateY = box.current.scrollHeight - 44;
      }
      changeTablePosition(index, tarnslateX, tarnslateY);
      // setTarnslate({ ...tarnslate, x: tarnslateX, y: tarnslateY });
    };

    window.onmouseup = function (e) {
      window.onmousemove = null;
      window.onmouseup = null;
    };
  };

  return (
    <div
      className="tableItem"
      style={{
        left: item.x,
        top: item.y,
        background: tableId === item.id && "#0076fe",
      }}
      ref={move}
      onMouseDown={(e) => {
        if (parmas === "setup") {
          changeMove(e);
        }
      }}
    >
      {item.name}
    </div>
  );
};

export default TableItem;
