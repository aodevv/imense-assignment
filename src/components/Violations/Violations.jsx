import React, { useState, useEffect, useRef } from "react";

import ViolationsPopup from "../ViolationsPopup/Popup";

import "./Violations.scss";

const dummyViolations = [
  {
    id: "#03",
    img: "./violations_img/v1.png",
    date: "15/11/22022 10:34",
    comment:
      "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
  },
  {
    id: "#07",
    img: "./violations_img/v2.png",
    date: "15/11/22022 10:34",
    comment:
      "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
  },
  {
    id: "#04",
    img: "./violations_img/v1.png",
    date: "15/11/22022 10:34",
    comment:
      "consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore",
  },
];

const Violations = ({ count }) => {
  const [isClose, setIsClose] = useState(true);
  let menuRef = useRef();
  let countRef = useRef();

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
          onClick={() => setIsClose(false)}
          className={`violations ${count > 5 && "danger"}`}
        >
          {count}
        </div>
        {!isClose && (
          <div ref={menuRef} className="violations-popup__container">
            <ViolationsPopup violations={dummyViolations} />
          </div>
        )}
      </div>
    );
  } else return <></>;
};

export default Violations;
