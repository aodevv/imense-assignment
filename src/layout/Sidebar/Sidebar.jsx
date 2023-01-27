import React from "react";
import "./Sidebar.scss";

import logo from "../../assets/logo.png";
import logo_wide from "../../assets/logo-wide.png";

import { AiOutlineHome } from "react-icons/ai";
import { TfiHandOpen } from "react-icons/tfi";
import { GiGloves } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { MdWork } from "react-icons/md";

import Burger from "../../components/MIX/Burger";

const Sidebar = ({ full, toggleSidebar }) => {
  return (
    <div className={`sidebar ${full ? "sidebar-full" : ""}`}>
      <div className="sidebar__top">
        <div className="sidebar__top-logo">
          {full ? (
            <>
              <div className="logo-wide">
                <img src={logo_wide} alt="logo" />
                <Burger toggle={toggleSidebar} />
              </div>
            </>
          ) : (
            <>
              <img src={logo} alt="logo" />
            </>
          )}
        </div>
        <ul className={`sidebar__settings ${full ? "full" : ""}`}>
          <li>
            <AiOutlineHome />
            <p>Dashboard</p>
          </li>
          <li className="active">
            <TfiHandOpen />
            <p>P.P.E Violations</p>
          </li>
        </ul>
      </div>
      <div className="sidebar__bottom">
        <ul className={`sidebar__settings ${full ? "full" : ""}`}>
          <li>
            <GiGloves />
            <p>P.P.Es</p>
          </li>
          <li>
            <MdWork />
            <p>Contractors</p>
          </li>
          <li>
            <FaUser />
            <p>Workers</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
