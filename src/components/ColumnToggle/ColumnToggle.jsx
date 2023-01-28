import React, { useState, useEffect, useRef } from "react";

import { AnimatePresence, motion } from "framer-motion";
import Dropdown from "../Dropdown/Dropdown";
import Checkbox from "../MIX/Checkbox";

import { BsGearFill } from "react-icons/bs";

import "./ColumnToggle.scss";

const ColumnToggle = ({ obj }) => {
  const [isClose, setIsClose] = useState(true);
  let menuRef = useRef();
  let openRef = useRef();

  const { allColumns } = obj;

  useEffect(() => {
    let closeDropdown = (e) => {
      if (!isClose) {
        if (
          !menuRef.current.contains(e.target) &&
          !openRef.current.contains(e.target)
        )
          setIsClose(true);
      }
    };
    document.addEventListener("mousedown", closeDropdown);

    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, [isClose]);
  return (
    <div className="column-toggle">
      <i ref={openRef} onClick={() => setIsClose(!isClose)}>
        <BsGearFill />
      </i>
      <AnimatePresence>
        {!isClose && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{ duration: 0.15 }}
            ref={menuRef}
          >
            <Dropdown className="column-dd" closeState={isClose}>
              {allColumns
                .filter((el) => !(el.id === "id" || el.id === "worker"))
                .map((element) => {
                  console.log(element);
                  return (
                    <li key={element.id}>
                      <Checkbox id={element.id} element={element} />
                    </li>
                  );
                })}
            </Dropdown>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ColumnToggle;
