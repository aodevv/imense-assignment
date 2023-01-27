import React, { useState, useEffect, useRef } from "react";

import { AnimatePresence, motion } from "framer-motion";
import Dropdown from "../Dropdown/Dropdown";

import "./UserDD.scss";
import user from "../../assets/user.png";

import { BiChevronDown } from "react-icons/bi";
import { BsGearFill } from "react-icons/bs";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { RiLogoutBoxRFill } from "react-icons/ri";

const UserDD = () => {
  const [isClose, setIsClose] = useState(true);
  let menuRef = useRef();
  let dotsRef = useRef();

  useEffect(() => {
    let closeDropdown = (e) => {
      if (!isClose) {
        if (
          !menuRef.current.contains(e.target) &&
          !dotsRef.current.contains(e.target)
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
    <div className="user-dd">
      <div
        ref={dotsRef}
        onClick={() => setIsClose(!isClose)}
        className="user-dd__menu"
      >
        <img src={user} alt="user" className="u-mr-xs" />
        <h3>BESIX Group</h3>
        <BiChevronDown />
      </div>
      <AnimatePresence>
        {!isClose && (
          <motion.div
            initial={{
              opacity: 0,
              position: "absolute",
              right: 0,
              zIndex: 30,
            }}
            animate={{
              opacity: 1,
              position: "absolute",
              right: 0,
              zIndex: 30,
            }}
            exit={{
              opacity: 0,
              position: "absolute",
              right: 0,
              zIndex: 30,
            }}
            transition={{ duration: 0.15 }}
            ref={menuRef}
          >
            <Dropdown closeState={isClose}>
              <li className="user__description">
                <p>BESIX Group</p>
                <p>besix.group@besix.be</p>
              </li>
              <div className="divider" />

              <li className="user__option">
                <BsGearFill />
                <p>Profile settings</p>
              </li>
              <li className="user__option">
                <MdOutlinePrivacyTip />
                <p>Our policies</p>
              </li>
              <div className="divider" />
              <li className="user__option">
                <RiLogoutBoxRFill />
                <p>Log out</p>
              </li>
            </Dropdown>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UserDD;
