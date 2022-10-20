import React, { useEffect, useRef, useState } from "react";
import "./TableItem.less";

const TableItem = ({ box, parmas }) => {
  const move = useRef(null);
  const [tarnslate, setTarnslate] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log(parmas);
  }, []);

  //   useEffect(() => {
  //     console.log(box.current.scrollWidth, box.current.scrollHeight);
  //   }, [box]);

  const changeMove = (e) => {
    let startX = e.clientX - move.current.offsetLeft;
    let statrY = e.clientY - move.current.offsetTop;

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

      setTarnslate({ ...tarnslate, x: tarnslateX, y: tarnslateY });
    };

    window.onmouseup = function (e) {
      window.onmousemove = null;
      window.onmouseup = null;
    };
  };

  return (
    <div
      className='tableItem'
      style={{ left: tarnslate.x, top: tarnslate.y }}
      ref={move}
      onMouseDown={(e) => {
        if (parmas === "setup") {
          changeMove(e);
        }
      }}>
      A1
    </div>
  );
};

export default TableItem;
