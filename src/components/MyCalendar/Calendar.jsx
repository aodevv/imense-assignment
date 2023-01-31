import React, { useState, useEffect } from "react";
import dayjs from "dayjs";

import Dropdown from "../Dropdown/Dropdown";

import { useCloseOutside } from "../Hooks/useCloseOutside";

import { getMonth } from "../../utils/calendarFuncs.utils";

import { BsChevronLeft, BsChevronRight, BsChevronDown } from "react-icons/bs";

import "./Calendar.scss";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Calendar = () => {
  const [isClose, setIsClose] = useState(true);
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const [curMonth, setcurMonth] = useState(dayjs().month());
  const [curYear, setcurYear] = useState(dayjs().year());

  const [openRef, menuRef] = useCloseOutside(isClose, setIsClose);

  const prevMonth = () => {
    if (curMonth === 0) {
      setCurrentMonth(getMonth(curYear - 1, 11));
      setcurMonth(11);
      setcurYear(curYear - 1);
    } else {
      setCurrentMonth(getMonth(curYear, curMonth - 1));
      setcurMonth(curMonth - 1);
    }
  };

  const nextMonth = () => {
    if (curMonth === 11) {
      setCurrentMonth(getMonth(curYear + 1, 0));
      setcurMonth(0);
      setcurYear(curYear + 1);
    } else {
      setCurrentMonth(getMonth(curYear, curMonth + 1));
      setcurMonth(curMonth + 1);
    }
  };

  useEffect(() => {
    setCurrentMonth(getMonth());
  }, []);

  return (
    <div className="datepicker">
      <div
        ref={openRef}
        onClick={() => setIsClose(!isClose)}
        className="datepicker__btn"
      >
        <button>Open DP</button>
      </div>

      <Dropdown isClose={isClose} menuRef={menuRef} className="calendar">
        <div className="calendar__header">
          <p>Date range</p>
          <div className="calendar__header-select">
            <p>Custom</p>
            <i>
              <BsChevronDown />
            </i>
          </div>
        </div>

        <div className="calendar__month-select">
          <i onClick={prevMonth}>
            <BsChevronLeft />
          </i>
          <p>
            {months[curMonth]} {curYear}
          </p>
          <i onClick={nextMonth}>
            <BsChevronRight />
          </i>
        </div>
        <div className="calendar__wrapper">
          <p>Mo</p>
          <p>Tu</p>
          <p>We</p>
          <p>Th</p>
          <p>Fr</p>
          <p>Sa</p>
          <p>Su</p>
          {currentMonth.map((week, wkId) => {
            return week.map((day, dyId) => {
              return (
                <button
                  className={`${curMonth === day.month() && "active-month"} ${
                    day.$D === 13 && "selected"
                  }  `}
                  key={`${wkId}-${dyId}`}
                >
                  {day.$D}
                </button>
              );
            });
          })}
        </div>
        <div className="calendar__btns">
          <button>Cancel</button>
          <button>Apply</button>
        </div>
      </Dropdown>
    </div>
  );
};

export default Calendar;
