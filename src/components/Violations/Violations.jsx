import React, { useState, useEffect, useRef } from "react";

import ViolationsPopup from "../ViolationsPopup/Popup";

import { dummyViolations } from "./violationsData";

import "./Violations.scss";

const Violations = ({ count }) => {
  const [isClose, setIsClose] = useState(true);
  const [position, setPosition] = useState("");

  let menuRef = useRef();
  let countRef = useRef();
  // getting the window width size to position popup depending on position of count button
  const windowWidth = useRef(window.innerWidth);

  const handleCountClick = () => {
    const countCoords = countRef.current.getBoundingClientRect();
    const { x, y } = countCoords;

    // if a count button is in the far right of the screen I add a class 'popup-right'
    // in order shift the position of the poup slightly to the left so id doesn't create and overflow

    if (x > windowWidth.current / 1.1) {
      setPosition("popup-right");
    }
    setIsClose(false);
  };

  useEffect(() => {
    let closeDropdown = (e) => {
      if (!isClose) {
        if (
          !menuRef.current.contains(e.target) &&
          !countRef.current.contains(e.target)
        )
          setIsClose(true);
      }
    };
    document.addEventListener("mousedown", closeDropdown);

    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, [isClose]);

  if (count > 0) {
    return (
      <div className="violations__container">
        <div
          ref={countRef}
          onClick={handleCountClick}
          className={`violations ${count > 5 && "danger"} ${
            !isClose && "triangle"
          }`}
        >
          {count}
        </div>
        {!isClose && (
          <div
            ref={menuRef}
            className={`violations-popup__container ${position && position}`}
          >
            <ViolationsPopup violations={dummyViolations} />
          </div>
        )}
      </div>
    );
  } else return <></>;
};

export default Violations;
