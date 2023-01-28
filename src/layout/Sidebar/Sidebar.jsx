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
      <div className={`sidebar__header`}>
        <div className="sidebar__header-top">
          <div className="sidebar__header-top__logo">
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
          <ul className={`sidebar__header-settings ${full ? "full" : ""}`}>
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
        {full && <p>MANAGE</p>}
        <div className="sidebar__header-bottom">
          <ul className={`sidebar__header-settings ${full ? "full" : ""}`}>
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
      {full && (
        <div className="sidebar__footer">
          <h2>@ App name 2021</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut.
          </p>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
