import React from "react";
import "./Header.scss";

import Burger from "../../components/MIX/Burger";
import LanguageSelect from "../../components/LanguageSelect/LanguageSelect";
import UserDD from "../../components/UserDD/UserDD";

import { BiFontSize } from "react-icons/bi";
import { CiDark } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";

const Header = ({ full, toggleSidebar }) => {
  return (
    <div className="header">
      <div className="header__left">
        {!full ? <Burger toggle={toggleSidebar} /> : null}
        <h3>Overview</h3>
      </div>
      <div className="header__right">
        <div className="header__right-tools">
          <ul>
            <li>
              <BiFontSize />
            </li>
            <li>
              <CiDark />
            </li>
            <li>
              <FaRegBell />
            </li>
            <li>
              <LanguageSelect />
            </li>
          </ul>
        </div>
        <div className="header__right-user">
          <UserDD />
        </div>
      </div>
    </div>
  );
};

export default Header;
