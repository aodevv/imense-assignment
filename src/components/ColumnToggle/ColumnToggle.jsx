import React, { useState } from "react";

import Dropdown from "../Dropdown/Dropdown";
import Checkbox from "../MIX/Checkbox";

import { useCloseOutside } from "../Hooks/useCloseOutside";

import { BsGearFill } from "react-icons/bs";

import "./ColumnToggle.scss";

const ColumnToggle = ({ obj }) => {
  const [isClose, setIsClose] = useState(true);
  const [openRef, menuRef] = useCloseOutside(isClose, setIsClose);

  const { allColumns } = obj;

  return (
    <div className="column-toggle">
      <i ref={openRef} onClick={() => setIsClose(!isClose)}>
        <BsGearFill />
      </i>

      <Dropdown className="column-dd" isClose={isClose} menuRef={menuRef}>
        <li>
          <p>Select columns to display</p>
        </li>
        {allColumns
          .filter((el) => !(el.id === "id" || el.id === "worker"))
          .map((element) => {
            return (
              <li key={element.id}>
                <Checkbox id={element.id} element={element} />
              </li>
            );
          })}
      </Dropdown>
    </div>
  );
};

export default ColumnToggle;
