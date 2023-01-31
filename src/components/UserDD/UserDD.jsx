import React, { useState } from "react";

import Dropdown from "../Dropdown/Dropdown";

import { useCloseOutside } from "../Hooks/useCloseOutside";

import "./UserDD.scss";
import user from "../../assets/user.png";

import { BiChevronDown } from "react-icons/bi";
import { BsGearFill } from "react-icons/bs";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { RiLogoutBoxRFill } from "react-icons/ri";

const UserDD = () => {
  const [isClose, setIsClose] = useState(true);

  const [openRef, menuRef] = useCloseOutside(isClose, setIsClose);

  return (
    <div className="user-dd">
      <div
        ref={openRef}
        onClick={() => setIsClose(!isClose)}
        className="user-dd__menu"
      >
        <img src={user} alt="user" className="u-mr-xs" />
        <h3>BESIX Group</h3>
        <BiChevronDown />
      </div>

      <Dropdown isClose={isClose} menuRef={menuRef} className="">
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
    </div>
  );
};

export default UserDD;
